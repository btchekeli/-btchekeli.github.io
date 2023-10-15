// mobile menu

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");


burgerIcon.addEventListener("click", () => {
	navbarMenu.classList.toggle("is-active")
});

// fin mobile menu

// script js qui envoie mail

$('#Envoyer').click(function(e){
	e.preventDefault();
	var data = {
		email: $('#email').val(),
		name: $('#name').val(),
		object: $('#object').val(),
		message: $('#message').val()
	};

// Ajax
	$.ajax({
		url: "mail.php",
		type: 'POST',
		data: data,
		success: function(data) {
			$('#js_alert_success').css({'display' : 'block'});
			setTimeout(function(){
				$('#js_alert_success').css({'display' : 'none'});
				$('#email').val("");
				$('#name').val("");
				$('#object').val("");
				$('#message').val("")
			}, 3000);
		},
		error: function(data) {
			$('#js_alert_danger').css({'display' : 'block'});
			setTimeout(function(){
				$('#js_alert_danger').css({'display' : 'none'});
				$('#email').val("");
				$('#name').val("");
				$('#object').val("");
				$('#message').val("")
			}, 3000);
		}
	});
});