// generator.js - Power Calculation & Rendering
function calculatePower() {
    let best = null;
    let highestScore = -Infinity;

    POWERS.forEach(power => {
        let score = 0;
        for (const trait in power.requirements) {
            const userVal = TRAITS[trait] || 0;
            const reqVal = power.requirements[trait];
            // Weighted logic: bonus for meeting, penalty for being below requirement
            score += (userVal >= reqVal) ? reqVal * 2 : userVal;
        }
        if (score > highestScore) {
            highestScore = score;
            best = power;
        }
    });
    return best;
}

function generateCharacter() {
    return {
        hero: generateHeroName(),
        power: calculatePower(),
        faction: randomFaction(),
        traits: dominantTraits()
    };
}
