// Efecto parallax
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Efecto zoom al pasar el mouse por imágenes
document.querySelectorAll(".proyecto-img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("zoom");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("zoom");
  });
});

// Scroll suave para enlaces del menú
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validación simple del formulario de contacto
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor, completa todos los campos antes de enviar.');
    return;
  }

  // Validación simple de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  alert('Formulario enviado correctamente. ¡Gracias!');
  form.reset();
});

// Botón "volver arriba"
const btnScrollTop = document.getElementById('btn-scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
});

btnScrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animación al cargar secciones con IntersectionObserver
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
