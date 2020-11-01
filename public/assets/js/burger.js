// Make sure we wait to attach our handlers until the DOM is fully loaded.
    $(".eat-button").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");

      var newBurger = {
        devoured: true
      }
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
     
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  