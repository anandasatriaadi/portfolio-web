toastr.options = {
  positionClass: "toast-top-center",
};

$(document).ready(function () {
  $("#add-book-button").click(function () {
    let bookName = $("#add-book").val();

    if (bookName == "") {
      return;
    } else {
      $("#book-list").append(new Option(bookName, bookName));
      toastr.success(`Added ${bookName} to Book List`).options;
    }
  });

  let expanded = false;
  $("#animate-button").click(function (e) {
    e.preventDefault;

    /* ======== ANIMATE ======== */
    expanded
      ? (() => {
          $("#book-form").animate({ maxWidth: "36rem" }, 1000);
          $("#animate-button").animate({ opacity: "0" }, 500);
          $("#animate-text").animate({ opacity: "0" }, 500);
          $(".gradient").animate(
            { backgroundPositionX: "0%", backgroundPositionY: "50%" },
            1500
          );
          $(".gradient-invert").animate(
            { backgroundPositionX: "0%", backgroundPositionY: "50%" },
            1500
          );
          setTimeout(() => {
            document.getElementById("animate-button").innerText = "Expand";
            document.getElementById("animate-text").innerHTML =
              "Need more writing space?&nbsp;";
            $("#animate-button").animate({ opacity: "1" }, 500);
            $("#animate-text").animate({ opacity: "1" }, 500);
          }, 500);
        })()
      : (() => {
          $("#book-form").animate({ maxWidth: "48rem" }, 1000);
          $("#animate-button").animate({ opacity: "0" }, 500);
          $("#animate-text").animate({ opacity: "0" }, 500);
          $(".gradient").animate(
            { backgroundPositionX: "100%", backgroundPositionY: "50%" },
            1500
          );
          $(".gradient-invert").animate(
            { backgroundPositionX: "100%", backgroundPositionY: "50%" },
            1500
          );
          setTimeout(() => {
            document.getElementById("animate-button").innerText = "Shrink";
            document.getElementById("animate-text").innerHTML =
              "Too much space?&nbsp;";
            $("#animate-button").animate({ opacity: "1" }, 500);
            $("#animate-text").animate({ opacity: "1" }, 500);
          }, 500);
        })();
    expanded = !expanded;
  });
});
