/* =========================================================================
   Wyoming Livestock Board — Portal Data & Icons
   Content model: each portal has tabs; each tab has an Overview and
   (optionally) one or more client Questions. Sourced from WLSB_Client_Sitemap.
   ========================================================================= */

/* ---------- SVG icon set (Lucide-style, 24x24 stroke) ---------- */
const ICONS = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  home: '<path d="M3 9.5l9-7 9 7V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  megaphone: '<path d="M3 11l16-6v14L3 13z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  'alert-triangle': '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
  file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
  'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  award: '<circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  truck: '<rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  'arrow-left': '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  dot: '<circle cx="12" cy="12" r="3"/>',
};

/* Return a full <svg> string for an icon name. */
function iconSvg(name, size, extraClass) {
  const inner = ICONS[name] || ICONS.dot;
  size = size || 20;
  return (
    '<svg class="ic ' + (extraClass || '') + '" width="' + size + '" height="' + size +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>'
  );
}

/* Pick a sensible icon for a tab by keyword. First match wins. */
const ICON_RULES = [
  [/users$/, 'users'],
  [/vet accounts|inspector accounts|accounts/, 'users'],
  [/my account|^account/, 'user'],
  [/job/, 'briefcase'],
  [/board meeting|board information|^board/, 'briefcase'],
  [/social/, 'share'],
  [/press releases|news flashes|^news|division updates/, 'megaphone'],
  [/bolo|alerts/, 'alert-triangle'],
  [/emergency banner/, 'alert-triangle'],
  [/emergency/, 'shield'],
  [/notifications|notices/, 'bell'],
  [/wlbms|database/, 'database'],
  [/links/, 'link'],
  [/import/, 'download'],
  [/brucellosis|disease|surveillance|traceability/, 'activity'],
  [/webinars|trainings|training|recordings/, 'video'],
  [/tric|certification|certificates?|certificate template/, 'award'],
  [/calendar|events|deadlines|announcements/, 'calendar'],
  [/faq/, 'help-circle'],
  [/help/, 'help-circle'],
  [/submissions/, 'upload'],
  [/photo|upload/, 'upload'],
  [/applications?|application status/, 'clipboard'],
  [/fees|payments|delinquent/, 'dollar-sign'],
  [/order brand book|^book/, 'book'],
  [/brand search|search/, 'search'],
  [/renewal|transfer/, 'refresh'],
  [/mistakes|special circumstances/, 'info'],
  [/district map|^map/, 'map'],
  [/estray/, 'list'],
  [/reports/, 'file-text'],
  [/permits?|permit/, 'file'],
  [/movement/, 'truck'],
  [/employment/, 'briefcase'],
  [/resources/, 'folder'],
  [/documents?/, 'file'],
  [/new brand|abandoned|^new/, 'plus'],
  [/address|name change|change/, 'edit'],
  [/history request|request/, 'send'],
  [/status/, 'clock'],
  [/rules|forms?/, 'file-text'],
  [/brand info|my brands|brand history|brand/, 'award'],
  [/vet portal|portal/, 'layers'],
  [/info/, 'info'],
];

function iconForItem(name) {
  const n = name.toLowerCase();
  for (let i = 0; i < ICON_RULES.length; i++) {
    if (ICON_RULES[i][0].test(n)) return ICON_RULES[i][1];
  }
  return 'dot';
}

/* ---------- Portal metadata ---------- */
const PORTAL_META = [
  {
    label: 'Staff Portal',
    portals: [
      { id: 'AD', name: 'Administration Portal', icon: 'settings', role: 'Staff', desc: 'Board operations, job postings, calendar, meeting notes and account oversight.' },
      { id: 'AH', name: 'Animal Health Portal', icon: 'activity', role: 'Staff', desc: 'Disease pages, surveillance, rules, forms, webinars and veterinarian management.' },
      { id: 'BR', name: 'Brand Recording Portal', icon: 'layout', role: 'Staff', desc: 'Brand applications, renewals, fees, forms, certificates and recording tools.' },
      { id: 'BI', name: 'Brand Inspection Portal', icon: 'search', role: 'Staff', desc: 'Inspection fees, district map, permits, estray list, submissions and accounts.' },
      { id: 'LE', name: 'Law Enforcement Portal', icon: 'shield', role: 'Staff', desc: 'Be-on-the-lookout alerts, news flashes and law enforcement forms.' },
    ],
  },
  {
    label: 'User Portal',
    portals: [
      { id: 'VT', name: 'Veterinarian Portal', icon: 'layers', role: 'User', desc: 'TRIC certification, commuter permits, forms, trainings and resources.' },
      { id: 'FI', name: 'Field Inspector Portal', icon: 'map', role: 'User', desc: 'District map, estray list, field submissions, special circumstances and account.' },
      { id: 'BO', name: 'Brand Owner Portal', icon: 'home', role: 'User', desc: 'Your brands, permits, renewals, transfers, payments, documents and certificates.' },
    ],
  },
];

/* ---------- Per-tab content: overview + questions ---------- */
const CONTENT = {
  /* ===== Administration Portal ===== */
  AD: {
    'Job Postings': {
      overview: `WLSB's own current job openings, posted directly on your site. Admin adds a new listing whenever a position opens, edits it, and removes it once filled. This page will also carry a simple outbound link to the Wyoming Administration & Information job board, for anyone looking at state positions more broadly.`,
      questions: [
        `This came up specifically around the frequent brand inspector openings — should it also be used for openings in other departments, or is it just for inspector positions?`,
        `Should someone be able to apply directly through the listing, or is this just a notice that points people to how to apply elsewhere?`,
      ],
    },
    'Calendar & Events': {
      overview: `An editable events calendar. Admin adds a new event — a board meeting, a public webinar, an important deadline — and each entry can include a date, time, an optional flyer image, and a link to a Zoom registration or a GovDelivery notice. This is Administration's own agency-wide calendar, separate from Brand Recording's and Brand Inspection's own deadline calendars.`,
      questions: [
        `Once an event date has passed, should it be automatically removed from the calendar, or archived somewhere it can still be viewed?`,
        `Should a single event be able to include more than one link at once (for example, both a flyer and a Zoom registration), or just one?`,
      ],
    },
    'Board Information': {
      overview: `A listing of WLSB's board members — name and hometown, matching how it's shown on your current letterhead. Admin adds a new entry when someone joins the board, edits their information, and removes them when their term ends.`,
      questions: [
        `Would you like a photo included for each board member, or keep it text-only as it is now?`,
      ],
    },
    'Board Meeting Notes': {
      overview: `Notes or minutes posted after each WLSB board meeting. Admin adds a new entry after every meeting, with a date and either the notes text or an attached document.`,
      questions: [
        `Should board meeting notes be visible to the public, or kept internal to staff only?`,
        `Should notes be uploaded as a document (like a PDF), typed directly as page text, or should both options be available?`,
      ],
    },
    'Users': {
      overview: `A central place for Administration to view and manage accounts across the whole site — veterinarians, brand owners, and inspectors — in one place. Each department still handles its own day-to-day approvals (Vet Accounts, Inspector Accounts), but this gives Administration oversight and a way to quickly handle account issues, especially for Brand Owner accounts, which don't have a dedicated management tab anywhere else.`,
      questions: [
        `Should Administration be able to fully edit or remove any account from here, or is this mainly a monitoring view, with actual approval decisions staying in each department's own tab?`,
        `When an account gets deactivated, should their records be kept on file, or removed?`,
        `What should cause a new registration to be rejected rather than approved?`,
      ],
    },
  },

  /* ===== Animal Health Portal ===== */
  AH: {
    'Rules': {
      overview: `Brief summaries of WLSB's animal health rules and regulations, with links out to the full official text on the Wyoming Administrative Rules website. Import rules — requirements for bringing animals into Wyoming — should be one of the featured, prominently placed categories here, since it's your most-visited content, especially heading into August as movement picks up.`,
      questions: [
        `Since there are multiple distinct rule topics, would you like each one to be its own manageable entry (so your team can add, edit, or remove individual rule summaries independently), or is one combined page with everything together easier for your team to maintain?`,
        `We'll need the actual content here — which specific rule topics should be summarized, what each summary should say, and which Wyoming Administrative Rules chapter each one links to.`,
      ],
    },
    'Disease Pages': {
      overview: `Ten individual educational pages, one for each disease.`,
      questions: [
        `Is the list of 10 diseases finalized, or is that still being decided?`,
        `Once the list is set, we'll need the actual educational content for each page.`,
        `Is this meant to be purely informational content (readable pages), or does it need to track actual case-level records — tied to specific animals, premises, or owners, with statuses and search? These are very different builds, so we want to confirm before starting.`,
      ],
    },
    'Brucellosis Surveillance': {
      overview: `The Brucellosis Designated Surveillance Area — a non-interactive map, plus surveillance data shown as a table or diagram, per your original request.`,
      questions: [
        `Is the surveillance data a single current snapshot that gets updated in place, or does it need to track individual reports/records over time that staff can search through?`,
      ],
    },
    'Disease Traceability': {
      overview: `Content related to animal disease traceability.`,
      questions: [
        `Is this meant to be an informational page explaining traceability, or does it need to function as an actual tracking system — searchable records with statuses tied to specific animals or movements? These are very different builds, so we want to confirm before starting.`,
      ],
    },
    'Emergency Management': {
      overview: `Emergency management content — this wasn't detailed in our discussions, so we want to confirm what belongs here before we build it.`,
      questions: [
        `What should this cover — for example, separate entries for different emergency types/protocols (disease outbreak, fire, evacuation), a list of emergency contacts, or something else? Knowing this helps us decide the right structure.`,
      ],
    },
    'Emergency Banner': {
      overview: `A simple on/off switch for a site-wide urgent notice, with a message field — this is one current banner that gets turned on or off, not a running list of past banners. Based on our discussion, this would typically be triggered by an Animal Health update or a statement from the Director.`,
      questions: [
        `Should this stay limited to Animal Health staff and the Director specifically, or should other Administration staff (Renee, Jennifer) also be able to activate it?`,
      ],
    },
    'Press Releases': {
      overview: `WLSB's official Animal Health press releases and news updates.`,
      questions: [
        `Does this need to follow an existing press release format or template you already use?`,
      ],
    },
    'Webinars & Recordings': {
      overview: `A place to promote upcoming public webinars and events, and to share past webinar recordings — both shown as links (to Zoom registration and to recordings) rather than hosted directly on the site, matching your preference.`,
      questions: [],
    },
    'Animal Health Forms': {
      overview: `A form library for producers, veterinarians, and livestock markets — this is where your Animal Health staff uploads and manages the downloadable and fillable form templates themselves. Most require a signature, and can be submitted electronically or downloaded and mailed in.`,
      questions: [
        `Should these all live in one combined library, or be separated out by who they're for (producers, veterinarians, livestock markets)? Also, which of these forms causes the most repeated back-and-forth or confusion — that's a strong candidate for one of the short tutorial videos included in this project.`,
        `We'll need the actual forms themselves — which specific forms are needed, and what information each one should collect.`,
      ],
    },
    'Form Submissions': {
      overview: `Where your Animal Health staff sees and reviews forms that have actually been submitted electronically — separate from the Animal Health Forms library above, which just holds the blank templates. This is the Animal Health equivalent of Brand Recording's "Applications" tab.`,
      questions: [
        `What should staff be able to do with a submission once it comes in — for example, mark it received/in review/approved, download the attached documents, or forward it to a specific person? Also, should this be one shared inbox for all submissions, or separated out by who submitted it (producers, vets, livestock markets)?`,
        `Does anything submitted here need to be entered into any other system you already use, or does it stay entirely within this website?`,
      ],
    },
    'Vet Accounts': {
      overview: `Veterinarians request an account and wait for approval from your Animal Health staff before gaining access to their own Veterinarian Portal. This is also where staff manages each veterinarian's TRIC certification data on an ongoing basis, not just at initial approval — since certifications will need periodic updates over time. Since TRIC data comes from you rather than through an automatic connection, this will be a manual process on your end each time it needs updating.`,
      questions: [
        `How would you like to provide TRIC certification data to us, and how should updates be handled going forward — a spreadsheet, entered manually per veterinarian, or some other way?`,
      ],
    },
    'Trainings': {
      overview: `Vet-only training content that your Animal Health staff uploads and manages — this is what feeds directly into the Trainings tab veterinarians see in their own portal.`,
      questions: [
        `This limited-access content is described as being for veterinarians "or other stakeholder groups." Are there groups beyond veterinarians who will need access?`,
        `We'll need the actual training content — which trainings/videos should be included at launch.`,
      ],
    },
    'Resources': {
      overview: `Veterinary-specific reference documents and resources that your Animal Health staff uploads and manages — this feeds directly into the Resources tab veterinarians see in their own portal.`,
      questions: [
        `We'll need the actual resource documents — which specific materials should be included at launch.`,
      ],
    },
  },

  /* ===== Brand Recording Portal ===== */
  BR: {
    'FAQ': {
      overview: `Frequently asked questions about brand recording.`,
      questions: [
        `We'll need the actual content here — the specific questions and answers to include.`,
      ],
    },
    'Help Requests': {
      overview: `Where your Brand Recording staff sees and responds to questions submitted through the site — private, staff-only replies, not a public forum.`,
      questions: [
        `Who should be able to respond to these — anyone on your recording team, or should they route to a specific person?`,
      ],
    },
    'Applications': {
      overview: `Where staff reviews brand transactions submitted by customers (new brand registrations, transfers, renewals, and more) — checking each for accuracy and completeness, then updating its status (Received, Pending, Approved) so the customer can track where things stand. Since there's no live connection between this website and your WLBMS system yet, staff will need to manually re-enter approved transactions into WLBMS themselves, then come back here to update the status and notify the customer.`,
      questions: [
        `Does this manual process — review here, enter into WLBMS, update status here — match how you'd want this to work?`,
        `For a new brand or a transfer, does it need to be checked against existing brands for duplicates or similarity before it can be approved?`,
        `Is the same staff member reviewing every application type, or does it depend on the type (new brand vs. transfer vs. renewal)?`,
      ],
    },
    'Recording Forms': {
      overview: `Your form library — new brand registration, Bill of Sale/Transfer, abandoned brand application, name/address change, order brand book, and permit forms. Many transfer-related forms require notarization or a verified legal signature.`,
      questions: [
        `We'll need the actual forms themselves — for each one, what information needs to be collected.`,
      ],
    },
    'Fees': {
      overview: `The current fee schedule for brand recording services.`,
      questions: [
        `Since fees change from time to time, would you like each fee to be its own manageable entry (so individual prices can be updated independently), or is one combined fee table on a single page easier for your team to maintain?`,
        `We'll need the actual fee amounts for each service.`,
      ],
    },
    'Announcements & Deadlines': {
      overview: `A calendar of brand recording announcements and important deadlines for your customers.`,
      questions: [],
    },
    'Brand History Requests': {
      overview: `Where staff sees and fulfills brand history requests submitted by brand owners through their own portal. Since brand history isn't something that can be looked up automatically (your current system doesn't support a live search), staff will need to manually look up each request in WLBMS and respond.`,
      questions: [
        `Given this is a manual lookup, what turnaround time should we set expectations around for the brand owner (for example, "within 3 business days")?`,
      ],
    },
    'Certificate Template': {
      overview: `Editable certificate templates, generated through your Recording program, used to confirm a successful transaction such as a brand renewal.`,
      questions: [
        `How many distinct certificate templates are there — one for each transaction type (new brand, renewal, transfer), or just one general template?`,
        `Could you provide a sample export of your existing template(s) from the Recording program, so we can match the design and content?`,
        `Since brands are legal property, does a certificate need to be digitally signed or independently verifiable (for example, with a verification code)?`,
      ],
    },
    'Brand Search': {
      overview: `A searchable brand database (modeled on the format you liked) is planned, but isn't buildable yet — your brand data lives in WLBMS, managed by Happy Jack Software, and currently only gets exported as a PDF for the printed Brand Book. Making it truly searchable on this website will require an API connection from Happy Jack Software — without one, this feature cannot be built at all, regardless of timeline.`,
      questions: [
        `Are you comfortable with this staying a later-phase item while that API access gets arranged with your software vendor?`,
      ],
    },
    'Online Renewal': {
      overview: `The settings for online brand renewal — collecting payment through the State's credit card vendor, and generating a certificate automatically once payment succeeds. This is a feature to configure, not a content library. As with Applications above, without a live connection to WLBMS, staff will need to manually enter each completed renewal into WLBMS after the fact.`,
      questions: [
        `Because your renewal cycle begins in September, is it essential this is ready for the initial launch, or would launching it shortly afterward be acceptable?`,
      ],
    },
    'Common Mistakes': {
      overview: `A list of common mistakes to avoid when doing a brand transaction, to help cut down on back-and-forth with customers.`,
      questions: [
        `We'll need the actual content here — the specific mistakes you'd like listed.`,
      ],
    },
    'Links': {
      overview: `Outbound links to abandoned brands, the State Brand Book, delinquent brands, Agency Rules, State statutes, and other states' brand programs.`,
      questions: [
        `We'll need the actual web addresses for each of these.`,
      ],
    },
    'Order Brand Book': {
      overview: `Settings for ordering the State Brand Book — there's only one product here, not a list of items.`,
      questions: [
        `Is the brand book a physical item that ships, a digital download, or both? If physical, we'll also need to know what shipping information to collect.`,
      ],
    },
    'WLBMS Database': {
      overview: `The login gateway into your existing Brand Recording system, managed by Happy Jack Software, where staff does the actual recording and transaction work.`,
      questions: [],
    },
  },

  /* ===== Brand Inspection Portal ===== */
  BI: {
    'Inspection FAQ': {
      overview: `Frequently asked questions about brand inspection.`,
      questions: [
        `We'll need the actual content here — the specific questions and answers to include.`,
      ],
    },
    'Inspection Help Requests': {
      overview: `Where your Brand Inspection staff sees and responds to questions submitted through the site — private, staff-only replies, not a public forum.`,
      questions: [
        `Who should be able to respond to these — anyone on your inspection team, or should they route to a specific person?`,
      ],
    },
    'Inspection Fees': {
      overview: `The fee schedule for brand inspections — this varies by inspection type, species, and quantity, with discounts for larger numbers.`,
      questions: [
        `Would you prefer these shown as a simple fee table or as an interactive calculator? And would you like each fee to be its own manageable entry (so individual prices can be updated independently), or is one combined table easier for your team to maintain? Given how often this causes questions from customers (especially those coming from out of state for events), is this a good candidate for one of the short tutorial videos included in this project?`,
        `We'll need the actual fee amounts, broken down by inspection type, species, and quantity discount.`,
      ],
    },
    'Inspection Announcements & Deadlines': {
      overview: `A calendar of brand inspection announcements and important deadlines for your customers.`,
      questions: [],
    },
    'District Map': {
      overview: `An interactive map showing the brand inspection districts — clicking a district shows that inspector's contact details, and it's staff-editable. Since your inspector directory is an exported file rather than a live-connected system, this map data will need to be manually re-uploaded by staff whenever the directory changes, rather than updating automatically.`,
      questions: [
        `Could you provide your current inspector directory so we can populate it, and how often does it typically change?`,
      ],
    },
    'Inspection Forms': {
      overview: `A form library with printable and fillable forms for Brand Inspection Permits.`,
      questions: [
        `We'll need the actual forms themselves — for each one, what information needs to be collected.`,
      ],
    },
    'Estray List': {
      overview: `The estray livestock list, posted as required by law and updated roughly monthly.`,
      questions: [],
    },
    'Permits': {
      overview: `A listing of the producer permit types you issue and their requirements.`,
      questions: [
        `Beyond listing permit types and requirements, do producers need to submit an application here that your staff reviews and approves — similar to how the Applications tab works in Brand Recording — or is this purely informational?`,
        `We'll need the actual content — which permit types exist, and what's required for each.`,
      ],
    },
    'Movement Log': {
      overview: `An oversight view for staff — shows the in-state livestock movement notifications producers have already logged through their own portal, or submitted via the paper form. Staff doesn't create these entries directly.`,
      questions: [],
    },
    'Special Circumstances': {
      overview: `A listing of quarantine notices and livestock movement restrictions that need to stay limited to certain people or regions — kept separate from the public emergency banner.`,
      questions: [
        `For notices that must stay confidential to certain regions, how should access be limited — which people or districts should see each one?`,
      ],
    },
    'Division Updates': {
      overview: `Internal updates and relevant information posted for brand inspectors.`,
      questions: [],
    },
    'Inspector Submissions': {
      overview: `Where staff reviews the PDF reports, photos, and documents that brand inspectors upload from the field — including inspection reports, estray livestock photos, and possible law-enforcement violations.`,
      questions: [
        `Where would you like these uploaded files to be stored (for example, secure cloud storage or a government server)? We understand this will need Enterprise Technology Services input.`,
      ],
    },
    'Inspector Accounts': {
      overview: `Because inspector positions change hands frequently, this is where staff manages who currently has access.`,
      questions: [
        `Who should be responsible for activating a new inspector's access and removing it when they leave?`,
        `Your inspector logins are tied to the existing Brand Inspection database — is this meant to be a live connection (which would need Happy Jack Software's involvement to set up), or would staff create a separate WordPress account manually for each inspector that happens to use the same credentials?`,
      ],
    },
    'Links': {
      overview: `Outbound links to Agency rules and State statutes regarding brand inspection, and to other states' brand inspection programs.`,
      questions: [
        `We'll need the actual web addresses for each of these.`,
      ],
    },
    'WLBMS Database': {
      overview: `The login gateway into your existing Brand Inspection system, where staff does the actual case-related work and record-keeping.`,
      questions: [],
    },
  },

  /* ===== Law Enforcement Portal ===== */
  LE: {
    'BOLO Alerts': {
      overview: `Be-on-the-lookout alerts, posted by your Law Enforcement staff.`,
      questions: [],
    },
    'News Flashes': {
      overview: `Quick public notices — like a missing cattle alert. These reference the same missing/estray livestock information already tracked under Brand Inspection's Estray List, rather than a separate list maintained here.`,
      questions: [],
    },
    'Law Enforcement Forms': {
      overview: `Forms carried over from your current site that Law Enforcement still needs.`,
      questions: [
        `Which specific forms need to carry over, and can you provide copies of each so we can rebuild them?`,
      ],
    },
    'Test Portal': {
      overview: `Placeholder route for testing purposes within the Law Enforcement Portal.`,
      questions: [],
    },
  },

  /* ===== Veterinarian Portal ===== */
  VT: {
    'TRIC Certification': {
      overview: `Where a veterinarian looks up their own TRIC certification status. This data is provided by WLSB and managed by your Animal Health staff — vets can only view it here, not edit it.`,
      questions: [],
    },
    'Commuter Permit': {
      overview: `Where a veterinarian applies for a commuter permit and submits it immediately online.`,
      questions: [
        `Should this route to your Animal Health staff for review before it's issued, or can it be issued automatically once submitted?`,
        `We'll need the actual application fields — what information a veterinarian needs to provide.`,
      ],
    },
    'My Forms': {
      overview: `Where a veterinarian finds and submits the forms relevant to them — separate from the Commuter Permit application above, which is its own dedicated flow.`,
      questions: [
        `Beyond the Commuter Permit, which other forms do veterinarians specifically need to access or submit here?`,
      ],
    },
    'Application Status': {
      overview: `Where a veterinarian tracks the status of what they've submitted — their Commuter Permit application, and any forms submitted through My Forms.`,
      questions: [],
    },
    'Trainings': {
      overview: `Vet-only training content and procedural videos — restricted to approved veterinarians, not available to the general public.`,
      questions: [],
    },
    'Resources': {
      overview: `Veterinary-specific reference documents and resources.`,
      questions: [],
    },
    'Events': {
      overview: `Public webinars and past recordings, shown as links for convenience — this is openly available content, different from Trainings above, which is restricted to approved veterinarians only.`,
      questions: [],
    },
    'My Account': {
      overview: `Where a veterinarian manages their own profile and account settings.`,
      questions: [
        `Should a veterinarian be able to edit all of their own profile information, or are some fields staff-only (for example, TRIC certification data)? Should they be able to deactivate their own account, or does that need to go through your Animal Health staff?`,
      ],
    },
  },

  /* ===== Field Inspector Portal ===== */
  FI: {
    'Division Updates': {
      overview: `Internal updates and relevant information posted by your Brand Inspection staff, for inspectors to view.`,
      questions: [],
    },
    'District Map': {
      overview: `View the brand inspection districts and look up which inspector covers each one.`,
      questions: [],
    },
    'Estray List': {
      overview: `View the official estray livestock list, which is curated and updated by your Brand Inspection staff — not something inspectors add to directly.`,
      questions: [],
    },
    'Inspector Submissions': {
      overview: `Submit inspection reports, photos, documents, and missing livestock reports from the field — including possible law-enforcement violations. Missing livestock reports post here in near real-time.`,
      questions: [
        `What file types and sizes should be allowed for uploads, and once a report is submitted, can an inspector go back and edit or reopen it, or is it final once sent?`,
      ],
    },
    'Special Circumstances': {
      overview: `View quarantine notices and livestock movement restrictions relevant to an inspector's region.`,
      questions: [],
    },
    'WLBMS Database': {
      overview: `The login gateway into your existing Brand Inspection system, managed by Happy Jack Software — this is where inspectors do most of their actual case-related work, including looking up producer permits (for example, whether someone holds a permit in another district) and movement notifications, rather than through separate pages built on this site.`,
      questions: [
        `This is the same technical question noted under Inspector Accounts on the staff side — is an inspector's login here meant to connect live to their existing WLBMS credentials, or would staff set up a separate account manually?`,
      ],
    },
    'My Account': {
      overview: `Where an inspector manages their own profile and account settings.`,
      questions: [
        `Should an inspector be able to edit all of their own profile information, or are some fields staff-only? Should they be able to deactivate their own account, or does that need to go through staff?`,
      ],
    },
  },

  /* ===== Brand Owner Portal ===== */
  BO: {
    'My Brands': {
      overview: `Where a brand owner views the brand(s) they currently hold. Your brand records live in WLBMS, managed by Happy Jack Software — showing a brand owner's real, up-to-date brands here requires an API connection from Happy Jack Software. Without one, this tab cannot show live data at all.`,
      questions: [
        `Can an API connection be arranged with Happy Jack Software for this? If not, we'll need to talk through what's possible as an alternative — for example, staff manually linking a brand owner's account to their brand records.`,
        `How should a brand actually get connected to a specific owner's account — does the owner self-claim it themselves (for example, by entering a brand number), or does staff manually verify and link it after the account is created?`,
      ],
    },
    'My Permits': {
      overview: `Where a brand owner views the permits they currently hold. Same dependency as My Brands above — this data also lives in WLBMS, and showing it here requires an API connection from Happy Jack Software.`,
      questions: [],
    },
    'New Permit Application': {
      overview: `Where a producer applies for a new permit — separate from My Permits above, which only shows permits they already have.`,
      questions: [
        `What types of permits can a producer apply for here, and what's required for each?`,
        `We'll need the actual application fields — what information needs to be collected.`,
      ],
    },
    'New Brand': {
      overview: `The application to register a new brand.`,
      questions: [
        `We'll need the actual application fields — what information needs to be collected.`,
      ],
    },
    'Abandoned Brand': {
      overview: `The application to claim an abandoned brand.`,
      questions: [
        `We'll need the actual application fields — what information needs to be collected.`,
        `What makes a brand eligible to be claimed as abandoned, and how should the site confirm that eligibility before accepting an application?`,
      ],
    },
    'Brand Renewal': {
      overview: `Renew an existing brand online, with payment collected through the State's credit card vendor. Like My Brands above, looking up the specific brand being renewed depends on an API connection to WLBMS from Happy Jack Software — without one, staff would need to be involved in confirming the brand before renewal can complete.`,
      questions: [
        `Should reminder emails go out automatically before a brand's renewal is due?`,
      ],
    },
    'Delinquent Renewal': {
      overview: `Renew a delinquent brand, with the ability to upload the required supporting documentation. Same WLBMS dependency as Brand Renewal above.`,
      questions: [
        `We'll need the actual list of required supporting documentation.`,
        `Should a reminder email go out once a brand lapses into delinquent status?`,
      ],
    },
    'Transfer': {
      overview: `The Bill of Sale/Transfer request. Brands are legally considered personal property, so this process must meet strict legal requirements and often involves notarized documents — currently a major source of back-and-forth by mail.`,
      questions: [
        `How much of this process would you like to be possible online, and which steps must remain physical?`,
        `Which recurring processes cause the most repeated back-and-forth with the public? These make the best candidates for the short tutorial videos included in this project.`,
        `We'll need the actual application fields — what information needs to be collected.`,
        `Does a transfer need action from both the current owner and the person receiving the brand, or is it complete once the person submitting it finishes the form?`,
      ],
    },
    'Address & Name Change': {
      overview: `Update the address or contact information on file for a brand.`,
      questions: [
        `We'll need the actual fields — what information needs to be collected.`,
      ],
    },
    'Movement Log': {
      overview: `Log in-state livestock movement under an existing permit.`,
      questions: [
        `We'll need the actual fields this log should capture (for example: date, location, species, quantity).`,
      ],
    },
    'Movement Form': {
      overview: `A simpler, non-portal alternative for producers who aren't comfortable logging movements online — a plain form instead of using the portal, matching the same fields as Movement Log above.`,
      questions: [],
    },
    'Documents': {
      overview: `A central place to see everything a brand owner has uploaded or submitted, across every transaction type — transfers, renewals, permit applications, and more — not limited to just one.`,
      questions: [],
    },
    'Order Brand Book': {
      overview: `Order a copy of the State Brand Book.`,
      questions: [
        `If it's a physical item, we'll need to collect a shipping address as part of this order.`,
      ],
    },
    'Brand History Request': {
      overview: `Request the history of a brand. As noted on the staff side, this isn't something that can be looked up automatically — staff will manually check WLBMS and respond.`,
      questions: [
        `What turnaround time should we set expectations around for the brand owner?`,
      ],
    },
    'Application Status': {
      overview: `Track the status of anything submitted — Received, Pending, or Approved.`,
      questions: [
        `If staff finds an issue with something submitted, should they be able to send it back with a correction request, rather than only being able to approve or reject it?`,
      ],
    },
    'Payments': {
      overview: `A record of payment events tied to a brand owner's account — not financial details. Whether this updates automatically once a payment succeeds, or needs staff to manually confirm it, depends on whether the State's payment provider can send a live confirmation back to this website.`,
      questions: [
        `Does the State's payment provider support this kind of automatic confirmation, or does it only redirect the user to a confirmation page with no data sent back?`,
        `Are refunds supported, and if so, how should that process work?`,
      ],
    },
    'Certificates': {
      overview: `View and download brand certificates, automatically generated after a successful transaction such as a renewal. Generating a certificate with the correct brand-specific details filled in depends on the same WLBMS connection as My Brands above — without an API, staff would need to be involved in creating or verifying each certificate.`,
      questions: [],
    },
    'My Account': {
      overview: `Where a brand owner manages their own profile and account settings.`,
      questions: [
        `Should a brand owner be able to edit all of their own profile information, or are some fields staff-only? Should they be able to close their own account, or does that need to go through staff?`,
      ],
    },
  },
};

/* ---------- Build portal structure (tab lists derived from CONTENT) ---------- */
const PORTAL_GROUPS = PORTAL_META.map(function (g) {
  return {
    label: g.label,
    portals: g.portals.map(function (p) {
      return Object.assign({}, p, { groups: [{ header: null, items: Object.keys(CONTENT[p.id]) }] });
    }),
  };
});

const PORTAL_INDEX = {};
PORTAL_GROUPS.forEach(function (g) {
  g.portals.forEach(function (p) {
    PORTAL_INDEX[p.id] = p;
  });
});

function firstItem(portal) {
  return portal.groups[0].items[0];
}
function allItems(portal) {
  const out = [];
  portal.groups.forEach(function (grp) {
    grp.items.forEach(function (it) { out.push(it); });
  });
  return out;
}

/* Content ({overview, questions}) for a portal + tab, or null. */
function contentFor(portalId, item) {
  const p = CONTENT[portalId];
  if (!p) return null;
  return p[item] || null;
}
/* Number of questions on a tab (0 if none). */
function questionCount(portalId, item) {
  const c = contentFor(portalId, item);
  return c && c.questions ? c.questions.length : 0;
}
