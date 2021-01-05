import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

	const element = document.getElementById('room-id');
	const room_id = element.getAttribute('data-room-id');

	consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id }, {
	  connected() {
	  	console.log('Connected to room #' + room_id)
	  },

	  disconnected() {
	  	console.log('Disconnected from room #' + room_id)
	  },

	  received(data) {
	  	console.log(data)
	  }
	})
});
