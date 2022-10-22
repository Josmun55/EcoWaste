new Chart(document.getElementById("barchart"), {
	type: 'bar',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			data: [10,20,30,25,20,17,40,50],
			label: 'Bio-degradable',
			backgroundColor: "#4755AB",
			borderWidth: 1,
		}, {
			data: [30,10,70,15,30,20,70,80],
			label: 'Plastic',
			backgroundColor: "#E7EDF6",
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
	}
});
