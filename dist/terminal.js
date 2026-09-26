// ========================
// EDIT TERMINAL RESPONSES HERE
// Each command opens one small paragraph about her.
// ========================
her.terminalCommands = {
  help: 'Available commands: whoami · whois shrey · why-her · best-memory · future · birthday · compliment · insult · secret · marryme · sudo birthday · clear',
  whoami: 'You are the person who can turn a completely ordinary day into something I want to remember. You are laughter in the middle of a bad mood, comfort without asking too many questions, and someone I would choose again even if I had to find you from the beginning.',
  'whois shrey': 'Shrey is a person who was doing a fairly normal job of existing until you arrived and made his thoughts much less organized. He now has strong opinions about your smile, your safety, your happiness, and whether you have eaten properly.',
  'why-her': 'Because you are not one thing. You are funny when you are trying and even funnier when you are not. You are soft without being weak, brave without making a show of it, and somehow still surprising after every conversation. The honest answer is that there are too many reasons, and all of them sound a little like home.',
  'best-memory': 'There is no fair answer to that. There are mountain roads, first conversations, the day we became us, and all the tiny pieces in between. My favourite memory tends to be whichever one has you laughing in it, which is inconveniently most of them.',
  future: 'I hope the future has more of the quiet things: your hand finding mine, the long way home, another trip where we take too many photos, a kitchen we both know, and a thousand small reasons to say “look at this” because you are still the first person I want to tell.',
  birthday: 'Your birthday is not just a date to celebrate. It is a reminder that the world got someone with your kindness, your chaos, your very particular laugh, and the ability to make one person feel outrageously lucky. I am very glad it gave me you.',
  compliment: 'You have a way of being beautiful that has very little to do with photographs, although those are quite unfair too. It is in the way you care, the way you notice, the way you make a place feel softer after you enter it. You are lovely in every sense that matters.',
  insult: 'I was prepared to write something devastating here, but the truth is that even your most annoying habits are attached to you, so they have become suspiciously adorable. This is terrible for my credibility. Please do not use it against me.',
  secret: 'The secret is that I notice more than I say. I notice when you are quiet in a way that means something. I notice the little things you love. I notice the ways you make my days better. I keep a lot of it tucked away because some feelings deserve careful handling.',
  marryme: 'Feature currently in long-term development, but the research is looking extremely promising. The primary requirement appears to be continuing to choose each other with the same softness, patience, and ridiculousness that got us here.',
  'sudo birthday': 'Permission granted. Today, you are officially allowed to be celebrated loudly, loved generously, given more attention than you pretend to want, and reminded that you are one of the best things that ever happened to someone named Shrey.'
};

function showTerminal(){
  win('HER_OS Terminal', `<section class="her-terminal"><header><span>HER_OS TERMINAL</span><span>private session · encrypted affection</span></header><div class="terminal-output" id="terminal-output"><div class="terminal-welcome">Welcome to the part of the system that is terrible at acting normal about you.<br><br>Type <b>help</b> to begin.</div></div><form class="terminal-prompt" onsubmit="terminalRun(event)"><span>shrey@her-os:~$</span><input id="terminal-input" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Terminal command"><button aria-label="Run command">↵</button></form></section>`,'wide');
  setTimeout(()=>document.getElementById('terminal-input')?.focus(),50);
}
function terminalRun(event){
  event.preventDefault();
  const input=document.getElementById('terminal-input'), output=document.getElementById('terminal-output');
  const command=input.value.trim().toLowerCase();if(!command)return;
  const entry=document.createElement('div');entry.className='terminal-entry';
  const typed=document.createElement('div');typed.className='terminal-typed';typed.textContent=`shrey@her-os:~$ ${command}`;entry.append(typed);
  if(command==='clear'){output.innerHTML='';input.value='';return;}
  const response=document.createElement('p');response.className='terminal-response';response.textContent=her.terminalCommands[command]||'That command does not exist here. Try help—this system is much better at being sentimental than technical.';entry.append(response);output.append(entry);input.value='';output.scrollTop=output.scrollHeight;
}
