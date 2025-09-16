document.addEventListener('DOMContentLoaded', () => {
    const topicInput = document.getElementById('topic');
    const goalInput = document.getElementById('goal');
    const generateButton = document.getElementById('generate-outline');
    const outlineOutput = document.getElementById('outline-output');
    const outlineText = document.getElementById('outline-text');

    generateButton.addEventListener('click', () => {
        const topic = topicInput.value.trim() || '[Your Presentation Topic]';
        const goal = goalInput.value.trim() || '[Your Presentation Goal]';
        
        const outline = `
**Presentation Outline: ${topic}**
**Goal:** ${goal}

---

**1. Introduction (1 slide)**
   - Start with a strong hook or question.
   - Introduce yourself and the topic.
   - State the presentation's goal clearly.

**2. The Problem/Opportunity (1-2 slides)**
   - Present the key issue or opportunity you are addressing.
   - Use data or real-world examples to make it relatable.

**3. The Solution (2-3 slides)**
   - Introduce your proposed solution.
   - Explain how it works and what makes it unique.

**4. Supporting Evidence (2-4 slides)**
   - Use charts, data, and case studies to support your claims.
   - Show how your solution has worked or will work.

**5. Call to Action (1 slide)**
   - Clearly state what you want the audience to do next.
   - Provide next steps and contact information.

**6. Q&A**
   - Open the floor for questions.
        `;

        outlineText.textContent = outline.trim();
        outlineOutput.classList.remove('hidden');
    });
});