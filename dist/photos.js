// EDIT PHOTO ALBUMS HERE. Numbers match photos/photo-XX.jpeg.
her.albums = [
  {name:'A day in purple', subtitle:'Sunshine, matching smiles, several takes.', cover:35, photos:[24,31,34,35,37,38,43,44,45,25,27,29,33,42,47,32,40,41]},
  {name:'Mountains & rain', subtitle:'Excellent company. Questionable weather.', cover:46, photos:[30,36,46,26,28,48]},
  {name:'The café collection', subtitle:'Coffee was only part of the plan.', cover:13, photos:[10,11,12,13,15,4,6,7,8,9]},
  {name:'White-shirt days', subtitle:'A few very familiar faces.', cover:39, photos:[14,16,18,20,39]},
  {name:'Out & about', subtitle:'A movie, a meal, another excuse to go out.', cover:21, photos:[5,17,21,23]},
  {name:'Just us', subtitle:'The little moments worth keeping.', cover:1, photos:[1,3,19,22]},
  {name:'The early years', subtitle:'From the archives.', cover:2, photos:[2]}
];
let photoAlbum = null;
const originalOpenApp = openApp;
openApp = function(app) { if(app==='photos') { showAlbums(); return; } if(app==='messages') { showMessages(); return; } if(app==='maps') { showMemoryMap(); return; } if(app==='calendar') { showCalendar(2); return; } if(app==='terminal') { showTerminal(); return; } originalOpenApp(app); };
const photoPath = n => `photos/photo-${String(n).padStart(2,'0')}.jpeg`;
function showAlbums() {
  photoAlbum=null;
  win('Photos', `<div class="library-heading"><div><h2>Little moments, kept.</h2><p class="muted">48 photos · 7 albums</p></div><button class="library-button" onclick="showAlbum(-1)">All photos</button></div><div class="album-grid">${her.albums.map((a,i)=>`<button class="album-card" onclick="showAlbum(${i})"><div class="album-cover"><img src="${photoPath(a.cover)}" alt="" loading="lazy"><span>${String(i+1).padStart(2,'0')}</span></div><div class="album-label"><strong>${a.name}</strong><span>${a.photos.length} ${a.photos.length===1?'photo':'photos'}</span></div><p>${a.subtitle}</p></button>`).join('')}</div>`, 'wide');
}
function showAlbum(index) {
  photoAlbum=index;
  const a=index===-1?{name:'All photos',subtitle:'Every single one.',photos:her.albums.flatMap(a=>a.photos)}:her.albums[index];
  win('Photos', `<button class="library-button" onclick="showAlbums()">← Albums</button><div class="library-heading"><div><h2>${a.name}</h2><p class="muted">${a.subtitle} · ${a.photos.length} photos</p></div></div><div class="memory-grid">${a.photos.map((n,i)=>`<button class="memory-photo" aria-label="Open ${a.name} photo ${i+1}" onclick="viewPhoto(${n})"><img src="${photoPath(n)}" alt="${a.name}, photo ${i+1}" loading="lazy"></button>`).join('')}</div>`, 'wide');
}
function viewPhoto(n) {
  document.querySelector('.photo-viewer')?.remove();
  const list=photoAlbum===-1?her.albums.flatMap(a=>a.photos):her.albums[photoAlbum].photos;
  const pos=list.indexOf(n), album=her.albums.find(a=>a.photos.includes(n));
  const v=document.createElement('dialog'); v.className='photo-viewer';
  v.innerHTML=`<header><span>${album.name} · ${pos+1} / ${list.length}</span><button aria-label="Close photo" onclick="this.closest('dialog').close()">×</button></header><img src="${photoPath(n)}" alt="${album.name}, photo ${pos+1}"><footer><button ${pos===0?'disabled':''} aria-label="Previous photo" onclick="viewPhoto(${list[pos-1]||n})">←</button><span>${album.subtitle}</span><button ${pos===list.length-1?'disabled':''} aria-label="Next photo" onclick="viewPhoto(${list[pos+1]||n})">→</button></footer>`;
  v.addEventListener('close',()=>{v.remove();document.querySelector(`.memory-photo[onclick="viewPhoto(${n})"]`)?.focus()});
  v.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'&&pos>0){e.preventDefault();viewPhoto(list[pos-1])}if(e.key==='ArrowRight'&&pos<list.length-1){e.preventDefault();viewPhoto(list[pos+1])}});
  document.body.append(v);v.showModal();
}
