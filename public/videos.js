// Original media supplied by the portfolio owner; placement measured in Figma.
const placements = [
  {tile:0, file:'2gis-intro', label:'Коммуникации 2ГИС'},
  {tile:4, file:'dumplings', label:'Кухни мира: пельмени'},
  {tile:12, file:'kion-intro', label:'КИОН Музыка: главные треки недели'},
  {tile:18, file:'kion-showcase', label:'КИОН Музыка: визуальная система'},
  {tile:20, file:'peaches-packaging', label:'Персики: упаковка'},
  {tile:23, file:'peaches-floating', label:'Персики: 3D-анимация'},
  {tile:17, file:'kion-portrait', label:'КИОН Музыка: видеоконтент'},
  {tile:16, file:'kion-tracks', label:'Главные треки недели', hover:true},
  {gallery:3, file:'office-assistants', label:'Кто вы из MS Office?', rect:[7,8,159.72156,184.29408], base:[1518.34998,680.27002]},
  {gallery:6, file:'kion-social-left', label:'КИОН Музыка: как они звучат', rect:[0,418,324.56836,405.71045], base:[1519.88916,824.25562]},
  {gallery:6, file:'kion-social-right', label:'КИОН Музыка: слушай в приложении', rect:[673,418,325.00452,406.25562], base:[1519.88916,824.25562]}
];
for (const item of placements) {
  let surface = document.querySelector(item.gallery === undefined ? `[data-tile="${item.tile}"]` : `[data-gallery="${item.gallery}"]`);
  if (!surface) continue;
  if (surface.tagName === 'A') {
    const container = document.createElement('div');
    container.className = surface.className;
    Object.assign(container.dataset, surface.dataset);
    container.append(...surface.childNodes);
    surface.replaceWith(container);
    surface = container;
  }
  surface.classList.add('media-composition');
  const frame = document.createElement('div');
  frame.className = 'video-frame';
  if (item.rect) {
    const [x,y,w,h] = item.rect, [bw,bh] = item.base;
    Object.assign(frame.style,{left:`${x/bw*100}%`,top:`${y/bh*100}%`,width:`${w/bw*100}%`,height:`${h/bh*100}%`});
  }
  const video = document.createElement('video');
  video.controls = false;
  video.autoplay = true;
  video.muted = true;
  video.setAttribute('muted', '');
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  video.poster = `/assets/video/${item.file}.jpg`;
  video.setAttribute('aria-label', item.label);
  frame.append(video);
  surface.append(frame);
  let visible=false, active=!item.hover, locked=false, userPaused=false, userStarted=false;
  const load = () => { if (!video.getAttribute('src')) video.src = `/assets/video/${item.file}.mp4`; };
  const update = () => {
    if (!visible || !active || document.hidden) { video.pause(); return; }
    if (userPaused) return;
    load();
    video.play().catch(() => {});
  };
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) load();
  },{rootMargin:'200px'}).observe(surface);
  new IntersectionObserver(entries => {
    visible=entries[0].isIntersecting;
    update();
  },{threshold:0}).observe(frame);
  document.addEventListener('visibilitychange',update);
  video.addEventListener('play',()=>{userPaused=false;if(!visible || !active || document.hidden)video.pause();});
  video.addEventListener('pause',()=>{
    if (visible && active && !document.hidden) userPaused=true;
  });
  if (item.hover) {
    frame.classList.add('hover-video');
    const toggle=document.createElement('button');
    toggle.type='button';toggle.className='video-toggle';
    toggle.textContent='Смотреть видео';
    toggle.setAttribute('aria-pressed','false');
    surface.append(toggle);
    const show=on=>{
      active=on;frame.classList.toggle('revealed',on);
      video.tabIndex=on?0:-1;
      frame.inert=!on;
      update();
    };
    show(false);
    surface.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show(true);});
    surface.addEventListener('pointerleave',()=>{if(!locked&&!surface.contains(document.activeElement))show(false);});
    surface.addEventListener('focusin',()=>show(true));
    surface.addEventListener('focusout',e=>{if(!locked&&!surface.contains(e.relatedTarget))show(false);});
    toggle.addEventListener('click',()=>{
      locked=!locked;userPaused=false;userStarted=locked;
      toggle.setAttribute('aria-pressed',String(locked));
      toggle.textContent=locked?'Закрыть видео':'Смотреть видео';
      show(locked);
    });
    surface.addEventListener('keydown',e=>{if(e.key==='Escape'){locked=false;toggle.setAttribute('aria-pressed','false');toggle.textContent='Смотреть видео';show(false);}});
  }
}
