const FACTIONS = [

    {
        name: "The Architects",
        description: "Masters of creation and order."
    },

    {
        name: "The Nexus",
        description: "Keepers of knowledge."
    },

    {
        name: "The Eclipse",
        description: "Operate between light and darkness."
    },

    {
        name: "The Ascendants",
        description: "Humanity evolved beyond limitation."
    },

    {
        name: "The Hollow",
        description: "Power without morality."
    },

    {
        name: "The Vanguard",
        description: "The first defenders."
    }

];

function randomFaction() {

    return FACTIONS[Math.floor(Math.random() * FACTIONS.length)];

}
function calculatePower() {

    let best = null;

    let highest = -999;

    POWERS.forEach(power => {

        let score = 0;

        for (const trait in power.requirements) {

            score += Math.min(

                TRAITS[trait] || 0,

                power.requirements[trait]

            );

        }

        if (score > highest) {

            highest = score;

            best = power;

        }

    });

    return best;

}

function generateCharacter() {

    const power = calculatePower();

    const faction = randomFaction();

    const hero = generateHeroName();

    return {

        hero,

        power,

        faction,

        traits: dominantTraits()

    };

}

function finishQuiz() {

    const profile = generateCharacter();

    document.getElementById("quizScreen").classList.remove("active");

    document.getElementById("analysisScreen").classList.add("active");

    runAnalysis(profile);

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

    document.getElementById("analysisScreen").classList.remove("active");

    document.getElementById("resultScreen").classList.add("active");

    document.getElementById("heroTitle").textContent = profile.hero;

    document.getElementById("powerName").textContent = profile.power.name;

    document.getElementById("rarity").textContent = profile.power.rarity;

    document.getElementById("summary").innerHTML = `

<p><strong>Faction:</strong> ${profile.faction.name}</p>

<p>${profile.faction.description}</p>

<br>

<p>${profile.power.description}</p>

`;

}