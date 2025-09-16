document.addEventListener('DOMContentLoaded', () => {
    const subjectInput = document.getElementById('subject-line');
    const analysisResults = document.getElementById('analysis-results');
    const lengthResult = document.getElementById('length-result');
    const clarityResult = document.getElementById('clarity-result');
    const urgencyResult = document.getElementById('urgency-result');
    const personalizationResult = document.getElementById('personalization-result');

    const urgencyKeywords = ['urgent', 'today', 'now', 'deadline', 'reminder', 'final chance'];
    const personalizationKeywords = ['hi', 'hello', 'dear', 'name', 'you', 'your'];

    const analyzeSubjectLine = (subject) => {
        const lowerSubject = subject.toLowerCase();
        
        // Length analysis
        const wordCount = subject.split(/\s+/).filter(Boolean).length;
        if (wordCount > 10) {
            lengthResult.textContent = `${wordCount} words - A bit long. Aim for 3-5 words.`;
        } else {
            lengthResult.textContent = `${wordCount} words - Good length!`;
        }

        // Clarity analysis
        const hasQuestion = subject.includes('?');
        const hasNumbers = /\d/.test(subject);
        if (hasQuestion || hasNumbers) {
            clarityResult.textContent = 'Good! Includes numbers or a question, which boosts open rates.';
        } else {
            clarityResult.textContent = 'Could be clearer. Try using a number or question.';
        }

        // Urgency analysis
        const hasUrgency = urgencyKeywords.some(keyword => lowerSubject.includes(keyword));
        if (hasUrgency) {
            urgencyResult.textContent = 'Yes. Use sparingly to avoid fatigue.';
        } else {
            urgencyResult.textContent = 'No. Avoid if not truly urgent.';
        }
        
        // Personalization analysis
        const hasPersonalization = personalizationKeywords.some(keyword => lowerSubject.includes(keyword));
        if (hasPersonalization) {
            personalizationResult.textContent = 'Yes. Including a name or a reference to your relationship is powerful.';
        } else {
            personalizationResult.textContent = 'No. Consider adding a personal touch if appropriate.';
        }

        analysisResults.classList.remove('hidden');
    };

    subjectInput.addEventListener('input', (e) => {
        const subjectLine = e.target.value.trim();
        if (subjectLine.length > 0) {
            analyzeSubjectLine(subjectLine);
        } else {
            analysisResults.classList.add('hidden');
        }
    });
});