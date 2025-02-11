document.getElementById("formularioContato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    let fields = ["nome", "email", "telefone", "mensagem"];
    
    fields.forEach(function(field) {
        let input = document.getElementById(field);
        let errorMessage = input.nextElementSibling;
        
        if (input.value.trim() === "") {
            input.classList.add("error");
            input.classList.remove("success");
            errorMessage.style.display = "block";
            isValid = false;
        } else {
            input.classList.remove("error");
            input.classList.add("success");
            errorMessage.style.display = "none";
        }
    });
});