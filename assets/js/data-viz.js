document.addEventListener('DOMContentLoaded', () => {
    const goalSelect = document.getElementById('goal');
    const resultContainer = document.getElementById('result-container');
    const chartName = document.getElementById('chart-name');
    const chartDescription = document.getElementById('chart-description');

    const chartRecommendations = {
        comparison: {
            name: "Bar Chart or Column Chart",
            description: "Use a Bar or Column chart to compare values across different categories."
        },
        composition: {
            name: "Pie Chart or Treemap",
            description: "A Pie Chart or Treemap is best for showing how parts make up a whole."
        },
        distribution: {
            name: "Histogram or Box Plot",
            description: "A Histogram or Box Plot helps you see how your data is distributed."
        },
        relationship: {
            name: "Scatter Plot or Bubble Chart",
            description: "Use a Scatter Plot to show the relationship between two variables."
        },
        trend: {
            name: "Line Chart",
            description: "A Line Chart is the perfect way to show how a value changes over time."
        }
    };

    goalSelect.addEventListener('change', () => {
        const goal = goalSelect.value;
        if (goal && chartRecommendations[goal]) {
            const recommendation = chartRecommendations[goal];
            chartName.textContent = recommendation.name;
            chartDescription.textContent = recommendation.description;
            resultContainer.classList.remove('hidden');
        } else {
            resultContainer.classList.add('hidden');
        }
    });
});