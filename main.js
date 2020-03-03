function flash(id) {
  var contact = document.getElementById(id);
  contact.classList.toggle('purpleFlashOn');
  setTimeout(() => {
    contact.classList.toggle('purpleFlashOn');
  }, 750);
}

function contactFlash() {
  flash('contact');
}

function projectsFlash() {
  flash('projects');
}

function bioFlash() {
  flash('extended-bio');
}

function setup() {
  document.getElementById('contact-nav').onclick = contactFlash;
  document.getElementById('projects-nav').onclick = projectsFlash;
  document.getElementById('bio-nav').onclick = bioFlash;
}

setup();