import consumer from "./consumer";

// on page load
window.addEventListener("load", (event) => {
  // variables declaring
  const element = document.getElementById("user-id");
  // check existance of element
  if (element) {
    const user_id = +element.getAttribute("data-user-id");
    const messageContainer = document.getElementById("messages");
    // scrolling chat to last message
    messageContainer.scrollTop = messageContainer.scrollHeight;

    consumer.subscriptions.create(
      { channel: "LobbyChannel" },
      {
        // log connection status to console
        connected() {
          console.log("Connected to lobby channel successfully. /~/~/~");
        },

        disconnected() {
          console.log("Disconnected from lobby channel successfully. /~/~/~");
        },
        //

        // render broadcasted message to chat and scroll chat to last message
        received(data) {
          let html;

          if (user_id === data.message.user_id) {
            html = data.mine;
            document.getElementById("message-box").value = "";
          } else {
            html = data.theirs;
          }

          messageContainer.innerHTML = messageContainer.innerHTML + html;
          messageContainer.scrollTop = messageContainer.scrollHeight;
        },
      }
    );
  }
});
