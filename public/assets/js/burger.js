// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-button").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");

      var newBurger = {
        devoured: true
      }
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
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
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
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
  });
  