
function testQuiz(){
    // variable to store the HTML note
    const note = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label style="display: block; margin-bottom: 5px; font-size: 16px;">
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the note
        note.push(
          `<div class="question" style="font-size: 18px; font-weight: bold; color: #c1c1c1; margin-bottom: 10px;"> ${currentQuestion.question} </div>
          <div class="answers" style="margin-bottom: 20px;"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our note list into one string of HTML and put it on the page
    quizContainer.innerHTML = note.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
        question: "1 )  HTML uses ?",
        answers: {
          a: "User-defined tags",
          b: "Predefined tags",
          c: "Fixed tags defined by the language",
          d: "Tags only for links"
        },
        correctAnswer: "c"
      },

    {
      question: "2 )  How to represent a list in HTML____?",
      answers: {
      
        a: "< list>",
        b: "< h1>",
        c: "< li>",
        d: "< ul>"
      },
      correctAnswer: "d"
    },
    {
        question: "3 )  How to represent a paragraph in HTML",
        answers: {
          a: " < ul >",
          b: " < p > ",
          c: "< h1 > ",
          d: " < paragraph > "
        },
        correctAnswer: "b"
      },
    {
      question: "4 )  If we want to set the style of a single element, which css selector will we use?",
      answers: {
        a: "id",
        b: "text",
        c: "class",
        d: "name"
      },
      correctAnswer: "a"
    },
    {
        question: "5 )  If we want to set the style of a single element, which css selector will we use____?",
        answers: {
          a: "User-defined tags",
          b: "Predefined tags",
          c: "Fixed tags defined by the language",
          d: "Tags only for links"
        },
        correctAnswer: "c"
      },
      {
        question: "6 )  The HTML tag that specifies a CSS style embedded in an element is called ____?",
        answers: {
          a: "Design",
          b: "Style",
          c: "Modify",
          d: "name"
        },
        correctAnswer: "b"
      },
      {
        question: "7 )  What is CSS____?",
        answers: {
          a: "CSS is a style sheet language",
          b: "CSS is designed to separate presentation and content, including layout, colors and fonts",
          c: "CSS is the language used to style HTML documents",
          d: "All of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "8 )  Which of the following CSS frameworks is used to create responsive design ____?",
        answers: {
          a: "django",
          b: "rails",
          c: "laravel",
          d: "bootstrap"
        },
        correctAnswer: "d"
      },
      {
        question: "9 )  In which HTML tag do we place the JavaScript code ____?",
        answers: {
          a: "The js tag",
          b: "The javascript tag",
          c: "The script tag",
          d: "The rel tag"
        },
        correctAnswer: "c"
      },
      {
        question: "10 )  How to create a function in JavaScript?",
        answers: {
          a: "function f()",
          b: "function = f()",
          c: "function:f()",
          d: "None of these answers are true"
        },
        correctAnswer: "a"
      },
      {
        question: "11 )  What method is used to listen for events from DOM elements?",
        answers: {
          a: "Element.addListener(event => {})",
          b: "AddListener(element, event => {})",
          c: "AddEventListener(element, event => {})",
          d: "Element.addEventListener(event => {})"
        },
        correctAnswer: "d"
      },
      {
        question: "12 )  What is the full form of DOM?",
        answers: {
          a: "Data Object Model",
          b: "Document or Model",
          c: "Document Object Model",
          d: "Document Object Meduim"
        },
        correctAnswer: "c"
      },
      {
        question: "13 )  The CSS property used to specify the transparency of an element is____?",
        answers: {
          a: "opacity",
          b: "visibility",
          c: "filter",
          d: "None of the above"
        },
        correctAnswer: "a"
      },
      {
        question: `14) What will be the result of the code snippet below?\n\n
        1. let numbers = [1, 2, 3, 4, 5, 6, 7, 8];\n
        2. console.log(numbers.filter(x => x % 2 == 0));`,
        answers: {
          a: "True",
          b: "False",
          c: "1,3,5,7",
          d: "2,4,6,8"
        },
        correctAnswer: "d"
      },
      {
        question: '15) What is the correct syntax for referring to an external script called "myscript.js"?',
        answers: {
            a: `< script src="myscript.js" >`,
            b: `< script name="myscript.js" >`,
            c: `< script href="myscript.js" >`,
            d: `All of the above`
        },
        correctAnswer: 'a'
    },

      {
        question: `16 )  How do you write "Hello World" in an alert box?`,
        answers: {
          a: `msg("Hello World");`,
          b: `alert("Hello World");`,
          c: `msgBox("Hello World");`,
          d: `alertBox("Hello World");`
        },
        correctAnswer: "b"
      },
      {
        question: "17 )  How to write an IF condition in JavaScript?",
        answers: {
          a: `if a = 2 then`,
          b: `if a = 2`,
          c: `if a == 2 else`,
          d: `if (a == 2)`
        },
        correctAnswer: "d"
      },
      {
        question: "18 ) What is the correct syntax of the while loop?",
        answers: {
          a: `while (i <= 5)`,
          b: `while i = 1 to 5`,
          c: `while (i <= 5; i++)`,
          d: `while (i=0; i <= 5; i++)`
        },
        correctAnswer: "a"
      },
      {
        question: "19 )  What is the code to get a random number between 5 and 9 inclusive?",
        answers: {
          a: `Math.floor((Math.random() * 5) + 4);`,
          b: `Math.floor((Math.random() * 4) + 4);`,
          c: `Math.floor((Math.random() * 4) + 5);`,
          d: `Math.floor((Math.random() * 5) + 5);`
        },
        correctAnswer: "d"
      },
      {
        question: "20 )  The DOM ____?",
        answers: {
          a: "is dedicated for JavaScript",
          b: "is a Template engine",
          c: "describes the structure of the HTML or XML document",
          d: "cannot be manipulated by JavaScript"
        },
        correctAnswer: "c"
      }
  ];

  // Kick things off
  testQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);

