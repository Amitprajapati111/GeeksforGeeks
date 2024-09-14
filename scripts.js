function trackHealth() {
    const weight = document.getElementById('weight').value;
    const bp = document.getElementById('bp').value;

    // Validate input
    if (weight.trim() === '' || bp.trim() === '') {
        alert('Please enter both weight and blood pressure.');
        return;
    }

    // Display the values
    const metricsDisplay = document.getElementById('metrics-display');
    metricsDisplay.innerHTML = `<p>Weight: ${weight} kg</p><p>Blood Pressure: ${bp} mmHg</p>`;
}

function searchSymptoms() {
    const symptomInput = document.getElementById('symptom-input').value.trim();
    
    // Validate input
    if (symptomInput === '') {
        alert('Please enter symptoms.');
        return;
    }
    
    // Display the search query
    const symptomResults = document.getElementById('symptom-results');
    symptomResults.innerHTML = `<p>Results for symptoms: ${symptomInput}</p>`;
}

const symptomsDatabase = {
    "fever": {
        precaution: "Drink plenty of fluids and rest. Avoid cold environments.",
        homeRemedies: "Ginger tea, honey, and lemon in warm water can help reduce fever.",
        medicines: "Paracetamol, Ibuprofen.",
        department: "General Physician"
    },
    "cough": {
        precaution: "Stay hydrated, avoid irritants like smoke and dust.",
        homeRemedies: "Honey, ginger tea, and steam inhalation.",
        medicines: "Cough syrups like Dextromethorphan, Lozenges.",
        department: "Pulmonologist"
    },
    "headache": {
        precaution: "Avoid bright lights, loud noises, and stress.",
        homeRemedies: "Peppermint oil massage, cold compress, and hydration.",
        medicines: "Acetaminophen, Ibuprofen.",
        department: "Neurologist"
    },
    "sore throat": {
        precaution: "Avoid cold drinks, speak softly to avoid straining the throat.",
        homeRemedies: "Saltwater gargles, honey, and herbal teas.",
        medicines: "Throat lozenges, Acetaminophen.",
        department: "ENT Specialist"
    },
    "nausea": {
        precaution: "Avoid strong odors, eat bland foods, and stay hydrated.",
        homeRemedies: "Ginger tea, peppermint, and small frequent meals.",
        medicines: "Antiemetics like Dimenhydrinate, Meclizine.",
        department: "Gastroenterologist"
    },
    "stomach ache": {
        precaution: "Avoid spicy foods, eat in small portions, and stay hydrated.",
        homeRemedies: "Chamomile tea, ginger, and heating pad on the abdomen.",
        medicines: "Antacids, Simethicone.",
        department: "Gastroenterologist"
    },
    "back pain": {
        precaution: "Avoid heavy lifting, maintain proper posture, and take regular breaks.",
        homeRemedies: "Warm compress, gentle stretching, and turmeric milk.",
        medicines: "Ibuprofen, Naproxen.",
        department: "Orthopedist"
    },
    "dizziness": {
        precaution: "Sit or lie down immediately, avoid sudden movements.",
        homeRemedies: "Ginger tea, hydration, and rest.",
        medicines: "Meclizine, Dimenhydrinate.",
        department: "Neurologist"
    },
    "acne": {
        precaution: "Avoid touching the face, use non-comedogenic skincare products.",
        homeRemedies: "Tea tree oil, honey, and aloe vera gel.",
        medicines: "Benzoyl peroxide, Salicylic acid.",
        department: "Dermatologist"
    },
    "allergy": {
        precaution: "Avoid known allergens, keep windows closed during high pollen days.",
        homeRemedies: "Saline nasal rinse, local honey, and quercetin-rich foods.",
        medicines: "Antihistamines like Cetirizine, Loratadine.",
        department: "Allergist/Immunologist"
    },
    "insomnia": {
        precaution: "Maintain a regular sleep schedule, avoid caffeine before bed.",
        homeRemedies: "Chamomile tea, lavender oil, and relaxation techniques.",
        medicines: "Melatonin supplements, Diphenhydramine.",
        department: "Sleep Specialist"
    },
    "constipation": {
        precaution: "Increase fiber intake, stay hydrated, and exercise regularly.",
        homeRemedies: "Prunes, flaxseed, and warm lemon water.",
        medicines: "Laxatives like Bisacodyl, Psyllium husk.",
        department: "Gastroenterologist"
    },
    "skin rash": {
        precaution: "Avoid scratching, use hypoallergenic skincare products.",
        homeRemedies: "Oatmeal baths, coconut oil, and aloe vera gel.",
        medicines: "Hydrocortisone cream, Antihistamines.",
        department: "Dermatologist"
    }
};
    // Add more symptoms as needed

function searchSymptoms() {
    const symptomInput = document.getElementById('symptom-input').value.trim().toLowerCase();
    
    if (symptomInput === '') {
        alert('Please enter symptoms.');
        return;
    }

    const symptomInfo = symptomsDatabase[symptomInput];

    if (symptomInfo) {
        const symptomResults = document.getElementById('symptom-results');
        symptomResults.innerHTML = `
            <h3>Symptom: ${symptomInput.charAt(0).toUpperCase() + symptomInput.slice(1)}</h3>
            <p><strong>Precaution:</strong> ${symptomInfo.precaution}</p>
            <p><strong>Home Remedies:</strong> ${symptomInfo.homeRemedies}</p>
            <p><strong>Medicines:</strong> ${symptomInfo.medicines}</p>
            <p><strong>Consult:</strong> ${symptomInfo.department}</p>
        `;
    } else {
        alert('Symptom not found. I will add later.');
    }
}
