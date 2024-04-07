function cambiarHeader() {
    let contenedorMenu = document.getElementById('contenedor--menu');
    let contenidoMenu = '';

    if (window.innerWidth <= 768) {
        contenidoMenu = `<nav class="navbar">
        <h1 class="tittle--name">Rivas</h1>

        <label class="labe_hamburguesa" for="menu_hamburguesa">
            <img src="public/img/iconos/menu.svg" alt="Menu" class="icono--menu">
        </label>

        <input class="menu_hamburguesa" type="checkbox" name="" id="menu_hamburguesa">

        <ul class="ul_links">
            <li class="li_links">
                <a href="../index.html" class="link">Inicio</a>
            </li>
            <li class="li_links">
                <a href="#" class="link">Sobre mi</a>
            </li>
            <li class="li_links">
                <a href="contacto.html" class="link">Contacto</a>
            </li>
        </ul>
    </nav>`;
    } else {
        contenidoMenu = `<div class="header--elements">
        <h1 class="tittle--name">Rivas</h1>
        <nav class="header--menu">
          <a href="./index.html" class="element--menu"><p>Inicio</p></a>
          <a href="" class="element--menu"><p>Acerca de mi</p></a>
          <a href="#" class="element--menu"><p>Proyectos</p></a>
        </nav>
        <a href="./contacto.html" class="btn--contacto">Contáctame</a>
      </div>`
    }
    contenedorMenu.innerHTML = contenidoMenu;
}

function cerrarMenu() {
    let menuHamburguesa = document.getElementById('menu_hamburguesa');
    if (menuHamburguesa.checked) {
        menuHamburguesa.checked = false;
    }
}

window.onload = function() {
    cambiarHeader();
    window.addEventListener('scroll', cerrarMenu);
};

window.onresize = cambiarHeader;

