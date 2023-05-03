// Selecciona el elemento con la clase "container" y lo asigna a la variable "container"
const container = document.querySelector(".container");
// Selecciona el elemento con la clase "card" y lo asigna a la variable "card"
const card = document.querySelector(".card");

// Agrega un evento de "mousemove" al elemento "container"
container.addEventListener("mousemove",(e)=>{
    // Calcula la posición del mouse dentro del contenedor y ajusta el valor para la rotación de la tarjeta en el eje X
    const xpos = (window.innerWidth /2 - e.pageX)/ 10;
    // Calcula la posición del mouse dentro del contenedor y ajusta el valor para la rotación de la tarjeta en el eje Y
    const ypos = (window.innerHeight /2 - e.pageY)/ 10;

    // Actualiza el estilo de transformación de la tarjeta para incluir las nuevas rotaciones calculadas
    card.style.transform =  `rotatex(${ypos}deg) rotatey(${xpos}deg)`;
})

// Agrega un evento de "mouseenter" al elemento "container"
container.addEventListener("mouseenter",(e)=>{
    // Quita cualquier transición de transformación para evitar que la tarjeta se mueva de manera inesperada
    card.style.transition = "none";
})

// Agrega un evento de "mouseleave" al elemento "container"
container.addEventListener("mouseleave",(e)=>{
    // Agrega una transición de transformación a la tarjeta para que vuelva a su posición original en 0.3 segundos
    card.style.transition = "transform 0.3s"
    // Restablece la transformación de la tarjeta a la posición inicial
    card.style.transform = "none";
})
