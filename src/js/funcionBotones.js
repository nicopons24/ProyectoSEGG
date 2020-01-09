function btnInicioClick() {
	$("#title").text(function(i, text) {
		var today = new Date();
		return today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
	});

	$.ajax({
		url : 'planing.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
};

function btnNevoEventoClick() {
	$("#title").text(function(i, text) {
		return "Nuevo Evento";
	});
	$.ajax({
		url : 'nuevoEvento.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
};

function init() {
	btnInicioClick();
};

