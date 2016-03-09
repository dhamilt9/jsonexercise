$(document).ready(function(){
	var root = 'http://jsonplaceholder.typicode.com';
	
	
	$.ajax({
		url: root + '/posts/',
		method: 'GET'
	}).then(function(data) {
		$.each(data, function( index, value ){
			$('#column').append("<div class='post'><div class='clear'></div><div class='title'>" + value.title + "</div><div class='body'>" + value.body + "</div></div>");
		});
	});
});

$(document).on('click', '.clear', function(e) {
	$(this).parent().slideUp();
});