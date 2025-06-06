document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para links internos do menu e footer
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Destacar menu ativo conforme scroll
  const sections = document.querySelectorAll('main section, footer#contato');
  const navLinks = document.querySelectorAll('nav.nav a[href^="#"]');

  function activateMenuOnScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', activateMenuOnScroll);
  activateMenuOnScroll(); // ativa ao carregar

  // Fade in suave para as seções ao scroll
  const faders = document.querySelectorAll('section, footer');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(section => {
    section.classList.add('fade-section'); // para ter opacidade zero inicial
    appearOnScroll.observe(section);
  });

  // -- Opcional: Botão de scroll para topo (pode criar o botão e estilizar no CSS)
  /*
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.textContent = '↑';
  scrollTopBtn.id = 'scrollTopBtn';
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.style.position = 'fixed';
  scrollTopBtn.style.bottom = '30px';
  scrollTopBtn.style.right = '30px';
  scrollTopBtn.style.padding = '10px 15px';
  scrollTopBtn.style.fontSize = '1.5rem';
  scrollTopBtn.style.border = 'none';
  scrollTopBtn.style.borderRadius = '50%';
  scrollTopBtn.style.backgroundColor = '#004aad';
  scrollTopBtn.style.color = '#fff';
  scrollTopBtn.style.cursor = 'pointer';
  scrollTopBtn.style.display = 'none';
  scrollTopBtn.style.zIndex = '9999';

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  */
});

