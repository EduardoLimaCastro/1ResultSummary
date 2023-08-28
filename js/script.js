// READ DATA FROM JSON
import data from '../data.json' assert {type: 'json'};


const reactionScoreElement = document.querySelector("#reactionstatus span");
const memoryScoreElement = document.querySelector("#memorystatus span");   
const verbalScoreElement = document.querySelector("#verbalstatus span");   
const visualScoreElement = document.querySelector("#visualstatus span");   

console.log(data);

const data2 = JSON.stringify(data);
console.log(data2);
reactionScoreElement.innerText = data[0].score;
memoryScoreElement.innerText = data[1].score;
verbalScoreElement.innerText = data[2].score;
visualScoreElement.innerText = data[3].score;