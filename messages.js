// ========================
// EDIT PERSONAL MESSAGES HERE
// Each entry is a little note from Shrey to her.
// ========================
her.messages = [
  {section:'a very important notification', text:'hi, you.\njust interrupting your extremely important business of being cute.'},
  {text:'i made you a whole operating system because apparently “thinking of you” needed a user interface.'},
  {text:'anyway. these are all for you.\nyes, even the embarrassing ones.\nespecially those.'},
  {section:'a tiny poem, since you’re here', poem:true, text:'i went looking for a rhyme for you.\nblue. true. something about the moon.\nthen you laughed\nand i forgot what i was doing.\n\na fairly accurate poem, actually.'},
  {text:'you know that face you make when you’re trying not to smile?\ni would like to formally request more of that face.'},
  {text:'also the smile.\nactually, send the whole person. i miss her.'},
  {section:'photographic evidence', text:'those purple raincoats deserve their own thank-you note.\nwe look like two very happy grapes on an expedition.'},
  {poem:true, text:'the mountains did their mountain thing.\nthe clouds put on a show.\ni took a picture of the view—\nyou’re in it. thought you should know.'},
  {text:'and that picture of you looking at me instead of the camera?\ni keep looking at it instead of doing literally anything useful.'},
  {text:'i like our properly posed photos.\nbut the ones where one of us forgets to be photogenic?\nthose feel like getting to keep a little bit of the day.'},
  {section:'things i would text you for no reason', text:'saw something funny. wanted to tell you.\nsaw something pretty. wanted to show you.\nnothing happened. still wanted to talk to you.'},
  {text:'you have become my first thought after “you know who would love this?”\nand after “you know who would absolutely judge me for this?”\nversatile. impressive.'},
  {poem:true, text:'if we have nowhere to be,\nlet’s take the longer way.\ni have a story with no ending\nand a hand i’d like to hold all day.'},
  {text:'i would share my last fry with you.\ni would look devastated while doing it.\nbut i would.'},
  {text:'somewhere in my very serious plans for the future is an extremely unserious amount of sitting next to you.'},
  {section:'okay, a little softer now', poem:true, text:'on the days you feel a little less\nlike the person you hoped to be,\ncome as you are.\nbring the tired eyes, the tangled thoughts.\nyou don’t have to tidy yourself up\nto sit beside me.'},
  {text:'i hope you never feel like you have to be entertaining to be wanted.\ni like your stories. i like your silence.\ni just like having you around.'},
  {text:'if your day has been difficult, consider this a very long hug.\nthe kind where i wait for you to let go first.'},
  {poem:true, text:'i can’t fold a hug into a message,\nthough i’ve tried with every line.\nso put your hand against your cheek\nand pretend, for a moment, it’s mine.'},
  {section:'a few things for later', text:'i want more café tables. more walks. more “wait, one more photo.”\nmore of you laughing because i said something ridiculous.\nmore ordinary days that turn out to be the ones i keep.'},
  {poem:true, text:'let the big days have their fireworks.\ni’ll save a little room\nfor your shoes beside the doorway,\nfor your humming in the room,\nfor “shall we order something?”\nfor “come here, look at this.”\nthere is so much life i’d love with you\ninside the smallest bits.'},
  {text:'i can’t promise i’ll always find the perfect words.\ni do want to keep learning how to love you well.\nthe small, everyday, actually-listening kind.'},
  {section:'one last thing. probably.', text:'there are so many photos in here, and somehow none of them do the whole job.\nthey can show me your smile.\nthey can’t quite show what it feels like when it’s meant for me.'},
  {poem:true, text:'if i could leave a note\nin every pocket of your day,\neach one would say:\n\ni’m glad it’s you.\ni’m so glad it’s you.'},
  {text:'okay. go explore your suspicious little computer.\ni’ll be here, being very normal about you.\n\n(extremely untrue.)\n\n— your Shrey'}
];

function showMessages() {
  win('Messages · Shrey → you', '<div class="love-chat"><header class="love-heading"><span class="love-avatar" aria-hidden="true">S</span><div><strong>Shrey</strong><p>a few things i wanted to tell you</p></div></header><div id="love-history" aria-label="Notes from Shrey"></div><div class="love-signoff">All yours. Every word.</div></div>');
  const history=document.getElementById('love-history');
  her.messages.forEach(message=>{
    if(message.section){const label=document.createElement('h2');label.className='love-divider';label.textContent=message.section;history.append(label)}
    const row=document.createElement('article');row.className='love-message'+(message.poem?' love-poem':'');
    const content=document.createElement('p');content.textContent=message.text;row.append(content);history.append(row);
  });
}
