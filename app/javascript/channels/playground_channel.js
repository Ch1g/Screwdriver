import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

	consumer.subscriptions.create({ channel: "PlaygroundChannel" }, {
	  connected() {
	  	console.log('Connected to playground channel successfully. /~/~/~')
	  },

	  disconnected() {
	  	console.log('Disconnected from playground channel successfully. /~/~/~')
	  },

	  received(data) {
	  	console.log(data)
	  }
	});
})
