her.name = 'Gungun';

const bootTitle = document.querySelector('.bootbox h1');
const bootLines = document.querySelectorAll('.bootline');
if (bootTitle) bootTitle.textContent = 'GUGGU_OS';
if (bootLines[0]) bootLines[0].textContent = 'initializing Gungun...';
if (bootLines[1]) bootLines[1].textContent = 'loading little things Shrey adores...';
if (bootLines[2]) bootLines[2].textContent = 'loading memories with Guggu...';
if (bootLines[3]) bootLines[3].textContent = 'checking Shrey’s favorite person...';
if (bootLines[4]) bootLines[4].textContent = 'checking birthday status for Gungun...';
if (welcome) welcome.textContent = 'Welcome, Gungun. Love, Shrey.';

const letterStyle = document.createElement('style');
letterStyle.textContent = `
  .love-note { max-width: 680px; margin: 0 auto; color: #26231e; background: #fbf5e8; border-radius: 5px; padding: clamp(28px, 6vw, 62px); box-shadow: 0 18px 42px #0007; font: 1.08rem/1.85 Newsreader, Georgia, serif; }
  .love-note header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 38px; border-bottom: 1px solid #bcae98; padding-bottom: 14px; color: #766653; font: 0.72rem 'DM Mono', monospace; letter-spacing: .12em; }
  .love-note h2 { margin: 0; color: #2d2821; font: 400 clamp(2rem, 6vw, 3.2rem) Newsreader, Georgia, serif; }
  .love-note p { margin: 0 0 1.4em; }
  .love-note .signature { margin-top: 2.2em; margin-bottom: 0; }
  .love-note .return { color: #322b22; border-color: #a89984; }
`;
document.head.append(letterStyle);

openLetter = function () {
  win('for_you.txt', `<article class="love-note"><header><span>NOTEPAD</span><span>for_you.txt</span></header><h2>My Guggu,</h2><p>Do you remember Hanumant Dham? I do. I remember sitting there, barely able to form a sentence because you'd somehow made my brain completely useless, and the only thing I could manage was: <em>“Langoor ke haath angoor lag gya.”</em> I meant it as a joke about myself—but really, I was just a shy langoor watching the most beautiful person I'd ever seen, hoping you wouldn't notice how nervous I was.</p><p>You did notice, obviously. But instead of calling me out, you laughed with me. And that's when I realized—I wanted to spend my life making you laugh. Even if it meant being an idiot sometimes. <em>Especially</em> if it meant that.</p><p>Today, on your birthday, I need you to know something that gets lost between all the times I irritate you into anger, just so I can see that smile when you finally crack and laugh: I'm in awe of you. Genuinely.</p><p>Not just because you're the most beautiful person I know after my mom—though you absolutely are. But because of who you're becoming. I watch you build your business, fight for your independence, carry the weight of your parents on your shoulders without complaining, and somehow still make time to be here, with me, in this thing we're building. You're 22 and you're already the strongest person in almost every room.</p><p>What gets me, though—what actually makes me fall deeper—is the small things no one else sees. The way you're changing your habits. The way you're working through your own stuff, not for yourself, but <em>for us</em>. For peace between us. For a better version of our life together. That kind of love, Guggu, that's the kind that makes me believe in everything good.</p><p>I know I'm weird. I know I tease you and irritate you and sometimes say the dumbest things. But it's because being with you makes me brave enough to be myself—completely, messily, awkwardly myself. You make me feel safe enough to not be the shy langoor anymore.</p><p>You call me Buggu like it's a secret only you know. And every time you say it, I feel like the luckiest person alive, because I get to be <em>your</em> Buggu. I get to watch you chase your dreams. I get to be the one you come home to. I get to irritate you and make you angry and then see that laugh that lights up my entire world.</p><p>Happy birthday to the girl who changed everything.</p><p>Happy birthday to the girl who's changing herself every day, and bringing me along on that journey.</p><p>Happy birthday to my Guggu—my most beautiful, ambitious, cute, perfect girl.</p><p>I love you more than langoors love angoor.</p><p class="signature"><strong>Always,</strong><br><strong>&nbsp;Buggu</strong></p><button class="return" onclick="closeWin()">[ close note ]</button></article>`, 'wide');
};

archiveFiles = function () {
  win('ARCHIVE: UNLOCKED', `<div class="files"><div class="file" onclick="toast('you were specifically told not to open this.')">README.txt</div><div class="file" onclick="toast('classified, allegedly.')">classified.jpg</div><div class="file" onclick="toast('plans: more days, more stories.')">future_plans.txt</div><div class="file secret-envelope" onclick="openSecretVideo()"><span>✉</span><b>DO_NOT_CLICK.envelope</b></div><div class="file" onclick="openLetter()">for_you.txt</div></div>`);
};
