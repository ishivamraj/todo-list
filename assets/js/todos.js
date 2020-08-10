$("ul").on("click", "li",  function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").on ("keypress", function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $("input[type='text'").val("");
        $("ul").append("<li><span><i class= 'fa fa-trash'></i></span>" +" " + todoText + "</li>");  
    }   
});
$("#toggle").click(function() {
    $("input[type = 'text']").fadeToggle(500);
}) 

// // if($(this).css("color") === "rgb(128, 128, 128)")
// // {
// //     $(this).css(
// //         {
// //         color: "black",
// //         textDecoration: "none"
// //     });
// // }
// //     else {
// //         $(this).css(
// //             {
// //             color: "gray",
// //             textDecoration: "line-through"
// //         });
// //     }
// });
