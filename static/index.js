$('#boggle-word').submit(function(event) {
   event.preventDefault();
   const formData = $(this).serialize();

   $.ajax({
      type: 'POST',
      url: '/submit',
      data: formData,
      success: function(response) {
          
      }
      // error: function(error) {
      //     console.error('Error submitting form:', error);
      // }
  });
})


