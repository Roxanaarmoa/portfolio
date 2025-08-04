
// Revelar elementos con hidden

function revealOnScroll() {
    const elementsToReveal = document.querySelectorAll('.hidden');

    elementsToReveal.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const revealTrigger = 150; 
    if (elementPosition < windowHeight - revealTrigger) {
        element.classList.add('revealed');
    }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


//view de cards
$(document).ready(function() {
	
	$('.cards-container').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});

//boton enviado correctamente
const boton = document.getElementById('enviarBtn');

boton.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el envío real si es un form

    Swal.fire({
        title: 'Mensaje enviado',
        text: 'Gracias por contactarme. Te responderé pronto 😊',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});