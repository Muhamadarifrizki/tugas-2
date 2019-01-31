$(function(){
	var current = window.location.href;
	$('ul.navbar-nav li a').each(function(){
		ver $this = $(this);
		if($this.attr('href') == current){
			$this.parent('li').addClass('active'); 
		}
	});
});