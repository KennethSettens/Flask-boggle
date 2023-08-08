$('#boggle-word').submit(function(event) {
   event.preventDefault();
   const guessedWord = $('#guess-input').val();

   $.ajax({
      type: 'POST',
      url: '/submit',
      data: { input: guessedWord },
      success: function(response) {
         console.log("you guessed ", guessedWord)
      }
      // error: function(error) {
      //     console.error('Error submitting form:', error);
      // }
  });
})


