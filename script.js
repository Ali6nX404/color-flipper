// Random color generator

const randomHex = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // generating 6 times as HTML color code consist of 6 letter or digits
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

  return color;
};

// change color

function changeColor() {
  var newColor = randomHex();

  document.getElementsByTagName("body")[0].style.backgroundColor = newColor;
  document.getElementsByTagName("button")[0].style.color = newColor;
  document.getElementsByTagName("button")[1].style.color = newColor;
  document.getElementsByTagName("input")[0].style.backgroundColor = newColor;
  document.getElementsByTagName("input")[0].value = newColor;

  let copyButton = document.getElementsByTagName("button")[1];
  if (copyButton.disabled) {
    copyButton.disabled = false;
  }
  copyButton.innerHTML = "Copy";
}

//copy the value
function copyClipboard() {
  let input = document.getElementsByTagName("input")[0];
  let button = document.getElementsByTagName("button")[1];

  /* Copy only when input has value */
  if (input.value != "") {
    input.select();
    navigator.clipboard.writeText(input.value);
    /* Change text */
    button.innerHTML = "Copied!";
    /* Disable button */
    button.disabled = true;
  }
}
