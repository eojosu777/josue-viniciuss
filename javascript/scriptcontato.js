function validateForm() {
    let isValid = true;

    // Validar e-mail
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Por favor, insira um e-mail válido.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validar WhatsApp (formato)
    const whatsapp = document.getElementById("whatsapp").value;
    const whatsappPattern = /^\+?(\d{2,3})?\s?\(?\d{2,3}\)?[\s\-]?\d{4}[\s\-]?\d{4}$/;
    if (!whatsappPattern.test(whatsapp)) {
        document.getElementById("whatsappError").innerText = "Por favor, insira um número de WhatsApp válido.";
        isValid = false;
    } else {
        document.getElementById("whatsappError").innerText = "";
    }

    return isValid; // Impede o envio se os campos não forem válidos
}
