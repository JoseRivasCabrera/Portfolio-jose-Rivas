const cajaJervicios = document.getElementById("seleccion-navar-izq");
const cajaInfo = document.getElementById("seleccion-navar-der");
const contenedorDelContenido = document.getElementById("contenedor-contenido");
const servicios = document.getElementById("servicios");
const informacion = document.getElementById("informacion");

const contenidoInfo = `<div class="contenedor-elementos-info">

<a href="https://tinyurl.com/discord-ticoDev" class="elemento-info link-url">
  <p class="nombre-link">Discord</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="https://tinyurl.com/Documentos-ticoDev" class="elemento-info link-url">
  <p class="nombre-link">Documetos</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="#" class="elemento-info link-url">
  <p class="nombre-link">Telegram</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<div class="elemento-info ">
  <p class="nombre-link">Portafolio</p>
  <a href="https://tinyurl.com/Rivasportfolio" class="link-url">
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
      <H1 class="titulo-prodcuto">LinkTree</H1>
      <h2 class="descripcion-servicio">Creo el servicio de links ideal para tu negocio</h2>
    </div>
    </div>
</section>`;

contenedorDelContenido.innerHTML = contenidoInfo;

cajaInfo.classList.toggle("navar-selecion");

valorClick = 0;
cajaJervicios.addEventListener("click", function eventos(event) {

  if (valorClick == 0) {
    cajaJervicios.classList.toggle("navar-selecion");
    cajaInfo.classList.toggle("navar-selecion");
    servicios.classList.toggle("navar-text-color");
    informacion.classList.toggle("navar-text-color");
    contenedorDelContenido.innerHTML = contenidoServicios;
    valorClick = 1;
  }

});

cajaInfo.addEventListener("click", function eventos(event) {
  if (valorClick == 1) {
    cajaInfo.classList.toggle("navar-selecion");
    cajaJervicios.classList.toggle("navar-selecion");
    servicios.classList.toggle("navar-text-color");
    informacion.classList.toggle("navar-text-color");
    contenedorDelContenido.innerHTML = contenidoInfo;
    valorClick = 0;
  }
});

