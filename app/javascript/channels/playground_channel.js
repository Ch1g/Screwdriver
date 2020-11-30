import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

	const element = document.getElementById('room-id');
	const room_id = element.getAttribute('data-room-id');

	consumer.subscriptions.create({ channel: "PlaygroundChannel", room_id: room_id }, {
	  connected() {
	  	console.log('connected to playground channel ' + room_id)
	  },

	  disconnected() {
	    // Called when the subscription has been terminated by the server
	  },

	  received(data) {
	  	console.log(data)
	  }
	});
})
