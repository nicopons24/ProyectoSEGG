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

function btnNoticiasClick(){
	$("#title").text(function(i, text) {
		return "Sociedad Española de Geriatría y Gerontología";
	});
	$.ajax({
		url : 'publicacionesSEGG.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
}

function itemNoticiaClick(){
	$("#title").text(function(i, text) {
		return "Sociedad Española de Geriatría y Gerontología";
	});
	$.ajax({
		url : 'publicacionSEGGDetalle.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
}

function btnPersonasClick(){
	$("#title").text(function(i, text) {
		return "Lista personas";
	});
	$.ajax({
		url : 'listaPersonas.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
}

function init() {
	btnInicioClick();
};
