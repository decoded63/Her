// ========================
// EDIT PERSONAL PLACES HERE
// ========================
her.places = [
  {
    name:'National P.G. College',
    city:'Lucknow, Uttar Pradesh',
    type:'where we met',
    chapter:'01 · the beginning',
    memory:'Somewhere between ordinary college days, crowded corridors, and lives going in different directions, I found you.',
    note:'The first pin. Neither of us knew it was the start of the whole map.',
    position:[68,67]
  },
  {
    name:'Hanumant Dham',
    city:'Lucknow, Uttar Pradesh',
    type:'our first date',
    chapter:'02 · officially us',
    memory:'The first proper date: a little nervous, a little awkward, and already much more special than I knew how to say.',
    note:'Lucknow gave us a beginning, then quietly gave us this day too.',
    position:[76,75]
  },
  {
    name:'Aerocity',
    city:'Chandigarh',
    type:'a chapter we lived',
    chapter:'03 · home, briefly',
    memory:'Our live-in chapter—the wonderfully ordinary kind of memory made from shared rooms, small routines, food decisions, and simply coming home to you.',
    note:'Proof that a place becomes important when everyday life with you happens inside it.',
    position:[31,36]
  },
  {
    name:'Himachal Pradesh',
    city:'Our favourite place to be',
    type:'where we breathe easier',
    chapter:'04 · the favourite',
    memory:'Cold air, mountain roads, questionable weather, and the easiest version of us. Himachal feels like the world turning its volume down so I can hear you laugh.',
    note:'If happiness needed a landscape, ours would probably have mountains.',
    position:[36,17]
  },
  {
    name:'Valley of Flowers',
    city:'Uttarakhand',
    type:'a place waiting for us',
    chapter:'05 · next',
    memory:'One day: the two of us, a ridiculous number of flowers, tired feet, too many photos, and another beautiful place made better because you are in it.',
    note:'Not a memory yet. Just a promise with coordinates.',
    position:[69,20],
    future:true
  }
];

function showMemoryMap() {
  win('Maps · our little geography', `<div class="memory-map-shell">
    <header class="map-heading"><div><span class="map-kicker">OUR PLACES</span><h2>Five pins. One ongoing story.</h2></div><p>Lucknow → Chandigarh → the mountains → wherever we go next.</p></header>
    <div class="map-layout">
      <div class="map-board" aria-label="A stylized map of five important places">
        <div class="map-grid"></div>
        <svg class="map-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M68 67 C72 69 74 72 76 75 C62 65 45 47 31 36 C28 29 31 21 36 17 C48 13 61 14 69 20"/></svg>
        <span class="map-region region-one">HIMACHAL</span><span class="map-region region-two">LUCKNOW</span><span class="map-region region-three">CHANDIGARH</span><span class="map-region region-four">UTTARAKHAND</span>
        ${her.places.map((p,i)=>`<button class="map-marker ${p.future?'future':''}" style="left:${p.position[0]}%;top:${p.position[1]}%" onclick="selectPlace(${i})" aria-label="Open ${p.name}"><span>${i+1}</span><b>${p.name}</b></button>`).join('')}
        <div class="map-legend"><span><i></i> memory</span><span><i class="future-dot"></i> next</span></div>
      </div>
      <aside class="place-panel" id="place-panel"></aside>
    </div>
    <nav class="place-strip" aria-label="All map locations">${her.places.map((p,i)=>`<button onclick="selectPlace(${i})" id="place-tab-${i}"><span>${String(i+1).padStart(2,'0')}</span>${p.name}</button>`).join('')}</nav>
  </div>`, 'wide');
  selectPlace(0);
}

function selectPlace(index) {
  const p=her.places[index], panel=document.getElementById('place-panel');
  if(!panel)return;
  document.querySelectorAll('.map-marker').forEach((el,i)=>el.classList.toggle('active',i===index));
  document.querySelectorAll('.place-strip button').forEach((el,i)=>el.classList.toggle('active',i===index));
  panel.innerHTML=`<span class="place-chapter">${p.chapter}</span><div class="place-number">${String(index+1).padStart(2,'0')}</div><p class="place-type">${p.type}</p><h3>${p.name}</h3><span class="place-city">⌖ ${p.city}</span><p class="place-memory">${p.memory}</p><blockquote>${p.note}</blockquote>${p.future?'<span class="future-badge">SAVED FOR LATER</span>':''}`;
}
