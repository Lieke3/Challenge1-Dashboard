<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>


<script>

	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: ["2013", "2014", "2015", "2016", "2017"],
	        datasets: [{
	            label: "Stockdata in dollars",
	            backgroundColor: 'rgb(230, 241, 255)',
	            borderColor: 'rgb(68, 123, 193)',
	            data: [39.24, 149.56, 219.31, 240.01, 213.69],
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});
	

</script>