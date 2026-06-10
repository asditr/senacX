# senacX

/* =============================================
   NEW MEMBER — style.css  (redesign completo)
   ============================================= */

/* --- RESET & BASE --- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

/* --- TOKENS --- */
:root {
  --bg:           #F8FAFF;
  --bg-card:      #FFFFFF;
  --bg-subtle:    #EEF2FF;
  --surface:      #FFFFFF;
  --border:       #E2E8F0;
  --border-light: rgba(226,232,240,.6);

  --text-primary:   #0F172A;
  --text-secondary: #475569;
  --text-muted:     #94A3B8;

  --blue:       #2563EB;
  --blue-light: #3B82F6;
  --blue-bg:    rgba(37,99,235,.08);
  --green:      #10B981;
  --green-bg:   rgba(16,185,129,.08);
  --purple:     #8B5CF6;
  --purple-bg:  rgba(139,92,246,.08);
  --orange:     #F59E0B;
  --orange-bg:  rgba(245,158,11,.08);

  --navy:       #0F1B2D;
  --navy-mid:   #1E2D45;

  --radius-sm: 8px;
  --radius:    14px;
  --radius-lg: 22px;
  --radius-xl: 32px;

  --shadow-sm: 0 1px 3px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04);
  --shadow:    0 4px 16px rgba(15,23,42,.08), 0 2px 4px rgba(15,23,42,.04);
  --shadow-lg: 0 20px 60px rgba(15,23,42,.12), 0 8px 24px rgba(15,23,42,.06);
  --shadow-card: 0 0 0 1px rgba(15,23,42,.05), 0 8px 32px rgba(15,23,42,.08);

  --transition: 0.2s cubic-bezier(0.4,0,0.2,1);
  --transition-slow: 0.4s cubic-bezier(0.4,0,0.2,1);

  --font-display: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;
}

/* --- DARK MODE --- */
body.dark {
  --bg:           #0B1120;
  --bg-card:      #111827;
  --bg-subtle:    #1E293B;
  --surface:      #1E293B;
  --border:       #1E293B;
  --border-light: rgba(30,41,59,.8);

  --text-primary:   #F1F5F9;
  --text-secondary: #94A3B8;
  --text-muted:     #475569;

  --blue-bg:   rgba(37,99,235,.15);
  --green-bg:  rgba(16,185,129,.12);
  --purple-bg: rgba(139,92,246,.12);
  --orange-bg: rgba(245,158,11,.12);

  --shadow-card: 0 0 0 1px rgba(255,255,255,.05), 0 8px 32px rgba(0,0,0,.3);
}

/* --- BODY --- */
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text-primary);
  line-height: 1.6;
  min-height: 100vh;
  transition: background var(--transition-slow), color var(--transition-slow);
  -webkit-font-smoothing: antialiased;
}

/* --- HEADER --- */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 1.5rem;
  background: transparent;
  transition: background var(--transition), box-shadow var(--transition), backdrop-filter var(--transition);
}
.header.scrolled {
  background: rgba(248,250,255,.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--border-light);
}
body.dark .header.scrolled {
  background: rgba(11,17,32,.85);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* --- LOGO --- */
.logo {
  display: flex;
  align-items: center;
  gap: .6rem;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-icon {
  width: 36px; height: 36px;
  background: var(--blue);
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  font-size: 18px;
  transition: transform var(--transition);
}
.logo:hover .logo-icon { transform: scale(1.08) rotate(-4deg); }
.logo-text {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--text-primary);
  letter-spacing: -.01em;
}
.logo-text strong { color: var(--blue); font-weight: 700; }

/* --- NAV --- */
.nav {
  display: flex;
  align-items: center;
  gap: .25rem;
  margin-left: auto;
}
.nav-link {
  font-size: .875rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: .45rem .75rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
  display: flex; align-items: center; gap: .35rem;
}
.nav-link:hover, .nav-link.active {
  color: var(--blue);
  background: var(--blue-bg);
}
.nav-link--profile { font-weight: 600; }

/* --- HEADER ACTIONS --- */
.header-actions { display: flex; align-items: center; gap: .5rem; margin-left: .5rem; }
.theme-btn, .menu-btn {
  width: 38px; height: 38px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 18px;
  display: flex; align-items: center; justify-content: center;
  transition: color var(--transition), background var(--transition);
}
.theme-btn:hover, .menu-btn:hover {
  color: var(--text-primary);
  background: var(--bg-subtle);
}
.menu-btn { display: none; }

/* --- MOBILE NAV --- */
.mobile-nav {
  display: none;
  position: fixed;
  top: 68px; left: 0; right: 0;
  z-index: 99;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  padding: .75rem 1.5rem 1rem;
  flex-direction: column;
  gap: .25rem;
  box-shadow: var(--shadow);
}
.mobile-nav.open { display: flex; }
.mobile-nav-link {
  font-size: .9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: .6rem .75rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}
.mobile-nav-link:hover { color: var(--blue); background: var(--blue-bg); }

/* --- HERO --- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--navy);
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* Animated orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: .35;
  animation: orbFloat 8s ease-in-out infinite;
}
.hero-orb--1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, #2563EB, transparent 70%);
  top: -150px; left: -100px;
  animation-delay: 0s;
}
.hero-orb--2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #10B981, transparent 70%);
  bottom: -100px; right: 10%;
  animation-delay: -3s;
  opacity: .2;
}
.hero-orb--3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #8B5CF6, transparent 70%);
  top: 40%; left: 40%;
  animation-delay: -5s;
  opacity: .15;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.04); }
  66%       { transform: translate(-20px, 15px) scale(.97); }
}

/* Grid overlay */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Hero content layout */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 1.5rem 80px;
  display: grid;
  grid-template-columns: 1fr 420px;
  align-items: center;
  gap: 4rem;
  width: 100%;
}

/* Hero text */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: rgba(37,99,235,.2);
  border: 1px solid rgba(37,99,235,.35);
  color: #93C5FD;
  font-size: .8125rem;
  font-weight: 500;
  padding: .4rem .9rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 5vw, 4.25rem);
  font-weight: 800;
  line-height: 1.1;
  color: #F1F5F9;
  letter-spacing: -.03em;
  margin-bottom: 1.25rem;
}
.hero-title--accent {
  background: linear-gradient(135deg, #60A5FA, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.0625rem;
  color: #94A3B8;
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.stat { display: flex; flex-direction: column; gap: .1rem; }
.stat-num {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: #F1F5F9;
  line-height: 1;
}
.stat-label {
  font-size: .75rem;
  color: #64748B;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,.1);
}

/* --- LOGIN CARD --- */
.login-card {
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: var(--radius-xl);
  padding: 2rem;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 32px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.06);
}

.login-card-header { margin-bottom: 1.75rem; }
.login-card-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: #F1F5F9;
  margin-bottom: .35rem;
}
.login-card-sub {
  font-size: .875rem;
  color: #64748B;
}

.login-card-body { display: flex; flex-direction: column; gap: 1rem; }

.input-group { display: flex; flex-direction: column; gap: .45rem; }
.input-label {
  font-size: .8125rem;
  font-weight: 500;
  color: #94A3B8;
  letter-spacing: .01em;
}
.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.input-icon {
  position: absolute;
  left: .875rem;
  color: #475569;
  font-size: 16px;
  pointer-events: none;
}
.input-field {
  width: 100%;
  padding: .75rem .875rem .75rem 2.5rem;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: var(--radius-sm);
  color: #F1F5F9;
  font-family: var(--font-body);
  font-size: .9375rem;
  outline: none;
  transition: border-color var(--transition), background var(--transition), box-shadow var(--transition);
}
.input-field::placeholder { color: #475569; }
.input-field:focus {
  border-color: var(--blue);
  background: rgba(37,99,235,.07);
  box-shadow: 0 0 0 3px rgba(37,99,235,.15);
}

/* --- BUTTONS --- */
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: .75rem 1.25rem;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: .9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
  letter-spacing: -.01em;
}
.login-btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .6rem;
  margin-top: .25rem;
}
.btn--primary {
  background: var(--blue);
  color: #fff;
  box-shadow: 0 4px 14px rgba(37,99,235,.35);
}
.btn--primary:hover {
  background: #1D4ED8;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(37,99,235,.45);
}
.btn--outline {
  background: transparent;
  color: #93C5FD;
  border: 1px solid rgba(147,197,253,.25);
}
.btn--outline:hover {
  background: rgba(147,197,253,.08);
  border-color: rgba(147,197,253,.45);
  transform: translateY(-1px);
}
.btn--google {
  background: #fff;
  color: #1F2937;
  border: 1px solid #E5E7EB;
  width: 100%;
  font-size: .875rem;
  padding: .7rem 1rem;
}
.btn--google:hover {
  background: #F9FAFB;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
}
.btn--ghost {
  background: transparent;
  color: #64748B;
  border: 1px solid rgba(255,255,255,.08);
  width: 100%;
  font-size: .875rem;
}
.btn--ghost:hover {
  color: #F87171;
  border-color: rgba(248,113,113,.3);
  background: rgba(248,113,113,.06);
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  gap: .75rem;
  color: #475569;
  font-size: .8125rem;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255,255,255,.07);
}

/* --- FEATURES SECTION --- */
.features {
  padding: 100px 1.5rem;
  background: var(--bg);
}
.features-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-label {
  font-size: .8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--blue);
  margin-bottom: .75rem;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -.025em;
  margin-bottom: 3rem;
  max-width: 480px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: .9rem;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
  box-shadow: var(--shadow-sm);
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.feature-icon {
  width: 48px; height: 48px;
  border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.feature-icon--blue   { background: var(--blue-bg);   color: var(--blue); }
.feature-icon--green  { background: var(--green-bg);  color: var(--green); }
.feature-icon--purple { background: var(--purple-bg); color: var(--purple); }
.feature-icon--orange { background: var(--orange-bg); color: var(--orange); }

.feature-title {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-primary);
}
.feature-desc {
  font-size: .875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
}
.feature-link {
  font-size: .8125rem;
  font-weight: 600;
  color: var(--blue);
  display: flex;
  align-items: center;
  gap: .3rem;
  margin-top: .25rem;
  transition: gap var(--transition);
}
.feature-card:hover .feature-link { gap: .55rem; }

/* --- FOOTER --- */
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 2rem 1.5rem;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer-copy {
  font-size: .8125rem;
  color: var(--text-muted);
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 860px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 100px 1.25rem 60px;
  }
  .hero-desc { margin: 0 auto 2rem; }
  .hero-stats { justify-content: center; }
  .hero-badge { justify-content: center; }
  .hero-title { font-size: clamp(2.25rem, 7vw, 3.25rem); }
  .login-card { max-width: 420px; margin: 0 auto; }
  .nav { display: none; }
  .menu-btn { display: flex; }
}

@media (max-width: 600px) {
  .features-grid { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; align-items: flex-start; }
  .hero-stats { gap: 1rem; }
}

/* --- REDUCED MOTION --- */
@media (prefers-reduced-motion: reduce) {
  .hero-orb { animation: none; }
  * { transition-duration: 0.01ms !important; }
}
