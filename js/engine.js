// engine.js - Core Scoring Logic
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
    // Save to storage before showing results
    if (typeof saveResults === 'function') saveResults(profile);
    
    document.getElementById("quizScreen").classList.remove("active");
    document.getElementById("analysisScreen").classList.add("active");
    runAnalysis(profile);
}
