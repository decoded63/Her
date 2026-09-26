const friendVideos = [
  { src: 'friend-videos/message-01.mp4', type: 'video/mp4', label: 'A little message', note: 'Press play' },
  { src: 'friend-videos/message-02.mp4', type: 'video/mp4', label: 'A little message', note: 'Press play' },
  { src: 'friend-videos/message-03.mp4', type: 'video/mp4', label: 'A little message', note: 'Press play' },
  { src: 'friend-videos/message-04.mp4', type: 'video/mp4', label: 'A little message', note: 'Press play' },
  { src: 'friend-videos/message-05-compressed.mp4', type: 'video/mp4', label: 'A little message', note: 'Press play' }
];

function openFriendsLounge(){
  win('YOUR PEOPLE', `<section class="friends-lounge"><div class="lounge-kicker">A LITTLE LOVE, DELIVERED</div><h2>Your friends have something to say.</h2><p>A handful of tiny messages from people who are very glad you exist.</p><div class="friend-grid">${friendVideos.map((video, index) => `<button class="friend-card" onclick="openFriendVideo(${index})"><span>${video.label} · ${String(index + 1).padStart(2, '0')}</span><small>${video.note}</small></button>`).join('')}</div></section>`, 'wide');
}

function openFriendVideo(index){
  const video = friendVideos[index];
  win(`MESSAGE ${String(index + 1).padStart(2, '0')}`, `<section class="friend-video"><div class="mini-kicker">JUST FOR YOU</div><h2>A little something from your people</h2><video controls playsinline preload="auto"><source src="${video.src}" type="${video.type}">Your browser can’t play this video.</video></section>`, 'wide');
}
