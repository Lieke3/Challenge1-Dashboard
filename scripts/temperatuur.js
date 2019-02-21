var ctx = document.getElementById('myBarChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ["Vrijdag", "Zaterdag", "Zondag"],
        datasets: [{
            label: "Temperatuur in graden Celcius, ℃",
            backgroundColor: 'rgb(255, 200, 0)',
            borderColor: 'rgb(31, 62, 90)',
            data: [20, -50, -120],
        }]
    },


    options: {}
});