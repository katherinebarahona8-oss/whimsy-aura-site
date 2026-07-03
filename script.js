const form = document.querySelector('.waitlist-form');
if (form) {
  form.addEventListener('submit', () => {
    const button = form.querySelector('button');
    button.textContent = 'adding magic...';
  });
}
