function btnInicioClick() {
	$("#title").text(function(i, text) {
		var days=["Lun", "Mar","Mie","Jue","Vie","Sab","Dom"];
		var months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
		var today = new Date();
		return days[today.getDay()]+" " + today.getDate() + ' de ' + months[(today.getMonth() + 1)] + ' de ' + today.getFullYear();
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

function itemPersonaClick(){
	$("#title").text(function(i, text) {
		return "Persona";
	});
	$.ajax({
		url : 'personaDetalle.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
};

function bntPersonaHistorialClick(){
	$("#title").text(function(i, text) {
		return "Ficha Médica";
	});
	$.ajax({
		url : 'personaFichaMedica.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
}

function btnCalendarioClick(){
	$("#title").text(function(i, text) {
		return "Calendario";
	});
	$.ajax({
		url : 'calendaro.html',
		success : function(data) {
			$(".ui-content").html(data);
		}
	});
}

function init() {
	btnInicioClick();
};
