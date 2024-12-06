const ctxIncomes = document.getElementById('myChartIncomes').getContext('2d');
const myChartIncomes = new Chart(ctxIncomes, {
    type: 'pie', // Тип диаграммы (doughnut или pie)
    data: {
        labels: ['red', 'orange', 'yellow', 'green', 'blue'],
        datasets: [{
            data: [35, 10, 15, 10, 20],
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

const ctxExpenses = document.getElementById('myChartExpenses').getContext('2d');
const myChartExpenses = new Chart(ctxExpenses, {
    type: 'pie', // Тип диаграммы (doughnut или pie)
    data: {
        labels: ['red', 'orange', 'yellow', 'green', 'blue'],
        datasets: [{
            data: [10, 35, 20, 10, 15],
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});