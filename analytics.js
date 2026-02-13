// Analytics Dashboard - Chart.js Implementation
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    const chartColors = {
        gold: '#FFD700',
        darkGold: '#B8860B',
        green: '#00C853',
        orange: '#FFA500',
        red: '#FF5252',
        purple: '#9C27B0',
        blue: '#2196F3'
    };

    const gridColor = isDarkMode ? '#2a2f4a' : '#e2e8f0';
    const textColor = isDarkMode ? '#f8fafc' : '#0f172a';

    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Fund Performance (%)',
                    data: [100, 108, 112, 118, 122, 128],
                    borderColor: chartColors.green,
                    backgroundColor: 'rgba(0, 200, 83, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointBackgroundColor: chartColors.gold,
                    pointBorderColor: chartColors.green,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        display: true,
                        labels: { 
                            color: textColor,
                            font: { size: 12, weight: 'bold' }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    }
                }
            }
        });
    }

    // Deposits Chart
    const depositsCtx = document.getElementById('depositsChart');
    if (depositsCtx) {
        new Chart(depositsCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Monthly Deposits ($M)',
                    data: [45, 52, 48, 61, 58, 67],
                    backgroundColor: [
                        chartColors.gold,
                        chartColors.orange,
                        chartColors.gold,
                        chartColors.green,
                        chartColors.orange,
                        chartColors.green
                    ],
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: chartColors.darkGold
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        display: true,
                        labels: { 
                            color: textColor,
                            font: { size: 12, weight: 'bold' }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor }
                    }
                }
            }
        });
    }

    // Asset Allocation Chart
    const allocationCtx = document.getElementById('allocationChart');
    if (allocationCtx) {
        new Chart(allocationCtx, {
            type: 'doughnut',
            data: {
                labels: ['Equities', 'Fixed Income', 'Alternatives', 'Commodities', 'Cash'],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        chartColors.gold,
                        chartColors.orange,
                        chartColors.green,
                        chartColors.blue,
                        chartColors.purple
                    ],
                    borderWidth: 3,
                    borderColor: isDarkMode ? '#1a1f3a' : '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Timeframe selectors
    const performanceTimeframe = document.getElementById('performanceTimeframe');
    const depositsTimeframe = document.getElementById('depositsTimeframe');

    if (performanceTimeframe) {
        performanceTimeframe.addEventListener('change', function() {
            console.log('Performance timeframe changed to:', this.value);
            // Update chart data based on selection
        });
    }

    if (depositsTimeframe) {
        depositsTimeframe.addEventListener('change', function() {
            console.log('Deposits timeframe changed to:', this.value);
            // Update chart data based on selection
        });
    }
});
