const projects={
 '2gis':{title:'In-app коммуникации 2ГИС',meta:'2024–2026',description:'С 2024 года создаю сторис и визуальные коммуникации для мобильного приложения 2ГИС: городские сценарии, продуктовые подборки и спецпроекты. Работаю с контентом на стыке графики, AI-генерации, 3D и продуктового интерфейса.',hero:0,sections:[
 {title:'Друзья на карте',text:'Промо социальной механики внутри приложения. Использовала фирменную графику 2ГИС для визуального усиления функции и повышения вовлечения пользователей.',gallery:0},
 {title:'Креативные AI-подборки',text:'Серия экспериментальных сторис о кухнях мира через метафору пельменей в разных странах. Создавала сюрреалистичные визуальные сцены, соединяя географию и еду.',images:[4],gallery:1},
 {title:'Навигатор',text:'Интерактивная сторис в формате теста о курсорах внутри навигации 2ГИС. Помогает пользователю лучше понять продукт через игровой сценарий.',gallery:2},
 {title:'Креативные AI-подборки',text:'Креативная сторис об «эпохе ассистентов» в MS Office. Использовала AI для стилизации персонажей и визуальный язык Windows 98/XP как приём ностальгического сторителлинга.',gallery:3},
 {title:'3D-графика и объекты внутри карты',text:'Промо 3D-объектов внутри карты 2ГИС. Демонстрирует интеграцию объёмных элементов в продуктовую среду.',gallery:4},
 {title:'Технологические storytelling-подборки',text:'Образовательная сторис о маркировке и выборе шин. Использовала 3D-моделирование для упрощения сложной информации и повышения наглядности.',gallery:5}]},
 'kion':{title:'Визуальная система и контент-дизайн для КИОН Музыки',meta:'2025–2026',dark:true,description:'Создаю визуальные коммуникации для КИОН Музыки: контент-системы, оформление релизов, шаблоны рубрик и промо для соцсетей. Участвую в развитии визуального языка бренда и регулярных контент-форматов.',hero:12,sections:[{gallery:6},{images:[15]},{images:[16,17],pair:true},{images:[18]}]},
 'peaches':{title:'Персики — брендинг и упаковка',meta:'2024',description:'Концепт брендинга и упаковки для бренда консервированных персиков. Разработка айдентики, упаковки и 3D-визуалов в Blender.',hero:19,sections:[{images:[20]},{images:[21,22],pair:true},{images:[23]}]}
};
const tilesData=[
 {project:'2gis',label:'In-app коммуникации'},
 {project:'2gis',label:'Друзья на карте: продуктовая сторис',position:'50% 73%'},
 {project:'2gis',label:'Друзья на карте: фирменная графика',position:'50% 74%'},
 {project:'2gis',label:'Друзья на карте: возможности приложения',position:'50% 74%'},
 {project:'2gis',label:'Кухни мира: пельмени'},
 {project:'2gis',label:'Кухни мира: Китай',position:'50% 80%'},
 {project:'2gis',label:'Кухни мира: визуальная история',position:'50% 78%'},
 {project:'2gis',label:'Кухни мира: сюрреалистичная сцена'},
 {project:'2gis',label:'Навигатор 2ГИС',position:'50% 65%'},
 {project:'2gis',label:'3D-объекты внутри карты'},
 {project:'2gis',label:'Эпоха ассистентов MS Office',position:'50% 72%'},
 {project:'2gis',label:'Маркировка шин',position:'50% 70%'},
 {project:'kion',label:'КИОН Музыка: главные треки недели'},
 {project:'kion',label:'КИОН Музыка: контент для соцсетей'},
 {project:'kion',label:'КИОН Музыка в соцсетях',position:'50% 57%'},
 {project:'kion',label:'Эмоциональные релизы'},
 {project:'kion',label:'Главные треки недели'},
 {project:'kion',label:'КИОН Музыка: видеоконтент'},
 {project:'kion',label:'Визуальная система музыкальных подборок'},
 {project:'peaches',label:'Персики: вкус лета'},
 {project:'peaches',label:'Персики: упаковка'},
 {project:'peaches',label:'Персики: 3D-композиция'},
 {project:'peaches',label:'Персики: наружный носитель'},
 {project:'peaches',label:'Персики: 3D-визуал'}
];
const cubeTiles=[...tilesData,
 {project:'kion',label:'9 знаковых фигур в электронной музыке',src:'/assets/cube/frame-24.png'},
 {project:'peaches',label:'Персики: фирменная футболка',src:'/assets/cube/frame-25.png'},
 {project:'kion',label:'КИОН Музыка: портрет артиста',src:'/assets/cube/frame-26.png'},
 {project:'2gis',label:'2ГИС: необычные городские истории',src:'/assets/cube/frame-27.png'},
 {project:'kion',label:'КИОН Музыка: кто в проекте',src:'/assets/cube/frame-28.png'},
 {project:'2gis',label:'2ГИС: друзья на карте',src:'/assets/cube/frame-29.png'}
];
const faces=[[4,18,22,27],[12,21,10,5],[0,19,28,11],[6,9,20,16],[23,7,15,1],[29,24,26,25]];
const main=document.querySelector('main');
const path=location.pathname.replace(/\/+$/,'')||'/';
function home(){document.body.classList.add('home');initNameEasterEgg();main.innerHTML=`<div id="stage" aria-label="Интерактивный куб с проектами"><p id="instructions" class="sr-only">Перетаскивайте для вращения. Колесо мыши или жест двумя пальцами меняет размер. Клик по картинке открывает проект. С клавиатуры: стрелки вращают куб, плюс и минус меняют размер, 0 сбрасывает вид. Tab выбирает проект, Enter открывает его.</p><div id="scene"><div id="cube" aria-describedby="instructions">${faces.map((tiles,i)=>`<div class="face" data-face="${i}">${tiles.map(index=>{const t=cubeTiles[index];return `<a class="tile" href="/project/${t.project}/" aria-label="${t.label} — ${projects[t.project].title}" data-face="${i}"><img src="${t.src||`/assets/figma/tile-${String(index).padStart(2,'0')}.png`}" alt="${t.label}" draggable="false" style="object-position:${t.position||'50% 50%'}"></a>`}).join('')}</div>`).join('')}</div></div></div>`;
const stage=document.querySelector('#stage'),cube=document.querySelector('#cube'),scene=document.querySelector('#scene');
let rx=-19,ry=-30,rz=-6,scale=1,targetScale=1,shownX=rx,shownY=ry,last=0,pauseUntil=0,hover=false,keyboard=false,moved=false,startFace=null,pinch=0,travel=0;
const points=new Map();const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function zoom(factor){targetScale=clamp(targetScale*factor,.45,1.65);pauseUntil=performance.now()+1500}
stage.addEventListener('wheel',e=>{e.preventDefault();const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);zoom(Math.exp(-clamp(delta,-200,200)*.0018))},{passive:false});
stage.addEventListener('pointerdown',e=>{if(e.button!==0)return;points.set(e.pointerId,{x:e.clientX,y:e.clientY});if(points.size===1){moved=false;travel=0;startFace=e.target.closest('.tile');}else{moved=true;const p=[...points.values()];pinch=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)}stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');keyboard=false;pauseUntil=performance.now()+4000});
stage.addEventListener('pointermove',e=>{const prev=points.get(e.pointerId);if(!prev)return;const dx=e.clientX-prev.x,dy=e.clientY-prev.y;points.set(e.pointerId,{x:e.clientX,y:e.clientY});if(points.size===2){const p=[...points.values()],d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);if(pinch>0)zoom(d/pinch);pinch=d;moved=true;}else{travel+=Math.abs(dx)+Math.abs(dy);if(travel>6)moved=true;ry+=dx*.38;rx-=dy*.38;}pauseUntil=performance.now()+4000});
function release(e,cancel=false){if(!points.has(e.pointerId))return;const open=!cancel&&!moved&&points.size===1&&startFace;points.delete(e.pointerId);if(!points.size)stage.classList.remove('dragging');if(open)location.href=startFace.href;}
stage.addEventListener('pointerup',e=>release(e));stage.addEventListener('pointercancel',e=>release(e,true));
stage.addEventListener('click',e=>{if(e.detail!==0)e.preventDefault()});
// Links must not start native browser drag ghosts during cube rotation.
stage.addEventListener('dragstart',e=>e.preventDefault());
cube.addEventListener('pointerenter',()=>hover=true);cube.addEventListener('pointerleave',()=>hover=false);
cube.querySelectorAll('.tile').forEach(a=>a.addEventListener('focus',()=>{if(points.size||!a.matches(':focus-visible'))return;keyboard=true;const angles=[[0,0],[0,-90],[0,-180],[0,90],[-90,0],[90,0]][+a.dataset.face];rx=angles[0];ry=angles[1];rz=0;}));
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey)return;const actions={ArrowLeft:()=>ry-=30,ArrowRight:()=>ry+=30,ArrowUp:()=>rx+=30,ArrowDown:()=>rx-=30,'+':()=>zoom(1.15),'=':()=>zoom(1.15),'-':()=>zoom(1/1.15),'0':()=>{rx=-19;ry=-30;rz=-6;targetScale=1}};if(actions[e.key]){e.preventDefault();actions[e.key]();keyboard=true;pauseUntil=performance.now()+5000}});
function animate(t){const dt=last?Math.min(t-last,40):16;last=t;if(!reduce&&!hover&&!points.size&&!keyboard&&t>pauseUntil)ry+=dt*.007;const k=reduce?1:1-Math.exp(-dt/65);shownX+=(rx-shownX)*k;shownY+=(ry-shownY)*k;scale+=(targetScale-scale)*k;cube.style.transform=`rotateX(${shownX}deg) rotateY(${shownY}deg) rotateZ(${rz}deg)`;scene.style.transform=`scale(${scale})`;requestAnimationFrame(animate)}requestAnimationFrame(animate);
}function caseImage(index){const t=tilesData[index];return `<a class="case-image" data-tile="${index}" href="/assets/figma/tile-${String(index).padStart(2,'0')}.png" target="_blank" rel="noopener" aria-label="Открыть изображение: ${t.label}"><img src="/assets/figma/tile-${String(index).padStart(2,'0')}.png" alt="${t.label}" loading="lazy"></a>`}
function project(key){const p=projects[key];if(!p){location.replace('/');return}document.body.classList.add('inner-page');document.body.classList.toggle('dark',!!p.dark);document.title=`${p.title} — Саша Агеева`;const keys=Object.keys(projects),next=keys[(keys.indexOf(key)+1)%keys.length],prev=keys[(keys.indexOf(key)+keys.length-1)%keys.length];main.innerHTML=`<article class="page case-page"><p class="eyebrow">${p.meta}</p><h1>${p.title}</h1><p class="intro">${p.description}</p>${caseImage(p.hero)}${key==='2gis'?'<p class="case-preface">Ниже — избранные примеры из нескольких сотен подборок. В зависимости от задачи использовались разные подходы и инструменты: графика в рамках фирменного стиля, AI-генерации и 3D.</p>':''}${p.sections.map(s=>`<section class="case-section">${s.title?`<h2>${s.title}</h2><p>${s.text}</p>`:''}${s.images?`<div class="case-images ${s.pair?'pair':''}">${s.images.map(caseImage).join('')}</div>`:''}${s.gallery!==undefined?`<a class="case-image" data-gallery="${s.gallery}" href="/assets/figma/gallery-${s.gallery}.png" target="_blank" rel="noopener" aria-label="Открыть подборку в полном размере"><img src="/assets/figma/gallery-${s.gallery}.png" alt="${s.title||p.title}" loading="lazy"></a>`:''}</section>`).join('')}<nav class="case-pagination" aria-label="Навигация по кейсам"><a href="/project/${prev}/">Предыдущий кейс</a><a href="/">На главную</a><a href="/project/${next}/">Следующий кейс</a></nav></article>`}
function about(){
document.body.classList.add('dark','inner-page','about-view');
document.title='Обо мне — Саша Агеева';
document.querySelector('body>nav .about').setAttribute('aria-current','page');
main.innerHTML=`<article class="page about-page">
<header class="about-introduction"><h1>Коммуникационный дизайнер</h1>
<p class="intro">Я Саша Агеева, в дизайне с 2023 года. Создаю визуальные концепции <br>для сторис в приложениях и контента в соцсетях.</p>
<p class="about-description">Придумываю, как рассказать о продукте или раскрыть тему через визуал, и довожу идею до готовых макетов. Разрабатываю оформление серий и рубрик, создаю шаблоны для регулярных публикаций. Нейросети использую в работе над концепциями и изображениями.</p></header>
<div class="experience">
<section><header><h2>2ГИС</h2><p class="experience-date">Март 2024 — сейчас · Проектно</p></header><p>Создаю сторис для приложения: от визуальной идеи до вёрстки и адаптаций. Работаю с редакционными темами и рассказываю о функциях 2ГИС через интерфейсы и визуальные сюжеты. За 2025 год оформила около 200 серий.</p></section>
<section><header><h2>КИОН · Музыка и Строки</h2><p class="experience-date">Август 2025 — июль 2026</p></header><p>Разрабатывала оформление соцсетей Музыки и Строк: от отдельных публикаций до регулярных рубрик. С нуля оформила более 10 рубрик Строк и создала шаблоны пяти рубрик Музыки. Работала с релизами, интервью, интерактивами и видео.</p></section>
</div>
<section class="about-tools"><h2>Инструменты</h2><p>Figma, Photoshop, Illustrator, InDesign</p><p>Нейросети: ChatGPT, Nano Banana Pro, Seedream, Kling, Seedance</p><p>After Effects и Blender — на базовом уровне</p></section>
</article>`;
}
if(path==='/')home();else if(path==='/about')about();else if(path.startsWith('/project/'))project(path.split('/')[2]);else location.replace('/');

// Nonbreaking short words keep Russian prepositions with the following word.
function bindShortWords(root){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);for(const n of nodes){if(n.parentElement.closest('script,style,code'))continue;n.nodeValue=n.nodeValue.replace(/(?<![\p{L}\p{N}])(?:в|во|на|к|ко|с|со|о|об|обо|от|ото|до|за|из|изо|у|по|под|подо|над|надо|при|про|для|без|безо|через|между|перед|передо|и|а|но|не|ни)[ \t]+(?=\S)/giu,m=>m.trimEnd()+'\u00a0');}}
if(!document.body.classList.contains('home')){bindShortWords(main);document.querySelector('body>nav').classList.add('page-navigation');if(path.startsWith('/project/'))restoreInteractions().then(()=>import('/videos.js'));}
async function restoreInteractions(){try{const response=await fetch('/interactions.json');if(!response.ok)throw Error('Missing interactions');const sets=await response.json();for(const set of sets){if(set.id==='tracks')continue;const target=set.gallery!==undefined?document.querySelector(`[data-gallery="${set.gallery}"]`):document.querySelector(`[data-tile="${set.tile}"]`);if(!target)continue;let surface=target;if(target.tagName==='A'){surface=document.createElement('div');surface.className=target.className;for(const key of ['gallery','tile'])if(target.dataset[key])surface.dataset[key]=target.dataset[key];surface.append(...target.childNodes);target.replaceWith(surface);}surface.classList.add('interactive-composition');const control=document.createElement('button');control.type='button';control.className='prototype-control';control.setAttribute('aria-label',set.mode==='hover'?'Показать второй вариант':'Приостановить смену изображений');control.setAttribute('aria-pressed','false');const [x,y,w,h]=set.rect,[bw,bh]=set.base;Object.assign(control.style,{left:`${x/bw*100}%`,top:`${y/bh*100}%`,width:`${w/bw*100}%`,height:`${h/bh*100}%`});control.innerHTML=set.nodes.map((id,i)=>`<img src="/assets/figma/motion/${set.id}-${i}.png" alt="" loading="lazy" class="${i===0?'active':''}" data-state="${i}">`).join('');surface.append(control);const images=[...control.querySelectorAll('img')];let current=0,locked=false,visible=false,timer=null;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;function show(i){images[current].classList.remove('active');current=i;images[current].classList.add('active');}if(set.mode==='hover'){control.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show(1)});control.addEventListener('pointerleave',()=>{if(!locked)show(0)});control.addEventListener('focus',()=>show(1));control.addEventListener('blur',()=>{if(!locked)show(0)});control.addEventListener('click',()=>{locked=!locked;show(locked?1:0);control.setAttribute('aria-pressed',String(locked));});}else{let paused=reduced;const update=()=>{clearInterval(timer);if(visible&&!paused&&!document.hidden)timer=setInterval(()=>show((current+1)%images.length),2000);};new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;update();},{threshold:.15}).observe(control);document.addEventListener('visibilitychange',update);control.addEventListener('click',()=>{paused=!paused;control.setAttribute('aria-pressed',String(paused));control.setAttribute('aria-label',paused?'Продолжить смену изображений':'Приостановить смену изображений');update();});}}}catch(error){console.error('Prototype interactions:',error);}}

function initNameEasterEgg(){
 const trigger=document.querySelector('body>nav .name');
 let taps=[],active=false;
 trigger.style.touchAction='manipulation';
 trigger.style.userSelect='none';
 trigger.addEventListener('click',e=>{
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  e.preventDefault();
  const now=performance.now();
  taps=taps.filter(t=>now-t<1200);taps.push(now);
  if(taps.length<3||active)return;
  taps=[];active=true;
  const dialog=document.createElement('dialog');
  dialog.className='name-easter-egg';
  dialog.setAttribute('aria-label','Саша А — пасхалка');
  dialog.innerHTML='<div class="name-easter-text" aria-hidden="true"></div><button type="button" class="name-easter-close" aria-label="Закрыть пасхалку">×</button>';
  document.body.append(dialog);
  const text=dialog.querySelector('.name-easter-text'),button=dialog.querySelector('button');
  let frame=0,started=0,full='';
  function prepare(){
   const style=getComputedStyle(text),fontSize=parseFloat(style.fontSize),lineHeight=parseFloat(style.lineHeight);
   const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
   ctx.font=style.fontWeight+' '+fontSize+'px '+style.fontFamily;
   const width=text.clientWidth;
   const count=Math.max(1,Math.ceil((width-ctx.measureText('Саша ').width)/ctx.measureText('А').width));
   const firstRow='Саша '+'А'.repeat(count);
   const row='А'.repeat(Math.max(1,Math.ceil(width/ctx.measureText('А').width)));
   full=[firstRow,...Array(Math.ceil(text.clientHeight/lineHeight)).fill(row)].join('\n');
  }
  function type(time){
   if(!started)started=time;
   const count=Math.floor((time-started)*.24);
   text.textContent=full.slice(0,count);
   if(count<full.length)frame=requestAnimationFrame(type);
  }
  function resize(){prepare();text.textContent=full;cancelAnimationFrame(frame);}
  function close(){dialog.close();}
  dialog.addEventListener('keydown',e=>e.stopPropagation());
  dialog.addEventListener('close',()=>{
   cancelAnimationFrame(frame);window.removeEventListener('resize',resize);
   dialog.remove();active=false;taps=[];trigger.focus({preventScroll:true});
  },{once:true});
  button.addEventListener('click',close);
  dialog.showModal();prepare();
  window.addEventListener('resize',resize);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)text.textContent=full;
  else frame=requestAnimationFrame(type);
 });
}
