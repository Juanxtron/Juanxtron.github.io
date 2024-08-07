function showPopup(course) {
    // Cierra todos los pop-ups abiertos
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Abre el pop-up correspondiente al curso
    document.getElementById('popup-' + course).style.display = 'block';
}

function closePopup(course) {
    document.getElementById('popup-' + course).style.display = 'none';
}

function showDescription(course) {
    // Cierra todos los pop-ups abiertos
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Abre el pop-up de la descripción del curso correspondiente
    document.getElementById('popup-description-' + course).style.display = 'block';
}

function showCertificate(course) {
    let imagePath = "images/certificate-" + course + ".jpg"; // Asegúrate de tener las imágenes en la carpeta correcta
    let img = new Image();
    img.src = imagePath;
    
    // Crear una nueva ventana con tamaño específico
    let width = 1000; // Ancho de la ventana
    let height = 600; // Alto de la ventana
    let w = window.open("", "Certificate", `width=${width},height=${height}`);

    // Ajustar el tamaño de la imagen para que se ajuste a la ventana
    w.document.write(`<img src="${img.src}" style="width: 100%; height: 100%;">`);
}
