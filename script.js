// ===================================
// Aca se guarda la funcion de boton del overlay
// ===================================
(function(){
  const intro = document.getElementById('intro');
  if(!intro) return;

  const cta = document.getElementById('intro-cta');
  const gifImg = intro.querySelector('img');

  // Bloquea el scroll mientras no se apriete el botonsito
  document.body.style.overflow = 'hidden';

  // No se como funciona, pero tampoco se toca por si las dudas
  if(cta && typeof cta.focus === 'function') cta.focus();

  let closed = false;
  function closeIntro(){
    if(closed) return;
    closed = true;
    intro.classList.add('intro-hidden');
    intro.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    setTimeout(()=> intro.remove(), 600);
    
    // Inicia la navegacion
    setTimeout(initNavigation, 700);
  }

  // Reemplaza el GIF por el logo estático cuando termine la animación para que quede 'pausado' visualmente.
  const gifDuration = 4500;
  const finalLogo = 'assets/SpaceZenit.jpeg';
  // Precargar el logo final
  const _pre = new Image(); _pre.src = finalLogo;

  setTimeout(()=>{
    if(gifImg){
      gifImg.src = finalLogo;
      gifImg.alt = 'SpaceZenit logo';
      gifImg.style.objectFit = 'contain';
      intro.classList.add('intro-paused');
    }
  }, gifDuration);

  // Permitir cerrar solo mediante el CTA (requisito del usuario)
  if(cta){
    cta.addEventListener('click', function(e){
      e.preventDefault();
      closeIntro();
      setTimeout(()=>{
        const href = cta.getAttribute('href');
        if(href){
          // navegar al ancla después de que la overlay desaparezca
          window.location.hash = href;
        }
      }, 350);
    });
  }
})();

// ===================================
// SISTEMA DE NAVEGACIÓN POR TABS
// ===================================
function initNavigation() {
  
  // Obtener todos los enlaces del navbar
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');
  const hero = document.getElementById('hero');
  
  // Función para ocultar todas las secciones
  function hideAllSections() {
    sections.forEach(section => {
      section.classList.remove('active');
    });
    if (hero) {
      hero.classList.remove('active');
      hero.style.opacity = '0';
      hero.style.visibility = 'hidden';
    }

  }
  
  // Función para mostrar una sección específica
  function showSection(targetId) {
    hideAllSections();
    
    // Remover clase active de todos los enlaces
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Si es el hero (página principal)
    if (targetId === '#hero' || targetId === '') {
      if (hero) {
        hero.classList.add('active');
        hero.style.opacity = '1';
        hero.style.visibility = 'visible';
      }
      // Activar el primer enlace si existe
      if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
      }
      return;
    }
    
    // Buscar y mostrar la sección correspondiente
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      
      // Activar el enlace correspondiente
      navLinks.forEach(link => {
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
      

    }
  }
  
  // Agregar event listeners a todos los enlaces
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      showSection(targetId);
      
      // Actualizar URL sin recargar la página
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Manejar navegación con botones del navegador (atrás/adelante)
  window.addEventListener('popstate', function() {
    const hash = window.location.hash || '#hero';
    showSection(hash);
  });
  
  // Manejar clics en los botones del hero
  const heroCTAButtons = document.querySelectorAll('.hero-cta a');
  heroCTAButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      showSection(targetId);
      
      // Actualizar URL
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });

  // Manejar clic en el logo para volver al HERO
  const logoLink = document.querySelector('.logo');
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      e.preventDefault();
      showSection('#hero');
      if (history.pushState) {
        history.pushState(null, null, '#hero');
      }
    });
  }

  // Manejar clics en los botones "Conocer más" de las organizaciones
  const orgMoreButtons = document.querySelectorAll('.org-more');
  orgMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      showSection(targetId);
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Mostrar la sección inicial basada en el hash de la URL
  const initialHash = window.location.hash || '#alianza';
  showSection(initialHash);
  
  // Prevenir scroll en el body
  document.body.style.overflow = 'hidden';
}

// ===================================
// ANIMACIONES ADICIONALES
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observar todas las cards cuando se muestran
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
