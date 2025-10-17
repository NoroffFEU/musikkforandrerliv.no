import React from 'react';

import ReactDOM from 'react-dom/client';

import Message from '../components/Message';

let currentMessageRoot = null;
let currentMessageContainer = null;
let hideTimeout = null;

export function showMessage(text, type = 'info') {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  if (currentMessageRoot && currentMessageContainer) {
    currentMessageRoot.unmount();
    document.body.removeChild(currentMessageContainer);
    currentMessageRoot = null;
    currentMessageContainer = null;
  }

  const messageContainer = document.createElement('div');
  document.body.appendChild(messageContainer);
  const root = ReactDOM.createRoot(messageContainer);

  root.render(<Message text={text} type={type} />);

  const timeOut = window.setTimeout(() => {
    root.unmount();
    messageContainer.remove();
    currentMessageRoot = null;
    currentMessageContainer = null;
    hideTimeout = null;
  }, 3000);

  currentMessageRoot = root;
  currentMessageContainer = messageContainer;
  hideTimeout = timeOut;
}

export default showMessage;
