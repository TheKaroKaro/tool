document.addEventListener('DOMContentLoaded', () => {
    const formulaSelect = document.getElementById('formula-select');
    const formulaInputs = document.getElementById('formula-inputs');
    const formulaOutput = document.getElementById('formula-output');

    const formulas = {
        vlookup: {
            title: 'VLOOKUP Formula',
            args: ['lookup_value', 'table_array', 'col_index_num', 'range_lookup']
        },
        sumifs: {
            title: 'SUMIFS Formula',
            args: ['sum_range', 'criteria_range1', 'criteria1']
        },
        if: {
            title: 'IF Formula',
            args: ['logical_test', 'value_if_true', 'value_if_false']
        }
    };

    const generateInputs = (formulaName) => {
        formulaInputs.innerHTML = '';
        if (!formulaName) return;

        const formula = formulas[formulaName];
        formula.args.forEach(arg => {
            const div = document.createElement('div');
            div.innerHTML = `
                <label class="block text-gray-700 font-semibold mb-2">${arg.replace(/_/g, ' ')}:</label>
                <input type="text" data-arg="${arg}" class="w-full p-2 border rounded" placeholder="${arg.replace(/_/g, ' ')}">
            `;
            formulaInputs.appendChild(div);
        });
        
        formulaInputs.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updateFormula);
        });
    };

    const updateFormula = () => {
        const formulaName = formulaSelect.value;
        if (!formulaName) {
            formulaOutput.value = '';
            return;
        }

        const args = Array.from(formulaInputs.querySelectorAll('input')).map(input => {
            let value = input.value.trim();
            // Wrap text arguments in quotes
            if (isNaN(value) && value !== 'TRUE' && value !== 'FALSE') {
                value = `"${value}"`;
            }
            return value || `[${input.getAttribute('data-arg')}]`;
        });

        formulaOutput.value = `=${formulaName.toUpperCase()}(${args.join(', ')})`;
    };

    formulaSelect.addEventListener('change', (e) => {
        generateInputs(e.target.value);
        updateFormula();
    });
});