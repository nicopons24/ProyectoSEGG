function btnInicioClick(){
  $( "#btnInicio" ).bind( "click", function(event, ui) {
    console.log("inicio");
    $.ajax({
      url:'planing.html',
      success:function(data){
        $(".ui-content").html(data);
      }
    });
  });
}
