// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', () => {
    const botonesFavoritos = document.querySelectorAll('article button');
    const contenedorFavoritos = document.querySelector('#favoritos');

    // Funcionalidad para agregar a favoritos
    botonesFavoritos.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const tarjeta = e.target.parentElement;
            const titulo = tarjeta.querySelector('h3').innerText;

            // Crear elemento en la sección de favoritos
            const nuevoFavorito = document.createElement('p');
            nuevoFavorito.textContent = `⭐ ${titulo}`;
            
            // Si es el primer favorito, limpiamos el texto por defecto
            const textoVacio = contenedorFavoritos.querySelector('p');
            if (textoVacio && textoVacio.textContent.includes('Aquí se mostrarán')) {
                textoVacio.remove();
            }

            contenedorFavoritos.appendChild(nuevoFavorito);

            // Cambiar el estado del botón
            boton.textContent = '✅ Agregado';
            boton.disabled = true;
            boton.style.backgroundColor = '#22c55e';
        });
    });
});