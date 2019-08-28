
const sellingPoints = [
  "Ordinary Wizarding Levels",
  "Weasleys' Wizard Wheezes",
  "FAKE WANDS and trick sweets, loads of stuff",
  "SHE HOOTED SLEEPILY dipped her beak briefly into his goblet of orange juice, then took off again, clearly desperate for a good long sleep in the Owlery",
  "VOLDEMORT raised one of his long white fingers and put it very close to Harry's cheek",
  "SHE READ OUT large portions of their predictions, commending them for their unflinching acceptance of the horrors in store for them",
  "WRITING WEEKLY ESSAYS on the goblin rebellions of the eighteenth century",
  "OBSERVE THE SKREWTS and make notes on their extraordinary behavior",
  "MALFOY'S PALE FACE went slightly pink",
  "HE DIDN'T LIKE THE SOUND of that Truth Potion at all, nor would he put it past Snape to slip him some",
  "HARRY WOULDN'T HAVE let his worst enemy face those monsters unprepared",
  "NOW SLIP ME SNUG about your ears, I've never yet been wrong, I'll have a look inside your mind",
  "NEARLY HEADLESS NICK chortled so much that his ruff slipped and his head flopped off, dangling on the inch or so of ghostly skin and muscle that still attached it to his neck",
  "WINKY THE HOUSE-ELF was fighting her way out of a clump of bushes nearby",
  "MIXING UP Love Potions",
  "HARRY REALIZED that the foot-long thing was Dudley's tongue - and that a brightly colored toffee wrapper lay on the floor before him",
  "HAGRID LAUNCHED HIMSELF forward on top of the skrewt that was and flattened it; a blast of fire shot out of its end, withering the pumpkin plants nearby",
  "THE DOOR IN THE CORNER- behind which the dementors undoubtedly still stood, waiting",
  "NO ONE'S tried to attack me so far, except a dragon and a couple of grindylows",
  "PULLING GROTESQUELY mad faces, and waggling their tongues like snakes",
  "IT WAS AS THOUGH someone had exploded a box of fireworks within the compartment",
  "HE-WHO-MUST-NOT-BE-NAMED operated always in the greatest secrecy",
  "You deserve this pain, Wormtail",
  "THE CURTAINS were still drawn, and they could hear Fang barking as they approached",
  "TIME WAS SLIPPING away as though somebody had bewitched the clocks to go extra-fast",
  "FRANK DUG HIS FINGER still more vigorously into his ear",
  "Lairy fights",
  "THE SHARK-MAN SWAM straight to Hermione and began snapping and biting at her ropes",
  "IT MOVED along the golden thread",
  "CHUNKS OF HIS grizzled hair were missing",
  "AT ZE PALACE of Beauxbatons, we 'ave ice sculptures all around ze dining chamber",
  "Lumos",
  "Death Eaters",
  "HE EXTENDED the bleeding stump, but Voldemort laughed again",
  "SHE HAD OPENED THE LAST ENVELOPE, and yellowish-green liquid gushed over her hands, which began to erupt in large yellow boils",
  "Crucio!",
  "YOU MIGHT BE laboring under the delusion that the entire wizarding world is impressed with you",
  "THE SPHINX smiled at him",
  "HARRY HAD A SUDDEN VISION of a pair of legs and an eyeball lying abandoned on the pavement of Privet Drive",
  "AUNT PETUNIA shrieked and fell backward over the coffee table",
  "TEN POINTS from Gryffindor",
  "DOBBY GAVE a frightened sort of giggle",
  "WHITE-HOT KNIVES were piercing every inch of his skin",
  "THE EMPTY BOTTLE of butterbeer rolled away across the stone-flagged floor",
  "Stupefy!",
  "IT SEEMED THAT Moody's rolling eye was magical and could see out of the back of his head",
  "HE TURNED TO STARE unseeingly at the unicorn"
];
  
const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
  
const makeSellingPointsArr = function(sourceArr) {
  let count = getRandomInt(2, 8);
  let sellingPoints = [];
  while (count >= 0) {
    sellingPoints.push(sourceArr[Math.floor(Math.random() * Math.floor(sourceArr.length - 1))])
    count--;
  }
  return [...new Set(sellingPoints)];
};

module.exports = makeSellingPointsArr;