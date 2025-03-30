<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QR Code Generator</title>
  <script src="https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js"></script>
  <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #282c36;
      margin: 0;
    }
    .container {
      text-align: center;
      background-color: #fff;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      color: #333;
    }
    input, button, select {
      padding: 12px;
      margin: 10px 0;
      font-size: 16px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 6px;
      outline: none;
      text-align: center;
    }
    button {
      background-color: #007bff;
      color: white;
      cursor: pointer;
      border: none;
      font-weight: bold;
    }
    button:hover {
      background-color: #0056b3;
    }
    #qrcode-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    #qrcode {
      padding: 10px;
      background: white;
      display: inline-block;
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>QR Code Generator</h2>
    <input type="text" id="text-input" placeholder="Enter text or URL" />
    <select id="qr-color">
      <option value="#000000">Black</option>
      <option value="#007bff">Blue</option>
      <option value="#ff0000">Red</option>
      <option value="#00ff00">Green</option>
    </select>
    <button onclick="generateQR()">Generate QR Code</button>
    <div id="qrcode-container">
      <div id="qrcode" class="hidden"></div>
    </div>
    <button id="download-btn" class="hidden" onclick="downloadQR()">Download QR Code</button>
  </div>

  <script>
    function generateQR() {
      const inputText = document.getElementById('text-input').value;
      const qrCodeDiv = document.getElementById('qrcode');
      const downloadBtn = document.getElementById('download-btn');
      const qrColor = document.getElementById('qr-color').value;

      qrCodeDiv.innerHTML = '';

      if (inputText.trim() !== '') {
        new QRCode(qrCodeDiv, {
          text: inputText,
          width: 200,
          height: 200,
          colorDark: qrColor,
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        qrCodeDiv.classList.remove('hidden');
        downloadBtn.classList.remove('hidden');
      } else {
        alert('Please enter a valid text or URL!');
        qrCodeDiv.classList.add('hidden');
        downloadBtn.classList.add('hidden');
      }
    }

    function downloadQR() {
      const qrCodeDiv = document.getElementById('qrcode');
      html2canvas(qrCodeDiv).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'qr_code.jpg';
        link.click();
      });
    }
  </script>
</body>
</html>
