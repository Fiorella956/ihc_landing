console.log("script.js cargado");

// ---------------- MODAL CONTACTO ------------------

const btnContacto = document.getElementById('btnContacto');
const modalContacto = document.getElementById('modalContacto');
const cerrarModal = document.getElementById('cerrarModal');
const formContacto = document.getElementById('formContacto');

if (btnContacto && modalContacto && formContacto) {

    btnContacto.addEventListener('click', (e) => {
        e.preventDefault();
        modalContacto.style.display = 'block';
    });

    if (cerrarModal) {
        cerrarModal.addEventListener('click', () => {
            modalContacto.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalContacto) {
            modalContacto.style.display = 'none';
        }
    });

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");
        formContacto.reset();
        modalContacto.style.display = 'none';
    });

} else {
    console.error("❌ IDs incorrectos o script cargado antes del HTML");
}


// ---------------- SISTEMA DE REGISTRO ------------------

const personas = [
    { nombre: "Lucía", apellido: "Fernández", edad: 22, interes: "Arte" },
    { nombre: "Carlos", apellido: "Mora", edad: 25, interes: "Tecnología" },
    { nombre: "Ana", apellido: "Rojas", edad: 20, interes: "Música" },
    { nombre: "Diego", apellido: "López", edad: 23, interes: "Deportes" }
];

let interesesSeleccionados = [];

document.querySelectorAll(".interes-tag").forEach(tag => {
    tag.addEventListener("click", () => {

        tag.classList.toggle("activo");

        if (tag.classList.contains("activo")) {
            interesesSeleccionados.push(tag.innerText.trim());
        } else {
            interesesSeleccionados = interesesSeleccionados.filter(
                i => i !== tag.innerText.trim()
            );
        }
    });
});


// ---------------- REGISTRAR ------------------

const btnRegistrar = document.getElementById("btnRegistrar");

if (btnRegistrar) {
    btnRegistrar.addEventListener("click", () => {

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();

        if (!nombre || !correo) {
            alert("Debes completar tu nombre y correo 😅");
            return;
        }

        document.getElementById("perfilNombre").innerText = nombre;
        document.getElementById("perfilCorreo").innerText = correo;
        document.getElementById("perfilIntereses").innerText = interesesSeleccionados.join(", ");

        document.getElementById("registro").style.display = "none";
        document.getElementById("zonaMatches").style.display = "block";

        let contenedor = document.getElementById("listaMatches");
        contenedor.innerHTML = "";

        personas.forEach(p => {

            contenedor.innerHTML += `
                <div class="cardMatch">
                    <h3>${p.nombre} ${p.apellido}</h3>
                    <p><strong>Edad:</strong> ${p.edad}</p>
                    <p><strong>Interés:</strong> ${p.interes}</p>
                </div>
            `;
        });
    });
}


// ---------------- PERFIL (edición) ------------------

document.addEventListener('DOMContentLoaded', () => {

    const editNombre = document.getElementById('editNombre');
    const editCorreo = document.getElementById('editCorreo');
    const editInteres = document.getElementById('editInteres');

    const btnGuardar = document.querySelector('.btn-guardar');

    if (btnGuardar) {
        btnGuardar.addEventListener('click', () => {
            alert("Cambios guardados (simulado)");
        });
    }
});
