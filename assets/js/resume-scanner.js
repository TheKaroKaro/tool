document.addEventListener('DOMContentLoaded', () => {
    const jobDescriptionInput = document.getElementById('job-description');
    const resumeTextInput = document.getElementById('resume-text');
    const scanButton = document.getElementById('scan-button');
    const resultsContainer = document.getElementById('results');
    const missingList = document.getElementById('missing-list');
    const foundList = document.getElementById('found-list');

    const cleanText = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);

    scanButton.addEventListener('click', () => {
        const jobDescription = cleanText(jobDescriptionInput.value);
        const resumeText = cleanText(resumeTextInput.value);

        if (jobDescription.length === 0 || resumeText.length === 0) {
            alert('Please paste both a job description and your resume.');
            return;
        }

        const jobKeywords = new Set(jobDescription);
        const resumeKeywords = new Set(resumeText);
        
        const missingKeywords = [...jobKeywords].filter(keyword => !resumeKeywords.has(keyword));
        const foundKeywords = [...jobKeywords].filter(keyword => resumeKeywords.has(keyword));

        missingList.innerHTML = '';
        missingKeywords.forEach(keyword => {
            const li = document.createElement('li');
            li.textContent = keyword;
            missingList.appendChild(li);
        });
        
        foundList.textContent = foundKeywords.join(', ');
        
        resultsContainer.classList.remove('hidden');
    });
});