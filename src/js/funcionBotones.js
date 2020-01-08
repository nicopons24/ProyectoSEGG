function btnInicioClick() {
	$("#title").text(function(i, text) {
		var today = new Date();
		return today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
	});
	$("#btnInicio").bind("click", function(event, ui) {
		$.ajax({
			url : 'planing.html',
			success : function(data) {
				$(".ui-content").html(data);
			}
		});
	});
};

function btnNevoEventoClick(){
	$("#title").text(function(i, text) {
		return "Nuevo Evento";
	});
	$("#btnNuevoEvento").bind("click", function(event, ui) {
		$.ajax({
			url : 'nuevoEvento.html',
			success : function(data) {
				$(".ui-content").html(data);
			}
		});
	});
};

function init() {
	$(document).ready(function() {
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
	});
};

