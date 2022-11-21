//================== For Menu ===================
const menu = document.querySelector('.menu');
        const navlinks = document.querySelector('.nav-links');

        menu.addEventListener('click', () =>{
            navlinks.classList.toggle('active-menu');
        })

//====================Principal Task============================

const Resultcontent = document.getElementById('result');
const NbrQuest = document.querySelector('.Nbr-Quest');
const ContentQuest = document.querySelector('.Content-Quest');
const nextQuest = document.querySelector('.next');
const Button1content = document.getElementById('Number1');
const Button2content = document.getElementById('Number2');
const Button3content = document.getElementById('Number3');
const Button4content = document.getElementById('Number4');

//======== Lists of Questions ==================================
var questions = ["Which of these CSS properties allows you to add a shadow to letters?",
                 "Which of these CSS rules allows you to change the appearance of a previously visited link?",
                 "Which of these tags represents a row in a table?",
                 "What is the most recommended form submission method that allows you to submit the most data?",
                 "Quelle balise permet aussi bien d'insérer des cases à cocher, des champs de texte monolignes et des sélecteurs de date ?",
                 "Which CSS directive allows you to create a responsive web design site?", 
                 "Which of the following propositions is a valid variable declaration and initialization in Javascript?",
                 "We declare an array in JS such as list of elements, separated by comma between ...",
                 "Which HTML5 tag should be used for groups of navigational links?", 
                 "Wich variable declaration is used for values likely to change"];
//=========== Lists of answer ==================================
var answers = ["Number1", "Number2", "Number1", "Number3", "Number1", "Number1", "Number2", "Number3", "Number4", "Number1"];

//============= Des choix possibles ============================
var choiceButton1 = ["box-shadow", "a:consulted", "tr", "get", "input ","@media", "let my variable = 12; ", "{} braces","header", "var"];
var choiceButton2 = ["text-shadow", "a:visited", "table", "action", "form","screensize", "let myVariable = 12;", "[] square brackets","navigation", "const"];
var choiceButton3 = ["letter-shadow", "a:focus", "line", "post", "textarea","handheld", "variable myVariable = 12;", "() parenthesis","main", "variable"];
var choiceButton4 = ["shadow","a:hover", "td", "submit","select","responsive", "let 12 = myVariable", "None of these lists","nav", "let"];

let Userchoice
let result
var score = 0;
var i = 0;

window.onload = () => {
    
    const Possibleschoices = document.querySelectorAll('button');
//===== Initializing =====================
ContentQuest.innerHTML = questions[0];
NbrQuest.innerHTML = "1/10";
Button1content.innerHTML = choiceButton1[0];
Button2content.innerHTML = choiceButton2[0];
Button3content.innerHTML = choiceButton3[0];
Button4content.innerHTML = choiceButton4[0];

    Possibleschoices.forEach(Possibleschoice => Possibleschoice.addEventListener('click',(e) => {
        //ID button clicked Recuperation 
        Userchoice = e.target.id;
        
          disabling();
          checking();
    }))

}

//====================== The Events =======================
nextQuest.addEventListener('click', fnext);


//================= Fonctions =============================

//Fonction closure 
function compteur() {
    var i = 0;

    return function(){
        return i++;
    }
  }  
  var plusUn = compteur();
  var mark = compteur();
  var mark1 = compteur();
  var mark2 = compteur();
  var trueanswer = compteur(); 


  //=============================================
  function compteur1() {
    var i = 2;

    return function(){
        return i++;
    }
  }  
  var autreInstance = compteur1();
//=================================================
function compteur2() {
    var i = 1;

    return function(){
        return i++;
    }
  }  
  var value1 = compteur2();
  var value2 = compteur2();
  var value3 = compteur2();
  var value4 = compteur2();

//==================== VERIFICATION ==============================

function checking(){
 
    if(mark1() < 9){
        if( Userchoice == answers[trueanswer()]){
        
            result = "Well done! Correct";
            score += 1;
         
        }
        else{
            result="Wow.. it's wrong!!";
            score += 0;
        }
        Resultcontent.innerHTML = result;

    }else {
        Resultcontent.innerHTML='It\'s finished, You have:  '+ score + '  Points';
        nextQuest.style.display = 'none';
    }

}
  

function disabling(){
    nextQuest.style.display = 'initial';
        Button1content.disabled = true;
        Button2content.disabled = true;
        Button3content.disabled = true;
        Button4content.disabled = true;
}


function undisabling(){
    nextQuest.style.display = 'none';
    Button1content.disabled = false;
    Button2content.disabled = false;
    Button3content.disabled = false;
    Button4content.disabled = false;
}


function fnext(){
    undisabling();
    if(mark() <= 9){
        NbrQuest.innerHTML = autreInstance() +"/10";
        ContentQuest.innerHTML = questions[plusUn()];
        Button1content.innerHTML = choiceButton1[value1()];
        Button2content.innerHTML = choiceButton2[value2()] ;
        Button3content.innerHTML = choiceButton3[value3()];
        Button4content.innerHTML = choiceButton4[value4()];
        Resultcontent.innerHTML = "";    
    }
     else {
        
        Resultcontent.innerHTML = score; 
        ContentQuest.style.display = 'none';   
     }     
    
}