$(document).foundation();

$(document).ready(function() {
	
	$("#toggleshortresume").click(function(argv){
		
		
		$("#shortresumecontent").toggle();
		
		argv.preventDefault();
		
	});
	
});