var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question(chalk.yellow("What is your name? : "))
score = 0;
console.log(chalk.magenta('Hey ' +userName+ ', Welome to "Do you know Ananth?"'));
function play(question,answer)
{
  var userAns = readlineSync.question(question);
  if(answer === userAns)
  {
    score = score + 5;
    console.log(chalk.green("You are right you got +5 point"));
  }
  else
  {
    console.log(chalk.red("You are wrong"))
  }
}
var questionSet = [
  {
    question : "1.Where is he from?",
    answer : "Mangalore"
  },
  {
    question : "2.Where he works at?",
    answer : "Infosys"
  },
  {
    question : "3.Which food he likes the most?",
    answer : "fastfood"
  },
    {
    question : "4.Which programming language he likes the most?",
    answer : "JavaScript"
  },
    {
    question : "5.Which place he likes the most?",
    answer : "USA"
  }
];
for (var i = 0; i < questionSet.length; i++)
{
  var currentQuestion = questionSet[i]
  play(currentQuestion.question,currentQuestion.answer)
  console.log("Your score is",score)
}
console.log(chalk.cyan("Game over!! your final score is",score))
function scoref(scores)
{
  if(score > scores)
  {
    console.log("Congratulations !! New high send me the screenshot to update")
  }
}
var scoreBoard = [
  {
    name : "Ananth",
    scores : 10
  },
  {
    name : "Sam",
    scores : 9
  }
]
for(var j = 0;j < scoreBoard.length; j++)
{
  var scoreCard = scoreBoard[j];
  scoref(scoreBoard.scores)
}