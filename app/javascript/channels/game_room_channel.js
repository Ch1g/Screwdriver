import consumer from "./consumer";
import goCrazy from "../games/crazy_button/crazy_button"
export default window.gameRoomChannel;

let gameRoomChannel;
// on page load
window.addEventListener("load", (event) => {
	// variables declaring
	const element = document.getElementById("room-id");
	// check existance of element
	if (element) {
		const room_id = +element.getAttribute("data-room-id");
		window.gameRoomChannel = consumer.subscriptions.create(
			{ channel: "GameRoomChannel", room: room_id },
			{
				// log connection status to console
				connected() {
					console.log("Connected to room " + room_id);
				},

				disconnected() {
					console.log("Disconnected from room " + room_id);
				},
				//

				speak(game, render_data) {
				    this.perform('speak', {game: game, render_data: render_data });
				},

				received(data) {
					window.goCrazy(data.render_data.offsetLeft, data.render_data.offsetTop);
				},
			}
		);
	}
});

