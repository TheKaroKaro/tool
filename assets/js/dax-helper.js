document.addEventListener('DOMContentLoaded', () => {
    const daxFunctionSelect = document.getElementById('dax-function');
    const functionDetails = document.getElementById('function-details');
    const functionName = document.getElementById('function-name');
    const functionSyntax = document.getElementById('function-syntax');
    const functionDescription = document.getElementById('function-description');
    const functionExample = document.getElementById('function-example');

    const daxFunctions = {
        calculate: {
            name: "CALCULATE",
            syntax: "CALCULATE(<expression>, <filter1>, <filter2>...)",
            description: "Evaluates an expression in a modified filter context.",
            example: "CALCULATE(SUM(Sales[SalesAmount]), ALL(Sales[Product]))"
        },
        filter: {
            name: "FILTER",
            syntax: "FILTER(<table>, <filter_expression>)",
            description: "Returns a table that has been filtered. Used as a filter argument inside CALCULATE.",
            example: "FILTER(Sales, Sales[Region] = 'APAC')"
        },
        related: {
            name: "RELATED",
            syntax: "RELATED(<column>)",
            description: "Returns a related value from another table.",
            example: "RELATED(Products[Category])"
        },
        datediff: {
            name: "DATEDIFF",
            syntax: "DATEDIFF(<start_date>, <end_date>, <interval>)",
            description: "Returns the count of the specified interval between two dates.",
            example: "DATEDIFF(Sales[OrderDate], TODAY(), DAY)"
        }
    };

    daxFunctionSelect.addEventListener('change', () => {
        const selectedFunction = daxFunctionSelect.value;
        if (selectedFunction && daxFunctions[selectedFunction]) {
            const details = daxFunctions[selectedFunction];
            functionName.textContent = details.name;
            functionSyntax.textContent = details.syntax;
            functionDescription.textContent = details.description;
            functionExample.textContent = `Example: ${details.example}`;
            functionDetails.classList.remove('hidden');
        } else {
            functionDetails.classList.add('hidden');
        }
    });
});