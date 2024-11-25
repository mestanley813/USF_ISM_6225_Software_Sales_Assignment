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

let data = [];
for (let i = 0; i < 12; i++) {
    let randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    data.push(randomNumber);
}
data.sort((a, b) => a - b);

const ctx = document.getElementById('homeChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: MONTHS,
    datasets: [{
      label: 'Number of sales',
      data: data,
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