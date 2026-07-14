param(
  [int]$Port = 5510,
  [string]$Root = "D:\Code\WLSB Sitemap"
)
# Tiny static file server for local preview of the WLSB portal site.
# No Node/Python required. Run:  powershell -ExecutionPolicy Bypass -File .claude\serve.ps1
$ErrorActionPreference = "Stop"
$Root = (Resolve-Path $Root).Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $Root on http://localhost:$Port/  (Ctrl+C to stop)"
$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".md"   = "text/plain; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".ico"  = "image/x-icon"
  ".json" = "application/json"
}
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response
    $path = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($path -eq "/") { $path = "/index.html" }
    $file = Join-Path $Root ($path.TrimStart("/"))
    $res.KeepAlive = $false
    $res.Headers.Add("Cache-Control", "no-store")
    if (Test-Path $file -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $ct = $mime[$ext]
      if (-not $ct) { $ct = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $res.ContentType = $ct
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $b = [System.Text.Encoding]::UTF8.GetBytes("Not found: $path")
      $res.OutputStream.Write($b, 0, $b.Length)
    }
    $res.OutputStream.Close()
  } catch {
    try { $res.OutputStream.Close() } catch {}
  }
}
