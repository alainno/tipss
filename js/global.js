$(document).ready(main);


function main(){
	
	var secciones = new Array();
	$('.leftcol nav ul li a').each(function(k,v){
		secciones[k] = $(this).attr('href');
		//console.log(secciones[k]);
	}).click(function(){
		//$(document).trigger('scroll');
//		$('.leftcol nav ul li a.actual').removeClass('actual');
//		$(this).addClass('actual');
		//$(window).scrollTop($($(this).attr('href')).position().top);
		//return false;
	});
	
	
	$(document).scroll(function(){
		//var t = $("#estructura").offset().top;
		
		//var doc_scroll_top = $(this).scrollTop();
		
		//console.log);	
		var $this = $(this);
		var scroll_top = $this.scrollTop();
		
		console.log('mar scroll' + $('#margenes').offset().top);
		console.log('doc scroll' + scroll_top);
		
		for(var k in secciones){
			if($(secciones[k]).length > 0){
				var t = $(secciones[k]).offset().top;
				t = Math.floor(t);
				if(scroll_top >= t - 50){
					$('.leftcol nav ul li a.actual').removeClass('actual');
					$('.leftcol nav ul li a[href="'+secciones[k]+'"]').addClass('actual');
				}
			}
		}
	});
	
//	for(var k in secciones){
//		console.log(secciones[k]);
//	}
}

