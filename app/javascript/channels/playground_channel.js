import consumer from "./consumer";

consumer.subscriptions.create(
  { channel: "PlaygroundChannel" },
  {
    connected() {
      console.log("Connected to playground channel successfully. /~/~/~");
    },

    disconnected() {
      console.log("Disconnected from playground channel successfully. /~/~/~");
    },

    received(data) {
      console.log(data);

      const element = document.getElementById("user-id");
      const user_id = Number(element.getAttribute("data-user-id"));

      let html;

      if (user_id === data.message.user_id) {
        html = data.mine;
        document.getElementById("message-box").value = "";
      } else {
        html = data.theirs;
      }

      const messageContainer = document.getElementById("messages");
      messageContainer.innerHTML = messageContainer.innerHTML + html;
      messageContainer.scrollTop = messageContainer.scrollHeight;
    },
  }
);
