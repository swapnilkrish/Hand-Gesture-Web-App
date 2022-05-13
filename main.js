Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot() {
    webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TuY6R5CdR/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    image = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function speak() {
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);

    synth.speak(utterThis);
}