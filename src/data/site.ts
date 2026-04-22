export const companyProfile = {
  name: 'SCA Marinescu',
  legalName: 'Societatea Civila de Avocatura Marinescu',
  siteUrl: 'https://sca-marinescu.ro',
  email: 'office@sca-marinescu.ro',
  city: 'Bucharest',
  country: 'Romania',
  countryCode: 'RO',
};

export interface SiteContent {
  lang: string;
  locale: string;
  homePath: string;
  metaTitle: string;
  description: string;
  navigationLabel: string;
  navigation: Array<{ href: string; label: string }>;
  switch: { href: string; hrefLang: string; label: string; caption: string };
  brand: { ariaLabel: string; tagline: string };
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    panelLabel: string;
    panelKicker: string;
    panelItems: Array<{ title: string; description: string }>;
  };
  signalsLabel: string;
  signals: Array<{ title: string; description: string }>;
  practiceIntro: { eyebrow: string; title: string; summary: string };
  practiceAreas: Array<{ title: string; description: string }>;
  approach: {
    eyebrow: string;
    title: string;
    summary: string;
    steps: Array<{ title: string; description: string }>;
  };
  mandates: {
    eyebrow: string;
    title: string;
    summary: string;
    items: Array<{ sector: string; title: string; description: string }>;
  };
  faqIntro: { eyebrow: string; title: string; summary: string };
  faqs: Array<{ question: string; answer: string }>;
  contact: {
    eyebrow: string;
    title: string;
    summary: string;
    emailLabel: string;
    locationLabel: string;
    languagesLabel: string;
    languages: string;
    cta: { href: string; label: string };
  };
  footer: {
    statement: string;
    links: Array<{ href: string; label: string }>;
  };
}

export const siteContent: Record<'ro' | 'en', SiteContent> = {
  ro: {
    lang: 'ro',
    locale: 'ro-RO',
    homePath: '/',
    metaTitle: 'Litigii comerciale in Romania | SCA Marinescu',
    description:
      'SCA Marinescu este un site de prezentare concentrat pe litigii comerciale, arbitraj si dispute corporative, construit pentru viteza, indexare si claritate juridica in romana si engleza.',
    navigationLabel: 'Navigatie principala',
    navigation: [
      { href: '/', label: 'Acasa' },
      { href: '#about', label: 'Despre Noi' },
      { href: '#services', label: 'Arii de Practica' },
      { href: '#insights', label: 'Articole Juridice' },
      { href: '#contact', label: 'Contact' },
    ],
    switch: {
      href: '/en/',
      hrefLang: 'en',
      label: 'EN',
      caption: 'English version',
    },
    brand: {
      ariaLabel: 'SCA Marinescu, pagina principala',
      tagline: 'Commercial litigation and arbitration',
    },
    hero: {
      eyebrow: 'SCA Marinescu | Consiliere Juridica Experta & Reprezentare Dedicata in Romania',
      title: 'Protejam interesele afacerii si ale persoanei tale cu solutii juridice strategice, orientate spre rezultate.',
      summary:
        'La SCA Marinescu, nu ne limitam la a naviga legea — oferim strategii proactive pentru a-ti securiza viitorul. Ca Societate Civila de Avocatura de prim rang, echipa noastra este specializata in drept comercial, litigii civile si consultanta juridica completa pentru companii si persoane fizice. Indiferent daca inchei o fuziune complexa, te confrunti cu un litigiu de miza ridicata sau ai nevoie de conformitate juridica zilnica, oferim solutii clare, aplicabile si personalizate.',
      primaryCta: {
        href: 'mailto:office@sca-marinescu.ro?subject=Programare%20Consultatie',
        label: 'Programeaza o consultatie',
      },
      secondaryCta: {
        href: '#services',
        label: 'Vorbeste cu un avocat',
      },
      panelLabel: 'Indicatori de pozitionare',
      panelKicker: 'Pozitionare',
      panelItems: [
        {
          title: 'Romanian commercial litigation',
          description: 'Structura editoriala clara pentru cautari juridice si pentru modelele AI care rezuma furnizori relevanti.',
        },
        {
          title: 'Senior-led dispute analysis',
          description: 'Accent pe strategie, probatoriu si control tactic, fara a transforma pagina intr-un catalog generic de servicii.',
        },
        {
          title: 'Bilingual authority page',
          description: 'Continut publicat in romana si engleza pentru clienti locali, investitori si counsel extern.',
        },
      ],
    },
    signalsLabel: 'Semnale de credibilitate',
    signals: [
      {
        title: 'Dispute corporative si intre actionari',
        description: 'Conflicte de guvernanta, deadlock, raspundere manageriala si protectia controlului societar.',
      },
      {
        title: 'Litigii contractuale cu componenta tehnica',
        description: 'Pretentii comerciale, executare, reziliere, daune, neconformitati si interpretari contractuale complexe.',
      },
      {
        title: 'Arbitraj si coordonare cross-border',
        description: 'Mandate care cer coerenta intre litigiu, arbitraj, investigatie interna si consiliere comerciala.',
      },
    ],
    practiceIntro: {
      eyebrow: 'Arii de practica',
      title: 'Dispute comerciale in care claritatea strategica conteaza mai mult decat volumul de documente.',
      summary:
        'Pagina este structurata pentru a raspunde direct intrebarilor pe care le au decidentii: ce tipuri de litigii gestioneaza firma, cum lucreaza si in ce context poate aduce valoare.',
    },
    practiceAreas: [
      {
        title: 'Litigii comerciale',
        description: 'Dispute izvorate din contracte comerciale, distributie, furnizare, achizitii, proiecte industriale sau executare defectuoasa.',
      },
      {
        title: 'Conflicte intre asociati si actionari',
        description: 'Blocaje societare, excluderi, convocari contestate, drepturi de control, raspundere si masuri provizorii.',
      },
      {
        title: 'Arbitraj',
        description: 'Pregatire pentru arbitraj institutional sau ad-hoc, inclusiv coordonarea strategiei cu litigiile paralele din instante.',
      },
      {
        title: 'Recuperari si executare',
        description: 'Strategii pentru recuperarea creantelor, conservarea activelor si contestarea sau sustinerea executarii.',
      },
      {
        title: 'Insolventa cu componenta contencioasa',
        description: 'Actiuni in anulare, contestatii, raspundere si litigii colaterale care influenteaza restructurarea sau recuperarea.',
      },
      {
        title: 'Dispute cu element international',
        description: 'Coordonare de pozitie pentru parti straine, grupuri regionale si echipe juridice care cer raportare clara in limba engleza.',
      },
    ],
    approach: {
      eyebrow: 'Mod de lucru',
      title: 'Structurat pentru viteza de intelegere si pentru decizii juridice care pot fi sustinute sub presiune.',
      summary:
        'Un site bun pentru o firma de litigii nu trebuie doar sa arate sobru. Trebuie sa comunice imediat ce face firma, cum gandeste si de ce este relevanta intr-un mandat dificil.',
      steps: [
        {
          title: '1. Delimitarea mizei',
          description: 'Sunt identificate rapid riscul economic, obiectivul procedural si leverage-ul real, nu doar pozitia declarata a partii adverse.',
        },
        {
          title: '2. Ipoteze de litigiu testabile',
          description: 'Teoria cazului este construita in jurul documentelor disponibile, al probelor ce pot fi obtinute si al cronologiei relevante.',
        },
        {
          title: '3. Coerenta intre litigiu si business',
          description: 'Strategia de sala, negocierile si protectia operationala trebuie sa sustina acelasi obiectiv comercial.',
        },
      ],
    },
    mandates: {
      eyebrow: 'Tipologii de mandate',
      title: 'Exemple de situatii pentru care o companie cauta de regula asistenta imediata.',
      summary:
        'Formularile de mai jos sunt scrise pentru interogari reale din motoare de cautare si din sisteme AI: dispute contractuale complexe, shareholder disputes, debt recovery litigation Romania si arbitraj comercial.',
      items: [
        {
          sector: 'Corporate',
          title: 'Conflict intre actionari privind controlul si deciziile de management',
          description: 'Necesita masuri urgente, analiza actelor societare, contestarea hotararilor si protejarea continuitatii operationale.',
        },
        {
          sector: 'Contracts',
          title: 'Litigiu privind executarea unui contract comercial cu livrari contestate',
          description: 'Presupune reconstructia mecanismului contractual, a fluxului de documente si a impactului financiar al neexecutarii.',
        },
        {
          sector: 'Recovery',
          title: 'Recuperare de creante cu risc de disipare a activelor',
          description: 'Conteaza viteza, masurile conservatorii si sincronizarea intre analiza juridica si realitatea financiara a debitorului.',
        },
        {
          sector: 'International',
          title: 'Disputa locala cu stakeholderi straini si raportare bilingva',
          description: 'Mandatele de acest tip cer explicatii juridice precise pentru management local si counsel international in acelasi timp.',
        },
      ],
    },
    faqIntro: {
      eyebrow: 'Intrebari frecvente',
      title: 'Intrebari pe care clienti si motoare de raspuns le formuleaza inaintea unui prim contact.',
      summary:
        'Aceste raspunsuri ajuta atat indexarea clasica, cat si extragerea de raspunsuri sintetice de catre sisteme LLM.',
    },
    faqs: [
      {
        question: 'Ce tipuri de litigii comerciale poate aborda SCA Marinescu?',
        answer:
          'Pagina este orientata catre dispute contractuale, conflicte intre actionari, arbitraj comercial, recuperari complexe si litigii cu componenta internationala sau tehnica.',
      },
      {
        question: 'De ce exista o versiune in engleza a site-ului?',
        answer:
          'Pentru ca multe mandate comerciale implica investitori, grupuri internationale, asiguratori sau counsel extern care trebuie sa inteleaga rapid contextul disputei si profilul firmei.',
      },
      {
        question: 'Cum este optimizat acest website pentru Google si pentru AI?',
        answer:
          'Prin Astro static, HTML curat, continut dens semantic, metadate, JSON-LD, rute dedicate pentru sitemap si robots si eliminarea dependintelor inutile pe client.',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Pentru o evaluare initiala a unei dispute comerciale.',
      summary:
        'Pentru moment, pagina foloseste o cale de contact directa si simpla, potrivita unui website static fara formulare dependente de backend.',
      emailLabel: 'Email',
      locationLabel: 'Locatie',
      languagesLabel: 'Limbi de lucru',
      languages: 'Romana si engleza',
      cta: {
        href: 'mailto:office@sca-marinescu.ro?subject=Evaluare%20initiala%20disputa',
        label: 'Trimite un email',
      },
    },
    footer: {
      statement: 'SCA Marinescu. Site static orientat spre viteza, indexare si prezentare clara a practicii de litigii comerciale.',
      links: [
        { href: '/', label: 'RO' },
        { href: '/en/', label: 'EN' },
        { href: '/sitemap.xml', label: 'Sitemap' },
      ],
    },
  },
  en: {
    lang: 'en',
    locale: 'en_US',
    homePath: '/en/',
    metaTitle: 'Commercial Litigation in Romania | SCA Marinescu',
    description:
      'SCA Marinescu is a static bilingual presentation website focused on commercial litigation, arbitration and corporate disputes in Romania, built for search visibility and fast crawling.',
    navigationLabel: 'Primary navigation',
    navigation: [
      { href: '/en/', label: 'Home' },
      { href: '#about', label: 'About Us' },
      { href: '#services', label: 'Practice Areas' },
      { href: '#insights', label: 'Legal Blog' },
      { href: '#contact', label: 'Contact' },
    ],
    switch: {
      href: '/',
      hrefLang: 'ro',
      label: 'RO',
      caption: 'Versiune romana',
    },
    brand: {
      ariaLabel: 'SCA Marinescu, home page',
      tagline: 'Commercial litigation and arbitration',
    },
    hero: {
      eyebrow: 'SCA Marinescu | Expert Legal Counsel & Dedicated Advocacy in Romania',
      title: 'Protecting your business and personal interests with strategic, results-driven legal solutions.',
      summary:
        'At SCA Marinescu, we do more than just navigate the law; we provide proactive strategies to secure your future. As a premier Societate Civilă de Avocați, our team specializes in corporate law, civil litigation, and comprehensive legal consulting for both businesses and individuals. Whether you are closing a complex merger, facing a high-stakes dispute, or needing day-to-day legal compliance, we deliver clear, actionable, and personalized solutions.',
      primaryCta: {
        href: 'mailto:office@sca-marinescu.ro?subject=Schedule%20a%20Consultation',
        label: 'Schedule a Consultation',
      },
      secondaryCta: {
        href: '#services',
        label: 'Speak with an Attorney',
      },
      panelLabel: 'Positioning signals',
      panelKicker: 'Positioning',
      panelItems: [
        {
          title: 'Romanian dispute resolution',
          description: 'Built for clean indexing and for AI systems that summarize law firm capabilities in a concise, structured way.',
        },
        {
          title: 'Senior-led litigation work',
          description: 'Focused on theory of the case, evidence mapping and procedural leverage rather than generic marketing language.',
        },
        {
          title: 'Bilingual legal profile',
          description: 'Romanian and English content for local management teams, investors and international counsel.',
        },
      ],
    },
    signalsLabel: 'Credibility signals',
    signals: [
      {
        title: 'Corporate and shareholder disputes',
        description: 'Governance conflicts, deadlock scenarios, management liability and control preservation issues.',
      },
      {
        title: 'Contract-heavy business litigation',
        description: 'Claims involving supply, distribution, project delivery, termination, damages and technical performance issues.',
      },
      {
        title: 'Arbitration and cross-border coordination',
        description: 'Matters that require alignment between arbitration, court litigation, internal review and commercial strategy.',
      },
    ],
    practiceIntro: {
      eyebrow: 'Practice areas',
      title: 'Commercial disputes where strategic clarity matters more than document volume.',
      summary:
        'The page is structured to answer the questions decision-makers actually ask: what disputes the firm handles, how it works and why it is relevant in a high-stakes matter.',
    },
    practiceAreas: [
      {
        title: 'Commercial litigation',
        description: 'Claims arising from business contracts, supply chains, distribution, industrial projects and failed performance.',
      },
      {
        title: 'Shareholder disputes',
        description: 'Corporate deadlock, exclusion, challenged resolutions, control rights, management liability and interim relief.',
      },
      {
        title: 'Arbitration',
        description: 'Preparation for institutional or ad hoc arbitration, including coordination with parallel court proceedings.',
      },
      {
        title: 'Enforcement and recovery',
        description: 'Debt recovery, asset preservation, enforcement strategy and challenges against enforcement measures.',
      },
      {
        title: 'Contentious insolvency',
        description: 'Avoidance actions, objections, liability claims and side litigation affecting restructuring or recoveries.',
      },
      {
        title: 'Internationally exposed disputes',
        description: 'Support for foreign parties and regional groups that need precise English reporting on Romanian contentious matters.',
      },
    ],
    approach: {
      eyebrow: 'Working method',
      title: 'Structured for fast understanding and legal decisions that can be defended under pressure.',
      summary:
        'A litigation website should not only look formal. It should immediately explain what the firm does, how it thinks and why it is relevant in a difficult mandate.',
      steps: [
        {
          title: '1. Define the commercial stake',
          description: 'The analysis starts with economic exposure, procedural objective and real leverage, not just the declared narrative of the opposing party.',
        },
        {
          title: '2. Test a viable case theory',
          description: 'The dispute theory is built around available records, realistically obtainable evidence and the timeline that can be proved.',
        },
        {
          title: '3. Align litigation with business needs',
          description: 'Court strategy, negotiation posture and operational protection should support the same business outcome.',
        },
      ],
    },
    mandates: {
      eyebrow: 'Mandate patterns',
      title: 'Examples of situations that typically trigger an urgent search for counsel.',
      summary:
        'These examples are intentionally phrased around real search queries and AI prompts: complex contract dispute Romania, shareholder dispute counsel, debt recovery litigation and commercial arbitration support.',
      items: [
        {
          sector: 'Corporate',
          title: 'Shareholder conflict over control and management decisions',
          description: 'Often requires urgent measures, corporate records analysis, resolution challenges and business continuity protection.',
        },
        {
          sector: 'Contracts',
          title: 'Commercial contract dispute involving contested performance',
          description: 'Requires reconstruction of the contractual mechanism, document flow and financial impact of non-performance.',
        },
        {
          sector: 'Recovery',
          title: 'Debt recovery with asset dissipation risk',
          description: 'Speed, interim protection and alignment between legal analysis and the debtor’s financial reality become decisive.',
        },
        {
          sector: 'International',
          title: 'Local dispute with foreign stakeholders and bilingual reporting needs',
          description: 'These mandates require precise legal explanations for local management and international counsel at the same time.',
        },
      ],
    },
    faqIntro: {
      eyebrow: 'Common questions',
      title: 'Questions clients and answer engines ask before the first contact.',
      summary:
        'These answers help both traditional indexing and LLM extraction of concise firm profile summaries.',
    },
    faqs: [
      {
        question: 'What commercial disputes does SCA Marinescu focus on?',
        answer:
          'The site is positioned around contract disputes, shareholder conflicts, commercial arbitration, complex recoveries and matters with a technical or international layer.',
      },
      {
        question: 'Why is there an English version of the site?',
        answer:
          'Many Romanian commercial disputes involve investors, insurers, regional groups or foreign counsel who need a fast, accurate overview of the firm and the dispute context.',
      },
      {
        question: 'How is the website optimized for Google and AI systems?',
        answer:
          'It uses Astro static rendering, clean HTML, semantic sectioning, structured metadata, JSON-LD and dedicated sitemap and robots routes while shipping no unnecessary client-side JavaScript.',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'For an initial review of a commercial dispute in Romania.',
      summary:
        'At this stage the website uses a direct contact path, which fits a static presentation site without backend form handling or tracking scripts.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      languagesLabel: 'Working languages',
      languages: 'Romanian and English',
      cta: {
        href: 'mailto:office@sca-marinescu.ro?subject=Commercial%20litigation%20inquiry',
        label: 'Send an email',
      },
    },
    footer: {
      statement: 'SCA Marinescu. Static Astro site designed for speed, crawlability and a clear commercial litigation profile.',
      links: [
        { href: '/', label: 'RO' },
        { href: '/en/', label: 'EN' },
        { href: '/sitemap.xml', label: 'Sitemap' },
      ],
    },
  },
};