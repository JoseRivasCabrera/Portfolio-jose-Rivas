const servicios = document.getElementById("seleccion-navar-izq");
const info = document.getElementById("seleccion-navar-der");
const contenedorDelContenido = document.getElementById("contenedor-contenido");
const contenidoInfo = `<div class="contenedor-elementos-info">

<a href="https://tinyurl.com/discord-ticoDev" class="elemento-info link-url">
  <p class="nombre-link">Discord</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="https://tinyurl.com/Documentos-ticoDev" class="elemento-info link-url">
  <p class="nombre-link">Documetos</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="mailto:rivas_web-developer@outlook.com" class="elemento-info link-url">
  <p class="nombre-link">Mail</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="#" class="elemento-info link-url">
  <p class="nombre-link">Telegram</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<div class="elemento-info ">
  <p class="nombre-link">Portafolio</p>
  <a href="#" class="link-url">
    <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
  </a>
</div>

</div>`;
const contenidoServicios = `<p>agregando el contenido</p>`;

contenedorDelContenido.innerHTML = contenidoInfo;

info.classList.toggle("navar-selecion");

valorClick = 0;
servicios.addEventListener("click", function eventos(event) {

  if (valorClick == 0) {
    servicios.classList.toggle("navar-selecion");
    info.classList.toggle("navar-selecion");
    contenedorDelContenido.innerHTML = contenidoServicios;
    valorClick = 1;
  }

});

info.addEventListener("click", function eventos(event) {
  if (valorClick == 1) {
    info.classList.toggle("navar-selecion");
    servicios.classList.toggle("navar-selecion");
    contenedorDelContenido.innerHTML = contenidoInfo;
    valorClick = 0;
  }
});

