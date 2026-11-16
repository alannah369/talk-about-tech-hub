// ============================================================
// Talk About Tech Resource Hub — CONTENT FILE
// Edit this file to add, change or remove items on the site.
// "date" is the most recent update (YYYY-MM-DD) and is used to
// sort the "Latest updates" list. Always include a source link.
// Last checked: November 2026. Laws and cases change quickly.
// ============================================================

const LAST_CHECKED = "November 2026";

// ---------- LITIGATION ----------
const LITIGATION = [
  {
    name: "In re: Social Media Adolescent Addiction (MDL 3047)",
    court: "Federal court, N.D. California",
    parties: "Families and school districts v. Meta, Snap, TikTok, Google/YouTube",
    topic: "Social media",
    status: "Ongoing",
    date: "2026-09-30",
    summary: "Thousands of federal cases claiming platforms were designed to be addictive and harmed young people's mental health. The first school-district trial (Breathitt County, Kentucky) settled before its June 2026 trial date. The next school-district trial is scheduled for February 2027.",
    source: "https://www.sec.gov/Archives/edgar/data/0001326801/000162828026066773/meta-20260930.htm",
    sourceName: "Meta SEC filing (Q3 2026)"
  },
  {
    name: "Social Media Cases (JCCP 5255)",
    court: "California state court, Los Angeles County",
    parties: "Young people and families v. Meta, YouTube and others",
    topic: "Social media",
    status: "Verdict reached",
    date: "2026-09-30",
    summary: "The California state version of the social media addiction cases. In the first trial, a jury awarded $6 million against Meta and YouTube. The companies' requests for a new trial were denied.",
    source: "https://www.sec.gov/Archives/edgar/data/0001326801/000162828026066773/meta-20260930.htm",
    sourceName: "Meta SEC filing (Q3 2026)"
  },
  {
    name: "Garcia v. Character Technologies",
    court: "Federal court, M.D. Florida",
    parties: "Megan Garcia v. Character.AI, its founders and Google",
    topic: "AI chatbots",
    status: "Settled",
    date: "2026-01-07",
    summary: "Filed in 2024 after 14-year-old Sewell Setzer III died by suicide following conversations with a Character.AI chatbot. In January 2026, Character.AI and Google agreed to settle this and related cases in New York, Colorado and Texas. Terms were not disclosed.",
    source: "https://www.cnbc.com/2026/01/07/google-characterai-to-settle-suits-involving-suicides-ai-chatbots.html",
    sourceName: "CNBC"
  },
  {
    name: "Raine v. OpenAI",
    court: "California state court, San Francisco",
    parties: "Family of Adam Raine v. OpenAI",
    topic: "AI chatbots",
    status: "Ongoing",
    date: "2025-08-26",
    summary: "Filed in August 2025 by the family of a 16-year-old who died by suicide, claiming ChatGPT encouraged and helped plan his death. Other families have since filed similar suits against OpenAI.",
    source: "https://www.cnbc.com/2026/01/07/google-characterai-to-settle-suits-involving-suicides-ai-chatbots.html",
    sourceName: "CNBC"
  }
];

// ---------- LEGISLATION ----------
// state: two-letter code, or "US" for federal.
// status must be one of: "In effect", "Partly blocked", "Blocked by court",
// "In litigation", "Passed, not yet in effect", "Pending"
const LEGISLATION = [
  {
    name: "Kids Online Safety Act (KOSA)",
    state: "US",
    topic: "Social media",
    status: "Pending",
    date: "2026-08-05",
    summary: "Would require platforms to protect minors from harmful design features. The House passed a package (the KIDS Act, H.R. 7757) in June 2026 without KOSA's 'duty of care'. The Senate Commerce Committee advanced its own version (S. 1748) in August 2026. Not law yet; bills not passed by January 3, 2027 must be reintroduced.",
    source: "https://www.congress.gov/crs-product/IF12730",
    sourceName: "Congressional Research Service"
  },
  {
    name: "TAKE IT DOWN Act",
    state: "US",
    topic: "Deepfakes",
    status: "In effect",
    date: "2026-05-19",
    summary: "Makes it a federal crime to publish intimate images without consent, including AI-generated deepfakes. Since May 19, 2026, platforms must remove reported images within 48 hours.",
    source: "https://www.congress.gov/bill/119th-congress/senate-bill/146",
    sourceName: "Congress.gov"
  },
  {
    name: "COPPA Rule update",
    state: "US",
    topic: "Privacy",
    status: "In effect",
    date: "2026-04-22",
    summary: "The FTC's updated Children's Online Privacy Protection rule requires separate parental consent before sharing kids' data for targeted advertising, and limits how long data can be kept. Companies had to comply by April 22, 2026.",
    source: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy",
    sourceName: "FTC"
  },
  {
    name: "Companion chatbot safeguards (SB 243)",
    state: "CA",
    topic: "AI chatbots",
    status: "In effect",
    date: "2026-01-01",
    summary: "Requires AI companion chatbots to tell users they are AI, refer users who mention self-harm to crisis services, and add protections for known minors such as break reminders and limits on sexual content. Amended in 2026 by SB 1119, which changes some of the minor-specific rules.",
    source: "https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/",
    sourceName: "Future of Privacy Forum"
  },
  {
    name: "Protecting Our Kids from Social Media Addiction Act (SB 976)",
    state: "CA",
    topic: "Social media",
    status: "In litigation",
    date: "2025-01-01",
    summary: "Limits 'addictive feeds' and overnight notifications for minors without parental consent. Challenged in court by the tech industry group NetChoice; parts have been blocked.",
    source: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB976",
    sourceName: "California Legislature"
  },
  {
    name: "AI companion law",
    state: "NY",
    topic: "AI chatbots",
    status: "In effect",
    date: "2025-11-05",
    summary: "AI companions must say they are AI at the start of a conversation and at least every three hours, and must refer users who express suicidal thoughts to crisis services. Applies to all users, not only minors.",
    source: "https://www.mofo.com/resources/insights/251120-new-york-and-california-enact-landmark-ai",
    sourceName: "Morrison Foerster"
  },
  {
    name: "SAFE for Kids Act",
    state: "NY",
    topic: "Social media",
    status: "Passed, not yet in effect",
    date: "2024-06-20",
    summary: "Requires parental consent before showing minors algorithmic 'addictive feeds' or sending overnight notifications. Takes effect after the Attorney General finalizes rules.",
    source: "https://www.nysenate.gov/legislation/bills/2023/S7694",
    sourceName: "NY State Senate"
  },
  {
    name: "Companion chatbot law",
    state: "HI",
    topic: "AI chatbots",
    status: "In effect",
    date: "2026-07-14",
    summary: "Safety requirements for AI companion chatbots, in force since July 14, 2026.",
    source: "https://astraea.law/insights/ai-companion-chatbot-laws-by-state",
    sourceName: "Astraea (law tracker)"
  },
  {
    name: "Parental Rights in Social Media Act (LB 383)",
    state: "NE",
    topic: "Age verification",
    status: "Partly blocked",
    date: "2026-06-30",
    summary: "Requires age verification and parental consent for minors' social media accounts. In June 2026, a federal judge blocked the age-verification and consent parts but allowed provisions letting parents oversee minors' accounts.",
    source: "https://nebraskapublicmedia.org/en/news/news-articles/federal-judge-blocks-nebraskas-social-media-age-verification-law-from-going-into-effect-in-july/",
    sourceName: "Nebraska Public Media"
  },
  {
    name: "Protecting Georgia's Children on Social Media Act",
    state: "GA",
    topic: "Age verification",
    status: "In effect",
    date: "2026-10-15",
    summary: "Requires age verification and parental consent for users under 16. A lower court had blocked it, but in October 2026 the 11th Circuit appeals court ruled Georgia can enforce it.",
    source: "https://www.law360.com/articles/2538356",
    sourceName: "Law360"
  },
  {
    name: "Social media time limit for minors (SB 854)",
    state: "VA",
    topic: "Social media",
    status: "Blocked by court",
    date: "2026-02-01",
    summary: "Would limit users under 16 to one hour of social media a day unless a parent agrees otherwise. Temporarily blocked by a court in early 2026; appeal pending.",
    source: "https://avpassociation.com/us-state-age-assurance-laws-for-social-media/",
    sourceName: "Age Verification Providers Association"
  },
  {
    name: "Protecting Children from Social Media Act",
    state: "TN",
    topic: "Age verification",
    status: "In effect",
    date: "2026-02-01",
    summary: "Requires age verification and parental consent for minors' accounts. In force while an appeal continues.",
    source: "https://avpassociation.com/us-state-age-assurance-laws-for-social-media/",
    sourceName: "Age Verification Providers Association"
  },
  {
    name: "Walker Montgomery Protecting Children Online Act (HB 1126)",
    state: "MS",
    topic: "Age verification",
    status: "In effect",
    date: "2025-04-17",
    summary: "Requires age verification and parental consent for minors on social media. In 2025 an appeals court lifted the order that had blocked it.",
    source: "https://en.wikipedia.org/wiki/Online_age_verification_laws_in_the_United_States",
    sourceName: "Wikipedia overview"
  },
  {
    name: "Minor Protection in Social Media Act",
    state: "UT",
    topic: "Age verification",
    status: "Blocked by court",
    date: "2024-09-10",
    summary: "Would require age verification and limit features for minors' accounts. Blocked by a federal judge.",
    source: "https://en.wikipedia.org/wiki/Online_age_verification_laws_in_the_United_States",
    sourceName: "Wikipedia overview"
  },
  {
    name: "Social Media Safety Act",
    state: "AR",
    topic: "Age verification",
    status: "Blocked by court",
    date: "2025-03-31",
    summary: "Would require parental consent for minors to open social media accounts. Permanently blocked by a federal judge.",
    source: "https://en.wikipedia.org/wiki/Online_age_verification_laws_in_the_United_States",
    sourceName: "Wikipedia overview"
  },
  {
    name: "Social Media Parental Notification Act",
    state: "OH",
    topic: "Age verification",
    status: "Blocked by court",
    date: "2025-04-16",
    summary: "Would require parental consent for children under 16 to use social media. Permanently blocked by a federal judge.",
    source: "https://en.wikipedia.org/wiki/Online_age_verification_laws_in_the_United_States",
    sourceName: "Wikipedia overview"
  },
  {
    name: "Social Media Use by Minors (HB 3)",
    state: "FL",
    topic: "Age verification",
    status: "In litigation",
    date: "2025-06-03",
    summary: "Bans social media accounts for children under 14 and requires parental consent for 14- and 15-year-olds. Challenged in court; its status has changed several times on appeal.",
    source: "https://en.wikipedia.org/wiki/Online_age_verification_laws_in_the_United_States",
    sourceName: "Wikipedia overview"
  }
];

// ---------- ORGANIZATIONS ----------
// lon/lat place the pin on the map.
const ORGANIZATIONS = [
  { name: "Common Sense Media", city: "San Francisco", state: "CA", lon: -122.42, lat: 37.77,
    focus: ["Social media", "AI", "Parent guides"],
    about: "Age ratings and reviews of apps, games and media, plus parent guides and research on kids and technology.",
    url: "https://www.commonsensemedia.org" },
  { name: "Center for Humane Technology", city: "San Francisco", state: "CA", lon: -122.42, lat: 37.77,
    focus: ["AI", "Social media", "Tech design"],
    about: "Works to align technology with people's wellbeing. Known for 'The Social Dilemma' and the podcast 'Your Undivided Attention'.",
    url: "https://www.humanetech.com" },
  { name: "Fairplay", city: "Boston", state: "MA", lon: -71.06, lat: 42.36,
    focus: ["Social media", "Advocacy"],
    about: "Advocates for a childhood free from manipulative marketing and harmful Big Tech design.",
    url: "https://fairplayforkids.org" },
  { name: "Wait Until 8th", city: "Austin", state: "TX", lon: -97.74, lat: 30.27,
    focus: ["Smartphones", "Parent community"],
    about: "A pledge for parents to wait until at least 8th grade to give their children a smartphone.",
    url: "https://www.waituntil8th.org" },
  { name: "National Center for Missing & Exploited Children", city: "Alexandria", state: "VA", lon: -77.05, lat: 38.80,
    focus: ["Online exploitation", "Reporting"],
    about: "Runs the CyberTipline and the free Take It Down tool for removing explicit images of minors.",
    url: "https://www.missingkids.org" },
  { name: "Tech Transparency Project", city: "Washington", state: "DC", lon: -77.04, lat: 38.91,
    focus: ["Research", "Accountability"],
    about: "Researches and reports on the harms caused by large tech platforms.",
    url: "https://www.techtransparencyproject.org" },
  { name: "Center for Countering Digital Hate", city: "Washington", state: "DC", lon: -77.04, lat: 38.91,
    focus: ["Research", "Online hate", "AI"],
    about: "Research on how platforms and AI tools spread hate, misinformation and harmful content to young people.",
    url: "https://counterhate.com" },
  { name: "Design It For Us", city: "Washington", state: "DC", lon: -77.04, lat: 38.91,
    focus: ["Youth-led", "Advocacy"],
    about: "A youth-led coalition pushing for safer online platforms and kids' online safety laws.",
    url: "https://designitforus.org" },
  { name: "Social Media Victims Law Center", city: "Seattle", state: "WA", lon: -122.33, lat: 47.61,
    focus: ["Legal help", "Social media", "AI"],
    about: "A law firm representing families harmed by social media and AI chatbots. (A business, not a nonprofit.)",
    url: "https://socialmediavictims.org" }
];

// ---------- RESOURCES ----------
const RESOURCES = [
  { title: "988 Suicide & Crisis Lifeline", type: "Get help now",
    about: "Call or text 988, any time, for free and confidential support.",
    url: "https://988lifeline.org" },
  { title: "Take It Down", type: "Get help now",
    about: "Free tool from NCMEC to help remove nude or sexual images of someone under 18 from participating platforms.",
    url: "https://takeitdown.ncmec.org" },
  { title: "CyberTipline", type: "Report",
    about: "Report online child sexual exploitation to NCMEC.",
    url: "https://report.cybertip.org" },
  { title: "Surgeon General's Advisory on Social Media and Youth Mental Health", type: "Research",
    about: "The 2023 U.S. Surgeon General's advisory on what is known about social media's effects on young people.",
    url: "https://www.hhs.gov/surgeongeneral/reports-and-publications/youth-mental-health/social-media/index.html" },
  { title: "APA Health Advisory on Social Media Use in Adolescence", type: "Research",
    about: "The American Psychological Association's recommendations for teens' social media use.",
    url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
  { title: "Common Sense Media parent guides", type: "Parent guides",
    about: "Reviews and age ratings for apps, games and AI tools, with tips for talking to kids.",
    url: "https://www.commonsensemedia.org" },
  { title: "FTC: Protecting kids online", type: "Parent guides",
    about: "Consumer advice from the Federal Trade Commission on kids' privacy and online safety.",
    url: "https://consumer.ftc.gov/identity-theft-and-online-security/protecting-kids-online" }
];
