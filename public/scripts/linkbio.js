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
const contenidoServicios = `<section class="contenedor-elementos-servicio">
<div class="contenido-servicio">
  <div class="contenedor-img">
    <img class="img-servicio" src="public/img/image.png" alt="">
  </div>
  <div class="contenedor-textos-servicio">
    <H1 class="titulo-prodcuto">Landing page</H1>
    <h2 class="descripcion-servicio">Creo la landig page ideal para tu negocio</h2>
  </div>
  </div>

  <div class="contenido-servicio">
    <div class="contenedor-img">
      <img class="img-servicio" src="public/img/image.png" alt="">
    </div>
    <div class="contenedor-textos-servicio">
      <H1 class="titulo-servicio">LinkTree</H1>
      <h2 class="descripcion-servicio">Creo el servicio de links ideal para tu negocio</h2>
    </div>
    </div>
</section>`;

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

