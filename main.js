// const { setTimeout } = require("timers/promises");

document.addEventListener("DOMContentLoaded", () => {
  hljs.initHighlightingOnLoad();
  const codeBlock = document.getElementById("code");
  const copyButton = document.getElementById("copy-button");
  const copySuccess = document.getElementById("copy-success");

  const copyTextHandler = () => {
    const text = codeBlock.innerText;
    // const text = document.getElementById("language-copy").innerText;

    //first version - document.exectCommand('copy)
    // var element = document.createElement("textarea");
    // document.body.appendChild(element);
    // element.value = text;
    // element.select();
    // document.execCommand("copy");
    // document.body.removeChild(element);
    // copySuccess.classList.add("show-message");

    // 2nd version - Clipboard API
    navigator.clipboard.writeText(text).then(
      () => {
        copySuccess.classList.add("show-message");
        setTimeout(() => {
          copySuccess.classList.remove("show-message");
        }, 2500);
      },
      () => {
        console.log("Error writing to the clipboard");
      }
    );
  };
  copyButton.addEventListener("click", copyTextHandler);
});
