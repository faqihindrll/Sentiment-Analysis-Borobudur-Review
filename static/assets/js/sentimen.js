const config50 = {
      type: 'bar',
      data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [
          {
            label: 'Positive',
            data: [1061, 452, 121, 136, 391],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Neutral',
            data: [98, 139, 162, 287, 515],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Negative',
            data: [75, 178, 329, 100, 172],
            backgroundColor: 'rgba(255, 206, 86, 0.7)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          },
          {
            label: 'None',
            data: [404, 869, 1026, 1115, 560],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
          text: 'Jumlah Review menurut Sentimen',
          display: true
        },
        legend: {
          display: true
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Kata'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Jumlah'
            },
            ticks: {
              beginAtZero: true,
              suggestedMax: 1200
            }
          }]
        },
      animation: {
        duration: 1000,
        easing: 'easeOutQuart',
        // loop: true
    }
    }
}