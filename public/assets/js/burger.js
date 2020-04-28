$(function () {
  //Load dom
  $(".devour-button").on("click", function (event) {
    //
    var id = $(this).data("id");
    //
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
  $(".add-burger").click(function () {
    //
    var burger = $("#burger-name").val();

    $.post("/api/create/" + burger);
  });
});
