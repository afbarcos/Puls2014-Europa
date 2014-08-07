var $form = $('#formulario'),
 	$titulo = $('#titulo'),
	$url = $('#url');
	$primerPost = $('.item').first(),
	$lista = $('#contenido');

function muestra(){
	$(formulario).slideToggle();
	return false;
};

function agregarPost(){
	var titulo = $titulo.val(),
		url = $url.val(),
		clone = $primerPost.clone();
		clone.find('.titulo_item a').text(titulo).attr('href', url);
		clone.hide();
		$lista.prepend(clone);
		clone.slideDown();
};

$('#publicar_nav a').click(muestra);
$('#formulario').on('submit', agregarPost);



