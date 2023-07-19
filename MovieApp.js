$("button").on("click", function (e) {
    e.preventDefault();
    if ($("#title").val().length < 2) {
      alert("please enter a title with at least 2 characters");
    } else {
      const newTd = $("<td>", { text: $("#title").val() });
      const remButton = $("<button class='btn btn-danger'> Delete </button>").on(
        "click",
        function (evt) {
          $(evt.target).parent().remove();
        }
      );
      const newTr = $("<tr>");
      newTr
        .append($("<td>", { text: $("#title").val() }))
        .append($("<td>", { text: $("#rating").val() }))
        .append(remButton);
      $("#movie-table-body").append(newTr);
      $("#title").val("");
      $("#rating").val("");
    }
  });
  