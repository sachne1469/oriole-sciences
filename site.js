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
`;
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
        <a href="assay-strategy.html">Assay Strategy</a>
        <a href="data-analytics.html">Data Analytics</a>
        <a href="workflow-efficiencies.html">Workflow Efficiencies</a>
        <a href="validation-services.html">Validation Services</a>
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
  let w, h, animId;
  let mx = 0.68, my = 0.50, targetMx = 0.68, targetMy = 0.50;

  const COLORS = ['#8f5b3e','#506c8b','#4F695B','#6a8aaa','#b07555','#6a8878'];
  const NUM = 72;
  const CONNECT_DIST = 150;
  let nodes = [];

  function createNodes() {
    nodes = Array.from({ length: NUM }, () => ({
      x:  Math.random() * w,
      y:  Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:  Math.random() * 3.5 + 1.5,
      col: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
      ps:   0.018 + Math.random() * 0.022,
    }));
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width  = Math.floor(rect.width);
    h = canvas.height = Math.floor(rect.height);
    createNodes();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    mx += (targetMx - mx) * 0.04;
    my += (targetMy - my) * 0.04;
    const mxPx = mx * w, myPx = my * h;

    nodes.forEach(n => {
      n.pulse += n.ps;
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0) { n.x = 0; n.vx *= -1; }
      if (n.x > w) { n.x = w; n.vx *= -1; }
      if (n.y < 0) { n.y = 0; n.vy *= -1; }
      if (n.y > h) { n.y = h; n.vy *= -1; }
      const dx = n.x - mxPx, dy = n.y - myPx;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 140 && d > 0) { const f = (140-d)/140*0.28; n.vx += dx/d*f; n.vy += dy/d*f; }
      const spd = Math.sqrt(n.vx*n.vx + n.vy*n.vy);
      if (spd > 1.1) { n.vx *= 0.94; n.vy *= 0.94; }
    });

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i+1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x, dy = nodes[j].y - nodes[i].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < CONNECT_DIST) {
          const a = (1 - d/CONNECT_DIST) * 0.28;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = nodes[i].col;
          ctx.globalAlpha = a;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // Nodes
    nodes.forEach(n => {
      const pr = n.r + Math.sin(n.pulse) * 0.9;
      // soft glow
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 4);
      g.addColorStop(0, n.col + '33');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.globalAlpha = 0.7;
      ctx.beginPath(); ctx.arc(n.x, n.y, pr*4, 0, Math.PI*2); ctx.fill();
      // core
      ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI*2);
      ctx.fillStyle = n.col; ctx.globalAlpha = 0.88; ctx.fill();
    });
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }

  const hero = canvas.closest('.hero') || canvas.parentElement;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    targetMx = (e.clientX - r.left) / r.width;
    targetMy = (e.clientY - r.top)  / r.height;
  }, { passive: true });
  hero.addEventListener('mouseleave', () => { targetMx = 0.68; targetMy = 0.50; }, { passive: true });

  resize();
  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); animId = requestAnimationFrame(draw); }, { passive: true });
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

/* ── Section Dividers ───────────────────────────────────── */
/* Uses clip-path on the preceding section so the full bg treatment
   (canvas, gradients, blobs) clips at the diagonal edge, not just
   a plain solid-colour triangle. */
function initSectionDividers() {
  var SLANT = 70;
  function getLum(hex) {
    if (!hex || hex.length < 7) return 0;
    return 0.2126 * parseInt(hex.slice(1,3),16)/255
          +0.7152 * parseInt(hex.slice(3,5),16)/255
          +0.0722 * parseInt(hex.slice(5,7),16)/255;
  }
  function rgbToHex(rgb) {
    var m = rgb && rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    if (!m) return null;
    if (m[4] !== undefined && parseFloat(m[4]) < 0.05) return null;
    return '#' + [m[1],m[2],m[3]].map(function(v){
      return ('0'+parseInt(v).toString(16)).slice(-2);
    }).join('').toLowerCase();
  }
  var els = Array.from(document.body.children).filter(function(el){
    if (el.id === 'site-nav' || el.id === 'site-footer') return false;
    if (el.classList.contains('site-nav') || el.classList.contains('site-footer')) return false;
    if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return false;
    if (el.classList.contains('sect-divider')) return false;
    return true;
  });
  var dir = 0, zBase = els.length + 4;
  for (var i = 0; i < els.length - 1; i++) {
    var a = els[i], b = els[i+1];
    if (b.id === 'site-footer' || b.classList.contains('site-footer')) continue;
    var cA = rgbToHex(getComputedStyle(a).backgroundColor);
    var cB = rgbToHex(getComputedStyle(b).backgroundColor);
    if (!cA || !cB || cA === cB) continue;
    // Only cut where there's a visible contrast difference
    if (Math.abs(getLum(cA) - getLum(cB)) < 0.12) continue;
    // Clip section A so its own bg treatment (canvas, gradient, blobs)
    // terminates at the diagonal rather than a flat rectangle
    var clip = dir % 2 === 0
      ? 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - '+SLANT+'px))'
      : 'polygon(0 0, 100% 0, 100% calc(100% - '+SLANT+'px), 0 100%)';
    var pb = parseInt(getComputedStyle(a).paddingBottom) || 0;
    a.style.paddingBottom = (pb + SLANT) + 'px';
    a.style.clipPath = clip;
    a.style.marginBottom = '-' + SLANT + 'px';
    if (!a.style.position || a.style.position === 'static') a.style.position = 'relative';
    a.style.zIndex = zBase - i;
    if (!b.style.position || b.style.position === 'static') b.style.position = 'relative';
    if (!b.dataset.zSet) { b.style.zIndex = zBase - i - 1; b.dataset.zSet = '1'; }
    dir++;
  }
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
  initSectionDividers();
}

/* ── Interactive Proforma Waterfall ─────────────────────── */
window.initPFWaterfall = function(cfg) {
  var canvas = document.getElementById(cfg.canvasId || 'pf-waterfall');
  if (!canvas) return;
  var c = canvas.getContext('2d');
  var tooltip = document.getElementById('pf-tooltip');
  var yearsData = cfg.bars;
  var kpiData = cfg.kpi;
  var ACCENT = cfg.accent, ACCENT_DK = cfg.accentDk, ACCENT_GLOW = cfg.accentGlow;
  var EXP_COLORS = ['rgba(200,80,65,0.82)','rgba(178,95,50,0.78)','rgba(158,110,42,0.75)','rgba(138,122,38,0.70)','rgba(118,132,48,0.68)'];
  var curYr = cfg.startYear || 'total';
  var fromBars = null, animT = 1, rafId = null;
  var prevKPI = {rev:0,exp:0,net:0,margin:0};
  var W, H;
  var fmt = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
  function fmtM(v){return v>=1e6?'$'+(v/1e6).toFixed(1)+'M':'$'+(v/1e3).toFixed(0)+'K';}
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}

  function resize(){
    var dpr=window.devicePixelRatio||1;
    var rect=canvas.parentElement.getBoundingClientRect();
    canvas.width=Math.round(rect.width*dpr);
    canvas.height=Math.round(400*dpr);
    canvas.style.width=rect.width+'px';
    canvas.style.height='400px';
    W=canvas.width; H=canvas.height;
  }

  function getBars(yr){
    var d=yearsData[yr];
    return [
      {label:'Gross\nRevenue',lo:0,hi:d.gross,type:'start',amt:d.gross},
      {label:'Uncollected',lo:d.revenue,hi:d.gross,type:'neg',amt:d.uncollected},
      {label:'Net\nRevenue',lo:0,hi:d.revenue,type:'sub'},
      {label:'Operating\nCosts',lo:d.netIncome,hi:d.revenue,type:'costs',amt:d.costs,bd:d.costsBreakdown},
      {label:'Net Income',lo:0,hi:d.netIncome,type:'total',amt:d.netIncome},
    ];
  }

  function rTop(cx,x,y,bw,bh,r){
    r=Math.min(r,bw/2,Math.max(bh/2,0.1));
    cx.beginPath();cx.moveTo(x+r,y);cx.lineTo(x+bw-r,y);cx.quadraticCurveTo(x+bw,y,x+bw,y+r);
    cx.lineTo(x+bw,y+bh);cx.lineTo(x,y+bh);cx.lineTo(x,y+r);cx.quadraticCurveTo(x,y,x+r,y);
    cx.closePath();cx.fill();
  }

  function draw(){
    c.clearRect(0,0,W,H);
    var dpr=window.devicePixelRatio||1;
    c.save();c.scale(dpr,dpr);
    var rW=W/dpr,rH=H/dpr;
    var bars=getBars(curYr),fb=fromBars||bars;
    var et=ease(Math.min(animT,1));
    var maxV=bars[0].hi,fMax=fb[0].hi,lMax=fMax+(maxV-fMax)*et;
    var PT=52,PB=64,PL=56,PR=20,GAP=10;
    var n=bars.length,cW=rW-PL-PR,cH=rH-PT-PB;
    var bW=Math.floor((cW-GAP*(n-1))/n);

    // Y-axis grid
    [.25,.5,.75,1].forEach(function(f){
      var gy=PT+cH*(1-f);
      c.beginPath();c.moveTo(PL,gy);c.lineTo(rW-PR,gy);
      c.strokeStyle='rgba(232,231,227,0.04)';c.lineWidth=1;c.stroke();
      c.fillStyle='rgba(232,231,227,0.14)';c.font='10px DM Sans,sans-serif';c.textAlign='right';
      c.fillText(fmtM(lMax*f),PL-5,gy+3);
    });

    bars.forEach(function(b,i){
      var fb2=fb[i]||b;
      var lo=(fb2.lo||0)+((b.lo||0)-(fb2.lo||0))*et;
      var hi=(fb2.hi||0)+((b.hi||0)-(fb2.hi||0))*et;
      var x=PL+i*(bW+GAP);
      var yT=PT+cH*(1-hi/lMax),yB=PT+cH*(1-lo/lMax);
      var bh=Math.max(0,yB-yT);

      if(bh<0.5){
        if(i<n-1){var nx0=PL+(i+1)*(bW+GAP);c.strokeStyle='rgba(232,231,227,0.07)';c.lineWidth=1;c.setLineDash([4,5]);c.beginPath();c.moveTo(x+bW,yB);c.lineTo(nx0,yB);c.stroke();c.setLineDash([]);}
        c.fillStyle='rgba(232,231,227,0.18)';c.font='10px DM Sans,sans-serif';c.textAlign='center';
        b.label.split('\n').forEach(function(l,li){c.fillText(l,x+bW/2,rH-PB+16+li*13);});
        return;
      }

      // Glow for net income
      if(b.type==='total'){
        var gl=c.createRadialGradient(x+bW/2,yT+bh*.3,bW*.04,x+bW/2,yT+bh*.3,bW*2.4);
        gl.addColorStop(0,ACCENT_GLOW);gl.addColorStop(1,'transparent');
        c.fillStyle=gl;c.globalAlpha=1;c.fillRect(x-bW*.5,yT-16,bW*2,bh+32);
      }

      // Draw bar
      if(b.type==='costs'&&b.bd&&b.bd.length){
        // Stacked segments
        var runY=yB;
        b.bd.forEach(function(seg,si){
          var fdSeg=(fb2.bd&&fb2.bd[si])?fb2.bd[si].amt:seg.amt;
          var sAmt=fdSeg+(seg.amt-fdSeg)*et;
          var segH=bh*(sAmt/(b.amt||1));
          runY-=segH;
          c.fillStyle=EXP_COLORS[si%EXP_COLORS.length];c.globalAlpha=0.88;
          if(si===b.bd.length-1){rTop(c,x,runY,bW,segH,4);}
          else{c.fillRect(x,runY,bW,segH+1);}
        });
        c.globalAlpha=1;
        // Thin divider lines between segments
        var dY=yB;
        b.bd.forEach(function(seg,si){
          if(si===0)return;
          var fdSeg=(fb2.bd&&fb2.bd[si-1])?fb2.bd[si-1].amt:seg.amt;
          var sAmt2=fdSeg+(b.bd[si-1].amt-fdSeg)*et;
          dY-=bh*(sAmt2/(b.amt||1));
          c.strokeStyle='rgba(18,21,26,0.4)';c.lineWidth=1;c.setLineDash([]);
          c.beginPath();c.moveTo(x,dY);c.lineTo(x+bW,dY);c.stroke();
        });
      } else if(b.type==='start'){
        var gS=c.createLinearGradient(x,yT,x,yB);gS.addColorStop(0,ACCENT);gS.addColorStop(1,ACCENT_DK);
        c.fillStyle=gS;c.globalAlpha=0.50;rTop(c,x,yT,bW,bh,6);
      } else if(b.type==='neg'){
        c.fillStyle='rgba(193,60,60,1)';c.globalAlpha=0.40;c.fillRect(x,yT,bW,bh);
      } else if(b.type==='sub'){
        c.fillStyle='rgba(232,231,227,1)';c.globalAlpha=0.07;c.fillRect(x,yT,bW,bh);
      } else {
        var gT=c.createLinearGradient(x,yT,x,yB);gT.addColorStop(0,ACCENT);gT.addColorStop(1,ACCENT_DK);
        c.fillStyle=gT;c.globalAlpha=0.96;rTop(c,x,yT,bW,bh,6);
      }
      c.globalAlpha=1;

      // Connector
      if(i<n-1){
        var nx=PL+(i+1)*(bW+GAP),cy2=b.type==='neg'?yB:yT;
        c.strokeStyle='rgba(232,231,227,0.1)';c.lineWidth=1;c.setLineDash([4,5]);
        c.beginPath();c.moveTo(x+bW,cy2);c.lineTo(nx,cy2);c.stroke();c.setLineDash([]);
      }

      // Value above bar — BIG
      var av=b.amt!==undefined?b.amt:Math.abs(b.hi-b.lo);
      if(bh>8&&av>100){
        var fs=b.type==='total'?22:b.type==='start'?20:b.type==='neg'?13:16;
        c.fillStyle=b.type==='neg'?'rgba(220,100,100,0.75)':b.type==='total'?'rgba(232,231,227,1)':'rgba(232,231,227,0.6)';
        c.font='bold '+fs+'px DM Sans,sans-serif';c.textAlign='center';
        c.fillText(fmtM(av),x+bW/2,yT-10);
      }

      // Costs: % of revenue label
      if(b.type==='costs'&&bh>6){
        var pct2=((b.amt/bars[0].hi)*100).toFixed(0);
        c.fillStyle='rgba(220,100,100,0.55)';c.font='10px DM Sans,sans-serif';c.textAlign='center';
        c.fillText(pct2+'% of revenue',x+bW/2,yT-26);
      }

      // Net Income margin badge
      if(b.type==='total'&&bh>40){
        var mg=((bars[4].hi/Math.max(bars[2].hi,1))*100).toFixed(0)+'%';
        c.fillStyle='rgba(232,231,227,0.1)';
        c.beginPath();var bx2=x+bW/2,by2=yT+22;
        c.moveTo(bx2-28+5,by2);c.lineTo(bx2+28-5,by2);c.quadraticCurveTo(bx2+28,by2,bx2+28,by2+5);
        c.lineTo(bx2+28,by2+18-5);c.quadraticCurveTo(bx2+28,by2+18,bx2+28-5,by2+18);
        c.lineTo(bx2-28+5,by2+18);c.quadraticCurveTo(bx2-28,by2+18,bx2-28,by2+18-5);
        c.lineTo(bx2-28,by2+5);c.quadraticCurveTo(bx2-28,by2,bx2-28+5,by2);
        c.closePath();c.fill();
        c.fillStyle='rgba(232,231,227,0.75)';c.font='bold 10px DM Sans,sans-serif';c.textAlign='center';
        c.fillText('MARGIN '+mg,bx2,by2+12);
      }

      // Bar label below
      var lc=b.type==='total'?'rgba(232,231,227,0.7)':b.type==='costs'?'rgba(220,100,100,0.55)':b.type==='sub'?'rgba(232,231,227,0.45)':'rgba(232,231,227,0.28)';
      c.fillStyle=lc;
      c.font=(b.type==='total'?'bold ':'')+'10px DM Sans,sans-serif';c.textAlign='center';
      b.label.split('\n').forEach(function(l,li){c.fillText(l,x+bW/2,rH-PB+16+li*13);});
    });
    c.restore();
  }

  // Tooltip: hover over bars
  canvas.addEventListener('mousemove',function(e){
    if(!tooltip)return;
    var rect=canvas.getBoundingClientRect();
    var dpr=window.devicePixelRatio||1;
    var scX=(canvas.width/dpr)/rect.width;
    var mx=(e.clientX-rect.left)*scX,my=(e.clientY-rect.top)*scX;
    var bars=getBars(curYr),maxV=bars[0].hi;
    var PT=52,PB=64,PL=56,PR=20,GAP=10;
    var n=bars.length,rW=canvas.width/dpr,cW=rW-PL-PR,cH=400-PT-PB;
    var bW=Math.floor((cW-GAP*(n-1))/n);
    var hit=null;
    bars.forEach(function(b,i){
      var x=PL+i*(bW+GAP),yT=PT+cH*(1-b.hi/maxV),yB=PT+cH*(1-b.lo/maxV);
      if(mx>=x&&mx<=x+bW&&my>=yT-4&&my<=yB+4&&b.hi>b.lo)hit=b;
    });
    if(hit){
      var av=hit.amt!==undefined?hit.amt:Math.abs(hit.hi-hit.lo);
      var lines='<strong>'+hit.label.replace('\n',' ')+'</strong><br>'+fmt.format(av);
      if(hit.type==='costs'&&hit.bd){
        lines+='<br><span style="opacity:.45;font-size:11px">';
        hit.bd.forEach(function(s){lines+=s.label+': '+fmtM(s.amt)+'<br>';});
        lines+='</span>';
      } else {
        var pct=((Math.abs(hit.hi-hit.lo)/maxV)*100).toFixed(1)+'% of gross';
        if(hit.type!=='sub')lines+='<br><span style="opacity:.45">'+pct+'</span>';
      }
      tooltip.innerHTML=lines;
      tooltip.style.opacity='1';
      tooltip.style.left=Math.min(e.clientX-rect.left,rect.width-210)+'px';
      tooltip.style.top=Math.max(4,e.clientY-rect.top-80)+'px';
    } else {tooltip.style.opacity='0';}
  });
  canvas.addEventListener('mouseleave',function(){if(tooltip)tooltip.style.opacity='0';});

  function countTo(el,from,to,fmt2,dur){
    if(!el||dur===0){if(el)el.textContent=fmt2(to);return;}
    var t0=null;
    (function tick(now){
      if(!t0)t0=now;var p=Math.min((now-t0)/dur,1),e2=1-Math.pow(1-p,3);
      el.textContent=fmt2(from+(to-from)*e2);
      if(p<1)requestAnimationFrame(tick);
    })(performance.now());
  }

  function updateKPIs(yr,animate){
    var d=kpiData[yr],dur=animate?700:0;
    countTo(document.getElementById('kpi-rev'),prevKPI.rev,d.rev,function(v){return fmt.format(v);},dur);
    countTo(document.getElementById('kpi-exp'),prevKPI.exp,d.exp,function(v){return '('+fmt.format(v)+')';},dur);
    countTo(document.getElementById('pf-net-num'),prevKPI.net,d.net,function(v){return fmt.format(v);},dur);
    countTo(document.getElementById('kpi-margin'),prevKPI.margin,d.margin,function(v){return v.toFixed(1)+'%';},dur);
    var el=document.getElementById('pf-net-ctx');if(el)el.textContent=d.ctx;
    var tbl=document.getElementById(cfg.tableId||'pf-table');if(tbl)tbl.setAttribute('data-active',yr);
    prevKPI={rev:d.rev,exp:d.exp,net:d.net,margin:d.margin};
  }

  function switchYear(yr){
    fromBars=getBars(curYr);curYr=yr;animT=0;cancelAnimationFrame(rafId);
    document.querySelectorAll('.pf-year-tab').forEach(function(b){b.classList.remove('active');});
    var tab=document.querySelector('.pf-year-tab[data-year="'+yr+'"]');if(tab)tab.classList.add('active');
    updateKPIs(yr,true);
    (function loop(){draw();animT=Math.min(1,animT+0.02);if(animT<1)rafId=requestAnimationFrame(loop);else draw();})();
  }

  document.querySelectorAll('.pf-year-tab').forEach(function(btn){
    btn.addEventListener('click',function(){switchYear(btn.getAttribute('data-year'));});
  });

  var detBtn=document.getElementById('pf-detail-btn');
  var detWrap=document.getElementById('pf-detail-wrap');
  if(detBtn&&detWrap){
    detBtn.addEventListener('click',function(){
      var open=detWrap.style.display!=='none';
      detWrap.style.display=open?'none':'block';
      detBtn.classList.toggle('open',!open);
    });
  }

  resize();
  window.addEventListener('resize',function(){cancelAnimationFrame(rafId);resize();fromBars=null;animT=1;draw();},{passive:true});

  var obs=new IntersectionObserver(function(e){
    if(e[0].isIntersecting){
      updateKPIs(curYr,true);fromBars=null;animT=0;
      (function loop(){draw();animT=Math.min(1,animT+0.02);if(animT<1)rafId=requestAnimationFrame(loop);else draw();})();
      obs.disconnect();
    }
  },{threshold:.12});
  var sec=document.getElementById('cs-proforma');if(sec)obs.observe(sec);
};

/* ── CEO-Grade Proforma (ring + breakdown bar) ──────────── */
window.initPFCEO = function(cfg) {
  var CIRC = 2 * Math.PI * 78; // r=78 → C≈490
  var curYr = cfg.startYear || 'total';
  var PILL_COLORS = ['rgba(200,80,65,.85)','rgba(178,100,45,.80)','rgba(155,115,40,.75)','rgba(135,125,38,.72)','rgba(115,135,48,.70)'];
  var accentRgb = cfg.accentRgb || '80,108,139';
  var accentClr = cfg.accent || ('rgba('+accentRgb+',.9)');

  function fmtM(v){return v>=1e6?'$'+(v/1e6).toFixed(1)+'M':v>=1e3?'$'+(v/1e3).toFixed(0)+'K':'$'+Math.round(v);}

  function animNum(el,to,fn,dur){
    if(!el)return;
    var from=parseFloat(el.dataset.rawVal||'0')||0;
    el.dataset.rawVal=to;
    if(!dur){el.textContent=fn(to);return;}
    var t0=null;
    requestAnimationFrame(function tick(now){
      if(!t0)t0=now;
      var p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3);
      el.textContent=fn(from+(to-from)*e);
      if(p<1)requestAnimationFrame(tick);
    });
  }

  function update(yr,anim){
    var d=cfg.data[yr];if(!d)return;
    var dur=anim?750:0;
    var margin=d.netIncome/d.revenue*100;

    animNum(document.getElementById('pf-ceo-num'),d.netIncome,fmtM,dur);

    var ctxEl=document.getElementById('pf-ceo-ctx');
    if(ctxEl)ctxEl.textContent=d.ctx+' · '+margin.toFixed(1)+'% margin';

    var ring=document.getElementById('pf-ring-arc');
    if(ring){ring.style.stroke=accentClr;ring.style.strokeDashoffset=CIRC*(1-margin/100);}
    animNum(document.getElementById('pf-ring-pct'),margin,function(v){return v.toFixed(1)+'%';},dur);

    var totalNet=cfg.data['total']?cfg.data['total'].netIncome:1;
    ['1','2','3'].forEach(function(y){
      var yd=cfg.data[y];if(!yd)return;
      var row=document.querySelector('.pf-yr-row[data-year="'+y+'"]');if(!row)return;
      var fill=row.querySelector('.pf-yr-fill');
      var val=row.querySelector('.pf-yr-val');
      if(fill){fill.style.background=accentClr;setTimeout(function(){fill.style.width=(yd.netIncome/totalNet*100).toFixed(1)+'%';},anim?150:0);}
      if(val)val.textContent=fmtM(yd.netIncome);
      row.classList.toggle('pf-yr-active',yr==='total'||yr===y);
    });

    var incSeg=document.getElementById('pf-rev-income-seg');
    if(incSeg){incSeg.style.background='linear-gradient(90deg,rgba('+accentRgb+',.85),rgba('+accentRgb+',.50))';incSeg.style.width=margin.toFixed(1)+'%';}
    animNum(document.getElementById('pf-bar-net-label'),d.netIncome,fmtM,dur);
    animNum(document.getElementById('pf-bar-cost-label'),d.costs,fmtM,dur);
    var tot=document.getElementById('pf-rev-total');if(tot)tot.textContent=fmtM(d.revenue);

    var pills=document.getElementById('pf-cost-pills');
    if(pills&&d.costsBreakdown){
      pills.innerHTML=d.costsBreakdown.map(function(item,i){
        return '<div class="pf-cost-pill">'
          +'<span class="pf-cost-pill-dot" style="background:'+PILL_COLORS[i%PILL_COLORS.length]+'"></span>'
          +'<span class="pf-cost-pill-label">'+item.label+'</span>'
          +'<span class="pf-cost-pill-val">'+fmtM(item.amt)+'</span>'
          +'</div>';
      }).join('');
    }

    var tbl=document.getElementById(cfg.tableId||'pf-table');
    if(tbl)tbl.setAttribute('data-active',yr);
    curYr=yr;
  }

  document.querySelectorAll('.pf-year-tab').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.pf-year-tab').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      update(btn.getAttribute('data-year'),true);
    });
  });

  var detBtn=document.getElementById('pf-detail-btn');
  var detWrap=document.getElementById('pf-detail-wrap');
  if(detBtn&&detWrap){
    detBtn.addEventListener('click',function(){
      var open=detWrap.style.display!=='none';
      detWrap.style.display=open?'none':'block';
      detBtn.classList.toggle('open',!open);
    });
  }

  var ring=document.getElementById('pf-ring-arc');
  if(ring){ring.style.stroke=accentClr;ring.style.strokeDashoffset=CIRC;}

  var sec=document.getElementById('cs-proforma');
  if(sec){
    var obs=new IntersectionObserver(function(e){
      if(e[0].isIntersecting){update(curYr,true);obs.disconnect();}
    },{threshold:0.1});
    obs.observe(sec);
  } else update(curYr,false);
};
