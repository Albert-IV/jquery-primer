var userTemplate = '\
<div class="user-wrapper">\
  <div class="user"></div>\
  <div class="controls"><button class="remove">Remove User</button></div>\
</div>'

jQuery(function () {
	$.get('/get-users', function(data) {

		$('.main-container').empty()

		for (var i = 0, arLength = data.users.length; i < arLength; i++) {
			var newUser = $(userTemplate);
			newUser.find('.user').html(data.users[i].name)
			newUser.find('.remove').attr('data-id', data.users[i]._id)
			
			$('.main-container').append(newUser)
		}

	})
})