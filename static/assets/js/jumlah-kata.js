// attractions

config21 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                    {
                        label: 'Attractions',
                        data: [25096, 2324, 1472],
                        backgroundColor: [
                            'rgba(9, 225, 45, 0.6)',
                            'rgba(221, 1, 1, 0.6)',
                            'rgba(134, 122, 122, 0.6)',
                        ],
                        borderColor: [
                            'rgba(9, 225, 45, 1)',
                            'rgba(221, 1, 1, 1)',
                            'rgba(134, 122, 122, 1)',
                        ],
                        borderWidth: 1
                }]
            },
            options: {
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
        }};


// Amenities
config22 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                {
                        label: 'Amenities',
                        data: [11404, 3290, 4543],
                        backgroundColor: [
                            'rgba(9, 225, 45, 0.6)',
                            'rgba(221, 1, 1, 0.6)',
                            'rgba(134, 122, 122, 0.6)',
                        ],
                        borderColor: [
                            'rgba(9, 225, 45, 1)',
                            'rgba(221, 1, 1, 1)',
                            'rgba(134, 122, 122, 1)',
                        ],
                        borderWidth: 1
                }]
            },
            options: {
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
            }
        }};


// Access
config23 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                {
                        label: 'Acces',
                        data: [7135, 11794, 22452],
                        backgroundColor: [
                            'rgba(9, 225, 45, 0.6)',
                            'rgba(221, 1, 1, 0.6)',
                            'rgba(134, 122, 122, 0.6)',
                        ],
                        borderColor: [
                            'rgba(9, 225, 45, 1)',
                            'rgba(221, 1, 1, 1)',
                            'rgba(134, 122, 122, 1)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
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
            }
        }};


// Price
config24 = {
    type: 'bar',
    data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
        {
                label: 'Price',
                data: [3112, 6653, 2355],
                backgroundColor: [
                    'rgba(9, 225, 45, 0.6)',
                    'rgba(221, 1, 1, 0.6)',
                    'rgba(134, 122, 122, 0.6)',
                ],
                borderColor: [
                    'rgba(9, 225, 45, 1)',
                    'rgba(221, 1, 1, 1)',
                    'rgba(134, 122, 122, 1)',
                ],
                borderWidth: 1
            }]
    },
    options: {
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
    }
}};


// No Aspect
config25 = {
            type: 'bar',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                {
                        label: 'No Aspect',
                        data: [8561,16549,4828],
                        backgroundColor: [
                            'rgba(9, 225, 45, 0.6)',
                            'rgba(221, 1, 1, 0.6)',
                            'rgba(134, 122, 122, 0.6)',
                        ],
                        borderColor: [
                            'rgba(9, 225, 45, 1)',
                            'rgba(221, 1, 1, 1)',
                            'rgba(134, 122, 122, 1)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
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
            }
        }};