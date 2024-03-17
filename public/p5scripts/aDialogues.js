let currentIndex = 0;

let dia_entrence = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `I came to this mansion because I got a job acceptance letter. My only job is to be a nanny for the little girl who lives inside this mansion…`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `The paper told me to visit in the middle of the night. I don’t see any light from the inside though…`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `Is anyone living here?`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `As soon as I thought I might’ve got scammed, I heard an orgel song coming from the inside of the mansion.`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `There must’ve been a person inside. I should step in.`,
  },
];

let dia_attic = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `The song has been coming from this room. The room seems dusty and old.`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `I see a few furnitures in the room but it doesn’t seem like someone would live in this room for a long time.`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `Must’ve been a storage room?`,
  },
];

let obs_bear = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `A cute teddy bear doll…wait, this one has 8 eyes on it. I guess the owner of this doll has a weird taste.`,
  },
];
let obs_music = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `The song I’ve been hearing must’ve been coming from this music box. It’s a manual music box that turns on as you spin the handle. Then someone must’ve been here recently.`,
  },
];
let obs_mirror = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `On the right side of the room, a long and flat object is covered in a cloth. The exposed corner shows this object is a mirror.`,
  },
];

let dia_attic_talk = [
  {
    textType: 0,
    name: "",
    emotion: "ara_2nor0",
    texts: `As I was thinking of going back, suddenly a little girl showed up from nowhere.`,
  },
  {
    textType: 1,
    name: "???",
    emotion: "ara_2smi0",
    texts: `Hi there, you must be the new nanny, aren’t you?`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2smi0",
    texts: `The little girl came out silently. I didn't even notice she was here. Her voice crawled over my ear like a tiny spider.`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2smi0",
    texts: `Young lady, Are there any workers in this house? And what are you doing in the middle of the night? Where are your parents?`,
  },
  {
    textType: 1,
    name: "???",
    emotion: "ara_2nor0",
    texts: `It's just me! Play with me nanny. I’m so bored alone in this place.`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2nor0",
    texts: `I guess everyone’s asleep except this young girl. And I assume this lady is the little girl I was hired to take care of.`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2nor0",
    texts: `Hmm what’s your name young lady?`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2cur0",
    texts: `...you can call me Eva`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2cur0",
    texts: `Okay Eva, since it’s too late I’ll play with you tomorrow morning. Why don’t you go to sleep and be a good girl? I’ll escort you to your bedroom`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2nor0",
    texts: `I’m not sleepy though! And I’m already in my room.`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2nor0",
    texts: `What she called a room was where I thought it was a storage room. Couldn't believe the master would let her child stay in this kind of messy room.`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2nor0",
    texts: `The room seemed like it wasn’t taken good care of for a long time. Maybe that’s why I was hired. I should probably give a nice clean tomorrow.`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2smi0",
    texts: `Hmm… I will go to sleep if you play a game with me! It’s a simple game. I will tell you a story and you will guess what happened. Easy peasy right?`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2smi0",
    texts: `If you promise to go to bed, I’ll happily join the game`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2smi0",
    texts: `Probably a kid’s simple game she has just come up with. I’ll tell her the answer and let her sleep soon`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2cur0",
    texts: `There was a cook who always makes the perfect meal for the mansion, yet he never gets to eat his own food? Why?`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2cur0",
    texts: `What..?`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2smi0",
    texts: `Like I said, I won’t go to sleep until you get my quiz right.`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2smi0",
    texts: `You don’t have to think on your own. If you ask me questions, I’ll answer by yes or no for better guess.`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2nor0",
    texts: `But for now, why don’t you look around the house? You should get used to this place anyways. It’s not too late to play the game after that.`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2nor0",
    texts: `I think I got caught up with this little girl’s pace…It’s true that I need to look around this place and maybe I’ll get some fresh ideas for the answer.`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2nor0",
    texts: `I’ll be right back. Don’t go anywhere else, alright?`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2smi0",
    texts: `I won’t!`,
  },
  {
    textType: 0,
    name: "",
    emotion: "ara_2smi0",
    texts: `I think I saw the kitchen when I came in. Let me visit there first.`,
  },
];

let dia_kitchen = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: ` `,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `Everything seems quite untouched and looks very unorganized.`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `Let me start to investigate this area.`,
  },
];

let obs_utensil = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `The placement of the Cooking utensils shows that the head cook was a very organized person. But they seem to have rusted for a long time.`,
  },
];
let obs_dish = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `The dishes are not cleaned and broken. The cook must’ve been missing for a long time.`,
  },
];
let obs_book = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `It’s a cook’s recipe book, It also has the preference of the master's favorite food carrot. There’s a note about wearing gloves while touching carrots. Why would the cook have to be careful about normal carrots?`,
  },
];
let obs_food = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `No trace of fresh food, only rotten ones. Is the girl getting a proper meal?`,
  },
];
let obs_pot = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `I don’t get any burnt smells. They must've not cooked the food for a long time.`,
  },
];

dia_attic_kitchen_talk = [
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2smi0",
    texts: `You’re back! How was the tour?`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_2smi0",
    texts: `Questionable things, but the priority is to let you go to sleep.`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2smi0",
    texts: `Anytime when you’re ready.`,
  },
];

dia_attic_end = [
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2cur0",
    texts: `Interesting...`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_2cur0",
    texts: `Very Interesting....`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_3nor0",
    texts: `....`,
  },
  {
    textType: 1,
    name: "You",
    emotion: "ara_3nor0",
    texts: `!!!`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_3nor0",
    texts: `.......`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_3nor0",
    texts: `..........`,
  },
  {
    textType: 1,
    name: "Eva",
    emotion: "ara_3smi0",
    texts: `Thank you for playing with me! See you....again in the near future?`,
  },
];
