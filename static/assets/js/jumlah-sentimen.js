// <!-- jmlh sent att -->
   config31 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Negative', 'Neutral', 'None'],
                datasets: [{
                    label: "Jumlah Sentimen",
                    data: [1061, 75, 98, 404],
                    backgroundColor: [
                    'rgba(0, 255, 0, 0.7)',   // Hijau
                    'rgba(255, 0, 0, 0.7)',   // Merah
                    'rgba(0, 0, 255, 0.7)',   // Biru
                    'rgba(169, 169, 169, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',   // Hijau
                    'rgba(255, 0, 0, 1)',   // Merah
                    'rgba(0, 0, 255, 1)',   // Biru
                    'rgba(169, 169, 169, 1)' // Abu-abu
                ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                title: {
                    text: "Attraction",
                    display: true,
                },
                legend: {
                    display: true,
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
                            labelString: 'Sentimen'
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
                            suggestedMax: 600
                        }
                    }]
                },
            
                animation: {
                            duration: 1000, // Animation duration in milliseconds
                            easing: 'easeOutQuart', // You can change the easing function
                            // loop: true
                }
              }
          };


// <!-- jmlh sent amen -->
    config32 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Negative', 'Neutral', 'None'],
                datasets: [{
                    label: "Jumlah Sentimen",
                    data: [452, 178, 139, 869],
                    backgroundColor: [
                    'rgba(0, 255, 0, 0.7)',   // Hijau
                    'rgba(255, 0, 0, 0.7)',   // Merah
                    'rgba(0, 0, 255, 0.7)',   // Biru
                    'rgba(169, 169, 169, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',   // Hijau
                    'rgba(255, 0, 0, 1)',   // Merah
                    'rgba(0, 0, 255, 1)',   // Biru
                    'rgba(169, 169, 169, 1)' // Abu-abu
                ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                title: {
                    text: "Amenities",
                    display: true,
                },
                legend: {
                    display: true,
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
                            labelString: 'Sentimen'
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
                            suggestedMax: 900
                        }
                    }]
                },
            animation: {
                        duration: 1000, // Animation duration in milliseconds
                        easing: 'easeOutQuart', // You can change the easing function
                        // loop: true
            }
        }}



// <!-- jmlh sent acc -->
    config33 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Negative', 'Neutral', 'None'],
                datasets: [{
                    label: "Jumlah Sentimen",
                    data: [121, 329, 162, 1026],
                    backgroundColor: [
                    'rgba(0, 255, 0, 0.7)',   // Hijau
                    'rgba(255, 0, 0, 0.7)',   // Merah
                    'rgba(0, 0, 255, 0.7)',   // Biru
                    'rgba(169, 169, 169, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',   // Hijau
                    'rgba(255, 0, 0, 1)',   // Merah
                    'rgba(0, 0, 255, 1)',   // Biru
                    'rgba(169, 169, 169, 1)' // Abu-abu
                ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                title: {
                    text: "Access",
                    display: true,
                },
                legend: {
                    display: true,
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
                            labelString: 'Sentimen'
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
                            suggestedMax: 1000
                        }
                    }]
                  },
            animation: {
                        duration: 1000, // Animation duration in milliseconds
                        easing: 'easeOutQuart', // You can change the easing function
                        // loop: true
            }
        }}


// <!-- jmlh sent prc -->
    config34 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Negative', 'Neutral', 'None'],
                datasets: [{
                    label: "Jumlah Sentimen",
                    data: [136, 100, 287, 1115],
                    backgroundColor: [
                    'rgba(0, 255, 0, 0.7)',   // Hijau
                    'rgba(255, 0, 0, 0.7)',   // Merah
                    'rgba(0, 0, 255, 0.7)',   // Biru
                    'rgba(169, 169, 169, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',   // Hijau
                    'rgba(255, 0, 0, 1)',   // Merah
                    'rgba(0, 0, 255, 1)',   // Biru
                    'rgba(169, 169, 169, 1)' // Abu-abu
                ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                title: {
                    text: "Price",
                    display: true,
                },
                legend: {
                    display: true,
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
                            labelString: 'Sentimen'
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
                            suggestedMax: 1000
                        }
                    }]
                },
            animation: {
                        duration: 1000, // Animation duration in milliseconds
                        easing: 'easeOutQuart', // You can change the easing function
                        // loop: true
            }
        }}


// <!-- jmlh sent no -->
    config35 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Negative', 'Neutral', 'None'],
                datasets: [{
                    label: "Jumlah Sentimen",
                    data: [391, 172, 515, 560],
                    backgroundColor: [
                    'rgba(0, 255, 0, 0.7)',   // Hijau
                    'rgba(255, 0, 0, 0.7)',   // Merah
                    'rgba(0, 0, 255, 0.7)',   // Biru
                    'rgba(169, 169, 169, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',   // Hijau
                    'rgba(255, 0, 0, 1)',   // Merah
                    'rgba(0, 0, 255, 1)',   // Biru
                    'rgba(169, 169, 169, 1)' // Abu-abu
                ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                title: {
                    text: "Amenities",
                    display: true,
                },
                legend: {
                    display: true,
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
                            labelString: 'Sentimen'
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
                            suggestedMax: 900
                        }
                    }]
                },
            animation: {
                        duration: 1000, // Animation duration in milliseconds
                        easing: 'easeOutQuart', // You can change the easing function
                        // loop: true
            }
        }}
