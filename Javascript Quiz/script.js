
// 1
let q;

console.log( q==undefined );


// null 2

const type=null;

console.log(typeof (type)); //object


// before declare 3
console.log(a);
var a=10

// 4

const x= 2;
const y=4;
const z = ( x < y) ? 'x' :'y';

console.log(z);


// add plus change DataType

const m="5";
const n=+m

console.log( typeof(n));


// IIFE function

let abs= (function(y) {
    return y+5;
})(2)

console.log(abs);


// number

console.log(typeof (NaN));

// add true and false == 1
const v= true + false 
console.log(v);

// get length of object
const r=[{2:5},{5:8},{8:8}];

r.length=3
console.log(r);

// nan

var abc= "hello"
var sum=0;

for (let i = 0; i < abc.length; i++) {
   sum += (abc[i] - 'a');
    
}

console.log(sum);

// NaN

function measureExecutionTime(func) {
    const startTime = performance.now();
    // console.log(startTime);
    // func();
    const endTime = performance.now();

    console.log(endTime);
   return console.log("Execution time: " + (endTime - startTime) + " milliseconds");
}

console.log(measureExecutionTime())


let un="";
console.log(un == undefined,"check");




// typing 

const dynamicText = document.querySelector("h1 span");
const words = ["Software Developer", "React Developer", "React Native Developer"];
let wordIndex = 0;
let chartIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = isDeleting ? currentWord.substring(0, chartIndex--) : currentWord.substring(0, ++chartIndex);
  dynamicText.textContent = currentChar;
  
  if (!isDeleting && chartIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && chartIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(typeEffect, 100);
  }
};

// typeEffect();

// typeEffect()

// acordion 


const accordions = document.querySelectorAll('.accordion');


accordions.forEach((accordion, i)=>{

   const header = accordion.querySelector('.accordion-header');
   const content = accordion.querySelector('.accordion-content');
   const icon = header.querySelector(".icons");
   console.log(header);
   header.addEventListener('click', () => {
     content.classList.toggle("active")
     icon.classList.toggle("fa-chevron-down");  
     icon.classList.toggle("fa-chevron-up");
   });
})

// tabs 

const tab = document.querySelectorAll(".tab")

const tabs=(tabIndex)=> {

  for (let i = 0; i < tab.length; i++) {
    tab[i].style.display = "none"
  }

   tab[tabIndex].style.display = "block"
}

tabs(0)


//progress bar

// const progressBar = document.querySelector(".progress-bar");

// window.addEventListener("scroll",()=>{
//   const scrollTop = document.documentElement.scrollTop;
//   const height =  document.documentElement.scrollHeight -  document.documentElement.clientHeight;
//   const progress = (scrollTop / height ) * 100;
//   console.log(progress);
//   progressBar.style.width = progress +"%"
// })

// Progress Percentage =          distance of Scroll           * 100
                        //  (section height -document height) 