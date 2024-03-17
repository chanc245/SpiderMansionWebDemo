function preload() {
  //Font
  PTSerif = loadFont("p5assets/fonts/PTSerif-Regular.ttf");

  //Scene background img
  scene0_Img = loadImage("p5assets/scene/S0_title_v2.jpg");
  scene1_Img = loadImage("p5assets/location/location_entrence.jpg");
  scene2_Img = loadImage("p5assets/location/location_attic.jpg");
  scene3_Img = loadImage("p5assets/location/location_attic_blur.jpg");
  scene4_Img = loadImage("p5assets/location/location_kitchen.jpg");
  scene6_Img = loadImage("p5assets/scene/S6_interface.png");
  scene8_Img = loadImage("p5assets/scene/S8_endpage.jpg");

  //UI img
  des_UI = loadImage("p5assets/UI/dia_des_UI.png");
  dia_UI = loadImage("p5assets/UI/dia_UI.png");
  glowHint = loadImage("p5assets/UI/glowHint.png");
  but_UI = loadImage("p5assets/UI/button_UI.png");

  //Pop Hints img
  S0_about = loadImage("p5assets/popHints/S0_about.png");
  S0_credit = loadImage("p5assets/popHints/S0_credit.png");
  S6_ready = loadImage("p5assets/popHints/S6_ready.png");
  S6_answer = loadImage("p5assets/popHints/S6_answer.png");
  S6_rules = loadImage("p5assets/popHints/S6_rules.png");
  S6_clues = loadImage("p5assets/popHints/S6_clues.png");

  //Eva Expression img
  normal_2eye = loadImage("p5assets/charaFace/ara_2eye_normal_open.png");
  ara_2nor0 = loadImage("p5assets/charaFace/ara_2eye_normal_open.png");
  ara_2nor1 = loadImage("p5assets/charaFace/ara_2eye_normal_close.png");
  ara_2smi0 = loadImage("p5assets/charaFace/ara_2eye_smile_open.png");
  ara_2smi1 = loadImage("p5assets/charaFace/ara_2eye_smile_close.png");
  ara_2cur0 = loadImage("p5assets/charaFace/ara_2eye_curious_open.png");
  ara_2ser0 = loadImage("p5assets/charaFace/ara_2eye_serious_open.png");
  ara_3nor0 = loadImage("p5assets/charaFace/ara_3eye_normal_open.png");
  ara_3smi0 = loadImage("p5assets/charaFace/ara_3eye_smile_open.png");
}

function setup() {
  createCanvas(1024, 768);

  //Set up font
  textFont(PTSerif);

  //Location Description
  entrence_diaBox = new DialogueBox(dia_entrence);
  attic_diaBox = new DialogueBox(dia_attic);
  kitchen_diaBox = new DialogueBox(dia_kitchen);

  //Conversaion
  attic_diaBox_talk = new DialogueBox(dia_attic_talk);
  kitchenObs_diaBox_talk = new DialogueBox(dia_attic_kitchen_talk);
  
  //End 
  attic_diaBox_end = new DialogueBox(dia_attic_end);

  //Attic Obsercation Dia
  attic_obs_bear = new DialogueBox(obs_bear);
  attic_obs_music = new DialogueBox(obs_music);
  attic_obs_mirror = new DialogueBox(obs_mirror);

  //Kitchen Observation Dia
  kitchen_obs_utensil = new DialogueBox(obs_utensil);
  kitchen_obs_dish = new DialogueBox(obs_dish);
  kitchen_obs_book = new DialogueBox(obs_book);
  kitchen_obs_food = new DialogueBox(obs_food);
  kitchen_obs_pot = new DialogueBox(obs_pot);

  //Hint text
  S0about = new ShowHint(830, 975, 481, 529, S0_about, 848, 868, 270, 290);
  S0credit = new ShowHint(830, 975, 434, 482, S0_credit, 853, 873, 277, 297);

  S6ready = new ShowHint(520, 650, 225, 255, S6_ready, 633, 703, 442, 477);
  S6answer = new ShowHint(290, 360, 442, 477, S6_answer, 0, 0, 0, 0);
  S6rules = new ShowHint(915, 939, 228, 252, S6_rules, 860, 880, 318, 338);
  S6clues = new ShowHint(670, 800, 225, 255, S6_clues, 700, 730, 100, 130);

  //ansInput creation
  ansInput = createInput();

  ansInput.position(181, 400);

  ansInput.style("width", "630px");
  ansInput.style("height", "50px");

  ansInput.style("background-color", "#D9D9D9");
  ansInput.style("border-radius", "10px");

  ansInput.style("font-family", "PTSerif");
  ansInput.style("font-size", "24px");
  ansInput.style("color", "#A3A3A3");

  ansInput.attribute("placeholder", "   Type your final answer here");
  ansInput.hide();
}

function draw() {
  background(220);

  changeScene();

  allDebugFunction();
}

function mousePressed() {
  // showXY();

  if (locationNum == 1) entrence_diaBox.advance();
  if (locationNum == 2) attic_diaBox.advance();
  if (locationNum == 3) attic_diaBox_talk.advance();
  if (locationNum == 4) kitchen_diaBox.advance();
  if (locationNum == 5) kitchenObs_diaBox_talk.advance();
  if (locationNum == 7) attic_diaBox_end.advance();
}
