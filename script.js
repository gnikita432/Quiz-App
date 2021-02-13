const quizData = [
  {
    question: "how old am i ",
    a1: "10",
    a2: "12",
    a3: "22",
    a4: "18",
    ans: "a1"
  },
  {
    question: "NextQue",
    a1: "10",
    a2: "12",
    a3: "2ii",
    a4: "1f",
    ans: "a1"
  },
  {
    question: "anotherone ",
    a1: "10",
    a2: "12",
    a3: "tada",
    a4: "yeah",
    ans: "a1"
  },
  {
    question: "finally last one ",
    a1: "10",
    a2: "12",
    a3: "double yoo2",
    a4: "18",
    ans: "a1"
  },
];

questionel = document.getElementById("questions");
ael = document.getElementById("o1");
bel = document.getElementById("o2");
cel = document.getElementById("o3");
del = document.getElementById("o4");
btnel = document.getElementById("btn");
answerel = document.querySelectorAll(".answer");
let currentquiz =0;
loadQuiz();
function loadQuiz() {
  let quiz = quizData[currentquiz];

  questionel.innerText = quiz.question;
  ael.innerText = quiz.a1;
  bel.innerText = quiz.a2;
  cel.innerText = quiz.a3;
  del.innerText = quiz.a4;
}
const getcheckedans = () =>{
    let answer;
    answerel.forEach((curransele)=>{
    if(curransele.checked){
        answer = curransele.id;
    }
});
return answer;
};

btnel.addEventListener("click", () => {
  currentquiz++;
  if (currentquiz < quizData.length) {
    loadQuiz();
  } else {
    //show results
    alert(" yuuhh huu you finished the quiz now get yourself a cake");
  }
let ta = getcheckedans();
console.log(ta);
 
  
});
