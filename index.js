// Code your selectRandomEntry function here:
function selectRandomEntry() {
  return idNumbers[Math.floor(Math.random()*idNumbers.length)];
}
let idNumbers = [291, 414, 503, 599, 796, 890];

let randomIdNumbers = [];
let id = 0;


// for (let i = 0; i < 3; i++){
//   id = selectRandomEntry()
//   if (!randomIdNumbers.includes(id)) {
//     randomIdNumbers.push(id); 
//   } else {
//       while(randomIdNumbers.includes(id)){
//         id = selectRandomEntry();
//       }
//     randomIdNumbers.push(id);
//   }

// }

while( randomIdNumbers.length < 3) // figured out a much easier way of doing the above lol.
{
  id = selectRandomEntry();
  if(!randomIdNumbers.includes(id)){
    randomIdNumbers.push(id);
  }

}
// Code your buildCrewArray function here:

function buildCrewArray(arrayAnimals, arrayIds){
  let crew = [];
  let i = 0;
  while (crew.length < arrayIds.length)
  {
    if (arrayIds.includes(arrayAnimals[i].astronautID)) {
      crew.push(arrayAnimals[i]);
    }
    i++;
  }
  return crew;
}

// Here are the candidates and the 'animals' array:

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let spaceCrew =(buildCrewArray(animals,randomIdNumbers));
// Code your template literal and console.log statements:
 
console.log(`${spaceCrew[0].name}, ${spaceCrew[1].name}, and ${spaceCrew[2].name} are going to space!`);