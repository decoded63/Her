// ========================
// EDIT CALENDAR DATES HERE
// Months use 0–11: March is 2, September is 8, November is 10.
// ========================
her.calendarEvents = [
  {
    month:2, day:2, monthLabel:'March',
    title:'the first time we met',
    eyebrow:'02 · the beginning',
    comment:'National P.G. College, Lucknow. You got butterflies in your stomach, and somehow the universe got very quiet for a second. A perfectly ordinary date on the calendar that quietly became the start of everything.'
  },
  {
    month:2, day:7, monthLabel:'March',
    title:'we started talking',
    eyebrow:'07 · the first messages',
    comment:'Five days later, the conversation began. Just words on a screen at first—except they kept becoming the part of the day I waited for. I am very glad we did not run out of things to say.'
  },
  {
    month:2, day:8, monthLabel:'March',
    title:'i confessed',
    eyebrow:'08 · i said it first',
    comment:'I finally said the thing that had been making my heart behave suspiciously. It was brave, slightly terrifying, and entirely worth it because it led to you knowing exactly how much you had already started to matter.'
  },
  {
    month:2, day:12, monthLabel:'March',
    title:'you confessed · we started dating',
    eyebrow:'12 · the yes',
    comment:'Then you said it too. Four days after my confession, you turned a hopeful little feeling into us. Officially. The best plot twist March has ever had.'
  },
  {
    month:8, day:27, monthLabel:'September',
    title:'your birthday',
    eyebrow:'27 · the day you arrived',
    comment:'The calendar’s favourite day. The annual reminder that the world became a little warmer, louder, funnier, and much more beautiful because you are in it. I plan to celebrate that properly.'
  },
  {
    month:10, day:8, monthLabel:'November',
    title:'my birthday',
    eyebrow:'08 · apparently my day',
    comment:'Technically it is my birthday, but you are still the best part of it. I will accept cake, attention, and any opportunity to have you next to me. In that order. Probably.'
  }
];

let calendarMonth=2;
function calendar(){showCalendar(calendarMonth)}
function showCalendar(month){
  calendarMonth=month;
  const names=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const important=[2,8,10];
  win('Calendar · dates worth keeping', `<section class="memory-calendar"><header class="calendar-heading"><div><span>2026 · THE IMPORTANT BITS</span><h2>Some dates changed everything.</h2></div><p>Not every day gets a pin. These ones do.</p></header><nav class="calendar-tabs">${important.map(i=>`<button class="${i===month?'active':''}" onclick="showCalendar(${i})">${names[i].slice(0,3).toUpperCase()}</button>`).join('')}</nav><div class="calendar-layout"><div class="month-card"><div class="month-name"><h3>${names[month]} <small>2026</small></h3><span>${her.calendarEvents.filter(e=>e.month===month).length} saved ${her.calendarEvents.filter(e=>e.month===month).length===1?'date':'dates'}</span></div><div class="month-grid">${monthCells(month).join('')}</div></div><aside class="date-note" id="date-note"></aside></div><footer class="calendar-footer">Tap a marked day to open the reason it matters.</footer></section>`,'wide');
  const selected=her.calendarEvents.find(e=>e.month===month);if(selected)showDateNote(selected.month,selected.day);
}
function monthCells(month){
  const labels=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const start=new Date(Date.UTC(2026,month,1)).getUTCDay(),days=new Date(Date.UTC(2026,month+1,0)).getUTCDate();
  const cells=labels.map(day=>`<div class="calendar-weekday">${day}</div>`);
  for(let gap=0;gap<start;gap++)cells.push('<div class="calendar-day blank"></div>');
  for(let day=1;day<=days;day++){
    const event=her.calendarEvents.find(e=>e.month===month&&e.day===day);
    cells.push(event?`<button class="calendar-day marked ${month===8&&day===27?'birthday-day':''}" onclick="showDateNote(${month},${day})"><span>${day}</span><small>${event.title}</small></button>`:`<div class="calendar-day"><span>${day}</span></div>`);
  }
  return cells;
}
function showDateNote(month,day){
  const event=her.calendarEvents.find(e=>e.month===month&&e.day===day),note=document.getElementById('date-note');if(!event||!note)return;
  document.querySelectorAll('.calendar-day.marked').forEach(el=>el.classList.toggle('active',Number(el.querySelector('span')?.textContent)===day));
  note.innerHTML=`<span class="date-eyebrow">${event.eyebrow}</span><div class="date-number">${String(event.day).padStart(2,'0')}</div><p class="date-month">${event.monthLabel}</p><h3>${event.title}</h3><p>${event.comment}</p><span class="date-tag">KEPT FOREVER</span>`;
}
