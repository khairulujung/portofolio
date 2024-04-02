const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Buat URL Whatsapp
  const whatsappURL = `https://api.whatsapp.com/send?phone=6282171635798&text=${encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\nsbuject' + subject + '\nPesan: ' + message)}`;

  // Buka URL Whatsapp di tab baru
  window.open(whatsappURL, '_blank');

  // Tampilkan pesan konfirmasi
  const messageElement = document.getElementById('message-sent');
  messageElement.textContent = 'Pesan Anda telah terkirim ke Whatsapp.';
});