function btnInicioClick(){
  $( "#btnInicio" ).bind( "click", function(event, ui) {
    $.ajax({
      url:'planing.html',
      success:function(data){
        $(".ui-content").html(data);
      }
    });
  });
}

function init(){
	console.log("onload")
	btnInicioClick();
}
