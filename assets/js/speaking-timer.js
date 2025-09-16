document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer-display');
    const minutesInput = document.getElementById('minutes-input');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const resetButton = document.getElementById('reset-button');
    const statusMessage = document.getElementById('status-message');

    let totalSeconds = 0;
    let timerInterval;

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    };

    const startTimer = () => {
        if (!totalSeconds) {
            const minutes = parseInt(minutesInput.value, 10);
            if (isNaN(minutes) || minutes <= 0) {
                alert('Please enter a valid time in minutes.');
                return;
            }
            totalSeconds = minutes * 60;
        }

        startButton.classList.add('hidden');
        stopButton.classList.remove('hidden');
        resetButton.classList.remove('hidden');
        minutesInput.disabled = true;
        statusMessage.textContent = 'Timer running...';

        timerInterval = setInterval(() => {
            totalSeconds--;
            timerDisplay.textContent = formatTime(totalSeconds);

            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "00:00";
                statusMessage.textContent = "Time's up!";
                stopButton.classList.add('hidden');
                minutesInput.disabled = false;
            }
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        statusMessage.textContent = 'Timer paused.';
        startButton.classList.remove('hidden');
        stopButton.classList.add('hidden');
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        totalSeconds = 0;
        timerDisplay.textContent = "00:00";
        statusMessage.textContent = 'Set your time and start practicing!';
        startButton.classList.remove('hidden');
        stopButton.classList.add('hidden');
        resetButton.classList.add('hidden');
        minutesInput.disabled = false;
    };

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});