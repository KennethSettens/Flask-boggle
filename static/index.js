let score = 0;

$(document).ready(function () {
   start60SecondTimer(onTimerEnd);
})

$('#boggle-word').submit(function(event) {
   event.preventDefault();
   const guessedWord = $('#guess-input').val();

  
   
   $.ajax({
      type: 'POST',
      url: '/submit',
      data: { input: guessedWord },
      success: function(response) {
         let result = response.result
         $("#boardMessage").text(result);

         if (result === "ok"){
            score += response.word.length;
            $("#score").text(score);
         }
      }
      
  });
})

function start60SecondTimer(callback) {
   let secs = 30;

   function showTimer() {
       $(".time").text(secs);
   }

   function tick() {
       secs -= 1;
       showTimer();

       if (secs === 0) {
           clearInterval(timerInterval);
           callback();
       }
   }
   showTimer();
   const timerInterval = setInterval(tick, 1000);
}

function onTimerEnd() {
   $("#boggle-word").hide();
   alert("Time's up! Game over.");
   updateHighscore()
}

function updateHighscore(){
   $.ajax({
      type: 'POST',
      url: '/update-highscore',
      contentType: 'application/json',
      data: JSON.stringify({ score: score}),
      success: function(response) {
         $("highscore")
         console.log(response.score)
      },
      error: function(xhr, status, error) {
         console.error("Error:", error);
      }
  });
}
