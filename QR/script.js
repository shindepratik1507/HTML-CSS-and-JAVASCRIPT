function generateQR() {
  const inputText = document.getElementById('text-input').value;
  const qrCodeDiv = document.getElementById('qrcode');

  // Clear previous QR code
  qrCodeDiv.innerHTML = '';

  if (inputText.trim() !== '') {
    new QRCode(qrCodeDiv, {
      text: inputText,
      width: 200,
      height: 200
    });
  } else {
    alert('Please enter a valid text or URL!');
  }
}
