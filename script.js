const speech = new SpeechSynthesisUtterance();

let voices = [];

let selectVoices = document.getElementById('select');

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    selectVoices.innerHTML = '';

    speech.voice = voices[0];

    voices.forEach((voice, i) =>{
        let options = document.createElement('option');
        options.textContent = `${voice.name} (${voice.lang})`;
        options.value = i;
        selectVoices.appendChild(options);  
    });
    if(voices.length > 0){
        speech.voice = voices[0];
    }
}

selectVoices.addEventListener('change', () =>{
    speech.voice = voices[selectVoices.value];
})

let listenVoice = document.getElementById('listen');

listenVoice.addEventListener('click', () =>{
    let textarea = document.getElementById('textarea').value
    if(textarea){
        window.speechSynthesis.cancel();
        speech.text = textarea;
        window.speechSynthesis.speak(speech);
    }
})