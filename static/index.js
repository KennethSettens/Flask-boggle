$('#boggle-word').submit(function(event) {
   event.preventDefault();
   const guessedWord = $('#guess-input').val();

   $.ajax({
      type: 'POST',
      url: '/submit',
      data: { input: guessedWord },
      success: function(response) {
         $("#boardMessage").text(response.data);
      }
      
  });
})


