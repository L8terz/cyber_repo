let selectedPhase = null;

function drawADMWheel() {
  const svg = document.getElementById('adm-svg');
  if (!svg) return;
  const W = 448, cx = W/2, cy = W/2;
  const outerR = 200, innerR = 72, midR = 136;

  svg.innerHTML = '';

  function mkEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
    return el;
  }

  const defs = mkEl('defs', {});
  const filt = mkEl('filter', {id:'shadow',x:'-20%',y:'-20%',width:'140%',height:'140%'});
  const blur = mkEl('feDropShadow', {dx:'0',dy:'2',stdDeviation:'4','flood-color':'rgba(0,0,0,0.15)'});
  filt.appendChild(blur); defs.appendChild(filt); svg.appendChild(defs);

  const outerPhases = ADM_PHASES.filter(p => p.id !== 'rm');
  const n = outerPhases.length;
  const gapAngle = 0.02;
  const segAngle = (2 * Math.PI / n);

  outerPhases.forEach((phase, i) => {
    const startAngle = i * segAngle - Math.PI/2 + gapAngle/2;
    const endAngle = startAngle + segAngle - gapAngle;

    const x1 = cx + innerR * Math.cos(startAngle);
    const y1 = cy + innerR * Math.sin(startAngle);
    const x2 = cx + outerR * Math.cos(startAngle);
    const y2 = cy + outerR * Math.sin(startAngle);
    const x3 = cx + outerR * Math.cos(endAngle);
    const y3 = cy + outerR * Math.sin(endAngle);
    const x4 = cx + innerR * Math.cos(endAngle);
    const y4 = cy + innerR * Math.sin(endAngle);

    const path = mkEl('path', {
      d: `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1} Z`,
      fill: selectedPhase === phase.id ? phase.color : phase.color + 'dd',
      stroke: '#fff', 'stroke-width': '2',
      style: 'cursor:pointer;transition:all .2s;',
      filter: selectedPhase === phase.id ? 'url(#shadow)' : ''
    });

    path.addEventListener('mouseenter', () => { if (selectedPhase !== phase.id) path.setAttribute('fill', phase.color); });
    path.addEventListener('mouseleave', () => { if (selectedPhase !== phase.id) path.setAttribute('fill', phase.color + 'dd'); });
    path.addEventListener('click', () => { selectedPhase = phase.id; drawADMWheel(); showPhaseDetail(phase); });

    svg.appendChild(path);

    const labelAngle = (startAngle + endAngle) / 2;
    const labelR = (innerR + outerR) / 2;
    const lx = cx + labelR * Math.cos(labelAngle);
    const ly = cy + labelR * Math.sin(labelAngle);

    const shortText = mkEl('text', {
      x: lx, y: ly - 6, 'text-anchor': 'middle', 'dominant-baseline': 'middle',
      fill: '#fff', 'font-size': '11', 'font-weight': '700', 'font-family': 'sans-serif',
      style: 'pointer-events:none'
    });
    shortText.textContent = phase.short;
    svg.appendChild(shortText);

    const words = phase.label.split(' ');
    const line1 = words.slice(0, Math.ceil(words.length/2)).join(' ');
    const line2 = words.slice(Math.ceil(words.length/2)).join(' ');

    if (line2) {
      const t1 = mkEl('text', { x: lx, y: ly + 8, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.85)', 'font-size': '8', 'font-family': 'sans-serif', style: 'pointer-events:none' });
      t1.textContent = line1;
      svg.appendChild(t1);
      const t2 = mkEl('text', { x: lx, y: ly + 17, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.85)', 'font-size': '8', 'font-family': 'sans-serif', style: 'pointer-events:none' });
      t2.textContent = line2;
      svg.appendChild(t2);
    } else {
      const t1 = mkEl('text', { x: lx, y: ly + 10, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.85)', 'font-size': '8', 'font-family': 'sans-serif', style: 'pointer-events:none' });
      t1.textContent = line1;
      svg.appendChild(t1);
    }
  });

  const rmPhase = ADM_PHASES.find(p => p.id === 'rm');
  const centerCircle = mkEl('circle', {
    cx, cy, r: innerR - 4,
    fill: selectedPhase === 'rm' ? rmPhase.color : '#1e293b',
    stroke: '#fff', 'stroke-width': '2', style: 'cursor:pointer;transition:fill .2s;'
  });
  centerCircle.addEventListener('click', () => { selectedPhase = 'rm'; drawADMWheel(); showPhaseDetail(rmPhase); });
  centerCircle.addEventListener('mouseenter', () => { if (selectedPhase !== 'rm') centerCircle.setAttribute('fill', '#334155'); });
  centerCircle.addEventListener('mouseleave', () => { if (selectedPhase !== 'rm') centerCircle.setAttribute('fill', '#1e293b'); });
  svg.appendChild(centerCircle);

  const centerLabel = mkEl('text', { x: cx, y: cy - 10, 'text-anchor': 'middle', fill: '#fff', 'font-size': '10', 'font-weight': '700', 'font-family': 'sans-serif', style: 'pointer-events:none' });
  centerLabel.textContent = 'Requirements';
  svg.appendChild(centerLabel);
  const centerLabel2 = mkEl('text', { x: cx, y: cy + 4, 'text-anchor': 'middle', fill: '#fff', 'font-size': '10', 'font-weight': '700', 'font-family': 'sans-serif', style: 'pointer-events:none' });
  centerLabel2.textContent = 'Management';
  svg.appendChild(centerLabel2);
  const centerLabel3 = mkEl('text', { x: cx, y: cy + 18, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.6)', 'font-size': '8', 'font-family': 'sans-serif', style: 'pointer-events:none' });
  centerLabel3.textContent = '(RM)';
  svg.appendChild(centerLabel3);

  for (let i = 0; i < n; i++) {
    const a = i * segAngle - Math.PI/2;
    const tx1 = cx + (outerR + 4) * Math.cos(a);
    const ty1 = cy + (outerR + 4) * Math.sin(a);
    const tx2 = cx + (outerR + 10) * Math.cos(a);
    const ty2 = cy + (outerR + 10) * Math.sin(a);
    const tick = mkEl('line', { x1:tx1,y1:ty1,x2:tx2,y2:ty2, stroke:'#cbd5e1','stroke-width':'1.5' });
    svg.insertBefore(tick, svg.firstChild);
  }
}

function showPhaseDetail(phase) {
  const panel = document.getElementById('phase-detail');
  panel.innerHTML = `
    <div style="padding:4px 0 16px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:2px solid var(--border);">
        <div style="width:44px;height:44px;border-radius:10px;background:${phase.color};display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:800;flex-shrink:0;">${phase.short}</div>
        <div>
          <h3 style="font-size:17px;font-weight:800;">${phase.label}</h3>
          <div style="display:flex;gap:6px;margin-top:5px;flex-wrap:wrap;">
            <span class="tag tag-slate" style="font-size:10px;">${phase.nist}</span>
            <span class="tag" style="font-size:10px;background:#ede9fe;color:#5b21b6;">${phase.sabsa}</span>
          </div>
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <div class="section-title">ADM Purpose</div>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.6;">${phase.desc}</p>
      </div>

      <div style="margin-bottom:14px;padding:12px;background:var(--accent-light);border-radius:8px;border-left:3px solid var(--accent);">
        <div style="font-size:11px;font-weight:700;color:var(--accent);margin-bottom:5px;">🔐 SECURITY ARCHITECT ROLE</div>
        <p style="font-size:13px;color:#1e40af;line-height:1.6;">${phase.security}</p>
      </div>

      <div style="margin-bottom:14px;">
        <div class="section-title">Key Security Deliverables</div>
        <div style="display:flex;flex-direction:column;gap:5px;">
          ${phase.controls.map(c => `<div style="display:flex;align-items:center;gap:8px;font-size:13px;"><span style="width:6px;height:6px;border-radius:50%;background:${phase.color};flex-shrink:0;"></span>${c}</div>`).join('')}
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px;">
        <div style="padding:10px;background:#f8f9fb;border-radius:8px;">
          <div style="font-size:10px;font-weight:700;color:var(--text-muted);margin-bottom:6px;">INPUTS</div>
          ${phase.inputs.map(i => `<div style="font-size:12px;color:var(--text-muted);margin-bottom:3px;">← ${i}</div>`).join('') || '<div style="font-size:12px;color:var(--text-muted);">— None (starting point) —</div>'}
        </div>
        <div style="padding:10px;background:#f8f9fb;border-radius:8px;">
          <div style="font-size:10px;font-weight:700;color:var(--text-muted);margin-bottom:6px;">OUTPUTS</div>
          ${phase.outputs.map(o => `<div style="font-size:12px;color:var(--text-muted);margin-bottom:3px;">→ ${o}</div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

let graphNodes = [], graphLinks = [], animFrame = null, pinnedNode = null;
const GRAPH_W = 900, GRAPH_H = 520;

function initGraph() {
  const canvas = document.getElementById('linkage-canvas');
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = GRAPH_W * dpr; canvas.height = GRAPH_H * dpr;
  canvas.style.width = '100%'; canvas.style.height = GRAPH_H + 'px';
  const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);

  graphNodes = CONTROL_NODES.map((n, i) => ({
    ...n,
    x: 80 + (i % 6) * 150 + Math.random() * 40,
    y: 80 + Math.floor(i / 6) * 160 + Math.random() * 40,
    vx: 0, vy: 0, r: 28
  }));

  graphLinks = CONTROL_LINKS.map(([s,t]) => ({ source: s, target: t }));

  canvas.addEventListener('mousemove', e => handleGraphHover(e, canvas, ctx));
  canvas.addEventListener('click', e => handleGraphClick(e, canvas));

  runForce(ctx);
}

function getNodeAt(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = GRAPH_W / rect.width;
  const mx = (e.clientX - rect.left) * scaleX;
  const my = (e.clientY - rect.top) * (GRAPH_H / rect.height);
  return graphNodes.find(n => Math.hypot(n.x - mx, n.y - my) < n.r + 4) || null;
}

let hoveredNode = null;
function handleGraphHover(e, canvas, ctx) {
  const n = getNodeAt(e, canvas);
  hoveredNode = n;
  canvas.style.cursor = n ? 'pointer' : 'default';
}

function handleGraphClick(e, canvas) {
  const n = getNodeAt(e, canvas);
  pinnedNode = (n && pinnedNode && n.id === pinnedNode.id) ? null : n;
  const shown = pinnedNode || hoveredNode;
  const detail = document.getElementById('node-detail');
  if (shown) {
    document.getElementById('node-name').textContent = shown.name;
    document.getElementById('node-desc').textContent = shown.desc;
    document.getElementById('node-tags').innerHTML = [
      `<span class="tag tag-blue">TOGAF: ${shown.togaf}</span>`,
      `<span class="tag tag-green">NIST: ${shown.nist}</span>`,
      `<span class="tag tag-purple">SABSA: ${shown.sabsa} Layer</span>`,
      `<span class="tag tag-slate">Domain: ${shown.group}</span>`
    ].join('');
    detail.style.display = 'block';
  } else {
    detail.style.display = 'none';
  }
}

function runForce(ctx) {
  function tick() {
    const alpha = 0.3;
    for (let i = 0; i < graphNodes.length; i++) {
      for (let j = i+1; j < graphNodes.length; j++) {
        const a = graphNodes[i], b = graphNodes[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.max(Math.hypot(dx, dy), 1);
        const force = 4000 / (dist * dist);
        const fx = (dx/dist)*force, fy = (dy/dist)*force;
        a.vx -= fx; a.vy -= fy; b.vx += fx; b.vy += fy;
      }
    }
    graphLinks.forEach(link => {
      const a = graphNodes[link.source], b = graphNodes[link.target];
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist = Math.max(Math.hypot(dx, dy), 1);
      const target = 130;
      const force = (dist - target) * 0.015;
      const fx = (dx/dist)*force, fy = (dy/dist)*force;
      a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
    });
    graphNodes.forEach(n => {
      n.vx += (GRAPH_W/2 - n.x) * 0.005;
      n.vy += (GRAPH_H/2 - n.y) * 0.005;
    });
    graphNodes.forEach(n => {
      n.vx *= 0.85; n.vy *= 0.85;
      n.x = Math.max(n.r+4, Math.min(GRAPH_W-n.r-4, n.x + n.vx));
      n.y = Math.max(n.r+4, Math.min(GRAPH_H-n.r-4, n.y + n.vy));
    });

    draw(ctx);
    animFrame = requestAnimationFrame(tick);
  }
  if (animFrame) cancelAnimationFrame(animFrame);
  tick();
}

function draw(ctx) {
  ctx.clearRect(0, 0, GRAPH_W, GRAPH_H);
  const active = pinnedNode || hoveredNode;

  graphLinks.forEach(link => {
    const a = graphNodes[link.source], b = graphNodes[link.target];
    const isHighlighted = active && (a.id === active.id || b.id === active.id);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = isHighlighted ? 'rgba(59,130,246,0.6)' : 'rgba(203,213,225,0.5)';
    ctx.lineWidth = isHighlighted ? 2 : 1;
    ctx.stroke();

    if (isHighlighted) {
      const angle = Math.atan2(b.y - a.y, b.x - a.x);
      const mx = (a.x + b.x)/2, my = (a.y + b.y)/2;
      ctx.beginPath();
      ctx.moveTo(mx + 6*Math.cos(angle-0.4), my + 6*Math.sin(angle-0.4));
      ctx.lineTo(mx + 10*Math.cos(angle), my + 10*Math.sin(angle));
      ctx.lineTo(mx + 6*Math.cos(angle+0.4), my + 6*Math.sin(angle+0.4));
      ctx.fillStyle = 'rgba(59,130,246,0.6)';
      ctx.fill();
    }
  });

  const connectedIds = new Set();
  if (active) {
    graphLinks.forEach(l => {
      if (l.source === active.id) connectedIds.add(l.target);
      if (l.target === active.id) connectedIds.add(l.source);
    });
  }

  graphNodes.forEach(node => {
    const isActive = active && node.id === active.id;
    const isConnected = active && connectedIds.has(node.id);
    const isDimmed = active && !isActive && !isConnected;

    const alpha = isDimmed ? 0.25 : 1;
    const r = isActive ? node.r + 4 : node.r;

    if (isActive) {
      ctx.beginPath(); ctx.arc(node.x, node.y, r + 6, 0, Math.PI*2);
      ctx.fillStyle = node.color + '33'; ctx.fill();
    }

    ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, Math.PI*2);
    ctx.fillStyle = node.color + (isDimmed ? '40' : 'ee');
    ctx.fill();
    ctx.strokeStyle = isActive ? '#fff' : (isConnected ? node.color : 'rgba(255,255,255,0.5)');
    ctx.lineWidth = isActive ? 3 : 1.5;
    ctx.stroke();

    ctx.fillStyle = isDimmed ? 'rgba(100,116,139,0.4)' : '#1e293b';
    ctx.font = `${isActive ? '700' : '600'} 10px -apple-system, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const words = node.name.split(' ');
    let line = '', lines = [], maxW = r * 1.7;
    words.forEach(w => {
      const test = line + (line ? ' ' : '') + w;
      if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
      else line = test;
    });
    lines.push(line);
    const lh = 11;
    lines.forEach((l, i) => {
      ctx.fillText(l, node.x, node.y + (i - (lines.length-1)/2) * lh);
    });
  });
}

function buildMatrix() {
  const tbl = document.getElementById('matrix-table');
  if (!tbl) return;
  let html = `<thead><tr>
    <th style="background:#1e293b;color:#fff;padding:10px 12px;">TOGAF ADM Phase</th>
    <th style="background:#1e293b;color:#fff;padding:10px 12px;">SABSA Layer</th>
    <th style="background:#1e293b;color:#fff;padding:10px 12px;">NIST CSF Function</th>
    <th style="background:#1e293b;color:#fff;padding:10px 12px;">Key Security Controls / Deliverables</th>
  </tr></thead><tbody>`;

  MATRIX_DATA.forEach((row, i) => {
    const nistFns = row.nist.split(' + ');
    const nistBadges = nistFns.map(fn => {
      const color = NIST_COLORS[fn] || '#64748b';
      return `<span style="display:inline-block;padding:2px 8px;border-radius:99px;background:${color}22;color:${color};font-size:10px;font-weight:700;margin-right:4px;">${fn}</span>`;
    }).join('');
    html += `<tr style="background:${i%2===0?'#fff':'#f8f9fb'}">
      <td style="padding:10px 12px;font-weight:700;font-size:12px;border:1px solid var(--border);white-space:nowrap;">${row.phase}</td>
      <td style="padding:10px 12px;font-size:12px;border:1px solid var(--border);color:#5b21b6;font-weight:600;">${row.sabsa}</td>
      <td style="padding:10px 12px;border:1px solid var(--border);">${nistBadges}</td>
      <td style="padding:10px 12px;font-size:12px;border:1px solid var(--border);color:var(--text-muted);">${row.controls}</td>
    </tr>`;
  });

  tbl.innerHTML = html + '</tbody>';
}

function setTogafView(view) {
  document.getElementById('togaf-adm').style.display = view === 'adm' ? 'flex' : 'none';
  document.getElementById('togaf-graph').style.display = view === 'graph' ? 'block' : 'none';
  document.getElementById('togaf-matrix').style.display = view === 'matrix' ? 'block' : 'none';
  document.getElementById('btn-adm').className = view === 'adm' ? 'btn btn-primary' : 'btn btn-outline';
  document.getElementById('btn-graph').className = view === 'graph' ? 'btn btn-primary' : 'btn btn-outline';
  document.getElementById('btn-matrix').className = view === 'matrix' ? 'btn btn-primary' : 'btn btn-outline';
  if (view === 'graph') { if (!graphNodes.length) initGraph(); }
  if (view === 'matrix') buildMatrix();
  if (view === 'adm') drawADMWheel();
}
