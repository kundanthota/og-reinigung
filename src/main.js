import './style.css';
import {
  ArrowRight, ArrowUpRight, BetweenHorizontalStart, BriefcaseBusiness,
  Check, ChevronDown, HardHat, HeartHandshake, House, Mail, MapPin,
  Menu, PanelsTopLeft, Phone, School, ShieldCheck, Sparkles, X, createIcons,
} from 'lucide';

const icons = {
  ArrowRight, ArrowUpRight, BetweenHorizontalStart, BriefcaseBusiness,
  Check, ChevronDown, HardHat, HeartHandshake, House, Mail, MapPin,
  Menu, PanelsTopLeft, Phone, School, ShieldCheck, Sparkles, X,
};

const serviceDefinitions = [
  { key: 'office', icon: 'briefcase-business' },
  { key: 'home', icon: 'house' },
  { key: 'construction', icon: 'hard-hat' },
  { key: 'windows', icon: 'panels-top-left' },
  { key: 'stairs', icon: 'between-horizontal-start' },
  { key: 'education', icon: 'school' },
];

const assetBase = import.meta.env.BASE_URL;

const copy = {
  de: {
    pageTitle: 'O&G Vyara Reinigung | Kaiserslautern',
    description: 'O&G Vyara Reinigung – professionelle Reinigung für Zuhause, Büro und Gewerbe in Kaiserslautern.',
    nav: ['Leistungen', 'Über uns', 'Kontakt'],
    menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', homeLabel: 'Startseite',
    heroEyebrow: 'Reinigung in Kaiserslautern',
    heroTitle: 'Mehr Glanz.', heroAccent: 'Mehr Zeit für Sie.',
    heroText: 'Professionelle Reinigung für Ihr Zuhause, Ihr Büro oder Ihr Geschäft.',
    heroCta: 'Kostenlos anfragen', heroExplore: 'Leistungen entdecken',
    priceTop: 'Transparent & fair', priceUnit: '/ Std. netto', priceNote: 'inkl. Material & Lohnkosten', scroll: 'Entdecken',
    trust: [
      ['Zuverlässig', 'Wir halten Absprachen ein.'], ['Gründlich', 'Wir sehen auch die Details.'],
      ['Persönlich', 'Freundlicher Service vor Ort.'], ['Lokal', 'In und um Kaiserslautern.'],
    ],
    servicesKicker: 'Was wir für Sie tun', servicesTitle: 'Sauberkeit, die zu', servicesAccent: 'Ihrem Alltag passt.',
    servicesText: 'Wählen Sie den Bereich – den Rest besprechen wir persönlich mit Ihnen.',
    services: {
      office: 'Büroreinigung', home: 'Privathaushalt', construction: 'Bauendreinigung',
      windows: 'Fensterreinigung', stairs: 'Treppenhaus', education: 'Schulen & Kitas',
    },
    serviceAria: 'anfragen',
    aboutKicker: 'Warum O&G Vyara?', aboutTitle: 'Weil ein sauberer Raum sich einfach', aboutAccent: 'gut anfühlt.',
    aboutText: 'Ob regelmäßig oder einmalig: Wir hören zu, stimmen die Reinigung auf Ihren Bedarf ab und kümmern uns sorgfältig um Ihr Objekt.',
    imageNote: 'Sorgfalt in jedem Handgriff.',
    features: [
      ['Alles dabei', 'Reinigungsmaterialien und Lohnkosten inklusive.'],
      ['Klare Abrechnung', 'Per Rechnung mit ausgewiesener MwSt.'],
      ['Flexibel einsetzbar', 'Für private und gewerbliche Räume.'],
    ],
    appointment: 'Termin anfragen',
    contactKicker: 'Unverbindlich anfragen', contactTitle: 'Was dürfen wir für Sie', contactAccent: 'sauber machen?',
    contactText: 'Erzählen Sie uns kurz, worum es geht. Tsvetana Borisova meldet sich persönlich bei Ihnen.',
    phone: 'Telefon', email: 'E-Mail', area: 'Einsatzgebiet',
    formTitle: 'Ihre Anfrage', formTime: 'Ø 2 Min.', formQuestion: 'Worum geht es?',
    name: 'Name *', namePlaceholder: 'Ihr Name', telephone: 'Telefon *', telephonePlaceholder: 'Ihre Telefonnummer',
    emailPlaceholder: 'name@beispiel.de', frequency: 'Häufigkeit',
    frequencies: ['Einmalig', 'Wöchentlich', 'Alle zwei Wochen', 'Monatlich', 'Noch offen'],
    message: 'Ihre Nachricht', messagePlaceholder: 'z. B. Wohnungsgröße, Anzahl der Fenster oder gewünschter Termin',
    consent: 'Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. *',
    submit: 'Anfrage senden', formNote: 'Die Anfrage öffnet Ihr E-Mail-Programm mit allen Angaben.',
    selectError: 'Bitte wählen Sie mindestens eine Leistung aus.',
    mailSubject: 'Reinigungsanfrage von', mailHello: 'Hallo Frau Borisova,', mailInterest: 'Ich interessiere mich für',
    mailFrequency: 'Häufigkeit', mailName: 'Name', mailPhone: 'Telefon', mailEmail: 'E-Mail', mailMessage: 'Nachricht',
    footerTagline: 'Sauberkeit mit Sorgfalt.', footerLocation: 'Kaiserslautern, Deutschland',
    alts: {
      hero: 'Professionelle Reinigungskraft reinigt eine große Glasfront in einem hellen Wohnraum',
      team: 'Reinigungsteam bei der professionellen Pflege eines Bürogebäudes',
    },
  },
  en: {
    pageTitle: 'O&G Vyara Cleaning | Kaiserslautern',
    description: 'O&G Vyara Cleaning – professional cleaning for homes, offices and businesses in Kaiserslautern.',
    nav: ['Services', 'About us', 'Contact'],
    menuOpen: 'Open menu', menuClose: 'Close menu', homeLabel: 'Homepage',
    heroEyebrow: 'Cleaning in Kaiserslautern',
    heroTitle: 'More shine.', heroAccent: 'More time for you.',
    heroText: 'Professional cleaning for your home, office or business.',
    heroCta: 'Request a free quote', heroExplore: 'Explore our services',
    priceTop: 'Transparent & fair', priceUnit: '/ hour net', priceNote: 'incl. materials & labour', scroll: 'Explore',
    trust: [
      ['Reliable', 'We keep our commitments.'], ['Thorough', 'We pay attention to detail.'],
      ['Personal', 'Friendly service on site.'], ['Local', 'In and around Kaiserslautern.'],
    ],
    servicesKicker: 'What we do for you', servicesTitle: 'Cleanliness that fits', servicesAccent: 'your everyday life.',
    servicesText: 'Choose the service you need – we will discuss everything else with you personally.',
    services: {
      office: 'Office cleaning', home: 'Private homes', construction: 'Post-construction',
      windows: 'Window cleaning', stairs: 'Stairwells', education: 'Schools & nurseries',
    },
    serviceAria: 'request',
    aboutKicker: 'Why O&G Vyara?', aboutTitle: 'Because a clean space simply', aboutAccent: 'feels good.',
    aboutText: 'Regularly or just once: we listen, tailor the cleaning to your needs and take careful care of your property.',
    imageNote: 'Care in every detail.',
    features: [
      ['Everything included', 'Cleaning materials and labour are included.'],
      ['Clear invoicing', 'Invoice provided with VAT shown separately.'],
      ['Flexible service', 'For private and commercial spaces.'],
    ],
    appointment: 'Request an appointment',
    contactKicker: 'No-obligation enquiry', contactTitle: 'What can we', contactAccent: 'clean for you?',
    contactText: 'Tell us briefly what you need. Tsvetana Borisova will get back to you personally.',
    phone: 'Phone', email: 'Email', area: 'Service area',
    formTitle: 'Your enquiry', formTime: 'About 2 min.', formQuestion: 'What do you need?',
    name: 'Name *', namePlaceholder: 'Your name', telephone: 'Phone *', telephonePlaceholder: 'Your phone number',
    emailPlaceholder: 'name@example.com', frequency: 'Frequency',
    frequencies: ['One-off', 'Weekly', 'Every two weeks', 'Monthly', 'Not sure yet'],
    message: 'Your message', messagePlaceholder: 'e.g. property size, number of windows or preferred date',
    consent: 'I agree that my information may be used to process this enquiry. *',
    submit: 'Send enquiry', formNote: 'This opens your email app with all enquiry details filled in.',
    selectError: 'Please select at least one service.',
    mailSubject: 'Cleaning enquiry from', mailHello: 'Hello Ms Borisova,', mailInterest: 'I am interested in',
    mailFrequency: 'Frequency', mailName: 'Name', mailPhone: 'Phone', mailEmail: 'Email', mailMessage: 'Message',
    footerTagline: 'Cleaning with care.', footerLocation: 'Kaiserslautern, Germany',
    alts: {
      hero: 'Professional cleaner cleaning a large window in a bright home',
      team: 'Cleaning team professionally caring for an office building',
    },
  },
};

let currentLanguage = localStorage.getItem('og-language') === 'en' ? 'en' : 'de';

function renderSite() {
  const t = copy[currentLanguage];
  const langToggle = `<div class="language-toggle" role="group" aria-label="Deutsch / English">
    <button type="button" data-language="de" class="${currentLanguage === 'de' ? 'active' : ''}" aria-pressed="${currentLanguage === 'de'}">DE</button>
    <span></span><button type="button" data-language="en" class="${currentLanguage === 'en' ? 'active' : ''}" aria-pressed="${currentLanguage === 'en'}">EN</button></div>`;
  const serviceCards = serviceDefinitions.map((service, index) => `
    <button class="service-card" type="button" data-service="${service.key}" aria-label="${t.services[service.key]} ${t.serviceAria}">
      <span class="service-number">0${index + 1}</span><span class="service-icon"><i data-lucide="${service.icon}"></i></span>
      <span class="service-label">${t.services[service.key]}</span><span class="service-arrow"><i data-lucide="arrow-up-right"></i></span>
    </button>`).join('');

  document.documentElement.lang = currentLanguage;
  document.title = t.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', t.description);
  document.querySelector('#app').innerHTML = `
    <header class="site-header" id="siteHeader">
      <a class="brand" href="#top" aria-label="O&G Vyara ${t.homeLabel}"><span class="brand-mark">O<span>&</span>G</span><span class="brand-name">VYARA<br><b>${currentLanguage === 'de' ? 'REINIGUNG' : 'CLEANING'}</b></span></a>
      <nav class="nav-links" id="navLinks" aria-label="${currentLanguage === 'de' ? 'Hauptnavigation' : 'Main navigation'}"><a href="#leistungen">${t.nav[0]}</a><a href="#warum-wir">${t.nav[1]}</a><a href="#kontakt">${t.nav[2]}</a></nav>
      <div class="header-actions">${langToggle}<a class="header-cta" href="tel:+4917631464167"><i data-lucide="phone"></i><span>0176 3146 4167</span></a><button class="menu-toggle" id="menuToggle" aria-label="${t.menuOpen}" aria-expanded="false"><i data-lucide="menu"></i></button></div>
    </header>
    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <img src="${assetBase}assets/hero-cleaning.jpg" alt="${t.alts.hero}" class="hero-image" /><div class="hero-shade"></div>
        <div class="hero-copy"><span class="eyebrow"><span class="eyebrow-dot"></span>${t.heroEyebrow}</span><h1 id="hero-title">${t.heroTitle}<br><em>${t.heroAccent}</em></h1><p>${t.heroText}</p>
          <div class="hero-actions"><a class="button button-primary" href="#kontakt">${t.heroCta}<i data-lucide="arrow-right"></i></a><a class="button button-ghost" href="#leistungen">${t.heroExplore}<i data-lucide="chevron-down"></i></a></div>
        </div>
        <div class="hero-price"><span>${t.priceTop}</span><strong>30,00 €<small>${t.priceUnit}</small></strong><p>${t.priceNote}</p></div><a href="#leistungen" class="scroll-cue" aria-label="${t.heroExplore}"><span></span>${t.scroll}</a>
      </section>
      <section class="trust-strip" aria-label="${currentLanguage === 'de' ? 'Unsere Werte' : 'Our values'}">
        ${[['shield-check', ...t.trust[0]], ['sparkles', ...t.trust[1]], ['heart-handshake', ...t.trust[2]], ['map-pin', ...t.trust[3]]].map(item => `<div><i data-lucide="${item[0]}"></i><span><b>${item[1]}</b><small>${item[2]}</small></span></div>`).join('')}
      </section>
      <section class="services section" id="leistungen"><div class="section-heading reveal"><span class="kicker">${t.servicesKicker}</span><h2>${t.servicesTitle}<br><em>${t.servicesAccent}</em></h2><p>${t.servicesText}</p></div><div class="service-grid reveal">${serviceCards}</div></section>
      <section class="editorial" id="warum-wir">
        <div class="editorial-image reveal"><img src="${assetBase}assets/team-cleaning.jpg" alt="${t.alts.team}" loading="lazy"><div class="image-note"><span>O&G</span>${t.imageNote}</div></div>
        <div class="editorial-copy reveal"><span class="kicker kicker-light">${t.aboutKicker}</span><h2>${t.aboutTitle}<em> ${t.aboutAccent}</em></h2><p>${t.aboutText}</p>
          <ul class="feature-list">${t.features.map(feature => `<li><span><i data-lucide="check"></i></span><div><b>${feature[0]}</b><small>${feature[1]}</small></div></li>`).join('')}</ul><a href="#kontakt" class="text-link">${t.appointment}<i data-lucide="arrow-right"></i></a>
        </div>
      </section>
      <section class="contact-section" id="kontakt">
        <div class="contact-intro reveal"><span class="kicker kicker-light">${t.contactKicker}</span><h2>${t.contactTitle}<em> ${t.contactAccent}</em></h2><p>${t.contactText}</p>
          <div class="contact-methods"><a href="tel:+4917631464167"><i data-lucide="phone"></i><span><small>${t.phone}</small><b>0176 3146 4167</b></span></a><a href="mailto:borisovatsvetana5@gmail.com"><i data-lucide="mail"></i><span><small>${t.email}</small><b>borisovatsvetana5@gmail.com</b></span></a><div><i data-lucide="map-pin"></i><span><small>${t.area}</small><b>67657 Kaiserslautern</b></span></div></div>
        </div>
        <form class="quote-form reveal" id="quoteForm"><div class="form-topline"><span>${t.formTitle}</span><span>${t.formTime}</span></div>
          <fieldset><legend>${t.formQuestion}</legend><div class="service-pills">${serviceDefinitions.map(s => `<label><input type="checkbox" name="service" value="${s.key}"><span>${t.services[s.key]}</span></label>`).join('')}</div></fieldset>
          <div class="field-row"><label class="field"><span>${t.name}</span><input type="text" name="name" autocomplete="name" placeholder="${t.namePlaceholder}" required></label><label class="field"><span>${t.telephone}</span><input type="tel" name="phone" autocomplete="tel" placeholder="${t.telephonePlaceholder}" required></label></div>
          <div class="field-row"><label class="field"><span>${t.email}</span><input type="email" name="email" autocomplete="email" placeholder="${t.emailPlaceholder}"></label><label class="field"><span>${t.frequency}</span><select name="frequency">${t.frequencies.map(item => `<option value="${item}">${item}</option>`).join('')}</select><i data-lucide="chevron-down"></i></label></div>
          <label class="field"><span>${t.message}</span><textarea name="message" rows="4" placeholder="${t.messagePlaceholder}"></textarea></label><label class="consent"><input type="checkbox" required><span><i data-lucide="check"></i></span><small>${t.consent}</small></label>
          <button class="submit-button" type="submit"><span>${t.submit}</span><i data-lucide="arrow-right"></i></button><p class="form-note" id="formNote">${t.formNote}</p>
        </form>
      </section>
    </main>
    <footer><div class="footer-brand"><span class="brand-mark">O<span>&</span>G</span><p>Vyara ${currentLanguage === 'de' ? 'Reinigung' : 'Cleaning'}<br><small>${t.footerTagline}</small></p></div><div class="footer-links"><a href="#leistungen">${t.nav[0]}</a><a href="#warum-wir">${t.nav[1]}</a><a href="#kontakt">${t.nav[2]}</a></div><div class="footer-meta"><span>© ${new Date().getFullYear()} O&G Vyara Reinigung</span><span>${t.footerLocation}</span></div></footer>
    <a class="floating-call" href="tel:+4917631464167" aria-label="${t.phone}"><i data-lucide="phone"></i></a>`;

  createIcons({ icons });
  bindInteractions(t);
}

function bindInteractions(t) {
  const header = document.querySelector('#siteHeader');
  const menuToggle = document.querySelector('#menuToggle');
  const navLinks = document.querySelector('#navLinks');
  const handleScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.onscroll = handleScroll;
  handleScroll();
  menuToggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? t.menuClose : t.menuOpen);
    menuToggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
    createIcons({ icons });
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => header.classList.remove('menu-open')));
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    const requestedLanguage = button.dataset.language;
    if (requestedLanguage === currentLanguage) return;
    currentLanguage = requestedLanguage;
    localStorage.setItem('og-language', currentLanguage);
    renderSite();
  }));
  document.querySelectorAll('.service-card').forEach(card => card.addEventListener('click', () => {
    const input = document.querySelector(`input[name="service"][value="${card.dataset.service}"]`);
    if (input) input.checked = true;
    document.querySelector('#kontakt').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => input?.closest('label')?.classList.add('pulse'), 650);
    setTimeout(() => input?.closest('label')?.classList.remove('pulse'), 1400);
  }));
  const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.querySelector('#quoteForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const selectedKeys = data.getAll('service');
    if (!selectedKeys.length) {
      const note = document.querySelector('#formNote');
      note.textContent = t.selectError;
      note.classList.add('error');
      form.querySelector('fieldset').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const selected = selectedKeys.map(key => t.services[key]);
    const subject = encodeURIComponent(`${t.mailSubject} ${data.get('name')}`);
    const body = encodeURIComponent([t.mailHello, '', `${t.mailInterest}: ${selected.join(', ')}`, `${t.mailFrequency}: ${data.get('frequency')}`, '', `${t.mailName}: ${data.get('name')}`, `${t.mailPhone}: ${data.get('phone')}`, `${t.mailEmail}: ${data.get('email') || '–'}`, '', `${t.mailMessage}:`, data.get('message') || '–'].join('\n'));
    window.location.href = `mailto:borisovatsvetana5@gmail.com?subject=${subject}&body=${body}`;
  });
}

renderSite();
