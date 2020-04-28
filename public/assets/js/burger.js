$(function () {
  //Load dom
  $(".devour-button").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/devour/" + id, {
      type: "PUT",
      data: true,
    }).then(function () {
      console.log("devoured burger " + id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //

  $("#add-burger").click(function (event) {
    event.preventDefault();
    var newburger = { name: $("#burger-name").val().trim() };

    $.ajax("/api/create/", {
      type: "POST",
      data: newburger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
