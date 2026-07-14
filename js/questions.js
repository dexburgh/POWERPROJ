const QUESTIONS = [
    {
        id: 1,
        text: "When a crisis happens, what is your first instinct?",
        answers: [
            { text: "Slow everything down and understand the situation.", traits: { intelligence: 3, control: 3, patience: 2 } },
            { text: "Take charge immediately.", traits: { leadership: 3, courage: 3, confidence: 2 } },
            { text: "Protect the people around me first.", traits: { empathy: 3, justice: 2, resilience: 1 } },
            { text: "Adapt and improvise.", traits: { adaptability: 3, creativity: 2, risk: 2 } }
        ]
    },
    {
        id: 2,
        text: "What motivates you most?",
        answers: [
            { text: "Knowledge", traits: { curiosity: 3, intelligence: 3 } },
            { text: "Power", traits: { ambition: 3, confidence: 2 } },
            { text: "Freedom", traits: { independence: 3, adaptability: 2 } },
            { text: "Helping others", traits: { empathy: 3, justice: 3 } }
        ]
    },
    {
        id: 3,
        text: "How do people usually describe you?",
        answers: [
            { text: "Calm", traits: { control: 3, patience: 2 } },
            { text: "Creative", traits: { creativity: 3, innovation: 3 } },
            { text: "Fearless", traits: { courage: 3, risk: 3 } },
            { text: "Reliable", traits: { discipline: 3, resilience: 2 } }
        ]
    },
    {
        id: 4,
        text: "You find a locked door in an abandoned facility. Do you:",
        answers: [
            { text: "Pick the lock to see what’s inside.", traits: { curiosity: 3, risk: 2 } },
            { text: "Find another way; breaking and entering is inefficient.", traits: { intelligence: 3, discipline: 2 } },
            { text: "Assume it’s locked for a reason and move on.", traits: { control: 3, patience: 2 } },
            { text: "Force it open.", traits: { confidence: 3, courage: 2 } }
        ]
    },
    {
        id: 5,
        text: "A peer fails to meet a critical deadline. Your reaction:",
        answers: [
            { text: "Identify the bottleneck and streamline their process.", traits: { leadership: 3, intelligence: 2 } },
            { text: "Cover for them; we succeed or fail as a team.", traits: { empathy: 3, justice: 2 } },
            { text: "Hold them accountable; standards must be maintained.", traits: { discipline: 3, control: 2 } },
            { text: "Assume they had a reason and offer to help.", traits: { empathy: 3, patience: 2 } }
        ]
    },
    {
        id: 6,
        text: "How do you handle emotional pressure?",
        answers: [
            { text: "I compartmentalize and focus on the objective.", traits: { control: 3, resilience: 3 } },
            { text: "I channel it into a creative output.", traits: { creativity: 3, innovation: 2 } },
            { text: "I acknowledge it and use it to drive me.", traits: { ambition: 3, courage: 2 } },
            { text: "I disconnect entirely to regain perspective.", traits: { independence: 3, patience: 2 } }
        ]
    },
    {
        id: 7,
        text: "You are offered a massive reward for a task that feels morally grey. Do you:",
        answers: [
            { text: "Refuse. The cost to my integrity is too high.", traits: { justice: 3, discipline: 3 } },
            { text: "Accept. In the grand scheme, the ends justify the means.", traits: { ambition: 3, risk: 2 } },
            { text: "Negotiate. I want to know exactly what I am signing up for.", traits: { intelligence: 3, independence: 2 } },
            { text: "Accept, but leave a backdoor to minimize collateral damage.", traits: { creativity: 3, justice: 1 } }
        ]
    },
    {
        id: 8,
        text: "What environment do you perform best in?",
        answers: [
            { text: "Strict, orderly, and highly regulated.", traits: { control: 3, discipline: 3 } },
            { text: "Fast-paced, unpredictable, and chaotic.", traits: { chaos: 3, adaptability: 3 } },
            { text: "Collaborative, open, and idea-driven.", traits: { empathy: 3, creativity: 2 } },
            { text: "Solitary, quiet, and introspective.", traits: { independence: 3, intelligence: 2 } }
        ]
    },
    {
        id: 9,
        text: "If you could change one thing about human nature, what would it be?",
        answers: [
            { text: "Eliminate irrational fear.", traits: { courage: 3, intelligence: 2 } },
            { text: "Increase capacity for deep compassion.", traits: { empathy: 3, justice: 2 } },
            { text: "Amplify the drive for constant progress.", traits: { ambition: 3, innovation: 3 } },
            { text: "Balance the desire for control with the need for spontaneity.", traits: { adaptability: 3, control: 2 } }
        ]
    },
    {
        id: 10,
        text: "How do you define 'success'?",
        answers: [
            { text: "Achieving a goal that leaves a permanent mark.", traits: { ambition: 3, innovation: 2 } },
            { text: "Maintaining inner peace and stability.", traits: { control: 3, patience: 3 } },
            { text: "Improving the lives of those around me.", traits: { justice: 3, empathy: 3 } },
            { text: "Continuous learning and self-evolution.", traits: { curiosity: 3, adaptability: 2 } }
        ]
    },
    {
        id: 11,
        text: "A long-held belief of yours is proven wrong. Your reaction:",
        answers: [
            { text: "Relief. Now I can build a better map of reality.", traits: { intelligence: 3, innovation: 3 } },
            { text: "Skepticism. I need to verify the source.", traits: { intelligence: 3, discipline: 2 } },
            { text: "Adaptation. I update my view and move on.", traits: { adaptability: 3, resilience: 2 } },
            { text: "Defiance. I stick to my gut, even if evidence says otherwise.", traits: { independence: 3, confidence: 2 } }
        ]
    },
    {
        id: 12,
        text: "You are the last person on earth for 24 hours. What do you do?",
        answers: [
            { text: "Read, study, and observe everything without interference.", traits: { curiosity: 3, intelligence: 2 } },
            { text: "Build something massive or test my limits.", traits: { innovation: 3, ambition: 2 } },
            { text: "Reflect and recharge.", traits: { patience: 3, resilience: 2 } },
            { text: "Break every rule I usually follow.", traits: { chaos: 3, risk: 3 } }
        ]
    },
    {
        id: 13,
        text: "How do you approach conflict?",
        answers: [
            { text: "Tactically. I outmaneuver before a blow is ever struck.", traits: { intelligence: 3, control: 3 } },
            { text: "Directly. I meet it head-on to end it quickly.", traits: { courage: 3, confidence: 3 } },
            { text: "Diplomatically. I seek common ground.", traits: { empathy: 3, patience: 2 } },
            { text: "I ignore it until it resolves itself or becomes critical.", traits: { chaos: 2, adaptability: 2 } }
        ]
    },
    {
        id: 14,
        text: "You have the chance to automate a job held by someone you know. Do you?",
        answers: [
            { text: "Yes, efficiency is the only path to progress.", traits: { intelligence: 3, ambition: 3 } },
            { text: "No, the human element is irreplaceable.", traits: { empathy: 3, justice: 2 } },
            { text: "Yes, but I’ll re-skill them for a better position.", traits: { leadership: 3, innovation: 2 } },
            { text: "I'll optimize it, but let them decide the transition.", traits: { adaptability: 3, patience: 2 } }
        ]
    },
    {
        id: 15,
        text: "When you see a broken system, do you:",
        answers: [
            { text: "Fix it immediately to stop the bleed.", traits: { discipline: 3, courage: 2 } },
            { text: "Study it to ensure the replacement is perfect.", traits: { intelligence: 3, control: 3 } },
            { text: "Burn it down and start from scratch.", traits: { chaos: 3, risk: 3 } },
            { text: "Wait for the right moment to pivot.", traits: { patience: 3, adaptability: 2 } }
        ]
    },
    {
        id: 16,
        text: "What is your relationship with rules?",
        answers: [
            { text: "Rules are the foundation of society.", traits: { justice: 3, discipline: 3 } },
            { text: "Rules are guidelines for those who lack vision.", traits: { independence: 3, ambition: 2 } },
            { text: "Rules are obstacles to be navigated.", traits: { creativity: 3, intelligence: 2 } },
            { text: "Rules exist to be broken when the situation demands.", traits: { chaos: 3, courage: 2 } }
        ]
    },
    {
        id: 17,
        text: "How do you handle failure?",
        answers: [
            { text: "Analyze the data, learn, and iterate.", traits: { intelligence: 3, resilience: 3 } },
            { text: "It motivates me to work twice as hard.", traits: { ambition: 3, discipline: 2 } },
            { text: "Accept it, move on, and try a different path.", traits: { adaptability: 3, patience: 2 } },
            { text: "I don't believe in failure, only unexpected outcomes.", traits: { confidence: 3, creativity: 2 } }
        ]
    },
    {
        id: 18,
        text: "You are given a map to a treasure, but it's dangerous. Do you?",
        answers: [
            { text: "Calculate the odds and proceed if the potential gain is high.", traits: { intelligence: 3, risk: 3 } },
            { text: "Find a partner to share the journey and risk.", traits: { leadership: 3, empathy: 2 } },
            { text: "Go alone; I don't want anyone to hold me back.", traits: { independence: 3, ambition: 2 } },
            { text: "Study the map further. There's likely a hidden trap.", traits: { curiosity: 3, patience: 3 } }
        ]
    },
    {
        id: 19,
        text: "What is the most important trait for a leader?",
        answers: [
            { text: "Vision", traits: { innovation: 3, creativity: 2 } },
            { text: "Accountability", traits: { discipline: 3, justice: 2 } },
            { text: "Decisiveness", traits: { courage: 3, confidence: 3 } },
            { text: "Empathy", traits: { empathy: 3, patience: 3 } }
        ]
    },
    {
        id: 20,
        text: "How do you view the future?",
        answers: [
            { text: "As a problem to be solved.", traits: { intelligence: 3, innovation: 2 } },
            { text: "As a legacy to be crafted.", traits: { ambition: 3, leadership: 2 } },
            { text: "As a wild, beautiful uncertainty.", traits: { chaos: 3, curiosity: 2 } },
            { text: "As something I must prepare for at all costs.", traits: { control: 3, discipline: 3 } }
        ]
    },
    {
        id: 21,
        text: "You discover a secret that could hurt someone you love. Do you:",
        answers: [
            { text: "Tell them immediately. Truth is a necessity.", traits: { justice: 3, courage: 2 } },
            { text: "Keep it to yourself to spare their feelings.", traits: { empathy: 3, patience: 3 } },
            { text: "Use the information to protect them without them knowing.", traits: { control: 3, intelligence: 2 } },
            { text: "Talk to them indirectly, guiding them toward the truth.", traits: { creativity: 3, leadership: 2 } }
        ]
    },
    {
        id: 22,
        text: "What is your approach to learning a new skill?",
        answers: [
            { text: "Master the fundamentals first.", traits: { discipline: 3, patience: 3 } },
            { text: "Jump in and figure it out as I go.", traits: { chaos: 3, risk: 3 } },
            { text: "Find a mentor and follow their path.", traits: { empathy: 2, intelligence: 2 } },
            { text: "Deconstruct the skill and rebuild it my own way.", traits: { innovation: 3, creativity: 3 } }
        ]
    },
    {
        id: 23,
        text: "Do you prefer long-term stability or short-term gains?",
        answers: [
            { text: "Long-term stability. The foundation matters most.", traits: { discipline: 3, control: 3 } },
            { text: "Short-term gains. I like seeing rapid progress.", traits: { ambition: 3, risk: 3 } },
            { text: "A balance; I keep a stable core but chase opportunities.", traits: { adaptability: 3, intelligence: 2 } },
            { text: "I don't care about gains; I care about the experience.", traits: { creativity: 3, independence: 2 } }
        ]
    },
    {
        id: 24,
        text: "If you had to represent one of these, which would it be?",
        answers: [
            { text: "The Spark of creation.", traits: { creativity: 3, innovation: 3 } },
            { text: "The Shield of protection.", traits: { justice: 3, empathy: 3 } },
            { text: "The Sword of action.", traits: { confidence: 3, courage: 3 } },
            { text: "The Architect of systems.", traits: { intelligence: 3, control: 3 } }
        ]
    },
    {
        id: 25,
        text: "How do you handle being wrong?",
        answers: [
            { text: "It's an opportunity to correct my data.", traits: { intelligence: 3, adaptability: 2 } },
            { text: "It frustrates me, but I own it immediately.", traits: { discipline: 3, justice: 2 } },
            { text: "I reflect, adjust, and move on.", traits: { patience: 3, resilience: 2 } },
            { text: "I find the reason why, even if it wasn't my fault.", traits: { independence: 3, curiosity: 2 } }
        ]
    },
    {
        id: 26,
        text: "Are you a morning person or a night owl?",
        answers: [
            { text: "Morning; the day is for structure.", traits: { discipline: 3, control: 2 } },
            { text: "Night; the world is quiet and ideas flow better.", traits: { creativity: 3, independence: 2 } },
            { text: "Neither; I operate on energy, not clocks.", traits: { adaptability: 3, chaos: 2 } },
            { text: "I work when the mission requires it.", traits: { resilience: 3, courage: 2 } }
        ]
    },
    {
        id: 27,
        text: "What do you value more in others?",
        answers: [
            { text: "Intelligence and wit.", traits: { intelligence: 3, curiosity: 2 } },
            { text: "Loyalty and integrity.", traits: { justice: 3, empathy: 2 } },
            { text: "Boldness and ambition.", traits: { confidence: 3, ambition: 2 } },
            { text: "Creativity and open-mindedness.", traits: { creativity: 3, adaptability: 2 } }
        ]
    },
    {
        id: 28,
        text: "You see an injustice occurring. Do you intervene?",
        answers: [
            { text: "Yes, immediately, no matter the risk.", traits: { justice: 3, courage: 3 } },
            { text: "Yes, but I observe first to plan the best intervention.", traits: { intelligence: 3, control: 2 } },
            { text: "I call for help; strength lies in collective action.", traits: { leadership: 3, empathy: 2 } },
            { text: "I document it, then use the information later.", traits: { intelligence: 3, independence: 2 } }
        ]
    },
    {
        id: 29,
        text: "What is your relationship with tradition?",
        answers: [
            { text: "Tradition provides wisdom from the past.", traits: { patience: 3, discipline: 2 } },
            { text: "Tradition is a burden that slows down progress.", traits: { innovation: 3, ambition: 2 } },
            { text: "I take what works and ignore what doesn't.", traits: { intelligence: 3, adaptability: 2 } },
            { text: "I am indifferent to tradition; I live in the present.", traits: { independence: 3, chaos: 2 } }
        ]
    },
    {
        id: 30,
        text: "You are given a complex puzzle. Do you:",
        answers: [
            { text: "Solve it logically, step by step.", traits: { intelligence: 3, control: 2 } },
            { text: "Force the pieces until it makes sense.", traits: { confidence: 3, courage: 2 } },
            { text: "Look for a lateral way to bypass the puzzle entirely.", traits: { creativity: 3, innovation: 2 } },
            { text: "Leave it; my time is better spent elsewhere.", traits: { ambition: 3, independence: 2 } }
        ]
    },
    {
        id: 31,
        text: "How do you handle social settings?",
        answers: [
            { text: "I observe and listen, learning about others.", traits: { curiosity: 3, patience: 3 } },
            { text: "I lead the conversation and engage everyone.", traits: { leadership: 3, confidence: 3 } },
            { text: "I am friendly but keep my core private.", traits: { independence: 3, control: 2 } },
            { text: "I find them draining and usually avoid them.", traits: { intelligence: 2, patience: 2 } }
        ]
    },
    {
        id: 32,
        text: "If you could master any language, what would it be?",
        answers: [
            { text: "One that unlocks ancient history.", traits: { curiosity: 3, intelligence: 2 } },
            { text: "The universal language of technology/code.", traits: { innovation: 3, intelligence: 2 } },
            { text: "A language that connects me to more people.", traits: { empathy: 3, leadership: 2 } },
            { text: "I prefer to invent my own.", traits: { creativity: 3, independence: 3 } }
        ]
    },
    {
        id: 33,
        text: "How do you prioritize your time?",
        answers: [
            { text: "By what is most urgent.", traits: { discipline: 3, control: 2 } },
            { text: "By what moves the needle furthest toward my goals.", traits: { ambition: 3, intelligence: 2 } },
            { text: "By what brings the most impact to others.", traits: { justice: 3, empathy: 2 } },
            { text: "By what keeps me interested and alive.", traits: { curiosity: 3, chaos: 2 } }
        ]
    },
    {
        id: 34,
        text: "What do you think is your greatest weakness?",
        answers: [
            { text: "I'm too perfectionist.", traits: { control: 3, discipline: 2 } },
            { text: "I get bored easily.", traits: { chaos: 3, curiosity: 2 } },
            { text: "I care too much about the outcome.", traits: { ambition: 3, resilience: 2 } },
            { text: "I trust people too quickly.", traits: { empathy: 3, justice: 2 } }
        ]
    },
    {
        id: 35,
        text: "When you have a big idea, what do you do?",
        answers: [
            { text: "Write it down and start a project.", traits: { discipline: 3, ambition: 2 } },
            { text: "Share it with others to get feedback.", traits: { leadership: 3, empathy: 2 } },
            { text: "Keep it to myself until it's ready to execute.", traits: { independence: 3, control: 2 } },
            { text: "Wait to see if the idea still excites me in a week.", traits: { patience: 3, intelligence: 2 } }
        ]
    },
    {
        id: 36,
        text: "What is your philosophy on risk?",
        answers: [
            { text: "Risk is necessary for growth.", traits: { risk: 3, courage: 2 } },
            { text: "Risk should always be calculated.", traits: { intelligence: 3, control: 2 } },
            { text: "Risk is a variable I try to eliminate.", traits: { discipline: 3, patience: 2 } },
            { text: "I thrive on high-stakes situations.", traits: { confidence: 3, chaos: 2 } }
        ]
    },
    {
        id: 37,
        text: "How do you view your own history?",
        answers: [
            { text: "As lessons to build upon.", traits: { resilience: 3, intelligence: 2 } },
            { text: "As a chain I have broken.", traits: { independence: 3, courage: 2 } },
            { text: "As something I don't focus on; the now matters more.", traits: { adaptability: 3, chaos: 2 } },
            { text: "As the foundation of who I am today.", traits: { justice: 3, patience: 2 } }
        ]
    },
    {
        id: 38,
        text: "You are given total control over a project. How do you lead?",
        answers: [
            { text: "I define the process and the team executes.", traits: { control: 3, discipline: 3 } },
            { text: "I set the goal and let the team find their own way.", traits: { leadership: 3, empathy: 2 } },
            { text: "I lead from the front, doing the hardest work.", traits: { courage: 3, ambition: 2 } },
            { text: "I constantly pivot and innovate as we go.", traits: { adaptability: 3, innovation: 2 } }
        ]
    },
    {
        id: 39,
        text: "What does 'freedom' mean to you?",
        answers: [
            { text: "The ability to pursue any idea.", traits: { independence: 3, creativity: 2 } },
            { text: "The power to secure my future.", traits: { ambition: 3, control: 2 } },
            { text: "The lack of external judgment.", traits: { confidence: 3, resilience: 2 } },
            { text: "The choice to help or not help.", traits: { justice: 3, empathy: 2 } }
        ]
    },
    {
        id: 40,
        text: "How do you define 'courage'?",
        answers: [
            { text: "Action in the face of fear.", traits: { courage: 3, confidence: 2 } },
            { text: "Persistence in the face of failure.", traits: { resilience: 3, discipline: 2 } },
            { text: "The strength to be vulnerable.", traits: { empathy: 3, justice: 2 } },
            { text: "The nerve to do what is necessary.", traits: { control: 3, ambition: 2 } }
        ]
    },
    {
        id: 41,
        text: "You find a lost item of great value. Do you:",
        answers: [
            { text: "Find the owner immediately.", traits: { justice: 3, empathy: 2 } },
            { text: "Keep it; finders keepers.", traits: { ambition: 3, risk: 2 } },
            { text: "Leave it; it's not mine.", traits: { discipline: 3, patience: 2 } },
            { text: "Study it before deciding what to do.", traits: { intelligence: 3, curiosity: 2 } }
        ]
    },
    {
        id: 42,
        text: "How do you view beauty?",
        answers: [
            { text: "In symmetry and order.", traits: { control: 3, intelligence: 2 } },
            { text: "In the raw and the unrefined.", traits: { chaos: 3, creativity: 2 } },
            { text: "In the purpose behind the design.", traits: { innovation: 3, discipline: 2 } },
            { text: "In the emotional impact it creates.", traits: { empathy: 3, justice: 2 } }
        ]
    },
    {
        id: 43,
        text: "What makes you angry?",
        answers: [
            { text: "Incompetence.", traits: { intelligence: 3, discipline: 2 } },
            { text: "Cruelty.", traits: { justice: 3, empathy: 2 } },
            { text: "Being controlled by others.", traits: { independence: 3, courage: 2 } },
            { text: "Stagnation.", traits: { ambition: 3, innovation: 2 } }
        ]
    },
    {
        id: 44,
        text: "If you could solve one world problem, what would it be?",
        answers: [
            { text: "Scarcity (Resources).", traits: { intelligence: 3, innovation: 3 } },
            { text: "Violence.", traits: { justice: 3, empathy: 3 } },
            { text: "Inefficiency.", traits: { discipline: 3, control: 3 } },
            { text: "Ignorance.", traits: { curiosity: 3, intelligence: 3 } }
        ]
    },
    {
        id: 45,
        text: "What is your spirit animal or mascot?",
        answers: [
            { text: "The Owl (Wisdom/Observer).", traits: { intelligence: 3, patience: 2 } },
            { text: "The Wolf (Leadership/Pack).", traits: { leadership: 3, justice: 2 } },
            { text: "The Phoenix (Resilience/Change).", traits: { resilience: 3, adaptability: 2 } },
            { text: "The Chameleon (Adaptability/Integration).", traits: { adaptability: 3, creativity: 2 } }
        ]
    },
    {
        id: 46,
        text: "You are being observed by everyone. Does this change your behavior?",
        answers: [
            { text: "Yes, I perform better under pressure.", traits: { confidence: 3, courage: 2 } },
            { text: "Yes, I become more careful and disciplined.", traits: { control: 3, discipline: 2 } },
            { text: "No, I am who I am regardless of observers.", traits: { independence: 3, resilience: 2 } },
            { text: "I use the audience to my advantage.", traits: { leadership: 3, ambition: 2 } }
        ]
    },
    {
        id: 47,
        text: "What is your approach to teamwork?",
        answers: [
            { text: "I prefer to work alone.", traits: { independence: 3, intelligence: 2 } },
            { text: "I take the lead.", traits: { leadership: 3, ambition: 2 } },
            { text: "I support the leader.", traits: { discipline: 3, empathy: 2 } },
            { text: "I facilitate communication between others.", traits: { empathy: 3, leadership: 2 } }
        ]
    },
    {
        id: 48,
        text: "What is your relationship with technology?",
        answers: [
            { text: "It's the ultimate tool for human advancement.", traits: { innovation: 3, intelligence: 3 } },
            { text: "It's a distraction that removes us from reality.", traits: { patience: 3, control: 2 } },
            { text: "It's an extension of my own mind.", traits: { creativity: 3, ambition: 2 } },
            { text: "I don't care much for it, as long as it works.", traits: { adaptability: 2, independence: 2 } }
        ]
    },
    {
        id: 49,
        text: "How do you approach a long-term goal?",
        answers: [
            { text: "Break it down into daily milestones.", traits: { discipline: 3, control: 3 } },
            { text: "Visualize the result and let the path manifest.", traits: { creativity: 3, confidence: 2 } },
            { text: "Adapt the goal as I learn more.", traits: { adaptability: 3, intelligence: 2 } },
            { text: "Focus intensely and ignore everything else.", traits: { ambition: 3, resilience: 2 } }
        ]
    },
    {
        id: 50,
        text: "Final question: What is the last thing you want to be remembered for?",
        answers: [
            { text: "My contributions to human knowledge.", traits: { intelligence: 3, innovation: 3 } },
            { text: "The lives I have changed for the better.", traits: { empathy: 3, justice: 3 } },
            { text: "The power I held and the order I created.", traits: { ambition: 3, control: 3 } },
            { text: "Living a life truly, authentically my own.", traits: { independence: 3, confidence: 3 } }
        ]
    }
];
