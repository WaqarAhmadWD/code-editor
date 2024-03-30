let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");
let style = document.createElement("style");
let output = document.getElementById("content");
let textarea = document.getElementsByTagName("textarea");
css.innerHTML = `*{
	color:white;
	font-family:'arial';
}
.body{	
	background:black;
}`;
style.innerHTML = `#outputArea{${css.value}}`;
html.value = `<div class="body">
<h1>Welcome To My Code Editor!</h1>
</div>`;
output.innerHTML = html.value;

js.innerHTML = `console.log("Hit me");`;
console.log("Hit me");
document.head.appendChild(style);
html.addEventListener("input", (event) => {
  output.innerHTML = html.value;
});
css.addEventListener("input", (event) => {
  style.innerHTML = `#outputArea{${css.value}}`;
});
js.addEventListener("input", (event) => {
  try {
    var scriptFunction = new Function(js.value);
    scriptFunction();
    js.style.color = "white";
  } catch (error) {
    console.log(error);
    js.style.color = "red";
  }
});
Array.from(textarea).forEach((e) => {
  e.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      // Prevent default behavior of Tab key
      event.preventDefault();

      // Get the current cursor position
      var cursorPosition = this.selectionStart;

      // Get the textarea content
      var content = this.value;

      // Insert a tab character at the cursor position
      var updatedContent =
        content.substring(0, cursorPosition) +
        "\t" +
        content.substring(cursorPosition);

      // Update the textarea content
      this.value = updatedContent;

      // Set the cursor position after the inserted tab
      this.selectionStart = this.selectionEnd = cursorPosition + 1;
    }
  });
});
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "Are you sure you want to leave this page?";
});
let htmlCopy = document.getElementById("htmlCopy");
let cssCopy = document.getElementById("cssCopy");
let jsCopy = document.getElementById("jsCopy");
htmlCopy.addEventListener("click", function () {
  html.select();
  navigator.clipboard.writeText(html.value);
  htmlCopy.innerHTML = "Copied";
  setTimeout(() => {
    htmlCopy.innerHTML = "Copy";
  }, 2000);
});
cssCopy.addEventListener("click", function () {
  css.select();
  navigator.clipboard.writeText(css.value);
  cssCopy.innerHTML = "Copied";
  setTimeout(() => {
    cssCopy.innerHTML = "Copy";
  }, 2000);
});
jsCopy.addEventListener("click", function () {
  js.select();
  navigator.clipboard.writeText(js.value);
  jsCopy.innerHTML = "Copied";
  setTimeout(() => {
    jsCopy.innerHTML = "Copy";
  }, 2000);
});
