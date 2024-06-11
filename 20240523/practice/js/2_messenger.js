"use strict";

const chatBox = document.querySelector(".chat-box");
const textBox = document.querySelector(".footer textarea");
const sendBtn = document.querySelector(".footer button");

const sendMsg = () => {
  let newMsg = textBox.value;
  let chgMsg = newMsg.replaceAll(" ", "&nbsp;");
  chgMsg = chgMsg.replaceAll("\n", "<br />");

  const msg = document.createElement("p");
  msg.classList.add("bubble", "my-bubble");
  msg.innerHTML = chgMsg;

  chatBox.append(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  textBox.value = "";
};

const sendByEnter = (e) => {
  if (e.key == 'Enter' && !e.shiftKey) {
    sendMsg();
    e.preventDefault();
  }
}

sendBtn.addEventListener("click", sendMsg);
textBox.addEventListener("keypress", sendByEnter);