/* ── Oriole Sciences · Shared JS ──────────────────────────── */

/* ── Wordmark Logo ───────────────────────────────────────── */
function navLogoHTML() {
  return `<div class="wm-logo">
    <div class="wm-top">
      <span class="wm-word">ORIOLE</span>
      <div class="wm-mark"><span class="wm-bar"></span><span class="wm-bar"></span><span class="wm-bar"></span></div>
    </div>
    <div class="wm-sci-row">
      <span class="wm-rule"></span><span class="wm-sci">SCIENCES</span><span class="wm-rule"></span>
    </div>
  </div>`;
}

/* ── Nav ────────────────────────────────────────────────── */
function initNav(activePage) {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const solutionsActive = ['solutions','pillars','pcr','lab-build','revenue','assay','analytics','workflow','validation'].includes(activePage);
  const caseStudiesActive = ['insights','reference-lab','womens-health','hospital','urgent-care'].includes(activePage);
  const solutionsDropdown = `
    <div class="nav-dropdown-header">Our Programs</div>
    <a href="lab-build.html">Lab Build &amp; Optimization</a>
    <a href="revenue-cycle.html">Revenue Cycle Recovery</a>
    <a href="assay-strategy.html">Assay Strategy</a>
    <a href="data-analytics.html">Data Analytics</a>
    <a href="workflow-efficiencies.html">Workflow Efficiencies</a>
    <a href="validation-services.html">Validation Services</a>
    <div class="dropdown-divider"></div>
    <a href="defensible-pcr.html" class="dd-accent">Payer Strategy →</a>`;
  const caseStudiesDropdown = `
    <div class="nav-dropdown-header">By Setting</div>
    <a href="reference-lab.html">Reference Laboratory</a>
    <a href="womens-health.html">Women’s Health</a>
    <a href="hospital.html">Hospital</a>
    <a href="urgent-care.html">Urgent Care</a>`;

  const topLinks = [
    { href: 'index.html',   label: 'Home',         key: 'home' },
    { label: 'Solutions',   key: 'solutions', dropdown: solutionsDropdown,   href: 'solutions.html' },
    { label: 'Case Studies',key: 'insights',  dropdown: caseStudiesDropdown, href: 'insights.html' },
    { href: 'blog.html',    label: 'Insights',     key: 'blog' },
    { href: 'about.html',   label: 'About Us',     key: 'about' },
  ];

  const linkHTML = topLinks.map(l => {
    if (l.dropdown) {
      const isAct = l.key === 'solutions' ? solutionsActive : l.key === 'insights' ? caseStudiesActive : false;
      return `<div class="nav-has-dropdown${isAct ? ' dd-active' : ''}">
        <a href="${l.href}" class="nav-dropdown-trigger">${l.label} <span class="nav-caret">▾</span></a>
        <div class="nav-dropdown">${l.dropdown}</div>
      </div>`;
    }
    return `<a href="${l.href}"${l.key === activePage ? ' class="active"' : ''}>${l.label}</a>`;
  }).join('');

  nav.innerHTML = `
    <a href="index.html" class="nav-logo">${navLogoHTML()}</a>
    <div class="nav-links">${linkHTML}</div>
    <a href="about.html#contact-form" class="btn-nav">Request a Consultation</a>`;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── Footer ─────────────────────────────────────────────── */
function initFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-top">
      <div>
        <div class="wm-logo" style="color:#E8E7E3">
          <div class="wm-top"><span class="wm-word" style="font-size:15px">ORIOLE</span><div class="wm-mark"><span class="wm-bar"></span><span class="wm-bar"></span><span class="wm-bar"></span></div></div>
          <div class="wm-sci-row"><span class="wm-rule"></span><span class="wm-sci" style="color:rgba(232,231,227,0.32)">SCIENCES</span><span class="wm-rule"></span></div>
        </div>
        <p class="footer-tagline">One partner. Every decision. Built to hold up.</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Solutions</div>
        <a href="lab-build.html">Lab Build &amp; Optimization</a>
        <a href="revenue-cycle.html">Revenue Cycle Recovery</a>
        <a href="solutions.html">All Programs</a>
        <a href="defensible-pcr.html">Payer Strategy</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Company</div>
        <a href="about.html">About Us</a>
        <a href="insights.html">Case Studies</a>
        <a href="insights.html">Insights</a>
        <a href="blog.html">Blog</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Contact</div>
        <a href="about.html#contact-form">Request a Consultation</a>
        <a href="about.html#contact-form">Partnership Inquiries</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">© 2025 Oriole Sciences. All rights reserved.</div>
      <div class="footer-note">Figures subject to confirmation before publishing.</div>
    </div>`;
}

/* ── CTA Band ───────────────────────────────────────────── */
function initCTA() {
  const el = document.getElementById('cta-band');
  if (!el || el.children.length) return;
  el.style.cssText += 'overflow:hidden;position:relative;';
  el.innerHTML = `
    <div class="blob blob-gold b-lg" style="top:-120px;right:-80px;opacity:.4"></div>

    <!-- Headline on one line, buttons below -->
    <div style="margin-bottom:36px;">
      <h2 class="cta-slide-in" style="margin:0 0 24px;white-space:nowrap;opacity:0;transform:translateX(-60px);transition:opacity 0.7s cubic-bezier(0.22,1,0.36,1),transform 0.7s cubic-bezier(0.22,1,0.36,1);">
        Ready to build <em style="font-style:italic;text-shadow:0 2px 22px rgba(143,91,62,0.65),0 1px 4px rgba(0,0,0,0.22);">whats next?</em>
      </h2>
      <div class="cta-actions cta-slide-in" style="opacity:0;transform:translateX(-40px);transition:opacity 0.7s 0.18s cubic-bezier(0.22,1,0.36,1),transform 0.7s 0.18s cubic-bezier(0.22,1,0.36,1);">
        <a href="about.html#contact-form" class="btn-primary">Request a Consultation</a>
        <a href="solutions.html" class="btn-ghost">Explore Solutions \u2192</a>
      </div>
    </div>

    <!-- HPLC full-bleed canvas — absolutely pinned to section edges -->
    <div style="position:absolute;left:0;right:0;bottom:0;height:150px;pointer-events:none;">
      <canvas id="cta-line-canvas" style="display:block;width:100%;height:100%;"></canvas>
    </div>
  `;
  el.style.paddingBottom = '150px';

  // Entrance animation
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      el.querySelectorAll('.cta-slide-in').forEach(n => {
        n.style.opacity = '1';
        n.style.transform = 'translateX(0)';
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  io.observe(el);

  // HPLC Chromatogram canvas
  const canvas = document.getElementById('cta-line-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, frame = 0, animId;

  const peaks = [
    { off:  60,  amp: 0.78, sigma: 14, col: '#8f5b3e', freq: 0.011, phase: 0.0 },
    { off: 160,  amp: 0.38, sigma:  9, col: '#506c8b', freq: 0.017, phase: 1.2 },
    { off: 240,  amp: 0.90, sigma: 20, col: '#8f5b3e', freq: 0.009, phase: 2.4 },
    { off: 360,  amp: 0.52, sigma: 11, col: '#506c8b', freq: 0.021, phase: 0.8 },
    { off: 460,  amp: 0.32, sigma:  7, col: '#8f5b3e', freq: 0.014, phase: 3.1 },
    { off: 540,  amp: 0.68, sigma: 16, col: '#506c8b', freq: 0.019, phase: 1.7 },
    { off: 660,  amp: 0.85, sigma: 18, col: '#8f5b3e', freq: 0.012, phase: 2.9 },
    { off: 780,  amp: 0.44, sigma: 10, col: '#506c8b', freq: 0.016, phase: 0.5 },
  ];
  const patternW = 900;

  function resizeLine() {
    const rect = canvas.getBoundingClientRect();
    w = canvas.width  = Math.floor(rect.width)  || window.innerWidth;
    h = canvas.height = Math.floor(rect.height) || 150;
  }

  function gauss(x, mu, sigma) {
    const d = x - mu;
    return Math.exp(-(d * d) / (2 * sigma * sigma));
  }

  function drawLine() {
    ctx.clearRect(0, 0, w, h);
    frame++;

    const baseY   = h * 0.84;
    const scroll  = (frame * 0.55) % patternW;
    const breathe = 1 + 0.04 * Math.sin(frame * 0.008);

    const yArr = new Float32Array(w);
    for (let x = 0; x < w; x++) yArr[x] = baseY;

    // Each peak breathes independently — like a music visualizer
    for (let rep = -1; rep <= Math.ceil(w / patternW) + 1; rep++) {
      peaks.forEach(pk => {
        const mu = rep * patternW + pk.off - scroll;
        if (mu < -140 || mu > w + 140) return;
        // Musical envelope: multiple sine waves at different frequencies
        const liveAmp = pk.amp
          * (0.55 + 0.30 * Math.sin(frame * pk.freq + pk.phase)
                 + 0.15 * Math.sin(frame * pk.freq * 2.3 + pk.phase * 1.7));
        const liveSigma = pk.sigma * (0.80 + 0.25 * Math.sin(frame * pk.freq * 0.7 + pk.phase));
        const xMin = Math.max(0, Math.floor(mu - liveSigma * 5));
        const xMax = Math.min(w, Math.ceil(mu + liveSigma * 5));
        for (let x = xMin; x < xMax; x++) {
          yArr[x] -= gauss(x, mu, liveSigma) * liveAmp * breathe * h * 0.76;
        }
      });
    }

    // Filled area under curve
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0,   'rgba(143,91,62,0.22)');
    grad.addColorStop(0.5, 'rgba(80,108,139,0.10)');
    grad.addColorStop(1,   'rgba(143,91,62,0.02)');
    ctx.beginPath();
    ctx.moveTo(0, baseY);
    for (let x = 0; x < w; x++) ctx.lineTo(x, yArr[x]);
    ctx.lineTo(w, baseY);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Main chromatogram line — glow
    ctx.beginPath();
    ctx.moveTo(0, yArr[0]);
    for (let x = 1; x < w; x++) ctx.lineTo(x, yArr[x]);
    ctx.shadowColor = '#8f5b3e'; ctx.shadowBlur = 12;
    ctx.strokeStyle = '#8f5b3e'; ctx.globalAlpha = 0.65;
    ctx.lineWidth = 2.8; ctx.stroke();
    // bright core
    ctx.strokeStyle = 'rgba(240,224,208,0.90)'; ctx.globalAlpha = 0.88;
    ctx.lineWidth = 1.6; ctx.shadowBlur = 3; ctx.stroke();
    ctx.shadowBlur = 0; ctx.globalAlpha = 1;

    // Per-peak: vertical integration line + apex dot + baseline tick
    for (let rep = -1; rep <= Math.ceil(w / patternW) + 1; rep++) {
      peaks.forEach((pk, pi) => {
        // Musical envelope for apex position too
        const liveAmp2 = pk.amp
          * (0.55 + 0.30 * Math.sin(frame * pk.freq + pk.phase)
                 + 0.15 * Math.sin(frame * pk.freq * 2.3 + pk.phase * 1.7));
        const liveSigma2 = pk.sigma * (0.80 + 0.25 * Math.sin(frame * pk.freq * 0.7 + pk.phase));
        const mu = rep * patternW + pk.off - scroll;
        const mx = Math.round(mu);
        if (mx < 0 || mx >= w) return;
        const apexY = yArr[mx];
        const pulse = 0.5 + 0.5 * Math.sin(frame * 0.025 + pi * 1.3);

        // Vertical integration line
        ctx.beginPath(); ctx.moveTo(mx, apexY); ctx.lineTo(mx, baseY);
        ctx.setLineDash([3, 4]); ctx.strokeStyle = pk.col;
        ctx.globalAlpha = 0.30 + 0.15 * pulse; ctx.lineWidth = 1.2;
        ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;

        // Apex dot — outer glow
        ctx.beginPath(); ctx.arc(mx, apexY, 7 + pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = pk.col; ctx.globalAlpha = 0.12 * pulse; ctx.fill();
        ctx.beginPath(); ctx.arc(mx, apexY, 4 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = pk.col; ctx.globalAlpha = 0.28 * pulse; ctx.fill();
        ctx.beginPath(); ctx.arc(mx, apexY, 3, 0, Math.PI * 2);
        ctx.fillStyle = pk.col; ctx.globalAlpha = 0.90; ctx.fill();
        ctx.globalAlpha = 1;

        // Baseline tick
        ctx.beginPath(); ctx.moveTo(mx - 5, baseY); ctx.lineTo(mx + 5, baseY);
        ctx.strokeStyle = pk.col; ctx.globalAlpha = 0.45;
        ctx.lineWidth = 1.5; ctx.stroke(); ctx.globalAlpha = 1;
      });
    }

    // Baseline
    ctx.beginPath(); ctx.moveTo(0, baseY); ctx.lineTo(w, baseY);
    ctx.strokeStyle = 'rgba(143,91,62,0.22)'; ctx.lineWidth = 1; ctx.stroke();

    animId = requestAnimationFrame(drawLine);
  }

  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resizeLine(); animId = requestAnimationFrame(drawLine); }, { passive: true });
  resizeLine();
  drawLine();
}


/* ── Scroll Reveal ──────────────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Counter Animation ──────────────────────────────────── */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const t0 = performance.now();
      const dur = 1800;
      const tick = now => {
        const pct = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - pct, 3);
        el.textContent = Math.round(target * ease);
        if (pct < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ── Hero Canvas (interactive: mouse parallax + scroll) ─── */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, frame = 0, animId;
  let mx = 0.72, my = 0.50, targetMx = 0.72, targetMy = 0.50;
  let heroScrollY = 0, scrollFrac = 0;

  const rings = [
    { rRel: 0.66, spd:  0.00018, ph: 0,   n: 72, col: '#8f5b3e', lo: 0.52, hi: 0.90, dotR: 5.5 },
    { rRel: 0.45, spd: -0.00030, ph: 1.1, n: 54, col: '#3D5748', lo: 0.45, hi: 0.82, dotR: 6.0 },
    { rRel: 0.27, spd:  0.00052, ph: 0.6, n: 38, col: '#506c8b', lo: 0.42, hi: 0.78, dotR: 5.0 },
    { rRel: 0.15, spd: -0.00096, ph: 2.0, n: 22, col: '#2E3135', lo: 0.38, hi: 0.72, dotR: 4.5 },
  ];

  const ptcls = Array.from({ length: 55 }, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00011,
    vy: (Math.random() - 0.5) * 0.00011,
    r:  Math.random() * 2.6 + 0.9,
    c:  ['#8f5b3e','#4F695B','#2E3135','#506c8b'][Math.floor(Math.random() * 4)],
    op: Math.random() * 0.20 + 0.08,
  }));

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width  = Math.floor(rect.width);
    h = canvas.height = Math.floor(rect.height);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    frame++;

    // Smooth mouse lerp
    mx += (targetMx - mx) * 0.04;
    my += (targetMy - my) * 0.04;

    const base = Math.min(w, h);
    const offX = (mx - 0.5) * 90;
    const offY = (my - 0.5) * 55;
    const scrollDrift = heroScrollY * 0.065;
    const cx = w * 0.72 + offX;
    const cy = h * 0.52 + offY - scrollDrift - 10;

    // Warm glow — visible on light bg
    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 0.40);
    grd.addColorStop(0,   'rgba(143,91,62,0.08)');
    grd.addColorStop(0.5, 'rgba(79,105,91,0.04)');
    grd.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);

    // Scatter ease (0 = together, 1 = fully apart)
    const se = scrollFrac * scrollFrac;

    rings.forEach((ring, ri) => {
      // Pulse: each ring breathes in/out at a slightly different phase
      const breathe = 1 + 0.06 * Math.sin(frame * 0.0035 + ri * 1.2);
      const r = base * ring.rRel * breathe;
      // Rotation gradually freezes as you scroll
      const ang = frame * ring.spd * (1 - se * 0.96) + ring.ph;
      for (let i = 0; i < ring.n; i++) {
        const a = (i / ring.n) * Math.PI * 2 + ang;
        const ox = cx + r * Math.cos(a);
        const oy = cy + r * Math.sin(a) * 0.38;
        // Deterministic unique scatter direction per dot
        const sAng  = a + Math.sin(i * 7.3 + ri * 2.1) * 1.5;
        const sDist = base * (0.09 + Math.abs(Math.sin(i * 3.7 + ri)) * 0.12 + ri * 0.045);
        const px = ox + Math.cos(sAng) * sDist * se;
        const py = oy + Math.sin(sAng) * sDist * se;
        const pulse = 0.5 + 0.5 * Math.sin(a * 1.7 + frame * 0.006);
        const alpha = (ring.lo + (ring.hi - ring.lo) * pulse) * (1 - se * 0.58);
        const dotR  = ring.dotR * (0.7 + 0.5 * pulse) * breathe * (1 - se * 0.28);
        if (dotR < 0.2 || alpha < 0.02) continue;
        ctx.beginPath();
        ctx.arc(px, py, dotR, 0, Math.PI * 2);
        ctx.fillStyle = ring.col;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
    });

    ptcls.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = p.op;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }

  // Mouse parallax
  const hero = canvas.closest('.hero') || canvas.parentElement;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    targetMx = (e.clientX - r.left) / r.width;
    targetMy = (e.clientY - r.top)  / r.height;
  }, { passive: true });
  hero.addEventListener('mouseleave', () => {
    targetMx = 0.72; targetMy = 0.50;
  }, { passive: true });

  // Scroll: scatter effect
  window.addEventListener('scroll', () => {
    heroScrollY = window.scrollY;
    // 0 = rings intact, 1 = fully scattered (triggers at ~55% of viewport scrolled)
    scrollFrac = Math.min(1, heroScrollY / (window.innerHeight * 0.55));
  }, { passive: true });

  resize();
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    animId = requestAnimationFrame(draw);
  }, { passive: true });
  draw();
}

/* ── Rotating Hero Text ─────────────────────────────────── */
function initRotatingText() {
  const el = document.getElementById('rotating-word');
  if (!el) return;
  const words = ['Reference Labs', 'Hospitals', 'Providers', 'Clinics'];
  let i = 0;
  setInterval(() => {
    el.classList.add('fade-out');
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove('fade-out');
    }, 340);
  }, 2800);
}

/* ── Network Hero Canvas (solutions + insights pages) ──── */
function initNetworkHeroCanvas(isDark) {
  const canvas = document.getElementById('network-hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, animId, frame = 0;
  let mx = -999, my = -999;
  const NODE_COUNT = 110, CONNECT_DIST = 155, MOUSE_PUSH = 110;
  const bronzeCol = isDark ? '#b07555' : '#8f5b3e';
  const blueCol   = isDark ? '#6a8aaa' : '#506c8b';
  let nodes = [];
  function makeNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({ x: Math.random()*w, y: Math.random()*h,
        vx:(Math.random()-0.5)*0.45, vy:(Math.random()-0.5)*0.45,
        r:1.8+Math.random()*2.8, col:Math.random()>0.5?bronzeCol:blueCol,
        phase:Math.random()*Math.PI*2 });
    }
  }
  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width  = Math.floor(rect.width);
    h = canvas.height = Math.floor(rect.height) || 480;
    makeNodes();
  }
  function draw() {
    ctx.clearRect(0,0,w,h); frame++;
    nodes.forEach(function(n) {
      n.vx += (Math.random()-0.5)*0.018; n.vy += (Math.random()-0.5)*0.018;
      n.vx *= 0.982; n.vy *= 0.982;
      var spd = Math.sqrt(n.vx*n.vx+n.vy*n.vy);
      if(spd>0.9){n.vx*=0.9/spd;n.vy*=0.9/spd;}
      var dx=n.x-mx,dy=n.y-my,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<MOUSE_PUSH&&dist>1){var f=(MOUSE_PUSH-dist)/MOUSE_PUSH*0.55;n.vx+=dx/dist*f;n.vy+=dy/dist*f;}
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<0)n.x=w; if(n.x>w)n.x=0; if(n.y<0)n.y=h; if(n.y>h)n.y=0;
    });
    for(var i=0;i<nodes.length;i++){
      for(var j=i+1;j<nodes.length;j++){
        var dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d>=CONNECT_DIST)continue;
        var alpha=(1-d/CONNECT_DIST)*0.58;
        ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);
        ctx.strokeStyle=(isDark?'rgba(106,138,170,':'rgba(80,108,139,')+alpha+')';
        ctx.lineWidth=1.2;ctx.stroke();
      }
    }
    nodes.forEach(function(n){
      var pulse=0.5+0.5*Math.sin(frame*0.022+n.phase);
      var r=n.r*(0.75+0.35*pulse);
      ctx.beginPath();ctx.arc(n.x,n.y,r+4,0,Math.PI*2);
      ctx.fillStyle=n.col;ctx.globalAlpha=0.18*pulse;ctx.fill();
      ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);
      ctx.fillStyle=n.col;ctx.globalAlpha=0.82+0.18*pulse;ctx.fill();
      ctx.globalAlpha=1;
    });
    animId=requestAnimationFrame(draw);
  }
  var hero=canvas.parentElement;
  hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;},{passive:true});
  hero.addEventListener('mouseleave',function(){mx=-999;my=-999;},{passive:true});
  window.addEventListener('resize',function(){cancelAnimationFrame(animId);resize();animId=requestAnimationFrame(draw);},{passive:true});
  resize(); draw();
}

/* ── Page Hero Canvas ─────────────────────────────────────── */
function initPageHeroCanvas(colors) {
  var canvas = document.getElementById('page-hero-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w, h, frame = 0, animId;
  var mx = 0.78, my = 0.45, tmx = 0.78, tmy = 0.45;
  var rings = [
    { n:30, rRel:0.28, spd: 0.00008, col: colors[0]||'#8f5b3e', lo:0.38, hi:0.80, dr:4.0 },
    { n:20, rRel:0.18, spd:-0.00014, col: colors[1]||'#4F695B', lo:0.32, hi:0.72, dr:4.4 },
    { n:12, rRel:0.09, spd: 0.00025, col: colors[2]||'#506c8b', lo:0.28, hi:0.66, dr:3.6 },
  ];
  function resize() {
    var r = canvas.parentElement.getBoundingClientRect();
    w = canvas.width  = Math.floor(r.width);
    h = canvas.height = Math.floor(r.height || 480);
  }
  function draw() {
    ctx.clearRect(0,0,w,h); frame++;
    mx += (tmx-mx)*0.04; my += (tmy-my)*0.04;
    var base = Math.min(w,h), cx = w*mx, cy = h*my;
    rings.forEach(function(ring) {
      var r = base*ring.rRel, ang = frame*ring.spd;
      for (var i=0;i<ring.n;i++) {
        var a=(i/ring.n)*Math.PI*2+ang;
        var x=cx+r*Math.cos(a), y=cy+r*Math.sin(a)*0.60;
        var pulse=0.5+0.5*Math.sin(a*1.8+frame*0.005);
        var alpha=(ring.lo+(ring.hi-ring.lo)*pulse)*0.75;
        var dotR=ring.dr*(0.7+0.5*pulse);
        if(dotR<0.2||alpha<0.02) continue;
        ctx.beginPath(); ctx.arc(x,y,dotR,0,Math.PI*2);
        ctx.fillStyle=ring.col; ctx.globalAlpha=alpha; ctx.fill();
      }
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  var hero = canvas.closest('.page-hero')||canvas.parentElement;
  hero.addEventListener('mousemove',function(e){
    var r=hero.getBoundingClientRect();
    tmx=(e.clientX-r.left)/r.width; tmy=(e.clientY-r.top)/r.height;
  },{passive:true});
  hero.addEventListener('mouseleave',function(){tmx=0.78;tmy=0.45;},{passive:true});
  resize();
  window.addEventListener('resize',function(){cancelAnimationFrame(animId);resize();animId=requestAnimationFrame(draw);},{passive:true});
  draw();
}

/* ── Master Init ────────────────────────────────────────── */
function initSite(page) {
  initNav(page || '');
  initFooter();
  initCTA();
  initReveal();
  initCounters();
  initHeroCanvas();
  initRotatingText();
}
