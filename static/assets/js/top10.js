// <!-- attractions -->
const config11 = {
            type: 'bar',
            data: {
                labels: ['candi', 'borobudur', 'tempat', 'wisata', 'keajaiban', 'bagus', 'sejarah', 'dunia', 'pemandangan','indah'],
                datasets: [{
                    label: "Top 10 Kata",
                    data: [1948, 901, 668, 472, 378, 347, 324, 309, 300, 269],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 77, 166, 0.7)',
                    'rgba(79, 255, 89, 0.7)',
                    'rgba(0, 255, 255, 0.7)',
                    'rgba(255, 255, 0, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 77, 166, 1)',
                    'rgba(79, 255, 89, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                indexAxis: 'y',
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
                            labelString: 'Jumlah'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Kata'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 2000
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

// <!-- Amenities -->
    const config12 ={
            type: 'bar',
            data: {
                labels: ['candi', 'tempat', 'borobudur', 'naik', 'area', 'bersih', 'masuk', 'fasilitas', 'pintu','cukup'],
                datasets: [{
                    label: "Top 10 Kata",
                    data: [597, 257, 247, 226, 208, 173, 154, 139, 124, 12],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 77, 166, 0.7)',
                    'rgba(79, 255, 89, 0.7)',
                    'rgba(0, 255, 255, 0.7)',
                    'rgba(255, 255, 0, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 77, 166, 1)',
                    'rgba(79, 255, 89, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                indexAxis: 'y',
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
                            labelString: 'Jumlah'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Kata'
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


// <!-- Access -->
    config13 = {
            type: 'bar',
            data: {
                labels: ['candi', 'naik', 'borobudur', 'jalan', 'masuk', 'akses', 'pintu', 'mudah', 'area','bus'],
                datasets: [{
                    label: "Top 10 Kata",
                    data: [150, 75, 73, 59, 51, 50, 45, 43, 41, 39],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 77, 166, 0.7)',
                    'rgba(79, 255, 89, 0.7)',
                    'rgba(0, 255, 255, 0.7)',
                    'rgba(255, 255, 0, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 77, 166, 1)',
                    'rgba(79, 255, 89, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                indexAxis: 'y',
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
                            labelString: 'Jumlah'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Kata'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 150
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

// <!-- Price -->
config14 = {
            type: 'bar',
            data: {
                labels: ['tiket', 'harga', 'candi', 'masuk', 'naik', 'murah', 'borobudur', 'cukup', 'sewa','terjangkau'],
                datasets: [{
                    label: "Top 10 Kata",
                    data: [171, 169, 110, 97, 88, 76, 47, 42, 42, 36],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 77, 166, 0.7)',
                    'rgba(79, 255, 89, 0.7)',
                    'rgba(0, 255, 255, 0.7)',
                    'rgba(255, 255, 0, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 77, 166, 1)',
                    'rgba(79, 255, 89, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 255, 0, 1)',
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
                            labelString: 'Jumlah'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Kata'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 180
                        }
                    }]
                },
                animation: {
                            duration: 1000, // Animation duration in milliseconds
                            easing: 'easeOutQuart', // You can change the easing function
                            // loop: true
                },
            }
    }


// <!-- No Aspect -->
   config15 = {
            type: 'bar',
            data: {
                labels: ['candi', 'borobudur', 'tempat', 'wisata', 'keajaiban', 'dunia', 'sejarah', 'indonesia', 'naik','kesini'],
                datasets: [{
                    label: "Top 10 Kata",
                    data: [590, 354, 203, 154, 142, 125, 114, 113, 107, 88],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 77, 166, 0.7)',
                    'rgba(79, 255, 89, 0.7)',
                    'rgba(0, 255, 255, 0.7)',
                    'rgba(255, 255, 0, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 77, 166, 1)',
                    'rgba(79, 255, 89, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, // Membuat chart responsif
                maintainAspectRatio: true,
                title: {
                    text: "No Aspect",
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
                            labelString: 'Jumlah'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Kata'
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
        }
