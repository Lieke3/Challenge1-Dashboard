var ctx = document.getElementById('myDoughnutChart').getContext('2d');
var chart = new Chart(ctx, {

    type: 'doughnut',


    data: {
        labels: ["Andijviestamppot", "Spaghetti", "Brood", "Stoofpot", "Sushi", "Burger"],
        datasets: [{
            label: "Hoeveelheid in stuks",
			backgroundColor: 'rgb(255, 200, 0)',

     /*  	 ('Andijviestamppot','rgb(255, 0, 60)',
			 ('Spaghetti','rgb(31, 62, 90)',
             ('Brood','rgb(255, 0, 60)',
             ('Stoofpot','rgb(255, 0, 60)',
             ('Sushi','rgb(255, 0, 60)',
             ('Burger','rgb(255, 0, 60)',	]*/		             			      
             
            borderColor: 'rgb(31, 62, 90)',
            data: [100, 100, 400, 50, 400, 340],
        }]
    },


    options: {}
});

