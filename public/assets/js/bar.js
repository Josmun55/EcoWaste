new Chart(document.getElementById("barchart"), {
	type: 'bar',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			data: [10,20,30,25,20,17,40,50],
			label: 'Bio-degradable',
			backgroundColor: "#00FF00",
			borderWidth: 1,
		}, {
			data: [30,10,70,15,30,20,70,80],
			label: 'Plastic',
			backgroundColor: "#000080",
			borderWidth: 1,
		},
			{
				data: [15,12,45,35,15,22,24,13],
				label: 'Plastic',
				backgroundColor: "#A020F0.",
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
