'use strict'
let screenValue = 0;
let chargerValue = 0;
let caseValue = 0;
let lcdValue = 0;
let soctValue = 0;
let speakerValue = 0;
document.querySelector('.outputButon').addEventListener('click', function() {
    let screenInput = Number(document.querySelector('.input_screen').value)
    let caseInput = Number(document.querySelector('.input_case').value)
    let chargerInput = Number(document.querySelector('.input_charger').value)

    if (chargerValue < 0) return;
    else if (chargerInput) {
        chargerValue += chargerInput
        document.querySelector('.mainCharger').textContent = `charger : ${chargerValue}`;

        document.querySelector('.input_charger').value = '';
    }
    if (screenValue < 0) return;
    else if (screenInput) {
        screenValue += screenInput;


        document.querySelector('.mainScreen').textContent = `screen : ${screenValue}`;
        document.querySelector('.input_screen').value = ''
    }
    if (caseValue < 0) return;
    else if (caseInput) {

        caseValue += caseInput;
        document.querySelector('.mainCase').textContent = `case : ${caseValue}`;
        document.querySelector('.input_case').value = '';
    }

})
const btn = document.querySelector('.butn');
document.querySelector('.output-main').addEventListener('click', function() {
    if (btn.style.display === 'block') {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
});
document.querySelector('.insideButon').addEventListener('click', function() {
    let lcdInput = Number(document.querySelector('.lcd_screen').value)
    let soctInput = Number(document.querySelector('.soct_screen').value)
    let speakerInput = Number(document.querySelector('.speaker_screen').value)

    if (lcdValue < 0) return;
    else if (lcdInput) {
        lcdValue += lcdInput
        document.querySelector('.mainLcd').textContent = `Lcd : ${lcdValue}`;

        document.querySelector('.lcd_screen').value = '';
    }

    if (soctValue < 0) return;
    else if (soctInput) {
        soctValue += soctInput;


        document.querySelector('.mainSoct').textContent = `Soct : ${soctValue}`;
        document.querySelector('.soct_screen').value = ''
    }

    if (speakerValue < 0) return;
    else if (speakerInput) {

        speakerValue += speakerInput;
        document.querySelector('.mainSpeaker').textContent = `Speaker : ${speakerValue}`;

        document.querySelector('.speaker_screen').value = '';
    }

})
const btn2 = document.querySelector('.butn2');
document.querySelector('.inside-main').addEventListener('click', function() {
    if (btn2.style.display === 'block') {
        btn2.style.display = 'none';
    } else {
        btn2.style.display = 'block';
    }
})