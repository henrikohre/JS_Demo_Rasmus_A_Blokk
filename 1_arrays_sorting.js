/*
 * Sorterings-funksjoner:
 */
function sammenliknKortEtterTall(kortA, kortB) {
    tallA = parseInt(kortA) // Henter ut tallverdien av kort a
    tallB = parseInt(kortB) // Henter ut tallverdien av kort b
    // Vil at Ess teller som høyeste kort:
    if (tallA == 1) {
        tallA = 14
    }
    if (tallB == 1) {
        tallB = 14
    }
    return tallA - tallB
}

// Skal sammenligne strenger som ser slik ut:
//  "1_of_clubs"
//  "12_of_spades"
