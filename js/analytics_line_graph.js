var MONTHS = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: MONTHS,
    datasets: [{
      label: 'Number of sales',
      data: [20, 60, 40, 70, 80, 100, 150, 200, 150, 160, 120, 140],
      borderWidth: 1,
      borderColor: 'rgb(149, 43, 185)',
      backgroundColor: 'rgb(149, 43, 185)'
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});