import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronDown, Menu, X, GraduationCap, Utensils, Search, Code2, Sparkles, MapPin, Phone, Mail, CheckCircle2, ArrowRight, BriefcaseBusiness } from 'lucide-react';
import './styles.css';
import logo from './assets/rkveda-logo.png';

const PHONE = '918126037298';
const DISPLAY_PHONE = '+91 81260 37298';
const EMAIL = 'info@rkveda.in';
const LOCATION = 'Vrindavan, Mathura, Uttar Pradesh, India';

const businesses = [
  {
    icon: GraduationCap,
    eyebrow: 'EDUCATION & TECHNOLOGY',
    title: 'Infinity AI Cloud Academy',
    text: 'Industry-focused learning in Data Engineering, AI, Cloud and placement-oriented technology skills.',
    status: 'Active',
    href: 'https://infinityaicloudacademy.com/'
  },
  {
    icon: Utensils,
    eyebrow: 'FOOD & SERVICES',
    title: 'Tiffin.RKVeda',
    text: 'Home-style meals designed around convenience, consistency and everyday value.',
    status: 'Launching',
    href: 'https://tiffin.rkveda.in/'
  },
  {
    icon: Search,
    eyebrow: 'DIGITAL GROWTH',
    title: 'RKVeda Growth',
    text: 'SEO, local business growth, content and AI-powered digital workflows for small businesses.',
    status: 'Building',
    href: 'https://seo.rkveda.in/'
  },
  {
    icon: Code2,
    eyebrow: 'SOFTWARE & AI',
    title: 'RKVeda Labs',
    text: 'A future technology initiative for software products, automation and practical AI solutions.',
    status: 'Coming Soon',
    href: '#contact'
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);
  const whatsapp = (message = 'Hello RKVeda, I would like to know more about your businesses.') =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  const submitContact = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `RKVeda enquiry — ${data.get('business') || 'General'}`;
    const body = `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nBusiness: ${data.get('business')}\nMessage: ${data.get('message')}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSent(true);
  };

  return <div className="app">
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="RKVeda home">
        <img src={logo} alt="RKVeda" />
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#businesses" onClick={closeMenu}>Businesses</a>
        <a href="#ventures" onClick={closeMenu}>Ventures</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href={whatsapp('Hello RKVeda, I want to discuss a business enquiry.')} target="_blank" rel="noreferrer" onClick={closeMenu}>Talk to us <ArrowUpRight size={16}/></a>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero section-pad">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <div className="hero-copy">
          <div className="kicker"><span className="dot"/> RKVeda Business Ecosystem</div>
          <h1>Building Businesses.<br/><span>Creating Opportunities.</span></h1>
          <p>RKVeda is a growing business ecosystem bringing together technology, education, food services and digital innovation under one parent brand.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#businesses">Explore Businesses <ArrowRight size={18}/></a>
            <a className="btn btn-secondary" href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
          <div className="hero-note"><MapPin size={16}/> Based in Vrindavan, Mathura · Serving digitally across India</div>
        </div>
        <div className="hero-mark">
          <div className="mark-ring"><Sparkles size={22}/><span>RKVeda</span><small>BUSINESS ECOSYSTEM</small></div>
          <div className="floating-card card-a"><span>01</span><b>Build</b><small>Ideas into businesses</small></div>
          <div className="floating-card card-b"><span>02</span><b>Grow</b><small>With technology & systems</small></div>
        </div>
      </section>

      <section className="trust-strip">
        <div><b>01</b><span>Technology</span></div><div><b>02</b><span>Education</span></div><div><b>03</b><span>Food Services</span></div><div><b>04</b><span>Digital Growth</span></div>
      </section>

      <section id="about" className="section section-pad">
        <div className="section-heading"><div><div className="eyebrow">ABOUT RKVEDA</div><h2>One parent brand.<br/><span>Multiple opportunities.</span></h2></div><p>We are building practical, customer-focused ventures step by step — validating ideas first, then investing in systems, people and technology as they grow.</p></div>
        <div className="about-grid">
          <div className="about-panel dark-panel"><div className="panel-number">01</div><h3>Our approach</h3><p>Start simple. Serve real customers. Learn quickly. Build scalable systems when the business proves demand.</p><div className="mini-line"/></div>
          <div className="about-panel"><div className="icon-box"><BriefcaseBusiness size={22}/></div><h3>Business-first thinking</h3><p>Each venture gets its own identity and customer experience while RKVeda provides the parent ecosystem.</p></div>
          <div className="about-panel"><div className="icon-box"><Sparkles size={22}/></div><h3>Technology-enabled</h3><p>Automation, data and AI are used where they create measurable value — not simply because they are available.</p></div>
        </div>
      </section>

      <section id="businesses" className="section section-dark section-pad">
        <div className="section-heading light"><div><div className="eyebrow">OUR BUSINESSES</div><h2>Ideas becoming <span>real ventures.</span></h2></div><p>Our portfolio is intentionally modular. Active ventures are clearly separated from initiatives that are still being built.</p></div>
        <div className="business-grid">
          {businesses.map((b, i) => { const Icon = b.icon; return <article className="business-card" key={b.title}>
            <div className="business-top"><div className="business-icon"><Icon size={22}/></div><span className={`status status-${b.status.toLowerCase().replace(' ', '-')}`}>{b.status}</span></div>
            <div className="eyebrow">{b.eyebrow}</div><h3>{b.title}</h3><p>{b.text}</p>
            <a href={b.href} target={b.href.startsWith('http') ? '_blank' : undefined} rel={b.href.startsWith('http') ? 'noreferrer' : undefined} className="text-link">Explore <ArrowUpRight size={17}/></a>
          </article>})}
        </div>
      </section>

      <section id="ventures" className="section section-pad ventures">
        <div className="venture-content"><div className="eyebrow">RKVEDA VENTURES</div><h2>Explore. Validate. <span>Build.</span></h2><p>New ideas will be added only when they are ready. This keeps the RKVeda portfolio transparent and lets each business grow at its own pace.</p><div className="checks"><div><CheckCircle2/> Customer validation first</div><div><CheckCircle2/> Separate brand experience</div><div><CheckCircle2/> Shared technology & operations where useful</div></div></div>
        <div className="venture-visual"><div className="orbit orbit-1"/><div className="orbit orbit-2"/><div className="orbit-center"><Sparkles/><b>RKVeda</b><small>VENTURES</small></div><div className="orbit-node n1">AI</div><div className="orbit-node n2">EDU</div><div className="orbit-node n3">FOOD</div><div className="orbit-node n4">GROWTH</div></div>
      </section>

      <section className="section section-soft section-pad">
        <div className="section-heading"><div><div className="eyebrow">WHY RKVEDA</div><h2>Built for the <span>long term.</span></h2></div></div>
        <div className="principles"><div><span>01</span><h3>Practical</h3><p>Focus on real customer problems and sustainable operations.</p></div><div><span>02</span><h3>Transparent</h3><p>Clearly distinguish active, launching and future initiatives.</p></div><div><span>03</span><h3>Technology-enabled</h3><p>Use modern tools to improve speed, quality and decision-making.</p></div><div><span>04</span><h3>Customer-focused</h3><p>Build experiences that earn trust and repeat business.</p></div></div>
      </section>

      <section id="contact" className="section section-pad contact-section">
        <div className="contact-card">
          <div className="contact-copy"><div className="eyebrow">GET IN TOUCH</div><h2>Have an idea or <span>business enquiry?</span></h2><p>Tell us what you are looking to build, grow or explore. We will route your enquiry to the right RKVeda initiative.</p>
            <div className="contact-details"><a href={`tel:+${PHONE}`}><Phone size={18}/><span><small>Phone / WhatsApp</small>{DISPLAY_PHONE}</span></a><a href={`mailto:${EMAIL}`}><Mail size={18}/><span><small>Email</small>{EMAIL}</span></a><div><MapPin size={18}/><span><small>Base</small>{LOCATION}</span></div></div>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <input name="name" placeholder="Your name" required />
            <input name="phone" placeholder="Phone number" required />
            <select name="business" defaultValue=""><option value="" disabled>Select enquiry</option><option>RKVeda General</option><option>Infinity AI Cloud Academy</option><option>Tiffin.RKVeda</option><option>RKVeda Growth</option><option>Partnership / New Venture</option></select>
            <textarea name="message" rows="5" placeholder="Tell us how we can help..." required />
            <button className="btn btn-primary" type="submit">Send Enquiry <ArrowUpRight size={18}/></button>
            {formSent && <small className="form-note">Your email app should open with the enquiry details. You can also WhatsApp us directly.</small>}
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-main"><div className="footer-brand"><img src={logo} alt="RKVeda"/><p>Building businesses across technology, education, food services and digital innovation.</p></div><div><h4>Explore</h4><a href="#about">About</a><a href="#businesses">Businesses</a><a href="#ventures">Ventures</a><a href="#contact">Contact</a></div><div><h4>Businesses</h4><a href="https://infinityaicloudacademy.com/" target="_blank" rel="noreferrer">Infinity AI Cloud Academy</a><a href="https://tiffin.rkveda.in/" target="_blank" rel="noreferrer">Tiffin.RKVeda</a><a href="https://seo.rkveda.in/" target="_blank" rel="noreferrer">RKVeda Growth</a></div><div><h4>Contact</h4><a href={`tel:+${PHONE}`}>{DISPLAY_PHONE}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>Vrindavan, Mathura, UP</span></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} RKVeda. All rights reserved.</span><span>Built with purpose · Powered by technology</span></div>
    </footer>
    <a className="whatsapp-float" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="WhatsApp RKVeda">WhatsApp</a>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
