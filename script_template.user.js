// ==UserScript==
// @name          Template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       kenneth jules
// @match
// @icon         https://cdn-icons-png.flaticon.com/128/10669/10669650.png
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle(`
.myButton{

}
`);

(function () {
  "use strict";
  // Wait for anchorPoint
  let anchorElement = document.getElementById("id");
  let buttons = [];
  //   add buttons here
  addNewButton("test button", "myButton", () => alert("testing"));

  let checkExist = setInterval(() => {
    if (anchorElement != undefined) {
      makeButtons();
      clearInterval(checkExist);
    }
  }, 100);

  function addNewButton(buttonText, buttonClass, buttonOnClick) {
    let theButton = document.createElement("input");
    theButton.type = "button";
    theButton.className = buttonClass;
    theButton.value = buttonText;
    theButton.onclick = () => {
      buttonOnClick();
    };
    buttons.push(theButton);
  }

  function makeButtons() {
    for (let i = 0; i < buttons.length; i++) {
      anchorElement.before(buttons[i]);
    }
    console.log("making buttons");
  }

  // ============ My Functions ==================

  // Your code here...
})();
