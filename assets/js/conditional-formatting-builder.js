document.addEventListener('DOMContentLoaded', () => {
    const conditionType = document.getElementById('condition-type');
    const conditionInputs = document.getElementById('condition-inputs');
    const resultOutput = document.getElementById('result');

    const conditions = {
        duplicates: {
            title: 'Highlight Duplicates',
            getRule: () => `=COUNTIF(A:A, A1) > 1`
        },
        less_than: {
            title: 'Value is Less Than...',
            inputHtml: `<div><label class="block text-gray-700 font-semibold mb-2">Value:</label><input type="number" id="less-than-val" class="w-full p-2 border rounded"></div>`,
            getRule: () => {
                const val = document.getElementById('less-than-val').value;
                return `=A1 < ${val}`;
            }
        },
        contains_text: {
            title: 'Text Contains...',
            inputHtml: `<div><label class="block text-gray-700 font-semibold mb-2">Text:</label><input type="text" id="contains-text-val" class="w-full p-2 border rounded"></div>`,
            getRule: () => {
                const val = document.getElementById('contains-text-val').value;
                return `=SEARCH("${val}", A1) > 0`;
            }
        }
    };

    conditionType.addEventListener('change', () => {
        const type = conditionType.value;
        conditionInputs.innerHTML = '';
        resultOutput.value = '';

        if (!type) return;

        if (conditions[type].inputHtml) {
            conditionInputs.innerHTML = conditions[type].inputHtml;
            const inputElement = conditionInputs.querySelector('input');
            if (inputElement) {
                inputElement.addEventListener('input', updateResult);
            }
        }
        updateResult();
    });

    const updateResult = () => {
        const type = conditionType.value;
        if (type && conditions[type]) {
            resultOutput.value = conditions[type].getRule();
        } else {
            resultOutput.value = '';
        }
    };
});