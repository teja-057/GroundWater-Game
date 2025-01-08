let score = 0;

const scenarios = [
    {
        question: "A drought has hit your region. What should you do?",
        options: [
            { text: "Implement drip irrigation", correct: true },
            { text: "Increase groundwater extraction", correct: false },
            { text: "Stop all irrigation", correct: false },
            { text: "Use flood irrigation", correct: false }
        ]
    },
    {
        question: "You discover contamination in your local aquifer. What action should you take?",
        options: [
            { text: "Ignore it", correct: false },
            { text: "Report it and seek solutions", correct: true },
            { text: "Continue using the water", correct: false },
            { text: "Dump more waste into it", correct: false }
        ]
    },
    {
        question: "Your community is planning to build a new factory near a water source. What should you advocate for?",
        options: [
            { text: "Strict regulations on waste disposal", correct: true },
            { text: "No regulations, it will create jobs", correct: false },
            { text: "Ignore the issue", correct: false },
            { text: "Support the factory without conditions", correct: false }
        ]
    },
    {
        question: "A neighbor is overusing groundwater for their lawn. What should you do?",
        options: [
            { text: "Talk to them about conservation", correct: true },
            { text: "Report them to authorities", correct: false },
            { text: "Ignore it", correct: false },
            { text: "Join them in watering", correct: false }
        ]
    },
    {
        question: "You have an opportunity to plant trees in your area. What should you do?",
        options: [
            { text: "Plant native trees that require less water", correct: true },
            { text: "Plant non-native trees that need a lot of water", correct: false },
            { text: "Do nothing and let nature be", correct: false },
            { text: "Plant grass instead of trees", correct: false }
        ]
    },
//     {
//         question: "What is the best way to educate your community about groundwater issues?",
//         options: [
//             { text: "Hold workshops and seminars", correct: true },
//             { text: "Post on social media only", correct: false },
//             { text: "Ignore the issue; it's not important", correct: false },
//             { text: "Only inform friends and family", correct: false }
//         ]
//     },
//     {
//         question: "You notice a decrease in your well's water level. What should you do?",
//         options: [
//             { text: "Investigate possible causes of over-extraction", correct: true },
//             { text: "Keep using the same amount of water", correct: false },
//             { text: "Ignore it; it will come back up", correct: false },
//             { text: "Drill deeper into the well without checking first", correct: false }
//         ]
//     },
//     {
//         question: "How can you contribute to groundwater recharge in your area?",
//         options: [
//             { text: "Install rainwater harvesting systems", correct: true },
//             { text: "Increase concrete surfaces to prevent absorption", correct: false },
//             { text: "Use chemical fertilizers that harm groundwater", correct: false },
//             { text: "Ignore it; it's not my problem", correct: false }
//         ]
//     },
//     {
//         question:"During heavy rains, what should you do to help groundwater levels?",
//         options:[
//             {text:"Create trenches to direct water into the ground.",correct:true},
//             {text:"Let all water run off into drains.",correct:false},
//             {text:"Build barriers to prevent water from entering.",correct:false},
//             {text:"Ignore the rain; it won't help.",correct:false}
//         ]
//     }, 
//     {
//         question:"What is a consequence of over-extracting groundwater?",
//         options:[
//             {text:"Land subsidence.",correct:true},
//             {text:"Increased crop yield.",correct:false},
//             {text:"More water availability.",correct:false},
//             {text:"Better soil quality.",correct:false}
//         ]
//     }, 
//     {
//         question:"Which method helps reduce evaporation from soil?",
//         options:[
//             {text:"Mulching around plants.",correct:true},
//             {text:"Watering during midday.",correct:false},
//             {text:"Using sprinklers constantly.",correct:false},
//             {text:"Leaving soil bare.",correct:false}
//         ]
//     }, 
//     {
//         question:"What is one benefit of using native plants in landscaping?",
//         options:[
//             {text:"They require less water.",correct:true},
//             {text:"They need more fertilizer.",correct:false},
//             {text:"They attract pests.",correct:false},
//             {text:"They grow faster than other plants.",correct:false}
//         ]
//     }, 
//     {
//         question:"How can crop rotation benefit groundwater management?",
//         options:[
//            {text:"It improves soil health and reduces chemical use.",correct:true},
//            {text:"It requires more water usage.",correct:false},
//            {text:"It leads to monoculture practices.",correct:false},
//            {text:"It has no effect on groundwater.",correct:false}
//        ]
//    }, 
//    {
//        question:"What is an effective way to monitor groundwater levels?",
//        options:[
//            {text:"Using piezometers or observation wells.",correct:true},
//            {text:"Guessing based on rainfall patterns.",correct:false},
//            {text:"Ignoring changes in well usage.",correct:false},
//            {text:"Relying solely on government reports.",correct:false}
//        ]
//    }, 
//    {
//        question:"What should you do if you suspect illegal dumping near a water source?",
//        options:[
//            {text:"Report it to local authorities immediately.",correct:true},
//            {text:"Ignore it; it's not my problem.",correct:false},
//            {text:"Join in; everyone does it!",correct:false},
//            {text:"Only tell friends about it.",correct:false}
//        ]
//    }, 
//    {
//        question:"Which practice helps prevent groundwater contamination from agriculture?",
//        options:[
//            {text:"Using organic fertilizers and pesticides.",correct:true},
//            {text:"Overusing chemical fertilizers.",correct:false},
//            {text:"Ignoring runoff management practices.",correct:false},
//            {text:"Planting crops without crop rotation.",correct:false}
//        ]
//    }, 
//    {
//        question:"What can individuals do to conserve water at home?",
//        options:[
//            {text:"Fix leaks and install low-flow fixtures.",correct:true},
//            {text:"Take long showers every day.",correct:false},
//            {text:"Water lawns daily regardless of rain.",correct:false},
//            {text:"Use hoses instead of buckets for washing cars.",correct:false}
//        ]
//    }, 
//    {
//        question:"How does urban development impact groundwater recharge?",
//        options:[
//            {text:"It reduces permeable surfaces, hindering recharge.",correct:true},
//            {text:"It increases groundwater levels significantly.",correct:false},
//            {text:"It has no effect on recharge rates at all.",correct:false},
//            {text:"It makes recharge easier with more vegetation.",correct:false}
//        ]
//    }, 
//    {
//        question:"Which of these is a sustainable practice for landscaping?",
//        options:[
//            {text:"Xeriscaping with drought-resistant plants.",correct:true},
//            {text:"Using excessive amounts of water for lawns.",correct:false},
//            {text:"Planting non-native species that require high maintenance.",correct:false},
//            {text:"Ignoring seasonal changes in watering needs.",correct:false}
//        ]
//    }, 
//    {
//        question:'What role does public awareness play in groundwater conservation?',
//        options:[
//           {'text':'It encourages community participation and responsible use.', 'correct':true}, 
//           {'text':'It has no significant impact.', 'correct':false}, 
//           {'text':'It creates confusion among residents.', 'correct':false}, 
//           {'text':'It leads to increased consumption.', 'correct':false}
//       ] 
//   }, 
//   {
//       question:'What is one way to improve soil health for better groundwater retention?',
//       options:[
//          {'text':'Adding organic matter like compost.', 'correct':true}, 
//          {'text':'Using chemical fertilizers only.', 'correct':false}, 
//          {'text':'Ignoring soil quality.', 'correct':false}, 
//          {'text':'Overwatering plants.', 'correct':false}
//      ] 
//   },  
//   {
//       question:'What should be done with stormwater runoff?',
//       options:[
//          {'text':'Capture and redirect it for recharge.', 'correct':true}, 
//          {'text':'Let it flow into drains without treatment.', 'correct':false}, 
//          {'text':'Use it for irrigation without filtration.', 'correct':false}, 
//          {'text':'Ignore its effects on local ecosystems.', 'correct':false}
//      ] 
//   },  
//   {
//       question:'How can community gardens help with groundwater conservation?',
//       options:[
//          {'text':'They promote local food production and reduce transport needs.', 'correct':true}, 
//          {'text':'They require excessive amounts of water.', 'correct':false}, 
//          {'text':'They are only beneficial if large-scale.', 'correct':false}, 
//          {'text':'They have no impact on conservation efforts.', 'correct':false}
//      ] 
//   },  
//   {
//       question:'What is a key benefit of using greywater systems?',
//       options:[
//          {'text':'They recycle water for non-potable uses.', 'correct':true}, 
//          {'text':'They increase overall water consumption.', 'correct':false}, 
//          {'text':'They are expensive and impractical for households.', 'correct':false}, 
//          {'text':'They have no environmental benefits.', 'correct':false}
//      ] 
//   }
];

let currentScenarioIndex = 0;

// Start Game Function
document.getElementById('startBtn').onclick = function() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    loadScenario();
};

// Load Scenario Function
function loadScenario() {
    const scenario = scenarios[currentScenarioIndex];
    
    document.getElementById('scenario').innerText = scenario.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    scenario.options.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-secondary btn-block mt-2';
        button.innerText = option.text;
        
        // Set selected option when clicked
        button.onclick = () => {
            selectedOption = option; // Store selected option
            clearSelectedOptions(); // Clear previous selections
            button.classList.add('active'); // Highlight selected button
        };
        
        optionsContainer.appendChild(button);
    });
}

// Clear previous selections
function clearSelectedOptions() {
    const buttons = document.querySelectorAll('#options .btn');
    buttons.forEach(button => {
        button.classList.remove('active'); // Remove active class from all buttons
    });
}

// Submit Decision Function
document.getElementById('submitBtn').onclick = function() {
    if (!selectedOption) {
        document.getElementById('feedback').innerText = "Please select an option before submitting.";
        return; // Do nothing if no option is selected
    }

    if (selectedOption.correct) {
        score += 10; // Increase score for correct decision
        document.getElementById('feedback').innerText = "Correct decision! +10 points.";
    } else {
        if (score > 20) {
          score -= 5; // Reduce score for incorrect decision only if above 20
          document.getElementById('feedback').innerText = "Incorrect decision! -5 points.";
      } else {
          document.getElementById('feedback').innerText = "Incorrect decision! No score reduction.";
      }
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    
    currentScenarioIndex++;
    
    if (currentScenarioIndex < scenarios.length) {
        selectedOption = null; // Reset selected option for next scenario
        setTimeout(loadScenario, 2000); // Load next scenario after a delay
    } else {
        endGame();
    }
}

// End Game Function
function endGame() {
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('endSection').style.display = 'block';
    document.getElementById('finalScore').innerText = score;
}

// Exit Button Functionality
document.getElementById('exitBtn').onclick = function() {
    window.history.back(); // Go back to the previous page
};

// Play Again Button Functionality
document.getElementById('playAgainBtn').onclick = function() {
    score = 0;
    currentScenarioIndex = 0;
    selectedOption = null; // Reset selected option
    document.getElementById('endSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    loadScenario();
};

// Go Back Button Functionality
document.getElementById('goBackBtn').onclick = function() {
    window.history.back(); // Go back to the previous page
};

// Save Score Button Functionality (Placeholder)
document.getElementById('saveScoreBtn').onclick = function() {
   alert("Your score has been saved! (This is a placeholder action.)");
};

// Load the first scenario on page load
loadScenario();


//--------updating the score in the database
// Save Score Button Functionality
document.getElementById('saveScoreBtn').onclick = function() {
    const user = JSON.parse(sessionStorage.getItem('user')); // Retrieve user data from sessionStorage
    if (user) {
        const userId = user.id; // Get user ID from sessionStorage
        const scoreToSave = score; // The current score to save

        fetch('http://localhost:3000/updateScore', { // Ensure this URL matches your server's address
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: userId, score: scoreToSave })
        })
        .then(response => {
            if (response.ok) {
                alert("Your score has been saved successfully!");
            } else {
                alert("Failed to save score: " + response.statusText);
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert("No user is logged in. Please log in first.");
    }
};