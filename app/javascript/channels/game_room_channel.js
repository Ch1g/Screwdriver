import consumer from "./consumer";

// on page load
window.addEventListener("load", (event) => {
	// variables declaring
	const element = document.getElementById("room-id");
	// check existance of element
	if (element) {
		const room_id = +element.getAttribute("data-room-id");
		consumer.subscriptions.create(
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

				received(data) {
					console.log(data);
				},
			}
		);
	}
});
