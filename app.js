

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = ['The lizard', 'My brother', 'The cop', 'My dragon'];
  const action = ['chewed', 'pooped', 'destroyed', 'deleted'];
  const what = ['my essay', 'my laptop', 'my transportation'];
  const when = ['last week', 'when I was showering', 'while I was studying', 'during my nap', 'while I was doing homework'];

  const randomWho = who[Math.floor(Math.random() * 4)];
  const randomAction = action[Math.floor(Math.random() * 4)];
  const randomWhat = what[Math.floor(Math.random() *4)];
  const randomWhen = when[Math.floor(Math.random() * 4)];


document.querySelector("#myh2").innerHTML = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`
};
