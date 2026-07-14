// js/engine.js
const TRAITS = {
    intelligence: 0, leadership: 0, empathy: 0, creativity: 0, 
    discipline: 0, control: 0, chaos: 0, justice: 0, 
    ambition: 0, confidence: 0, adaptability: 0, resilience: 0, 
    patience: 0, risk: 0, curiosity: 0, innovation: 0, 
    independence: 0, courage: 0
};

function resetTraits() {
    Object.keys(TRAITS).forEach(t => TRAITS[t] = 0);
}

function applyAnswer(answer) {
    for (const trait in answer.traits) {
        TRAITS[trait] = (TRAITS[trait] || 0) + answer.traits[trait];
    }
}

function dominantTraits() {
    return Object.entries(TRAITS)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
}

function finishQuiz() {
    const profile = generateCharacter();
    if (typeof saveResults === 'function') saveResults(profile);
    
    document.getElementById("quizScreen").classList.remove("active");
    document.getElementById("analysisScreen").classList.add("active");
    runAnalysis(profile);
}
