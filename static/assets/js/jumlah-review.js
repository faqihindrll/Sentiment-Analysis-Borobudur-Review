      const config40 = {
        type: 'bar',
        data: {
          labels: ['Positif', 'Netral', 'Negatif', 'None'],
          datasets: [{
            label: "Jumlah Review per Sentimen",
            data: [2161, 1201, 854, 3974],
            backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
          }]
        },
        options: {
        responsive: true,
        maintainAspectRatio: true,
          title: {
            text: "Jumlah Review per Sentimen",
            display: true,
          },
          legend: {
            display: true,
            position: 'top', // You can change the position of the legend
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Labels'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Values'
              }
            }]
          },
          animation: {
            duration: 1000, // Animation duration in milliseconds
            easing: 'easeOutQuart' // You can change the easing function
          }
        }
      }
