//* Formulario para enviar correos (Gmail)

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();// evita recargar la página
    
    //Creamos un objeto para guardar los datos 
    const formData = {
        name: document.getElementById("name").value,
        subject:document.getElementById ("subject").value,
        message:document.getElementById("message").value,

    }
    
    
    

    try {
    //fetch envia o recibe datos, en este caso esta enviado al backendatos del email
        const response = await fetch("https://portfolio-backend-17bg.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Indicamos que enviamos JSON
                },
            body: JSON.stringify(formData), // Convertimos los datos a JSON
        });

    if (response.ok) {
        alert("Mensaje enviado correctamente!");
      form.reset(); // limpia el formulario
    } else {
        alert("Hubo un error al enviar el mensaje.");
    }
    } catch (error) {
    alert("No se pudo conectar con el servidor.");
    console.error(error);
}
});