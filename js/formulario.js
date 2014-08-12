var $form 		= $('#formulario'),
 	$titulo 	= $('#titulo'),
	$url 		= $('#url'),
	$primerPost = $('.item').first(),
	$lista 		= $('#contenido'),
	ss 			= sessionStorage,
	ls   		= localStorage;

if(ls.getItem('autosave')){
	$titulo.val(ss.getItem('titulo'));
	$url.val(ss.getItem('url'));
}

function muestra(){
	$form.slideToggle();
	$lista.slideToggle();
	return false;
};

function carga(e){
	e.preventDefault();
	var $titulo = $('#titulo').val(),
		$url = $('#url').val(),
		clonado = $primerPost.clone(),
		clonadoData = clonado.find('.titulo_item a').text($titulo).attr('href', $url);
	$lista.prepend(clonado);
	$('#titulo').val('');
	$('#url').val('');
	muestra();
};

function grabarInformacion(e){
	e.preventDefault();
	var titulo = $titulo.val(),
		url    = $url.val(),
		ls 	   = localStorage,
		ss	   = sessionStorage;

	ls.setItem('titulo', titulo);
	ls.setItem('url', url);

	ss.setItem('titulo', titulo);
	ss.setItem('url', url);
};

$('#publicar_nav a').click(muestra);
$form.on('submit', carga /*grabarInformacion*/);




