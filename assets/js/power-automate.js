document.addEventListener('DOMContentLoaded', () => {
    const goalSelect = document.getElementById('goal-select');
    const guideOutput = document.getElementById('guide-output');
    const guideTrigger = document.getElementById('guide-trigger');
    const guideActions = document.getElementById('guide-actions');

    const automationGoals = {
        'email-attachment': {
            trigger: "Trigger: 'When a new email arrives (V3)'",
            actions: "Action 1: 'Get attachments (V2)', Action 2: 'Create file (OneDrive)'"
        },
        'form-response': {
            trigger: "Trigger: 'When a new response is submitted (Microsoft Forms)'",
            actions: "Action 1: 'Get response details', Action 2: 'Add a row into a table (Excel)'"
        },
        'scheduled-report': {
            trigger: "Trigger: 'Recurrence'",
            actions: "Action 1: 'Run script (Excel)', Action 2: 'Send an email (V2)'"
        }
    };

    goalSelect.addEventListener('change', () => {
        const goal = goalSelect.value;
        if (goal && automationGoals[goal]) {
            const guide = automationGoals[goal];
            guideTrigger.textContent = `Trigger: ${guide.trigger.split(':')[1].trim()}`;
            guideActions.textContent = `Actions: ${guide.actions}`;
            guideOutput.classList.remove('hidden');
        } else {
            guideOutput.classList.add('hidden');
        }
    });
});