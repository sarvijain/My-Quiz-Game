class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide(); 
    //write code to change the background color here
background("yellow");
    //write code to show a heading for showing the result of Quiz
fill("black")
textSize(50)    
text("result of the quiz",300,50);
fill("black")
text("-----------------------------------",200,80);
    //call getContestantInfo( ) here
Contestant.getPlayerInfo();
if(allContestants !== undefined){
var displayAnswers=230
fill("blue")
textSize(20)
text("**NOTE: Contestant who answered correct are highlighted in green color!!!**",140,230);
}
    //write condition to check if contestantInfor is not undefined
 for(var plr in allContestants){
var correctAns= "2";
if(correctAns===allContestants[plr].answer)
fill("green");
 else
 fill("red")
    //write code to add a note here
displayAnswers=displayAnswers+30;
text(allContestants[plr].name + ":" + allContestants[plr].answer,250,displayAnswers)
    //write code to highlight contest who answered correctly
    
  }

  }}
