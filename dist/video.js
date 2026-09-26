function openSecretVideo(){
  win('DO NOT CLICK', `<section class="secret-video"><div class="envelope-seal">✉</div><h2>You opened it.</h2><p>A tiny surprise, sealed just for you.</p><video controls autoplay playsinline preload="metadata"><source src="surprises/do-not-click.mp4" type="video/mp4">Your browser can’t play this video.</video></section>`, 'wide');
}

archiveFiles = function(){
  win('ARCHIVE: UNLOCKED', `<div class="files"><div class="file" onclick="toast('you were specifically told not to open this.')">README.txt</div><div class="file" onclick="toast('classified, allegedly.')">classified.jpg</div><div class="file" onclick="toast('plans: more days, more stories.')">future_plans.txt</div><div class="file secret-envelope" onclick="openSecretVideo()"><span>✉</span><b>DO_NOT_CLICK.envelope</b></div><div class="file" onclick="openLetter()">for_you.txt ${birthday ? '' : '<span class="muted">— ENCRYPTED · AVAILABLE 27 SEPTEMBER 00:00 IST</span>'}</div></div>`);
};

const baseRenderDesktop = renderDesktop;
renderDesktop = function(){
  baseRenderDesktop();
  dock.innerHTML = '<button class="friends-button" onclick="openFriendsLounge()">Your friends have something to say… wanna hear?</button>';
};

if (!os.classList.contains('hidden')) renderDesktop();
