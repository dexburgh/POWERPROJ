const QUESTIONS = [
    {
        id: 1,
        text: "When a crisis happens, what is your first instinct?",
        answers: [
            {
                text: "Slow everything down and understand the situation.",
                traits: {
                    intelligence: 3,
                    control: 3,
                    patience: 2
                }
            },
            {
                text: "Take charge immediately.",
                traits: {
                    leadership: 3,
                    courage: 3,
                    confidence: 2
                }
            },
            {
                text: "Protect the people around me first.",
                traits: {
                    empathy: 3,
                    justice: 2,
                    resilience: 1
                }
            },
            {
                text: "Adapt and improvise.",
                traits: {
                    adaptability: 3,
                    creativity: 2,
                    risk: 2
                }
            }
        ]
    },

    {
        id: 2,
        text: "What motivates you most?",
        answers: [
            {
                text: "Knowledge",
                traits: {
                    curiosity: 3,
                    intelligence: 3
                }
            },
            {
                text: "Power",
                traits: {
                    ambition: 3,
                    confidence: 2
                }
            },
            {
                text: "Freedom",
                traits: {
                    independence: 3,
                    adaptability: 2
                }
            },
            {
                text: "Helping others",
                traits: {
                    empathy: 3,
                    justice: 3
                }
            }
        ]
    },

    {
        id: 3,
        text: "How do people usually describe you?",
        answers: [
            {
                text: "Calm",
                traits: {
                    control: 3,
                    patience: 2
                }
            },
            {
                text: "Creative",
                traits: {
                    creativity: 3,
                    innovation: 3
                }
            },
            {
                text: "Fearless",
                traits: {
                    courage: 3,
                    risk: 3
                }
            },
            {
                text: "Reliable",
                traits: {
                    discipline: 3,
                    resilience: 2
                }
            }
        ]
    };

// More questions will be added until we reach 50.