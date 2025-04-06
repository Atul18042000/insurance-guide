// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-in-out'
    });

    // Insurance Penetration Chart
    const penetrationCtx = document.getElementById('insurancePenetrationChart').getContext('2d');
    const insurancePenetrationChart = new Chart(penetrationCtx, {
        type: 'bar',
        data: {
            labels: ['Life Insurance', 'Health Insurance'],
            datasets: [{
                label: 'Insurance Penetration %',
                data: [20, 31],
                backgroundColor: ['rgba(66, 133, 244, 0.8)', 'rgba(66, 133, 244, 0.8)'],
                borderColor: ['rgba(66, 133, 244, 1)', 'rgba(66, 133, 244, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Insurance Penetration: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        maxTicksLimit: 5,
                        font: {
                            size: 11
                        }
                    }
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function(value) {
                        return value + '%';
                    },
                    color: '#333',
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
    });

    // Healthcare Cost Inflation Chart
    const healthcareCtx = document.getElementById('healthcareInflationChart');
    if (healthcareCtx) {
        new Chart(healthcareCtx, {
            type: 'line',
            data: {
                labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Healthcare Cost Inflation (%)',
                    data: [12.5, 14.2, 15.8, 18.4, 20.6, 22.4],
                    borderColor: 'rgba(66, 133, 244, 1)',
                    backgroundColor: 'rgba(66, 133, 244, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: 'rgba(66, 133, 244, 1)',
                    pointBorderColor: 'white',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                weight: '600'
                            },
                            padding: 20,
                            usePointStyle: true,
                            boxWidth: 6
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#2d3748',
                        bodyColor: '#2d3748',
                        titleFont: {
                            size: 14,
                            weight: '600'
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        borderColor: 'rgba(226, 232, 240, 0.8)',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Inflation Rate: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 25,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: {
                                size: 12
                            },
                            stepSize: 5
                        },
                        grid: {
                            color: 'rgba(226, 232, 240, 0.5)'
                        },
                        title: {
                            display: true,
                            text: 'Inflation Rate (%)',
                            font: {
                                size: 14,
                                weight: '500'
                            },
                            padding: 10
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Year',
                            font: {
                                size: 14,
                                weight: '500'
                            },
                            padding: 10
                        }
                    }
                }
            }
        });

        // Add source citation
        const chartContainer = healthcareCtx.closest('.chart-container');
        if (chartContainer) {
            const sourceText = document.createElement('p');
            sourceText.className = 'chart-source';
            sourceText.innerHTML = 'Source: IRDAI Annual Reports & National Health Accounts (2017-2022)';
            chartContainer.appendChild(sourceText);
        }
    }

    // Life Insurance Coverage Chart
    const lifeCtx = document.getElementById('lifeInsuranceChart').getContext('2d');
    new Chart(lifeCtx, {
        type: 'bar',
        data: {
            labels: ['Required Coverage', 'Actual Coverage', 'Protection Gap'],
            datasets: [{
                label: 'Coverage Amount (₹ Lakhs)',
                data: [250, 50, 200],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(156, 163, 175, 0.8)'
                ],
                borderColor: [
                    'rgba(16, 185, 129, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(156, 163, 175, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '₹' + context.parsed.x + ' Lakhs';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount in Lakhs (₹)'
                    }
                }
            }
        }
    });

    // Ravi's Timeline Chart
    const timelineCtx = document.getElementById('raviTimeline').getContext('2d');
    new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: ['Today', '5 Years', '10 Years', '15 Years', '20 Years'],
            datasets: [{
                label: 'Required Coverage',
                data: [5000000, 8125000, 13203125, 21454828, 34863595],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Current Coverage',
                data: [5000000, 5000000, 5000000, 5000000, 5000000],
                borderColor: 'rgba(239, 68, 68, 1)',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 15,
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#2d3748',
                    bodyColor: '#2d3748',
                    titleFont: {
                        size: 12
                    },
                    bodyFont: {
                        size: 11
                    },
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            if (value >= 10000000) {
                                return `${(value / 10000000).toFixed(2)} Cr`;
                            } else {
                                return `${(value / 100000).toFixed(1)} L`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            if (value >= 10000000) {
                                return `${(value / 10000000).toFixed(1)}Cr`;
                            }
                            return `${(value / 100000).toFixed(0)}L`;
                        },
                        font: {
                            size: 10
                        },
                        maxTicksLimit: 6
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
});

// Health Insurance Calculator
document.addEventListener('DOMContentLoaded', function() {
    const healthAgeSlider = document.getElementById('healthAgeSlider');
    const familySizeSlider = document.getElementById('familySizeSlider');
    const medicalHistory = document.getElementById('medicalHistory');
    const calculateHealthButton = document.querySelector('.calculator-card .calculate-button');
    const healthCoverageResult = document.getElementById('healthCoverageResult').querySelector('span');

    function updateSliderValue(slider) {
        const valueSpan = slider.nextElementSibling;
        valueSpan.textContent = slider.value;
    }

    healthAgeSlider.addEventListener('input', () => updateSliderValue(healthAgeSlider));
    familySizeSlider.addEventListener('input', () => updateSliderValue(familySizeSlider));

    calculateHealthButton.addEventListener('click', function() {
        const age = parseInt(healthAgeSlider.value);
        const familySize = parseInt(familySizeSlider.value);
        const history = medicalHistory.value;
        
        // Basic health coverage calculation
        let baseCoverage = 500000; // Base coverage of 5 lakhs
        let ageFactor = 1 + (age - 18) * 0.02; // 2% increase per year after 18
        let familyFactor = 1 + (familySize - 1) * 0.5; // 50% increase per family member
        let historyFactor = history === 'major' ? 1.5 : (history === 'minor' ? 1.2 : 1);
        
        let coverage = Math.round(baseCoverage * ageFactor * familyFactor * historyFactor);
        healthCoverageResult.textContent = '₹' + coverage.toLocaleString('en-IN');
        
        // Animate the result
        healthCoverageResult.parentElement.style.animation = 'none';
        healthCoverageResult.parentElement.offsetHeight;
        healthCoverageResult.parentElement.style.animation = 'pulse 0.5s';
    });
});

// Life Insurance Calculator
document.addEventListener('DOMContentLoaded', function() {
    const lifeAgeSlider = document.getElementById('lifeAgeSlider');
    const monthlyExpenses = document.getElementById('monthlyExpenses');
    const existingCover = document.getElementById('existingCover');
    const lifeCoverageResult = document.getElementById('lifeCoverageResult');
    const termCalculateButton = document.querySelector('.calculator-card:nth-child(2) .calculate-button');

    function updateSliderValue(slider) {
        const valueSpan = slider.nextElementSibling;
        valueSpan.textContent = slider.value;
    }

    lifeAgeSlider.addEventListener('input', () => updateSliderValue(lifeAgeSlider));

    termCalculateButton.addEventListener('click', function() {
        const age = parseInt(lifeAgeSlider.value);
        const monthly = parseFloat(monthlyExpenses.value) || 0;
        const existing = parseFloat(existingCover.value) || 0;
        
        // Simple coverage calculation
        // Formula: Monthly Expenses × 15 × 15
        let recommendedCoverage = monthly * 15 * 15;
        
        // Subtract existing coverage
        recommendedCoverage = Math.max(0, recommendedCoverage - existing);
        
        // Format the result in lakhs or crores
        let formattedCoverage;
        if (recommendedCoverage >= 10000000) {
            formattedCoverage = (recommendedCoverage / 10000000).toFixed(2) + ' Crores';
        } else {
            formattedCoverage = (recommendedCoverage / 100000).toFixed(2) + ' Lakhs';
        }
        
        lifeCoverageResult.innerHTML = `Recommended Coverage: <span>₹${formattedCoverage}</span>`;
        lifeCoverageResult.style.display = 'block';
    });
});

// Quiz Functionality
const quizQuestions = [
    {
        question: "How much life insurance coverage do you have?",
        options: ["₹5 lakh or less", "₹5 lakh - ₹20 lakh", "₹20 lakh or more"],
        correct: 2
    },
    {
        question: "How much health insurance do you have?",
        options: ["None", "₹1 lakh - ₹5 lakh", "₹5 lakh and above"],
        correct: 2
    },
    {
        question: "Do you have critical illness coverage?",
        options: ["No", "Yes, but less than ₹10 lakh", "Yes, ₹10 lakh or more"],
        correct: 2
    },
    {
        question: "When did you last review your insurance coverage?",
        options: ["Never", "More than 2 years ago", "Within the last year"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const quizStart = document.getElementById('quiz-start');
    const quizQuestions = document.getElementById('quiz-questions');
    
    quizStart.style.display = 'none';
    quizQuestions.style.display = 'block';
    
    displayQuestion();
}

function displayQuestion() {
    const quizQuestions = document.getElementById('quiz-questions');
    const question = quizQuestions[currentQuestion];
    
    let html = `
        <div class="quiz-progress">
            <div class="progress-bar">
                <div class="progress" style="width: ${(currentQuestion / quizQuestions.length) * 100}%"></div>
            </div>
            <p>Question ${currentQuestion + 1} of ${quizQuestions.length}</p>
        </div>
        <h3>${question.question}</h3>
        <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <button onclick="checkAnswer(${index})" class="option-button">
                ${option}
            </button>
        `;
    });
    
    html += '</div>';
    quizQuestions.innerHTML = html;
}

function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuestion];
    
    if (selectedOption === question.correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizQuestions = document.getElementById('quiz-questions');
    const percentage = (score / quizQuestions.length) * 100;
    
    let message = '';
    let recommendation = '';
    
    if (percentage >= 75) {
        message = 'Excellent! You have a good understanding of insurance coverage.';
        recommendation = 'Consider reviewing your policies annually to maintain adequate coverage.';
    } else if (percentage >= 50) {
        message = 'Good start! You have some insurance knowledge.';
        recommendation = 'You might want to increase your coverage and add critical illness protection.';
    } else {
        message = 'You might be underinsured.';
        recommendation = 'We recommend getting a free insurance review to ensure adequate coverage.';
    }
    
    quizQuestions.innerHTML = `
        <div class="quiz-results">
            <h3>Assessment Complete!</h3>
            <p>Your score: ${score}/${quizQuestions.length} (${percentage}%)</p>
            <p>${message}</p>
            <p class="recommendation">${recommendation}</p>
            <button onclick="resetQuiz()" class="restart-button">Take Assessment Again</button>
        </div>
    `;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    startQuiz();
}

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.toggle-icon').textContent = '+';
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            question.querySelector('.toggle-icon').textContent = '-';
        }
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}); 