
function renderText(context, text, x, y, fontSize) {
  const lines = text.split('\n');
  context.font = fontSize + 'px Arial';
  context.fillStyle = 'black';
  
  for (let i = 0; i < lines.length; i++) {
    context.fillText(lines[i], x, y + i * fontSize);
  }
}

function make() {

  let text = document.getElementById("text").value;
  let scale_by = parseFloat(document.getElementById("scale").value);
  let rows = parseInt(document.getElementById("rows").value);
  let cols = parseInt(document.getElementById("cols").value);
  let margin = parseInt(document.getElementById("margin").value);
  let canvas = document.getElementById("canvas");


  var a4Width = 794; // Width of A4 paper in pixels
  var a4Height = 1123; // Height of A4 paper in pixels
  canvas.width = a4Width;
  canvas.height = a4Height;

  // Get the 2D drawing context
  var context = canvas.getContext('2d');

  // Generate the picture on the canvas
  // Example: Drawing a red rectangle
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Render text on the canvas
  var fontSize = 24 * scale_by; // Scaled font size
  context.fillStyle = 'black';
  context.font = fontSize + 'px Arial';

  var blockWidth = canvas.width / cols;
  var blockHeight = canvas.height / rows;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      var x = col * blockWidth + margin;
      var y = row * blockHeight + fontSize + margin;

      renderText(context, text, x, y, fontSize);
    }
  }
}

function download() {
  let canvas = document.getElementById("canvas");
  // Convert the canvas content to a data URL
  var dataURL = canvas.toDataURL('image/jpeg');

  // Create a link element
  var link = document.createElement('a');
  link.href = dataURL;
  link.download = 'generated_picture.jpg';

  // Trigger the download
  link.click();
}