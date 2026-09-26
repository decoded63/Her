// ========================
// EDIT PLAYLIST HERE
// Tracks play in order. Maan Meri Jaan is the emotional ending;
// Stay begins after a short pause as the post-credit track.
// ========================
her.playlist = [
  {title:'Zara Zara', artist:'JalRaj', file:'audio/01-zara-zara.mp3', phase:'the opening', reason:'Dreamy, close, and quietly impossible to skip.'},
  {title:'Teri Jhuki Nazar', artist:'Shafqat Amanat Ali', file:'audio/02-teri-jhuki-nazar.mp3', phase:'the pull', reason:'Keeps the slow, magnetic feeling right where it belongs.'},
  {title:'Saathiya', artist:'Sonu Nigam', file:'audio/03-saathiya.mp3', phase:'warmer now', reason:'The moment the feeling opens up and starts to glow.'},
  {title:'Jeene Laga Hoon', artist:'Atif Aslam · Shreya Ghoshal', file:'audio/04-jeene-laga-hoon.mp3', phase:'falling', reason:'From attraction to the very obvious problem of actually falling for you.'},
  {title:'Maiyya Mainu', artist:'Sachet–Parampara', file:'audio/05-maiyya-mainu.mp3', phase:'a little deeper', reason:'For the vulnerable part—the bit that does not know how to be casual.'},
  {title:'Bairan', artist:'Banjaare', file:'audio/06-bairan.mp3', phase:'the ache', reason:'A little longing, because apparently missing you needed its own soundtrack.'},
  {title:'Thinking Of You', artist:'AP Dhillon', file:'audio/07-thinking-of-you.mp3', phase:'late-night thoughts', reason:'Modern, quiet, and still entirely about you being on my mind.'},
  {title:'Maan Meri Jaan', artist:'King', file:'audio/08-maan-meri-jaan.mp3', phase:'the declaration', reason:'The actual ending. Direct, committed, and very much on purpose.'},
  {title:'Stay', artist:'King', file:'audio/09-stay.mp3', phase:'after credits', reason:'The softer light after the last big feeling.'}
];

let musicAudio=null, musicTrack=0, musicLocked=true, musicStartTimer=null, musicTransition=false;
const musicOpenApp=openApp;
openApp=function(app){if(app==='music'){showMusicWarning();return}musicOpenApp(app)};

function showMusicWarning(){
  musicLocked=true; clearInterval(musicStartTimer);
  win('Songs that are unfortunately yours now', `<div class="music-warning"><div class="warning-mark">♪</div><span class="music-eyebrow">LISTENING NOTICE</span><h2>This is not a shuffle playlist.</h2><p>It has been arranged very carefully—from a little attraction to a very obvious declaration. You are required to let the story finish.</p><p class="warning-small">No pausing. No skipping. No running away halfway through the feelings.</p><div class="warning-count" id="warning-count">5</div><button class="music-start" id="music-start" disabled>wait for it…</button></div>`,'wide');
  if(openWin)openWin.querySelector('.close').style.visibility='hidden';
  let left=5, label=document.getElementById('warning-count'), start=document.getElementById('music-start');
  musicStartTimer=setInterval(()=>{left--;label.textContent=left;if(left<=0){clearInterval(musicStartTimer);label.textContent='okay. go.';start.disabled=false;start.textContent='start our playlist';start.onclick=beginPlaylist}},1000);
}

function beginPlaylist(){musicTrack=0;renderMusicPlayer();playTrack(0)}
function renderMusicPlayer(){
  const track=her.playlist[musicTrack];
  win('Songs that are unfortunately yours now', `<section class="locked-player"><div class="music-topline"><span>LISTENING MODE</span><span id="music-position">${String(musicTrack+1).padStart(2,'0')} / ${String(her.playlist.length).padStart(2,'0')}</span></div><div class="record-wrap"><div class="record"><div></div></div><span class="record-number">${String(musicTrack+1).padStart(2,'0')}</span></div><p class="track-phase" id="track-phase">${track.phase}</p><h2 id="track-title">${track.title}</h2><p class="track-artist" id="track-artist">${track.artist}</p><p class="track-reason" id="track-reason">${track.reason}</p><div class="music-progress"><div><span id="music-time">0:00</span><div class="progress-line"><i id="progress-fill"></i></div><span id="music-duration">--:--</span></div><p id="music-status">The next song will begin automatically.</p></div><footer class="locked-footer"><span class="lock-icon">⌁</span> pause and skip are temporarily unavailable. i know. i’m sorry. mostly.</footer></section>`,'wide');
  if(openWin)openWin.querySelector('.close').style.visibility='hidden';
}
function playTrack(index){
  const track=her.playlist[index];
  musicTransition=true;
  if(musicAudio){musicAudio.pause();musicAudio.src=''}
  musicAudio=new Audio(track.file);musicAudio.preload='metadata';
  const activeAudio=musicAudio;
  musicAudio.addEventListener('loadedmetadata',()=>{const d=document.getElementById('music-duration');if(d)d.textContent=formatTime(musicAudio.duration)});
  musicAudio.addEventListener('timeupdate',updateMusicProgress);
  musicAudio.addEventListener('ended',nextTrack);
  musicAudio.addEventListener('pause',()=>{if(musicLocked&&!activeAudio.ended&&!musicTransition)activeAudio.play().catch(()=>{})});
  musicTransition=false;
  musicAudio.play().catch(()=>{const status=document.getElementById('music-status');if(status)status.textContent='Tap the message area to begin the track.';openWin?.querySelector('.locked-player')?.addEventListener('click',()=>musicAudio.play().catch(()=>{}),{once:true})});
}
function nextTrack(){
  if(musicTrack===7){const status=document.getElementById('music-status');if(status)status.textContent='The ending has landed. Give it a second.';setTimeout(()=>{musicTrack=8;renderMusicPlayer();playTrack(8)},2500);return}
  if(musicTrack>=her.playlist.length-1){finishPlaylist();return}
  musicTrack++;renderMusicPlayer();playTrack(musicTrack);
}
function finishPlaylist(){musicLocked=false;if(musicAudio){musicAudio.pause();musicAudio=null}if(openWin){openWin.querySelector('.close').style.visibility='visible';openWin.querySelector('.content').innerHTML=`<section class="playlist-finish"><span>PLAYLIST COMPLETE</span><h2>you made it to the end.</h2><p>That was the whole little story. I hope you heard what I was trying to say between the songs.</p><button class="music-start" onclick="showMusicWarning()">replay it</button></section>`}}
function updateMusicProgress(){if(!musicAudio)return;const fill=document.getElementById('progress-fill'),time=document.getElementById('music-time');if(fill&&Number.isFinite(musicAudio.duration))fill.style.width=`${(musicAudio.currentTime/musicAudio.duration)*100}%`;if(time)time.textContent=formatTime(musicAudio.currentTime)}
function formatTime(value){if(!Number.isFinite(value))return '--:--';return `${Math.floor(value/60)}:${String(Math.floor(value%60)).padStart(2,'0')}`}
