document.addEventListener('DOMContentLoaded', () => {
    const checklistContainer = document.getElementById('checklist-container');
    const resetButton = document.getElementById('reset-button');

    const checklistItems = [
        "Check for duplicates and remove them.",
        "Fix inconsistent spelling and capitalization.",
        "Handle missing values (blanks).",
        "Correct data types (e.g., numbers stored as text).",
        "Trim unnecessary spaces from cells.",
        "Check for and remove special characters.",
        "Validate date and time formats.",
        "Ensure column headers are consistent."
    ];

    const renderChecklist = () => {
        checklistContainer.innerHTML = '';
        checklistItems.forEach((item, index) => {
            const isChecked = localStorage.getItem(`checklist-item-${index}`) === 'true';
            const listItem = document.createElement('div');
            listItem.className = `flex items-center p-4 border rounded ${isChecked ? 'bg-green-50' : 'bg-white'}`;
            listItem.innerHTML = `
                <input type="checkbox" id="item-${index}" class="form-checkbox text-teal-600 h-5 w-5 mr-3" ${isChecked ? 'checked' : ''}>
                <label for="item-${index}" class="text-gray-700 flex-1 ${isChecked ? 'line-through text-gray-500' : ''}">${item}</label>
            `;
            checklistContainer.appendChild(listItem);
        });

        checklistContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const index = e.target.id.split('-')[1];
                localStorage.setItem(`checklist-item-${index}`, e.target.checked);
                renderChecklist();
            });
        });
    };

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset the checklist?')) {
            checklistItems.forEach((_, index) => {
                localStorage.removeItem(`checklist-item-${index}`);
            });
            renderChecklist();
        }
    });

    renderChecklist();
});