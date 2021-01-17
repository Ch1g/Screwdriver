import consumer from './consumer';

window.lobbyConnection = function (userId) {
  // variables declaring
  const messageContainer = document.getElementById('messages');
  // scrolling chat to last message
  messageContainer.scrollTop = messageContainer.scrollHeight;
  // establishing connection
  consumer.subscriptions.create(
    { channel: 'LobbyChannel' },
    {
      // log connection status to console
      connected() {
        console.log('Connected to lobby channel successfully. /~/~/~');
      },

      disconnected() {
        console.log('Disconnected from lobby channel successfully. /~/~/~');
      },
      //

      // render broadcasted message to chat and scroll chat to last message
      received(data) {
        let html = new DOMParser().parseFromString(data.html, 'text/html').body.firstChild;
        if (userId === data.message.user_id) {
          html.className += ' me';
          document.getElementById('message-box').value = '';
        }
        messageContainer.innerHTML += html.outerHTML;
        messageContainer.scrollTop = messageContainer.scrollHeight;
      },
    }
  );
};
