import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, X, Waves, Droplets, Leaf, Activity, MousePointer2 } from 'lucide-react';
import './styles.css';

const nav = [['Capabilities', 'capabilities'], ['Sectors', 'sectors'], ['Projects', 'projects'], ['Approach', 'approach'], ['Contact', 'contact']];
const phases = [
  ['01', 'Listen', 'We start where you are—your water, your world, your ambition.', 'A living brief', 'We map the flow, the friction, and the future you are trying to build.'],
  ['02', 'Shape', 'We turn insight into a practical, intelligent system blueprint.', 'A clearer current', 'Our engineers model every decision before the first shovel hits the ground.'],
  ['03', 'Build', 'We make it real, with craft, care, and zero shortcuts.', 'Built to last', 'From treatment trains to controls, every layer is made to perform beautifully.'],
  ['04', 'Evolve', 'We stay in the current, tuning performance for the long run.', 'Always improving', 'Live data keeps the system learning, resilient, and ready for what is next.'],
];

function Flow() {
  return <div className="flow" aria-hidden="true">
    <div className="orb a"/><div className="orb b"/>
    <div className="flow-label"><span className="status-dot"/> REPRESENTATIVE SYSTEM FLOW <b>03 STAGES</b></div>
    <div className="flow-diagram">
      <svg className="flow-map" viewBox="0 0 720 340" fill="none" preserveAspectRatio="none">
        <path className="pipe-base" d="M92 170 C180 170 188 105 270 105 S360 235 450 235 S544 170 628 170"/>
        <path className="pipe-flow" d="M92 170 C180 170 188 105 270 105 S360 235 450 235 S544 170 628 170"/>
      </svg>
      <div className="flow-stage stage-inlet"><div className="stage-icon"><Droplets size={22}/></div><small>01 / INLET</small><strong>COLLECT</strong><em>water arrives</em></div>
      <div className="flow-stage stage-clean"><div className="stage-icon"><Activity size={22}/></div><small>02 / TREAT</small><strong>CLARIFY</strong><em>solids separate</em></div>
      <div className="flow-stage stage-return"><div className="stage-icon"><Leaf size={22}/></div><small>03 / RETURN</small><strong>RENEW</strong><em>water goes back</em></div>
    </div>
    <div className="flow-readout"><span><b className="readout-value">PLAN</b><small>design with intent</small></span><i/><span><b className="readout-value">DELIVER</b><small>build for resilience</small></span><span className="readout-state"><b>●</b> OPERATE</span></div>
    <div className="gl top">SYSTEM VIEW / 01</div><div className="gl bottom">FROM WASTE<br/><b>TO RESOURCE</b></div>
  </div>;
}

function App() {
  const [open, setOpen] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('show')), { threshold: .14 });
    document.querySelectorAll('.reveal').forEach(e => observer.observe(e));
    const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max ? window.scrollY / max * 100 : 0); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const move = e => { const r = e.currentTarget.getBoundingClientRect(); setPointer({ x: (e.clientX-r.left)/r.width*100, y: (e.clientY-r.top)/r.height*100 }); };

  return <div className="site-shell">
    <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    <header><a className="brand" href="#top"><span className="mark"><i/><i/><i/></span><span>VERDANT<br/><b>FLOW</b></span></a>
      <nav className={open ? 'open' : ''}>{nav.map(([label, id]) => <a key={id} href={'#' + id} onClick={() => go(id)}>{label} <small>↗</small></a>)}</nav>
      <button className="head-cta" onClick={() => go('contact')}>Discuss a project <ArrowUpRight size={15}/></button>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
    </header>
    <main id="top">
      <section className="hero pad" onMouseMove={move} style={{ '--mx': `${pointer.x}%`, '--my': `${pointer.y}%` }}>
        <div className="hero-grid" aria-hidden="true"/><div className="hero-copy reveal"><p className="eyebrow"><span/> WATER INFRASTRUCTURE / BUILT FOR WHAT’S NEXT</p><h1>Infrastructure for a<br/><em>water-secure</em> future.</h1><p className="lead">We plan, design, and optimize treatment, reuse, and resource-recovery systems for municipalities, utilities, and industry.</p><div className="hero-actions"><button className="circle-link" onClick={() => go('capabilities')}>Explore capabilities <ArrowDownRight/></button><button className="text-cta" onClick={() => go('contact')}>Discuss a project <ArrowUpRight size={15}/></button></div><div className="hero-hint"><MousePointer2 size={13}/> explore the system flow</div></div>
        <Flow/><div className="hero-note"><span>TREATMENT / REUSE / RECOVERY</span><span>INDEPENDENT WATER ENGINEERING</span></div><div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
      <div className="ticker" aria-label="Verdant Flow principles"><div className="ticker-track"><span>DESIGNING FOR TOMORROW</span><b>✳</b><span>CLEANER SYSTEMS, CLEARER FUTURES</span><b>✳</b><span>WATER IN BETTER CIRCULATION</span><b>✳</b><span aria-hidden="true">DESIGNING FOR TOMORROW</span><b aria-hidden="true">✳</b><span aria-hidden="true">CLEANER SYSTEMS, CLEARER FUTURES</span><b aria-hidden="true">✳</b><span aria-hidden="true">WATER IN BETTER CIRCULATION</span><b aria-hidden="true">✳</b></div></div>
      <section id="approach" className="intro pad reveal"><div className="kicker">01 / THE APPROACH</div><div className="intro-grid"><h2>Critical infrastructure,<br/><span>thought through.</span></h2><div><p>Verdant Flow combines process engineering, delivery discipline, and long-term operational thinking to make essential water systems more resilient, efficient, and ready for change.</p><a className="link" href="#capabilities">How we work <ArrowUpRight size={17}/></a></div></div></section>
      <section id="capabilities" className="caps pad"><div className="kicker reveal">02 / CAPABILITIES</div><div className="cap-head reveal"><h2>One partner.<br/><em>Every layer.</em></h2><p>From strategy through operations, we bring the technical depth and delivery clarity required for complex water programs.</p></div><div className="cards">{[['01','Treatment systems','Planning, design, and optimization for reliable treatment performance.',Waves],['02','Reuse & recovery','Turning wastewater into a dependable source of water, energy, and materials.',Leaf],['03','Digital operations','Operational insight that helps teams make better decisions every day.',Activity]].map(([n,t,d,I]) => <article className="card reveal" key={t}><div className="card-top"><span>{n}</span><I size={24}/></div><h3>{t}</h3><p>{d}</p><a href="#contact">Explore capability <ArrowUpRight size={15}/></a><div className="card-glow"/></article>)}</div></section>
      <section id="sectors" className="sectors pad"><div className="kicker reveal">03 / SECTORS</div><div className="sectors-head reveal"><h2>Built for the<br/><em>real world.</em></h2><p>We work where water is essential, regulated, and under pressure.</p></div><div className="sector-grid"><article className="sector-card reveal"><span>01</span><h3>Municipal & utility</h3><p>Reliable systems for communities, networks, and public service.</p></article><article className="sector-card reveal"><span>02</span><h3>Industrial water</h3><p>Efficient treatment and reuse that support critical operations.</p></article><article className="sector-card reveal"><span>03</span><h3>Regeneration</h3><p>Resource recovery programs that help places adapt and thrive.</p></article></div></section>
      <section id="projects" className="projects pad"><div className="kicker reveal">04 / PROJECT LENSES</div><div className="projects-head reveal"><h2>Experience that<br/><em>moves the needle.</em></h2><p>A look at the challenges we help clients navigate—from first feasibility to long-term performance.</p></div><div className="project-list"><article className="project-item reveal"><span>01 / REUSE</span><h3>Designing a resilient reuse program</h3><p>Balancing supply security, treatment quality, and operational simplicity for a growing service area.</p><a href="#contact">Discuss a similar challenge <ArrowUpRight size={15}/></a></article><article className="project-item reveal"><span>02 / INDUSTRY</span><h3>Making complex water simpler</h3><p>Integrating process treatment, controls, and recovery into one clear operating model.</p><a href="#contact">Talk to an engineer <ArrowUpRight size={15}/></a></article></div></section>
      <section id="impact" className="impact"><div className="impact-art"><div className="ring"/><div className="ring two"/><Droplets size={27}/><span>DESIGNED FOR<br/><b>LONG-TERM</b><br/>PERFORMANCE</span><div className="impact-orbit">RELIABILITY / EFFICIENCY / RESILIENCE</div></div><div className="impact-copy pad reveal"><div className="kicker">05 / OUTCOMES</div><h2>Better systems.<br/><em>Better decisions.</em></h2><p>We focus on the outcomes that matter to operators, communities, and the people accountable for the future of water.</p><div className="stats"><div><strong>01</strong><small>lower lifecycle<br/>risk</small></div><div><strong>02</strong><small>clearer operational<br/>insight</small></div><div><strong>03</strong><small>stronger resource<br/>security</small></div></div></div></section>
      <section className="process pad"><div className="kicker reveal">06 / DELIVERY MODEL</div><div className="process-head reveal"><h2>Clear from<br/><em>day one.</em></h2><span>FROM BRIEF<br/>TO PERFORMANCE</span></div><div className="timeline">{phases.map(([n,t,d], i) => <button className={`time reveal ${activePhase === i ? 'active' : ''}`} key={n} onClick={() => setActivePhase(i)} aria-pressed={activePhase === i}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><i>↗</i></button>)}</div><div className="phase-panel reveal"><div className="phase-number">{phases[activePhase][0]}</div><div><p className="eyebrow">DELIVERY PRINCIPLE</p><h3>{phases[activePhase][3]}</h3><p>{phases[activePhase][4]}</p></div><span className="phase-line"/></div></section>
      <section id="contact" className="contact pad reveal"><div className="flare"/><div className="kicker">07 / START A CONVERSATION</div><h2>Bring us your<br/><em>water challenge.</em></h2><p>Tell us what you are planning, upgrading, or trying to solve. We will bring the right people to the table.</p><a className="contact-btn" href="mailto:hello@verdantflow.co">hello@verdantflow.co <ArrowUpRight/></a><div className="contact-stamp">TREATMENT<br/><b>REUSE / RECOVERY</b></div></section>
    </main>
    <footer><a className="brand" href="#top"><span className="mark"><i/><i/><i/></span><span>VERDANT<br/><b>FLOW</b></span></a><div className="foot-mid">WATER INFRASTRUCTURE / TREATMENT / REUSE<br/>© 2026 VERDANT FLOW</div><div className="foot-links"><a href="#projects">Projects ↗</a><a href="mailto:hello@verdantflow.co">Email ↗</a></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
