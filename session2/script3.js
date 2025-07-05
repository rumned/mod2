// DOM TREE
// JavaScript sees your html document
// let html = {
// 	head: {
// 		title: "My First Website",
// 	},
// 	body: {
// 		h1: "Hello World",
// 		p: "MESSAGE HERE",
// 	},
// };

document.getElementById("heading").style.color = "red";

// document.getElementsByClassName("second")[0].style.color = "blue";
// document.getElementsByClassName("second")[0].style.color = "blue";
// document.getElementsByClassName("second")[1].style.color = "green";
// document.getElementsByClassName("second")[2].style.color = "yellow";

let h3s = document.getElementsByClassName("third");
console.log(h3s);
console.log(h3s.length);

//turn all text with the class third into blue
//h3 text at index 2 should be green
//h3 text at index 4 should be yellow
//h3 text at index 6 should be red

for (let i = 0; i < h3s.length; i++) {
  h3s[i].style.color = "blue";
  if (i === 2) h3s[i].style.color = "green";
  if (i === 4) h3s[i].style.color = "yellow";
  if (i === 6) h3s[i].style.color = "red";
}

// document.querySelector - targets one element
// document.querySelectorAll - targets many elements

let h4 = document.querySelectorAll(".h4");
console.log(h4);
h4[0].style.color = "red";

let orig = document.getElementById("originalText"); //<h1>
let btnChange = document.getElementById("btnChange");

let para = document.getElementById("para");
let hidePara = document.getElementById("hidePara");
let showPara = document.getElementById("showPara");
let count = 0;
showPara.style.display = "none"; //hide the showPara button

//addEventListener('event', function() {})
btnChange.addEventListener("click", function () {
  if (count == 1) {
    orig.textContent = "Original Text";
    count = 0;
  } else {
    orig.textContent = "The text has been changed!";
    count = 1;
  }
});

// change the color of paragraph every mouseover
para.addEventListener("mouseover", function () {
  if (para.style.color != "blue") {
    para.style.color = "blue";
  } else {
    para.style.color = "black";
  }
});

// //HOW TO SHOW THE P TAG AGAIN BY CREATING ANOTHER BUTTON
// hidePara.addEventListener("click", function () {
//   para.style.display = "none";
//   showPara.style.display = "inline"; //show the showPara button when the hidePara button is clicked
// });

// showPara.addEventListener("click", function () {
//   para.style.display = "block"; //show the paragraph again
//   showPara.style.display = "none"; //hide the showPara button when the paragraph is shown
// });

// HOW TO SHOW THE P TAG AGAIN BY USING THE SAME BUTTON - self created
hidePara.addEventListener("click", function () {
  para.style.display = "none";
  showPara.style.display = "inline";
  hidePara.style.display = "none";
});

showPara.addEventListener("click", function () {
  para.style.display = "block";
  showPara.style.display = "none";
  hidePara.style.display = "inline";
});
