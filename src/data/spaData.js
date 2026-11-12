export const IMAGES = {
  hero: '/images/hero.jpg',
  ntx: '/images/ntx.jpg',
  ha: '/images/ha.jpg',
  lhr: '/images/lhr.jpg',
  peel: '/images/peel.jpg',
  mn: '/images/mn.jpg',
  consult: '/images/consult.jpg',
  philosophy: '/images/philosophy.jpg',
  team1: '/images/team1.jpg',
  team2: '/images/team2.jpg',
  team3: '/images/team3.jpg',
  team4: '/images/team4.jpg',
  testimonial: '/images/testimonial.jpg',
  location: '/images/location.jpg',
};

export const TREATMENTS = [
  {
    code: 'NTX',
    name: 'Neurotoxins',
    category: 'Injectables',
    desc: "Softens forehead lines, frown lines and crow's feet. Botox, Dysport or Xeomin, dosed by the unit.",
    price: '$13 a unit, lasts 3-4 months',
    unitPrice: '$13 / unit',
    downtime: 'Minimal (15–30 min pinches)',
    fullDesc: 'Target hyperactive facial muscles to smooth existing wrinkles and prevent future static lines from forming. We customize dosing precisely to your natural expressions, ensuring you look rested, awake, and never frozen.',
    targetAreas: ['Forehead Lines', "Glabella ('11's)", "Crow's Feet", 'Lip Flip', 'Masseters (Jaw Slimming/TMJ)'],
    onset: '3–7 days full effect at 14 days',
    img: IMAGES.ntx
  },
  {
    code: 'HA',
    name: 'Dermal Fillers',
    category: 'Injectables',
    desc: 'Hyaluronic acid filler for lips, cheeks, chin and jawline. Dissolvable if you ever change your mind.',
    price: '$725 a syringe, lasts 6-18 months',
    unitPrice: '$725 / syringe',
    downtime: '1–5 days mild swelling',
    fullDesc: 'Made of cross-linked hyaluronic acid—a sugar naturally present in skin tissue. Used to subtly restore volume loss, balance facial proportions, sculpt jawlines, and hydrate lip borders with micro-precision.',
    targetAreas: ['Cheek Structural Support', 'Subtle Lip Hydration', 'Chin Projection', 'Marionette Lines', 'Tear Troughs'],
    onset: 'Immediate, fully integrated at 2–3 weeks',
    img: IMAGES.ha
  },
  {
    code: 'LHR',
    name: 'Laser Hair Removal',
    category: 'Laser & Energy',
    desc: 'Fewer razor days for underarms, legs, bikini line and face, with settings matched to your skin tone.',
    price: 'From $99 a session, 6-8 sessions',
    unitPrice: 'From $99 / session',
    downtime: 'Zero downtime',
    fullDesc: 'Medical-grade diode and Alexandrite/Nd:YAG dual laser systems safely target hair follicles at the root across all Fitzpatrick skin tones without damaging surrounding skin tissue.',
    targetAreas: ['Underarms', 'Bikini & Brazilian', 'Full Legs', 'Face & Chin', 'Back & Chest'],
    onset: 'Hair shedding begins 10–14 days post-treatment',
    img: IMAGES.lhr
  },
  {
    code: 'PEEL',
    name: 'Peels & HydraFacial',
    category: 'Skin Health',
    desc: 'Chemical peels and HydraFacial for dullness, uneven tone and congested pores.',
    price: 'From $175 a session, little downtime',
    unitPrice: 'From $175 / session',
    downtime: '0–4 days light flaking',
    fullDesc: 'Clinical-grade exfoliating acid solutions and patented vortex vacuum infusion to gently slough away dead cellular buildup, stimulate cell turnover, and saturate skin with peptides and antioxidants.',
    targetAreas: ['Full Face', 'Neck & Décolleté', 'Hands', 'Back Clarity'],
    onset: 'Instant glass skin glow; cellular renewal over 7 days',
    img: IMAGES.peel
  },
  {
    code: 'MN',
    name: 'Microneedling',
    category: 'Regenerative',
    desc: 'Collagen induction for acne scars, texture and fine lines, with numbing cream first.',
    price: '$375 a session, usually 3 sessions',
    unitPrice: '$375 / session',
    downtime: '24–72 hrs redness',
    fullDesc: 'Precision micro-punctures trigger your body’s natural wound healing cascade, generating fresh collagen and elastin fibers to dramatically smooth acne scarring, textural irregularities, and enlarged pores.',
    targetAreas: ['Acne Scarring', 'Textural Crepiness', 'Enlarged Pores', 'Surgical Scars', 'Fine Perioral Lines'],
    onset: 'Progressive collagen remodeling over 4–12 weeks',
    img: IMAGES.mn
  }
];

export const CONSULT_STEPS = [
  {
    step: 1,
    time: '0:00',
    title: 'Check-in',
    desc: 'Health and medication forms arrive by text before you come, so check-in takes two minutes. Come with a clean face if you can.',
    caption: 'Consultation chair, the first five minutes'
  },
  {
    step: 2,
    time: '0:05',
    title: 'Your goals',
    desc: "What you'd like to change, what you've tried before and how much downtime fits your calendar. Bring a list of medications and supplements.",
    caption: 'Listening first, before any recommendation'
  },
  {
    step: 3,
    time: '0:15',
    title: 'Face & skin assessment',
    desc: 'We look at how your face moves, at volume, texture and tone, in good light and from every angle. We tell you what each check is for.',
    caption: 'Mirror check with your injector, fifteen minutes in'
  },
  {
    step: 4,
    time: '0:30',
    title: 'Plan & quote',
    desc: "A plan in plain words with a written price: units, syringes or sessions. If something isn't a good fit for you, we say so.",
    caption: 'Transparent written quote, zero pressure'
  },
  {
    step: 5,
    time: '0:40',
    title: 'Same-day treatment',
    desc: "If you're ready and it's appropriate, neurotoxin or a peel can happen the same day. Fillers and lasers sometimes need their own appointment.",
    caption: 'Same-day treatment, forty minutes in'
  },
  {
    step: 6,
    time: '0:55',
    title: 'Aftercare',
    desc: 'Written aftercare, a direct number for questions and a free two-week check after injectables. No package to buy.',
    caption: 'Written aftercare & complimentary two-week check'
  }
];

export const TEAM = [
  {
    name: 'Dr. Philippa Delacorte, MD',
    role: 'Medical Oversight',
    cred: 'Board-Certified Dermatologist',
    bio: 'Reviews every new client medical history and oversees clinical safety protocols across all injectable and laser procedures.',
    experience: '18+ years dermatology experience',
    quote: 'Patient safety is not a marketing checkbox; it is the entire foundation of aesthetic medicine.',
    img: IMAGES.team1
  },
  {
    name: 'Saskia Thornbury, MSN, FNP-C',
    role: 'Neurotoxins & Fillers',
    cred: 'Board-Certified Family Nurse Practitioner',
    bio: 'Known for conservative, anatomical facial balancing—often recommending one syringe rather than five.',
    experience: '9+ years advanced injectables',
    quote: 'When injectables are done with true anatomical restraint, no one asks who did your face—they just say you look rested.',
    img: IMAGES.team2
  },
  {
    name: 'Leonie Esposito, BSN, RN',
    role: 'Lips, Under-Eyes & Restorative Care',
    cred: 'Registered Nurse, Florida',
    bio: 'Specializes in subtle lip hydration, tear-trough refinement, and restorative wellness infusions.',
    experience: '7+ years aesthetic nursing',
    quote: 'The lips should move like silk, not firm balloons. Proportion and hydration always trump sheer volume.',
    img: IMAGES.team3
  },
  {
    name: 'Romilly Oyelaran, LE',
    role: 'Laser, Peels & Microneedling',
    cred: 'Licensed Electrologist & Facial Specialist',
    bio: 'Tailors laser wavelengths, medical-grade peels, and collagen induction safely across all Fitzpatrick skin tones.',
    experience: '11+ years clinical dermal therapy',
    quote: 'Great skin texture cannot be injected; it must be built with calibrated cellular stimulation and patience.',
    img: IMAGES.team4
  }
];

export const PRICING = [
  { name: 'Neurotoxin (Botox / Dysport / Xeomin)', detail: 'Dosed by individual anatomical requirement', price: '$13', unit: 'per unit', note: 'Typical treatment: 20–45 units' },
  { name: 'Dermal Filler (Hyaluronic Acid)', detail: 'Restylane, Juvéderm, or RHA collection', price: '$725', unit: 'per syringe', note: '1 syringe conservative approach' },
  { name: 'Laser Hair Removal (Small Area)', detail: 'Underarms, upper lip, chin or happy trail', price: '$99', unit: 'per session', note: 'Packages of 6 save 15%' },
  { name: 'Laser Hair Removal (Medium / Large Area)', detail: 'Brazilian, full legs, chest or back', price: '$199', unit: 'per session', note: 'Calibrated across Fitzpatrick I–VI' },
  { name: 'HydraFacial Signature Protocol', detail: '50-minute deep cleanse, extract & vortex hydration', price: '$199', unit: 'per facial', note: 'Includes antioxidant booster' },
  { name: 'Clinical Chemical Peel', detail: 'Custom formulation tailored to pigment & acne targets', price: '$175', unit: 'per treatment', note: 'Post-peel soothing kit included' },
  { name: 'Precision Microneedling', detail: 'FDA-cleared device with prescription topical numbing', price: '$375', unit: 'per session', note: '3-session series recommended' },
  { name: 'The Swann Avenue Membership', detail: 'Monthly banked credit, 10% off treatments, exclusive perks', price: '$99', unit: 'monthly', note: 'Cancel anytime, credits never expire' }
];

export const CONCERNS = [
  { 
    id: 'forehead',
    title: 'Forehead & Frown Lines', 
    tag: 'NTX', 
    summary: 'Soften dynamic expression lines while keeping natural brow movement.', 
    rec: 'Neurotoxins ($13/unit)',
    details: 'Horizontal forehead wrinkles and vertical "11" lines between the eyebrows form from repeated muscular contraction. Micro-dosed neurotoxin relaxes specific fibers without flattening your facial expression.',
    downtime: 'None (15-min appointment)'
  },
  { 
    id: 'eyes',
    title: "Crow's Feet & Eye Fatigue", 
    tag: 'NTX', 
    summary: 'Gentle micro-dosing around the outer eye for a rested, refreshed look.', 
    rec: 'Neurotoxins ($13/unit)',
    details: 'Fine smile lines radiating from the corners of the eyes can be gently softened to reduce creasing while preserving the joyful squint that makes a genuine smile.',
    downtime: 'None'
  },
  { 
    id: 'lips',
    title: 'Lip Volume & Symmetry', 
    tag: 'HA', 
    summary: 'Subtle hydration and border definition that moves naturally and softly.', 
    rec: 'Hyaluronic Acid Filler ($725/syringe)',
    details: 'We reject overfilled, shelf-like lips. Our technique focuses on vermillion border definition, natural philtrum column support, and soft hydration using low-viscosity cohesive gel.',
    downtime: '2–4 days mild swelling'
  },
  { 
    id: 'midface',
    title: 'Midface & Jawline Support', 
    tag: 'HA', 
    summary: 'Restore structural balance with conservative 1-syringe planning.', 
    rec: 'Hyaluronic Acid Filler ($725/syringe)',
    details: 'Age and genetic facial structure lead to deep fat pad resorption. Carefully placed deep structural filler on the cheekbone or mandibular angle restores youthful lift without heaviness.',
    downtime: '2–3 days tenderness'
  },
  { 
    id: 'hair',
    title: 'Unwanted Body & Facial Hair', 
    tag: 'LHR', 
    summary: 'Calibrated dual wavelengths for Fitzpatrick I–VI skin tones.', 
    rec: 'Laser Hair Removal (From $99)',
    details: 'Say goodbye to razor burn, ingrown bumps, and daily maintenance. We calibrate laser pulse durations precisely to destroy the hair follicle bulb permanently.',
    downtime: 'Zero downtime'
  },
  { 
    id: 'dullness',
    title: 'Dullness & Sun Damage', 
    tag: 'PEEL', 
    summary: 'Brighten Florida sun spots and clear congested pores with zero harshness.', 
    rec: 'Peels & HydraFacial (From $175)',
    details: 'Target stubborn photodamage, melasma, and sluggish skin cell turnover with customized glycolic, lactic, and TCA combinations that restore a lit-from-within clarity.',
    downtime: '0–3 days light flaking'
  },
  { 
    id: 'texture',
    title: 'Acne Scars & Texture', 
    tag: 'MN', 
    summary: 'Stimulate natural collagen remodeling over a 3-session series.', 
    rec: 'Microneedling ($375/session)',
    details: 'Break down fibrotic tethering from old acne blemishes and stimulate vigorous neocollagenesis to firm skin texture, soften fine lines, and refine pore size.',
    downtime: '24–48 hours mild sunburn sensation'
  },
  { 
    id: 'first-timer',
    title: 'First-Time Uncertainty', 
    tag: 'CONSULT', 
    summary: 'Not sure where to start? We assess your skin in 60 unhurried minutes.', 
    rec: '$50 Consultation (Credited)',
    details: 'The aesthetic world is noisy with trends. Our 60-minute doctor-supervised consultation gives you an honest, medically objective roadmap with no sales pressure.',
    downtime: 'None'
  }
];

export const FAQS = [
  {
    q: 'Who does the injecting?',
    a: "Only licensed medical providers: our board-certified nurse practitioner Saskia Thornbury, MSN, FNP-C, registered nurse injector Leonie Esposito, BSN, RN, and our medical director Dr. Philippa Delacorte, MD, who reviews every new client's medical history."
  },
  {
    q: 'Does it hurt?',
    a: 'Most people describe neurotoxin as a few quick pinches. We use topical prescription numbing cream, cold rollers, and vibration distraction devices. All our fillers contain integrated lidocaine for comfort during placement.'
  },
  {
    q: 'How much downtime should I expect?',
    a: 'Usually very little. Small mosquito-bite bumps from neurotoxin vanish in under 30 minutes. Fillers can cause 2–4 days of mild swelling or occasional bruising. Peels and microneedling have 24–48 hours of slight pinkness.'
  },
  {
    q: 'Is it safe?',
    a: 'Every medical treatment carries some risk, which we discuss transparently prior to consent. We strictly inject FDA-approved products purchased directly from Allergan, Galderma, and Merz, maintain emergency reversal agents (hyaluronidase) on site, and have a physician directly on call.'
  },
  {
    q: 'Will I look overdone or unnatural?',
    a: 'Never at Sorrel. Our clinical ethos is founded on restraint: "Look rested, not done." We start with conservative micro-dosing, wait two weeks for tissues to settle, and offer a complimentary check-in before ever considering additional units.'
  },
  {
    q: 'Do you post before-and-after photos?',
    a: "Not on public social media feeds. Social media lighting and angle manipulation mislead patients. During your private consultation on Swann Avenue, we share un-retouched, medically standardized photos of clients with your specific facial anatomy who gave explicit written consent."
  },
  {
    q: 'How does the $50 consultation deposit work?',
    a: 'Your $50 deposit secures your dedicated 60-minute appointment with our clinical team. 100% of the $50 is applied as an instant credit toward any same-day treatment or future booking. If aesthetic medicine is not appropriate for you, we explain why clearly.'
  }
];

export const JOURNAL_POSTS = [
  {
    id: 'post-1',
    title: 'Why we start with 1 syringe, not five',
    date: 'October 2026',
    author: 'Saskia Thornbury, MSN, FNP-C',
    readTime: '4 min read',
    excerpt: 'Facial volume looks best when built gradually. Here is why our two-week check-in is built into every injectable plan.',
    body: `In 2025, our median first filler plan was a single syringe. Adding a large volume in one sitting can distort natural proportions before swelling even settles. By starting conservatively and inviting you back at two weeks at no extra charge, your provider can evaluate settled tissue in natural light.

When hyaluronic acid is injected, it immediately binds water molecules over the subsequent 10 to 14 days. If multiple syringes are placed in a single visit, both the patient and practitioner can lose sight of the subtle facial transitions that maintain anatomical harmony.

Our philosophy is simple: start with foundational support where deep fat pads have depleted. Allow the tissue to integrate seamlessly. At your two-week complimentary review, we assess your expressions at rest and in motion—only adding micro-aliquots if truly indicated.`
  },
  {
    id: 'post-2',
    title: 'Why we keep before-and-after photos in the clinic',
    date: 'September 2026',
    author: 'Dr. Philippa Delacorte, MD',
    readTime: '3 min read',
    excerpt: 'Lighting, anatomy, and skin history matter. We show un-retouched client photos only in person during your consultation.',
    body: `Website galleries and social media algorithms often flatten nuance. A dramatic transformation on an Instagram carousel often involves strategic ring lighting, a chin tilt, or post-production smoothing that gives a misleading impression of what medical aesthetics actually achieves.

During your 60-minute consultation on Swann Avenue, your injector walks you through consented, completely un-retouched medical photos of clients with similar facial structure, age, and skin goals. 

We examine these under medical lighting together so your expectations remain grounded, honest, and scientifically realistic.`
  },
  {
    id: 'post-3',
    title: 'Preparing for your first 60-minute skin assessment',
    date: 'August 2026',
    author: 'Leonie Esposito, BSN, RN',
    readTime: '3 min read',
    excerpt: 'What to bring, what to pause beforehand, and how your $50 deposit works toward same-day treatment.',
    body: `Arrive with a clean face if possible, plus a quick mental list of any prescriptions, vitamins, supplements (such as fish oil or high-dose Vitamin E), or upcoming vacations and social events.

Your $50 consultation fee is credited in full toward any treatment you choose—and if we decide a treatment is not right for you, we will tell you plainly.

We recommend avoiding alcohol, NSAIDs (like ibuprofen or aspirin), and strenuous workouts for 24 hours prior to injectables to minimize bruising potential.`
  }
];

export const BOOKING_OPTIONS = {
  services: [
    { id: 'consult', name: '$50 First Consultation (Credited to Treatment)', duration: '60 min', price: '$50 deposit' },
    { id: 'ntx', name: 'Neurotoxins (Botox / Dysport / Xeomin)', duration: '30 min', price: '$13 / unit' },
    { id: 'filler', name: 'Hyaluronic Acid Dermal Fillers', duration: '45 min', price: '$725 / syringe' },
    { id: 'lhr', name: 'Laser Hair Removal Session', duration: '30 min', price: 'From $99' },
    { id: 'peel', name: 'Chemical Peel & HydraFacial', duration: '50 min', price: 'From $175' },
    { id: 'mn', name: 'Microneedling Collagen Therapy', duration: '60 min', price: '$375' }
  ],
  providers: [
    { id: 'first_available', name: 'First Available Clinical Provider', title: 'Any licensed injector' },
    { id: 'saskia', name: 'Saskia Thornbury, MSN, FNP-C', title: 'Family Nurse Practitioner' },
    { id: 'leonie', name: 'Leonie Esposito, BSN, RN', title: 'Registered Aesthetic Nurse' },
    { id: 'romilly', name: 'Romilly Oyelaran, LE', title: 'Licensed Facial Specialist' },
    { id: 'philippa', name: 'Dr. Philippa Delacorte, MD', title: 'Medical Director (Dermatology)' }
  ],
  dates: [
    { day: 'Thu', date: 'Nov 19', label: 'Thursday, November 19' },
    { day: 'Fri', date: 'Nov 20', label: 'Friday, November 20' },
    { day: 'Sat', date: 'Nov 21', label: 'Saturday, November 21' },
    { day: 'Mon', date: 'Nov 23', label: 'Monday, November 23' },
    { day: 'Tue', date: 'Nov 24', label: 'Tuesday, November 24' },
    { day: 'Wed', date: 'Nov 25', label: 'Wednesday, November 25' }
  ],
  times: [
    '9:30 AM', '10:45 AM', '11:30 AM', '1:15 PM', '2:00 PM', '3:30 PM', '4:45 PM', '5:30 PM'
  ]
};
