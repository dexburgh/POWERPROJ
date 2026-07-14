// js/generator.js - Full Logic and UI Rendering
function calculatePower() {
    let best = null;
    let highestScore = -Infinity;

    if (typeof POWERS === 'undefined') {
        console.error("POWERS array not defined.");
        return { name: "Anomaly", rarity: "UNKNOWN", description: "Power definition missing." };
    }

    POWERS.forEach(power => {
        let score = 0;
        for (const trait in power.requirements) {
            const userVal = TRAITS[trait] || 0;
            const reqVal = power.requirements[trait];
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
        hero: (typeof generateHeroName === 'function') ? generateHeroName() : "Unknown Subject",
        power: calculatePower(),
        faction: (typeof randomFaction === 'function') ? randomFaction() : { name: "None", description: "No faction identified." },
        traits: dominantTraits()
    };
}

function runAnalysis(profile) {
    const fill = document.getElementById("analysisFill");
    const text = document.getElementById("analysisText");
    const messages = [
        "Scanning behavioral matrix...", 
        "Mapping neural architecture...",
        "Calculating personality profile...", 
        "Determining power compatibility...",
        "Generating hero identity...", 
        "Finalizing report..."
    ];

    let step = 0;
    const timer = setInterval(() => {
        if (!fill || !text) return;
        fill.style.width = ((step + 1) / messages.length) * 100 + "%";
        text.textContent = messages[step];
        step++;
        if (step === messages.length) {
            clearInterval(timer);
            setTimeout(() => showResults(profile), 700);
        }
    }, 700);
}

function showResults(profile) {
    const resScreen = document.getElementById("resultScreen");
    const anaScreen = document.getElementById("analysisScreen");
    
    if (anaScreen) anaScreen.classList.remove("active");
    if (resScreen) resScreen.classList.add("active");

    const accentColor = profile.power.rarity === 'OMEGA' ? '#ff335f' : '#00d9ff';
    const heroTitle = document.getElementById("heroTitle");
    const powerName = document.getElementById("powerName");
    const rarity = document.getElementById("rarity");

    if (heroTitle) heroTitle.textContent = profile.hero;
    if (powerName) {
        powerName.textContent = profile.power.name;
        powerName.style.color = accentColor;
    }
    if (rarity) {
        rarity.textContent = profile.power.rarity;
        rarity.style.borderColor = accentColor;
        rarity.style.color = accentColor;
    }
    
    const summary = document.getElementById("summary");
    if (summary) {
        summary.innerHTML = `
            <div style="border-left: 2px solid ${accentColor}; padding-left: 15px;">
                <p><strong>Faction:</strong> ${profile.faction.name}</p>
                <p style="font-style:italic; margin-top:10px;">${profile.faction.description}</p>
            </div>
            <p style="margin-top:20px;">${profile.power.description}</p>
            <div style="margin-top:25px; display:flex; flex-wrap:wrap; gap:10px;">
                ${profile.traits.map(t => `<span style="background:rgba(255,255,255,0.05); padding:6px 12px; border-radius:2px; font-size:0.7rem; color:var(--white); border:1px solid rgba(255,255,255,0.1);">${t[0].toUpperCase()}</span>`).join('')}
            </div>
        `;
    }
}
