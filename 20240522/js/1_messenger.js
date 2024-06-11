"use strict";

const chatBox = document.querySelector("#chat-box");
const sendBtn = document.querySelector("#send-btn");
const textBox = document.querySelector("textarea");

function sendMyText() {
  const newMessage = textBox.value;
  if (newMessage.length == 0) {
    return false;
  }
  let changeMessage = newMessage.replaceAll(" ", "&nbsp;");
  changeMessage = changeMessage.replaceAll("\n", "<br />");

  const divEl = document.createElement("div");
  divEl.classList.add("bubble", "my-bubble");
  divEl.innerHTML = changeMessage;
  
  chatBox.append(divEl);
  chatBox.scrollTop = chatBox.scrollHeight;

  textBox.value = '';
};

function sendMyTextByEnter(e) {
  if (e.key == 'Enter' && !e.shiftKey) {
    sendMyText();
    e.preventDefault();
  }
};

sendBtn.addEventListener("click", sendMyText);
textBox.addEventListener("keypress", sendMyTextByEnter);