function archive(){
  const countdown = birthday ? 'AVAILABLE NOW' : timeleft();
  win('ENCRYPTED ARCHIVE', `<div class="archive"><div style="font-size:42px">🔒</div><h2>Password required.</h2><p class="muted">something only you should know</p><input id="pass" type="password" placeholder="password"><button class="primary" onclick="unlock()">unlock archive</button><button class="hint-trigger" onclick="openHintGate()">need a little hint?</button><div class="count" id="count">${countdown}</div></div>`);
}

function normalizeAnswer(value){
  return value.toLowerCase().replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function editDistance(left, right){
  const row = Array.from({ length: right.length + 1 }, (_, i) => i);
  for (let i = 1; i <= left.length; i++) {
    let previous = row[0]; row[0] = i;
    for (let j = 1; j <= right.length; j++) {
      const saved = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (left[i - 1] === right[j - 1] ? 0 : 1));
      previous = saved;
    }
  }
  return row[right.length];
}

function isWifeyAnswer(value){
  const answer = normalizeAnswer(value);
  const sweetAnswers = ['wifey', 'wife', 'my wife', 'your wife', 'your wifey', 'future wife', 'future wifey', 'girlfriend', 'my girlfriend', 'love', 'my love', 'soulmate', 'my soulmate', 'partner', 'my partner', 'better half', 'my better half', 'bae', 'baby', 'my baby', 'queen'];
  if (sweetAnswers.includes(answer)) return true;
  const words = answer.split(' ').filter(Boolean);
  return words.some(word => ['wifey', 'wife'].some(target => editDistance(word, target) <= 2));
}

function openHintGate(){
  win('HINT SECURITY', `<section class="hint-gate"><div class="hint-kicker">ONE IMPORTANT QUESTION</div><h2>Who are you to me?</h2><p>Answer honestly. A little spelling chaos is completely allowed.</p><input id="hint-answer" autocomplete="off" placeholder="your answer"><button class="primary" onclick="checkHintAnswer()">unlock the hint</button><div class="answer-note" id="answer-note"></div></section>`);
  setTimeout(() => document.getElementById('hint-answer')?.focus(), 50);
}

function checkHintAnswer(){
  const input = document.getElementById('hint-answer');
  const note = document.getElementById('answer-note');
  if (!input || !note) return;
  if (!isWifeyAnswer(input.value)) { note.textContent = 'Cute attempt. Try the title you know you have.'; return; }
  note.innerHTML = '<div class="hint-reveal"><b>Hint unlocked ✦</b>The 3 words that I say to you daily — but you might be embarrassed if <em>I said it out loud.</em></div>';
}
