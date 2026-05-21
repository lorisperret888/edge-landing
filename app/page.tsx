'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if(!email) return
    setLoading(true)
    await supabase.from('leads').insert({ email, phone })
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@300;400;700;800&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#080810;color:#fff;font-family:'Space Mono',monospace;overflow-x:hidden}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:60px;background:rgba(8,8,16,0.9);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.06)}
        .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:17px;color:#fff;letter-spacing:7px;text-decoration:none}
        .nav-links{display:flex;gap:40px}
        .nav-links a{color:#6b6880;text-decoration:none;font-size:10px;letter-spacing:3px}
        .nav-links a:hover{color:#fff}
        .nav-btn{background:#fff;color:#080810;border:none;padding:9px 24px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:3px;font-weight:700}
        .nav-btn:hover{background:#a259f7;color:#fff}
        #hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:140px 48px 100px;position:relative;overflow:hidden}
        .hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 40%,rgba(100,40,200,0.08) 0%,transparent 65%)}
        .hero-eyebrow{font-size:9px;color:#6b6880;letter-spacing:6px;margin-bottom:40px;position:relative}
        .hero-title{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(80px,14vw,160px);color:#fff;letter-spacing:clamp(8px,2vw,24px);line-height:0.92;margin-bottom:40px;position:relative}
        .hero-sub{font-family:'Syne',sans-serif;font-weight:300;font-size:clamp(14px,2vw,22px);color:#e8e0f0;letter-spacing:3px;margin-bottom:16px;position:relative}
        .hero-desc{font-size:12px;color:#6b6880;line-height:2.4;max-width:440px;margin:0 auto 56px;position:relative}
        .hero-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;position:relative}
        .btn-white{background:#fff;color:#080810;padding:15px 44px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:3px;font-weight:700;text-decoration:none;display:inline-block;border:none}
        .btn-white:hover{background:#a259f7;color:#fff}
        .btn-outline{background:transparent;color:#6b6880;padding:15px 44px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:3px;text-decoration:none;display:inline-block;border:1px solid rgba(255,255,255,0.06)}
        .btn-outline:hover{color:#fff;border-color:rgba(255,255,255,0.2)}
        .hero-stats{display:flex;gap:56px;justify-content:center;margin-top:80px;padding-top:48px;border-top:1px solid rgba(255,255,255,0.06);position:relative}
        .stat-num{font-family:'Syne',sans-serif;font-weight:800;font-size:28px;color:#fff}
        .stat-lbl{font-size:9px;color:#6b6880;letter-spacing:3px;margin-top:4px}
        .ticker{overflow:hidden;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);background:#0d0c18}
        .ticker-track{display:flex;animation:ticker 30s linear infinite;white-space:nowrap}
        .tick{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-right:1px solid rgba(255,255,255,0.06);flex-shrink:0}
        .tick-name{font-family:'Syne',sans-serif;font-weight:700;font-size:10px;color:#fff;letter-spacing:3px}
        .tick-dot{width:3px;height:3px;background:#a259f7;border-radius:50%}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .section{padding:100px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
        .wrap{max-width:1100px;margin:0 auto;padding:0 48px}
        .lbl{font-size:9px;color:#a259f7;letter-spacing:5px;margin-bottom:16px;display:flex;align-items:center;gap:10px}
        .lbl::before{content:'';width:20px;height:1px;background:#a259f7}
        .h2{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(28px,4vw,52px);color:#fff;line-height:1.05;margin-bottom:20px}
        .tools-list{display:flex;flex-direction:column;margin-top:64px}
        .tool{display:grid;grid-template-columns:56px 1fr auto;align-items:center;gap:48px;padding:40px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
        .tool:first-child{border-top:1px solid rgba(255,255,255,0.06)}
        .tool-num{font-family:'Syne',sans-serif;font-weight:800;font-size:13px;color:#2e2c3e;letter-spacing:2px}
        .tool-name{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(18px,2.5vw,28px);color:#fff;letter-spacing:1px;margin-bottom:4px}
        .tool-tag{font-size:9px;color:#6b6880;letter-spacing:3px;margin-bottom:8px}
        .tool-desc{font-size:11px;color:#6b6880;line-height:2;max-width:480px}
        .tool-price{font-family:'Syne',sans-serif;font-weight:800;font-size:24px;color:#fff;text-align:right}
        .tool-price-sub{font-size:9px;color:#6b6880;letter-spacing:1px;margin:4px 0 12px;text-align:right}
        .tool-link{display:inline-flex;align-items:center;gap:6px;font-size:9px;color:#e8e0f0;letter-spacing:3px;text-decoration:none;border-bottom:1px solid rgba(162,89,247,0.2);padding-bottom:2px}
        .tool-link:hover{color:#a259f7;border-color:#a259f7}
        .bundle-section{background:#0d0c18;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06)}
        .bundle-card{display:grid;grid-template-columns:1fr 320px;border:1px solid rgba(162,89,247,0.2);background:#080810;position:relative;overflow:hidden}
        .bundle-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#a259f7,transparent)}
        .bundle-l{padding:64px;border-right:1px solid rgba(255,255,255,0.06)}
        .bundle-r{padding:64px;display:flex;flex-direction:column;justify-content:center}
        .bundle-pill{display:inline-block;font-size:8px;color:#a259f7;letter-spacing:4px;border:1px solid rgba(162,89,247,0.2);padding:5px 14px;margin-bottom:28px;background:rgba(162,89,247,0.06)}
        .bundle-title{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(36px,4vw,64px);color:#fff;line-height:0.92;letter-spacing:1px;margin-bottom:40px}
        .bundle-title span{color:#a259f7}
        .bundle-rows{border:1px solid rgba(255,255,255,0.06)}
        .bundle-row{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:10px}
        .bundle-row:last-child{border-bottom:none}
        .bundle-row-name{color:#fff;letter-spacing:1px;font-weight:700}
        .bundle-row-price{color:#6b6880;text-decoration:line-through;font-size:9px}
        .b-old{font-size:10px;color:#6b6880;text-decoration:line-through;margin-bottom:8px}
        .b-lbl{font-size:9px;color:#6b6880;letter-spacing:3px;margin-bottom:4px}
        .b-price{font-family:'Syne',sans-serif;font-weight:800;font-size:60px;color:#fff;line-height:1}
        .b-sep{display:flex;align-items:center;gap:10px;margin:16px 0;font-size:8px;color:#6b6880;letter-spacing:3px}
        .b-sep::before,.b-sep::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.06)}
        .b-once-lbl{font-size:9px;color:#6b6880;letter-spacing:3px;margin-bottom:4px}
        .b-once{font-family:'Syne',sans-serif;font-weight:800;font-size:28px;color:#fff;margin-bottom:4px}
        .b-save{font-size:9px;color:#a259f7;letter-spacing:2px;margin-bottom:24px}
        .b-btn{display:block;width:100%;background:#fff;color:#080810;border:none;padding:16px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:4px;font-weight:700}
        .b-btn:hover{background:#a259f7;color:#fff}
        .vision-wrap{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:64px}
        .vision-quote{font-family:'Syne',sans-serif;font-weight:700;font-size:clamp(20px,2.5vw,30px);color:#fff;line-height:1.45;margin-bottom:28px}
        .vision-quote em{color:#a259f7;font-style:normal}
        .vision-p{font-size:12px;color:#6b6880;line-height:2.4;margin-bottom:16px}
        .pillars{display:flex;flex-direction:column;gap:1px;background:rgba(255,255,255,0.06)}
        .pillar{background:#080810;padding:32px;transition:background .2s}
        .pillar:hover{background:#0d0c18}
        .pillar-word{font-family:'Syne',sans-serif;font-weight:800;font-size:11px;color:#fff;letter-spacing:4px;margin-bottom:8px}
        .pillar-text{font-size:11px;color:#6b6880;line-height:1.9}
        .faq-wrap{border:1px solid rgba(255,255,255,0.06);margin-top:48px}
        .faq-item{border-bottom:1px solid rgba(255,255,255,0.06)}
        .faq-item:last-child{border-bottom:none}
        .faq-q{padding:22px 32px;font-size:11px;color:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;font-weight:700;letter-spacing:.5px}
        .faq-q:hover{background:#0d0c18}
        .faq-icon{font-size:18px;color:#6b6880;flex-shrink:0}
        .faq-a{padding:0 32px 22px;font-size:11px;color:#6b6880;line-height:2.1;display:none}
        .faq-item.open .faq-a{display:block}
        .faq-item.open .faq-icon{color:#a259f7}
        #cta{text-align:center;padding:140px 48px;border-top:1px solid rgba(255,255,255,0.06);position:relative;overflow:hidden}
        .cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(100,40,180,0.1) 0%,transparent 65%);pointer-events:none}
        .cta-title{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(48px,9vw,110px);color:#fff;letter-spacing:clamp(6px,1.5vw,20px);line-height:.95;margin-bottom:12px;position:relative}
        .cta-sub{font-size:11px;color:#6b6880;letter-spacing:5px;margin-bottom:48px;position:relative}
        .capture-section{background:#0d0c18;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);padding:100px 0}
        .capture-card{max-width:560px;margin:0 auto;text-align:center}
        .capture-title{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(28px,4vw,44px);color:#fff;margin-bottom:12px;letter-spacing:1px}
        .capture-sub{font-size:12px;color:#6b6880;line-height:2;margin-bottom:40px}
        .capture-form{display:flex;flex-direction:column;gap:12px}
        .capture-input{background:#080810;border:1px solid rgba(255,255,255,0.08);color:#fff;font-family:inherit;font-size:12px;padding:14px 18px;outline:none;transition:border-color .2s;width:100%}
        .capture-input:focus{border-color:rgba(162,89,247,0.4)}
        .capture-input::placeholder{color:#6b6880}
        .capture-btn{background:#fff;color:#080810;border:none;padding:14px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:4px;font-weight:700;transition:all .3s}
        .capture-btn:hover{background:#a259f7;color:#fff}
        .capture-success{font-size:13px;color:#a259f7;letter-spacing:3px;padding:20px}
        footer{border-top:1px solid rgba(255,255,255,0.06);padding:32px 48px;display:flex;align-items:center;justify-content:space-between;background:#0d0c18}
        .footer-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:15px;color:#fff;letter-spacing:7px}
        .footer-links{display:flex;gap:24px}
        .footer-links a{font-size:9px;color:#6b6880;text-decoration:none;letter-spacing:2px}
        .footer-links a:hover{color:#fff}
        .footer-copy{font-size:9px;color:#2e2c3e;letter-spacing:1px}
        @media(max-width:900px){nav{padding:0 20px}.wrap{padding:0 24px}.section{padding:70px 0}.tool{grid-template-columns:1fr;gap:16px}.bundle-card{grid-template-columns:1fr}.vision-wrap{grid-template-columns:1fr}footer{flex-direction:column;gap:16px;text-align:center}#cta{padding:100px 24px}}
      `}</style>

      <nav>
        <a href="#" className="logo">EDGE</a>
        <div className="nav-links">
          <a href="#outils">Outils</a>
          <a href="#bundle">Bundle</a>
          <a href="#vision">Vision</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="nav-btn" onClick={() => document.getElementById('bundle')?.scrollIntoView({behavior:'smooth'})}>COMMENCER</button>
      </nav>

      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-eyebrow">TRADING DECISION SYSTEM</div>
        <h1 className="hero-title">EDGE</h1>
        <div className="hero-sub">Trade with an edge.</div>
        <p className="hero-desc">Des outils pensés pour les traders qui veulent progresser vraiment. Pas créés pour exister — créés pour servir.</p>
        <div className="hero-btns">
          <a href="#outils" className="btn-white">DÉCOUVRIR LES OUTILS</a>
          <a href="#vision" className="btn-outline">NOTRE VISION</a>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num">6</div><div className="stat-lbl">OUTILS</div></div>
          <div><div className="stat-num">8+</div><div className="stat-lbl">CLASSES D'ACTIFS</div></div>
          <div><div className="stat-num">24/7</div><div className="stat-lbl">DISPONIBLE</div></div>
          <div><div className="stat-num">100%</div><div className="stat-lbl">PERSONNALISÉ</div></div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {['FOREX','INDICES','MATIÈRES PREMIÈRES','ACTIONS','CRYPTO','FUTURES','OPTIONS','ETF','FOREX','INDICES','MATIÈRES PREMIÈRES','ACTIONS','CRYPTO','FUTURES','OPTIONS','ETF'].map((name,i) => (
            <div className="tick" key={i}><span className="tick-dot"></span><span className="tick-name">{name}</span></div>
          ))}
        </div>
      </div>

      <section className="section" id="outils">
        <div className="wrap">
          <div className="lbl">OUTILS</div>
          <h2 className="h2">Six outils.<br/>Un système.</h2>
          <div className="tools-list">
            {[
              {num:'01',name:'EDGE PREP',tag:'BRIEFING PRÉ-SESSION',desc:"Es-tu en état de trader aujourd'hui ? EDGE Prep analyse ton état mental et te donne un verdict avant d'ouvrir ton premier chart.",price:'7.99€',once:'70€'},
              {num:'02',name:'EDGE VALIDATOR',tag:'IA — VALIDATION DE TRADES',desc:"Ton trade respecte-t-il vraiment ton plan ? EDGE Validator analyse chaque condition et rend son verdict — sans émotion.",price:'19.99€',once:'197€'},
              {num:'03',name:'EDGE RISK',tag:'GESTION DU RISQUE',desc:"Combien risquer sur ce trade ? EDGE Risk calcule ta position en temps réel et s'adapte à ta série en cours.",price:'7.99€',once:'70€'},
              {num:'04',name:'EDGE INDICATOR',tag:'PINE SCRIPT V6 — TRADINGVIEW',desc:"L'indicateur qui lit le marché à ta place. VWAPs, sessions, FVG, signaux filtrés — tout sur un seul chart.",price:'4.99€',once:'47€'},
              {num:'05',name:'EDGE JOURNAL',tag:'JOURNAL + TRACK RECORD',desc:"Note chaque trade en quelques secondes. Identifie tes erreurs. Mesure ta vraie progression.",price:'14.99€',once:'147€'},
              {num:'06',name:'EDGE STATS',tag:'ANALYSE DE PERFORMANCE',desc:"Tes vraies statistiques sur la durée. Win rate, R:R, biais, patterns — les données honnêtes.",price:'9.99€',once:'97€'},
            ].map((t,i) => (
              <div className="tool" key={i}>
                <div className="tool-num">0{i+1}</div>
                <div>
                  <div className="tool-name">{t.name}</div>
                  <div className="tool-tag">{t.tag}</div>
                  <div className="tool-desc">{t.desc}</div>
                </div>
                <div>
                  <div className="tool-price">{t.price}<span style={{fontSize:'12px',color:'#6b6880'}}>/mois</span></div>
                  <div className="tool-price-sub">ou {t.once} achat unique</div>
                  <a href="#" className="tool-link">EN SAVOIR PLUS</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bundle-section section" id="bundle">
        <div className="wrap">
          <div className="lbl">BUNDLE</div>
          <h2 className="h2">Tout EDGE.<br/>Un seul prix.</h2>
          <div className="bundle-card" style={{marginTop:'48px'}}>
            <div className="bundle-l">
              <div className="bundle-pill">MEILLEURE OFFRE</div>
              <div className="bundle-title">EDGE<br/><span>COMPLET</span></div>
              <div className="bundle-rows">
                {['EDGE PREP','EDGE VALIDATOR','EDGE RISK','EDGE INDICATOR','EDGE JOURNAL','EDGE STATS'].map((n,i) => (
                  <div className="bundle-row" key={i}><span className="bundle-row-name">{n}</span><span className="bundle-row-price">inclus</span></div>
                ))}
              </div>
            </div>
            <div className="bundle-r">
              <div className="b-old">Valeur : 65.94€/mois</div>
              <div className="b-lbl">ABONNEMENT MENSUEL</div>
              <div className="b-price">49.99€</div>
              <div className="b-sep">ou</div>
              <div className="b-once-lbl">ACHAT UNIQUE — ACCÈS À VIE</div>
              <div className="b-once">497€</div>
              <div className="b-save">ÉCONOMISE 292€ VS SÉPARÉ</div>
              <button className="b-btn">PRENDRE LE BUNDLE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="vision">
        <div className="wrap">
          <div className="lbl">VISION</div>
          <div className="vision-wrap">
            <div>
              <div className="vision-quote">Des outils qui <em>servent vraiment</em>.<br/>Pas créés pour exister.</div>
              <p className="vision-p">EDGE est né d'un constat simple : les outils qui existent sont soit trop complexes, soit trop génériques. Personne ne te connaît, personne ne connaît ta stratégie.</p>
              <p className="vision-p">Notre objectif n'est pas de vendre des outils. C'est de te donner ce dont tu as vraiment besoin pour progresser. Pas un guru. Pas des signaux. Un système.</p>
            </div>
            <div className="pillars">
              {[
                {w:'DISCIPLINE',t:"Respecter ton plan chaque jour, sans exception, sans émotion."},
                {w:'CLARTÉ',t:"Voir ce qui compte. Éliminer le bruit. Décisions claires sur données objectives."},
                {w:'UTILITÉ',t:"Chaque outil doit servir réellement, tous les jours. Si ce n'est pas utile, ça n'existe pas chez EDGE."},
              ].map((p,i) => (
                <div className="pillar" key={i}>
                  <div className="pillar-word">{p.w}</div>
                  <div className="pillar-text">{p.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="lbl">FAQ</div>
          <h2 className="h2">Questions.</h2>
          <div className="faq-wrap">
            {[
              {q:'Pour quel niveau de trader ?',a:"Tous les niveaux. EDGE s'adapte à ta stratégie — pas l'inverse."},
              {q:'Est-ce que EDGE trade à m