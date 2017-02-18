//Check Off Specific Todos by Clicking
$('ul').on("click", "li", function(){
  $(this).toggleClass("completed");
});

$('ul').on("click", "span", function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$('input[type="text"]').on("keypress", function(event){
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    //create new li and add to ul
    $('ul').append("<li><span>X</span> " + todoText + "</li>");
    $(this).val("");
  }
})
