const features = [
  { icon: "◎", title: "Multi-currency wallets", copy: "Hold GHS, USD, GBP, EUR, CAD, AUD and CHF together—without juggling accounts." },
  { icon: "↗", title: "Cross-border transfers", copy: "Send from Ghana to the US, UK, Europe, Canada and Australia with a clear, guided flow." },
  { icon: "⇄", title: "Transparent exchange", copy: "See the rate, fee and exact receive amount before you confirm. No last-minute surprises." },
];

const markets = [
  ["🇬🇭", "Ghana"], ["🇺🇸", "USA"], ["🇬🇧", "United Kingdom"], ["🇦🇺", "Australia"],
  ["🇨🇦", "Canada"], ["🇩🇪", "Germany"], ["🇳🇱", "Netherlands"], ["🇨🇭", "Switzerland"],
];

const steps = [
  ["01", "Choose who", "Pick a favourite or add a new receiver with their country and phone number."],
  ["02", "Know the total", "Review the live-style rate, fee and exact amount your recipient receives."],
  ["03", "Track every cedi", "Follow pending or completed transfers and share a receipt from your phone."],
];

const screens = [
  ["/screens/wallets.png", "Seven wallets. One clear view.", "Hold supported currencies and see what is available at a glance."],
  ["/screens/send.png", "Sending that feels effortless.", "Move from amount to recipient and confirmation in a few focused steps."],
  ["/screens/receive.png", "Receive locally.", "Share your payment details through Messages, WhatsApp, email or any sharing app."],
  ["/screens/activity.png", "Every transfer, accounted for.", "Filter money in and money out, with pending and completed states."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="SikaLink home">
          <img src="/logo.png" alt="" /><span>SikaLink</span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a><a href="#how">How it works</a><a href="#screens">App</a>
        </div>
        <a className="button small" href="#download">Get early access <span>↗</span></a>
      </nav>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow"><span>✦</span> Built for money that moves</div>
          <h1>Your money.<br /><em>Without borders.</em></h1>
          <p>Hold, convert, send and receive across Ghana and the world—with transparent rates and a wallet that keeps everything beautifully simple.</p>
          <div className="heroActions">
            <a className="button" href="#download">Join the waitlist <span>↗</span></a>
            <a className="textLink" href="#screens"><span className="play">▶</span> Explore the app</a>
          </div>
          <div className="trust">
            <div className="avatars"><span>KA</span><span>AB</span><span>KM</span></div>
            <p><b>Built for global Ghanaians</b><small>Fast. Clear. Secure by design.</small></p>
          </div>
        </div>
        <div className="heroVisual" aria-label="SikaLink app preview">
          <div className="orbit one" /><div className="orbit two" />
          <div className="rateChip"><span>🇺🇸</span><div><small>Today’s rate</small><b>1 USD = 15.50 GHS</b></div><strong>+0.12%</strong></div>
          <div className="phone mainPhone"><img src="/screens/home.png" alt="SikaLink mobile wallet home screen" /></div>
          <div className="balanceChip"><span>↓</span><div><small>Money received</small><b>+$450.00 USD</b></div></div>
        </div>
      </section>

      <section className="marketBand">
        <div className="shell markets">
          <p>Moving money between</p>
          {markets.map(([flag, name]) => <div className="market" key={name}><span>{flag}</span><small>{name}</small></div>)}
        </div>
      </section>

      <section id="features" className="section shell">
        <div className="sectionIntro">
          <div><span className="kicker">WHY SIKALINK</span><h2>One wallet.<br /><em>A world of possibility.</em></h2></div>
          <p>SikaLink brings your international money into one thoughtfully designed home—so every send, receive and exchange feels clear.</p>
        </div>
        <div className="featureGrid">
          {features.map((item, index) => <article className={index === 1 ? "feature featured" : "feature"} key={item.title}><span className="featureIcon">{item.icon}</span><h3>{item.title}</h3><p>{item.copy}</p><a href="#screens">Learn more <span>→</span></a></article>)}
        </div>
      </section>

      <section id="how" className="how">
        <div className="shell howGrid">
          <div className="howVisual">
            <div className="phone sidePhone"><img src="/screens/send.png" alt="SikaLink send money screen" /></div>
            <div className="secureCard"><span>✓</span><div><b>Protected transfers</b><small>Identity & compliance checks</small></div></div>
          </div>
          <div className="howCopy">
            <span className="kicker light">HOW IT WORKS</span>
            <h2>From here to there,<br /><em>in three steps.</em></h2>
            <p className="lead">A deliberate flow that shows exactly what happens at every stage.</p>
            <div className="steps">{steps.map(([number,title,copy])=><div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="screens" className="section shell product">
        <div className="productHead"><span className="kicker">DESIGNED AROUND YOU</span><h2>Everything you need.<br /><em>Nothing you don’t.</em></h2><p>Explore the real SikaLink experience—from your first sign-in to a successful cross-border transfer.</p></div>
        <div className="screenGrid">
          {screens.map(([image,title,copy], index)=><article className="screenCard" key={title}><div className={`screenShot shot${index}`}><img src={image} alt={`${title} SikaLink screen`} /></div><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="security shell">
        <div><span className="kicker">SECURITY FIRST</span><h2>Trust is the<br /><em>real currency.</em></h2></div>
        <p>SikaLink is designed around identity verification, transaction monitoring, clear status updates and responsible payment infrastructure.</p>
        <div className="securityPoints"><span>✓ Identity verification</span><span>✓ Transfer monitoring</span><span>✓ Transparent status</span></div>
      </section>

      <section id="download" className="cta">
        <div className="ctaOrb" />
        <img className="ctaPhone left" src="/screens/notifications.png" alt="" />
        <div className="ctaCopy"><span className="kicker light">COMING SOON</span><h2>Ready to move<br /><em>without borders?</em></h2><p>Join the SikaLink early-access list and be first to know when we launch.</p><form><label className="srOnly" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" required/><button type="submit">Notify me <span>↗</span></button></form><small>No spam. Just meaningful launch updates.</small></div>
        <img className="ctaPhone right" src="/screens/profile.png" alt="" />
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><img src="/logo.png" alt="" /><span>SikaLink</span></a>
        <p>Money without borders.</p>
        <div><a href="#features">Features</a><a href="#how">How it works</a><a href="#download">Early access</a></div>
        <small>© 2026 SikaLink. All rights reserved.</small>
      </footer>
    </main>
  );
}
