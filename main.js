$(document).ready(function(){
	var root = 'http://jsonplaceholder.typicode.com';
	
	
	$.ajax({
		url: root + '/posts/',
		method: 'GET'
	}).then(function(data) {
		$.each(data, function( index, value ){
			// $('#column').append("<div class='post'><div class='clear'></div><div class='title'>" + value.title + "</div><div class='body'>" + value.body + "</div></div>");
			$('#column').append("<div class='post'><div class='clear'>x</div><div class='post_left'><div class='username'>User "+value.userId+"</div><div class='userimage'>User image goes here</div></div><div class='post_right'><div class='title'>" + value.title + "</div><div class='body'>" + value.body + "</div></div></div>");
		});
	});
});

$(document).on('click', '.clear', function(e) {
	$(this).parent().slideUp();
});