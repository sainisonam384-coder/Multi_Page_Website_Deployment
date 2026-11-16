// 1. Mark the current page in the navigation
var page = location.pathname.split('/').pop() || 'index.html';
var links = document.querySelectorAll('nav a');
for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute('href') === page) {
    links[i].classList.add('active');
  }
}

// 2. Put the current year in the footer
var year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// 3. Contact form check (demo only, nothing is sent)
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var result = document.getElementById('result');
    var name = document.getElementById('name').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || message.length < 10) {
      result.textContent = 'Please enter your name and a message of at least 10 characters.';
      result.className = 'error';
      return;
    }
    result.textContent = 'Thank you, ' + name + '. This is a demo, so your message was not sent.';
    result.className = 'ok';
    form.reset();
  });
}



