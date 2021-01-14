window.showModal = function(card) {
	// get current modal id
	const id = +card.id.split('_')[1];
	const modal = document.getElementById("modal_" + id)
	
	modal.style.display = "block";
}

window.closeModal = function(span) {
	// get current closeSpan id
	const id = +span.id.split('_')[1];
	const modal = document.getElementById("modal_" + id)

	modal.style.display = "none";
}
