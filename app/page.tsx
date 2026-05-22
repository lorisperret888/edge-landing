'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!email) return
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
        .btn-w{background:#fff;color:#080810;padding:15px 44px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:3px;font-weight:700;text-decoration:none;display:inline-block;border:none}
        .btn-w:hover{background:#a259f7;color:#fff}
        .btn-o{background:transparent;color:#6b6880;padding:15px 44px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:3px;text-decoration:none;display:inline-block;border:1px solid rgba(255,255,255,0.06)}
        .btn-o:hover{color:#fff;border-color:rgba(255,255,255,0.2)}
        .hero-stats{display:flex;gap:56px;justify-content:center;margin-top:80px;padding-top:48px;border-top:1px solid rgba(255,255,255,0.06);position:relative}
        .sn{font-family:'Syne',sans-serif;font-weight:800;font-size:28px;color:#fff}
        .sl{font-size:9px;color:#6b6880;letter-spacing:3px;margin-top:4px}
        .ticker{overflow:hidden;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);background:#0d0c18}
        .ticker-track{display:flex;animation:ticker 30s linear infinite;white-space:nowrap}
        .tick{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-right:1px solid rgba(255,255,255,0.06);flex-shrink:0}
        .tn{font-family:'Syne',sans-serif;font-weight:700;font-size:10px;color:#fff;letter-spacing:3px}
        .td{width:3px;height:3px;background:#a259f7;border-radius:50%}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .sec{padding:100px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
        .wrap{max-width:1100px;margin:0 auto;padding:0 48px}
        .lbl{font-size:9px;color:#a259f7;letter-spacing:5px;margin-bottom:16px;display:flex;align-items:center;gap:10px}
        .lbl::before{content:'';width:20px;height:1px;background:#a259f7}
        .h2{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(28px,4vw,52px);color:#fff;line-height:1.05;margin-bottom:20px}
        .tl{display:flex;flex-direction:column;margin-top:64px}
        .tool{display:grid;grid-template-columns:56px 1fr auto;align-items:center;gap:48px;padding:40px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
        .tool:first-child{border-top:1px solid rgba(255,255,255,0.06)}
        .t-num{font-family:'Syne',sans-serif;font-weight:800;font-size:13px;color:#2e2c3e;letter-spacing:2px}
        .t-name{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(18px,2.5vw,28px);color:#fff;letter-spacing:1px;margin-bottom:4px}
        .t-tag{font-size:9px;color:#6b6880;letter-spacing:3px;margin-bottom:8px}
        .t-desc{font-size:11px;color:#6b6880;line-height:2;max-width:480px}
        .t-price{font-family:'Syne',sans-serif;font-weight:800;font-size:24px;color:#fff;text-align:right}
        .t-sub{font-size:9px;color:#6b6880;letter-spacing:1px;margin:4px 0 12px;text-align:right}
        .t-link{display:inline-flex;align-items:center;gap:6px;font-size:9px;color:#e8e0f0;letter-spacing:3px;text-decoration:none;border-bottom:1px solid rgba(162,89,247,0.2);padding-bottom:2px}
        .t-link:hover{color:#a259f7;border-color:#a259f7}
        .bsec{background:#0d0c18;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06)}
        .bcard{display:grid;grid-template-columns:1fr 320px;border:1px solid rgba(162,89,247,0.2);background:#080810;position:relative;overflow:hidden}
        .bcard::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#a259f7,transparent)}
        .bl{padding:64px;border-right:1px solid rgba(255,255,255,0.06)}
        .br{padding:64px;display:flex;flex-direction:column;justify-content:center}
        .bpill{display:inline-block;font-size:8px;color:#a259f7;letter-spacing:4px;border:1px solid rgba(162,89,247,0.2);padding:5px 14px;margin-bottom:28px;background:rgba(162,89,247,0.06)}
        .btitle{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(36px,4vw,64px);color:#fff;line-height:0.92;letter-spacing:1px;margin-bottom:40px}
        .btitle span{color:#a259f7}
        .brows{border:1px solid rgba(255,255,255,0.06)}
        .brow{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:10px}
        .brow:last-child{border-bottom:none}
        .brn{color:#fff;letter-spacing:1px;font-weight:700}
        .brp{color:#6b6880;text-decoration:line-through;font-size:9px}
        .vwrap{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:64px}
        .vq{font-family:'Syne',sans-serif;font-weight:700;font-size:clamp(20px,2.5vw,30px);color:#fff;line-height:1.45;margin-bottom:28px}
        .vq em{color:#a259f7;font-style:normal}
        .vp{font-size:12px;color:#6b6880;line-height:2.4;margin-bottom:16px}
        .pillars{display:flex;flex-direction:column;gap:1px;background:rgba(255,255,255,0.06)}
        .pillar{background:#080810;padding:32px}
        .pillar:hover{background:#0d0c18}
        .pw{font-family:'Syne',sans-serif;font-weight:800;font-size:11px;color:#fff;letter-spacing:4px;margin-bottom:8px}
        .pt{font-size:11px;color:#6b6880;line-height:1.9}
        .fwrap{border:1px solid rgba(255,255,255,0.06);margin-top:48px}
        .fi{border-bottom:1px solid rgba(255,255,255,0.06)}
        .fi:last-child{border-bottom:none}
        .fq{padding:22px 32px;font-size:11px;color:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;font-weight:700}
        .fq:hover{background:#0d0c18}
        .fic{font-size:18px;color:#6b6880;flex-shrink:0}
        .fa{padding:0 32px 22px;font-size:11px;color:#6b6880;line-height:2.1;display:none}
        .fi.open .fa{display:block}
        .fi.open .fic{color:#a259f7}
        .csec{background:#0d0c18;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);padding:100px 0}
        .ccard{max-width:560px;margin:0 auto;text-align:center}
        .ctitle{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(28px,4vw,44px);color:#fff;margin-bottom:12px;letter-spacing:1px}
        .csub{font-size:12px;color:#6b6880;line-height:2;margin-bottom:40px}
        .cform{display:flex;flex-direction:column;gap:12px}
        .cinput{background:#080810;border:1px solid rgba(255,255,255,0.08);color:#fff;font-family:inherit;font-size:12px;padding:14px 18px;outline:none;width:100%}
        .cinput:focus{border-color:rgba(162,89,247,0.4)}
        .cinput::placeholder{color:#6b6880}
        .cbtn{background:#fff;color:#080810;border:none;padding:14px;font-size:10px;font-family:inherit;cursor:pointer;letter-spacing:4px;font-weight:700}
        .cbtn:hover{background:#a259f7;color:#fff}
        .csuccess{font-size:13px;color:#a259f7;letter-spacing:3px;padding:20px}
        #cta{text-align:center;padding:140px 48px;border-top:1px solid rgba(255,255,255,0.06);position:relative;overflow:hidden}
        .cglow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(100,40,180,0.1) 0%,transparent 65%);pointer-events:none}
        .ch{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(48px,9vw,110px);color:#fff;letter-spacing:clamp(6px,1.5vw,20px);line-height:.95;margin-bottom:12px;position:relative}
        .cs{font-size:11px;color:#6b6880;letter-spacing:5px;margin-bottom:48px;position:relative}
        footer{border-top:1px solid rgba(255,255,255,0.06);padding:32px 48px;display:flex;align-items:center;justify-content:space-between;background:#0d0c18}
        .fl{font-family:'Syne',sans-serif;font-weight:800;font-size:15px;color:#fff;letter-spacing:7px}
        .flinks{display:flex;gap:24px}
        .flinks a{font-size:9px;color:#6b6880;text-decoration:none;letter-spacing:2px}
        .flinks a:hover{color:#fff}
        .fc{font-size:9px;color:#2e2c3e;letter-spacing:1px}
        @media(max-width:900px){nav{padding:0 20px}.wrap{padding:0 24px}.sec{padding:70px 0}.tool{grid-template-columns:1fr;gap:16px}.bcard{grid-template-columns:1fr}.vwrap{grid-template-columns:1fr}footer{flex-direction:column;gap:16px;text-align:center}#cta{padding:100px 24px}}
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
        <p className="hero-desc">Des outils pour les traders qui veulent progresser vraiment. Pas pour exister — pour servir.</p>
        <div className="hero-btns">
          <a href="#outils" className="btn-w">DECOUVRIR LES OUTILS</a>
          <a href="#vision" className="btn-o">NOTRE VISION</a>
        </div>
        <div className="hero-stats">
          <div><div className="sn">6</div><div className="sl">OUTILS</div></div>
          <div><div className="sn">8+</div><div className="sl">CLASSES D ACTIFS</div></div>
          <div><div className="sn">24/7</div><div className="sl">DISPONIBLE</div></div>
          <div><div className="sn">100%</div><div className="sl">PERSONNALISE</div></div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {['FOREX','INDICES','MATIERES PREMIERES','ACTIONS','CRYPTO','FUTURES','OPTIONS','ETF','FOREX','INDICES','MATIERES PREMIERES','ACTIONS','CRYPTO','FUTURES','OPTIONS','ETF'].map((name,i) => (
            <div className="tick" key={i}><span className="td"></span><span className="tn">{name}</span></div>
          ))}
        </div>
      </div>

      <section className="sec" id="outils">
        <div className="wrap">
          <div className="lbl">OUTILS</div>
          <h2 className="h2">Six outils.<br/>Un systeme.</h2>
          <div className="tl">
            {[
              {name:'EDGE PREP',tag:'BRIEFING PRE-SESSION',desc:'Es-tu en etat de trader ? EDGE Prep analyse ton etat mental avant la session.',price:'7.99',once:'70'},
              {name:'EDGE VALIDATOR',tag:'IA — VALIDATION DE TRADES',desc:'Ton trade respecte-t-il ton plan ? EDGE Validator analyse chaque condition sans emotion.',price:'19.99',once:'197'},
              {name:'EDGE RISK',tag:'GESTION DU RISQUE',desc:'Combien risquer ? EDGE Risk calcule ta position et adapte le risque a ta serie en cours.',price:'7.99',once:'70'},
              {name:'EDGE INDICATOR',tag:'PINE SCRIPT V6 — TRADINGVIEW',desc:'VWAPs, sessions, FVG, signaux filtres — tout sur un seul chart.',price:'4.99',once:'47'},
              {name:'EDGE JOURNAL',tag:'JOURNAL + TRACK RECORD',desc:'Note chaque trade. Identifie tes erreurs. Mesure ta vraie progression.',price:'14.99',once:'147'},
              {name:'EDGE STATS',tag:'ANALYSE DE PERFORMANCE',desc:'Win rate, R:R, biais, patterns — les donnees honnetes sur toi-meme.',price:'9.99',once:'97'},
            ].map((t,i) => (
              <div className="tool" key={i}>
                <div className="t-num">0{i+1}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-tag">{t.tag}</div>
                  <div className="t-desc">{t.desc}</div>
                </div>
                <div>
                  <div className="t-price">{t.price}€<span style={{fontSize:'12px',color:'#6b6880'}}>/mois</span></div>
                  <div className="t-sub">ou {t.once}€ achat unique</div>
                  <a href="#" className="t-link">EN SAVOIR PLUS</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bsec sec" id="bundle">
        <div className="wrap">
          <div className="lbl">BUNDLE</div>
          <h2 className="h2">Tout EDGE.<br/>Un seul prix.</h2>
          <div className="bcard" style={{marginTop:'48px'}}>
            <div className="bl">
              <div className="bpill">MEILLEURE OFFRE</div>
              <div className="btitle">EDGE<br/><span>COMPLET</span></div>
              <div className="brows">
                {['EDGE PREP','EDGE VALIDATOR','EDGE RISK','EDGE INDICATOR','EDGE JOURNAL','EDGE STATS'].map((n,i) => (
                  <div className="brow" key={i}><span className="brn">{n}</span><span className="brp">inclus</span></div>
                ))}
              </div>
            </div>
            <div className="br">
              <div style={{fontSize:'10px',color:'#6b6880',textDecoration:'line-through',marginBottom:'8px'}}>Valeur : 65.94€/mois</div>
              <div style={{fontSize:'9px',color:'#6b6880',letterSpacing:'3px',marginBottom:'4px'}}>ABONNEMENT MENSUEL</div>
              <div style={{fontFamily:'Syne',fontWeight:800,fontSize:'60px',color:'#fff',lineHeight:1}}>49.99€</div>
              <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'16px 0',fontSize:'8px',color:'#6b6880',letterSpacing:'3px'}}><span style={{flex:1,height:'1px',background:'rgba(255,255,255,0.06)'}}></span>ou<span style={{flex:1,height:'1px',background:'rgba(255,255,255,0.06)'}}></span></div>
              <div style={{fontSize:'9px',color:'#6b6880',letterSpacing:'3px',marginBottom:'4px'}}>ACHAT UNIQUE — ACCES A VIE</div>
              <div style={{fontFamily:'Syne',fontWeight:800,fontSize:'28px',color:'#fff',marginBottom:'4px'}}>497€</div>
              <div style={{fontSize:'9px',color:'#a259f7',letterSpacing:'2px',marginBottom:'24px'}}>ECONOMISE 292€ VS SEPARE</div>
              <button className="btn-w" style={{width:'100%',padding:'16px',letterSpacing:'4px'}}>PRENDRE LE BUNDLE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="vision">
        <div className="wrap">
          <div className="lbl">VISION</div>
          <div className="vwrap">
            <div>
              <div className="vq">Des outils qui <em>servent vraiment</em>.<br/>Pas crees pour exister.</div>
              <p className="vp">EDGE est ne d un constat simple : les outils qui existent sont soit trop complexes, soit trop generiques.</p>
              <p className="vp">Notre objectif n est pas de vendre des outils. C est de te donner ce dont tu as vraiment besoin pour progresser.</p>
            </div>
            <div className="pillars">
              {[
                {w:'DISCIPLINE',t:'Respecter ton plan chaque jour, sans exception, sans emotion.'},
                {w:'CLARTE',t:'Voir ce qui compte. Eliminer le bruit. Decisions claires sur donnees objectives.'},
                {w:'UTILITE',t:'Chaque outil doit servir reellement, tous les jours.'},
              ].map((p,i) => (
                <div className="pillar" key={i}>
                  <div className="pw">{p.w}</div>
                  <div className="pt">{p.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div className="lbl">FAQ</div>
          <h2 className="h2">Questions.</h2>
          <div className="fwrap">
            {[
              {q:'Pour quel niveau de trader ?',a:'Tous les niveaux. EDGE s adapte a ta strategie.'},
              {q:'Est-ce que EDGE trade a ma place ?',a:'Non. EDGE valide ou invalide TES idees selon TON plan.'},
              {q:'Abonnement ou achat unique ?',a:'L abonnement donne acces tant que tu paies. L achat unique donne un acces a vie.'},
              {q:'Sur quels marches ?',a:'Forex, indices, matieres premieres, actions, crypto, futures, options, ETF.'},
            ].map((f,i) => (
              <div className="fi" key={i} onClick={(e) => e.currentTarget.classList.toggle('open')}>
                <div className="fq">{f.q}<span className="fic">+</span></div>
                <div className="fa">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="csec">
        <div className="ccard">
          <div className="lbl" style={{justifyContent:'center'}}>ACCES ANTICIPE</div>
          <div className="ctitle">Sois notifie<br/>du lancement.</div>
          <p className="csub">Entre ton email pour recevoir un acces anticipe et une offre exclusive au lancement.</p>
          {submitted ? (
            <div className="csuccess">ENREGISTRE — ON TE CONTACTE BIENTOT</div>
          ) : (
            <div className="cform">
              <input className="cinput" type="email" placeholder="Ton email" value={email} onChange={e => setEmail(e.target.value)}/>
              <input className="cinput" type="tel" placeholder="Ton numero (optionnel)" value={phone} onChange={e => setPhone(e.target.value)}/>
              <button className="cbtn" onClick={handleSubmit} disabled={loading}>{loading ? 'ENVOI...' : 'ETRE NOTIFIE'}</button>
            </div>
          )}
        </div>
      </div>

      <section id="cta">
        <div className="cglow"></div>
        <div className="ch">EDGE</div>
        <div className="cs">DISCIPLINE - CLARTE - AVANTAGE</div>
        <div className="hero-btns">
          <a href="#bundle" className="btn-w">PRENDRE LE BUNDLE — 497€</a>
          <a href="#outils" className="btn-o">VOIR LES OUTILS</a>
        </div>
      </section>

      <footer>
        <div className="fl">EDGE</div>
        <div className="flinks">
          <a href="#">TikTok</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter/X</a>
          <a href="#">YouTube</a>
        </div>
        <div className="fc">2026 EDGE — @edge.trading</div>
      </footer>
    </>
  )
}