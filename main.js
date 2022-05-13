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

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        gesture = results[0].label;
        toSpeak = "";

        if (gesture == "V") {
            toSpeak = "It means peace and love";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
        } else if (gesture == "Hello") {
            toSpeak = "It's a greeting";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#58398;";
        } else if (gesture == "Yow") {
            toSpeak = "It's a cool greeting";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#129304;";
        } else if (gesture == "Punch") {
            toSpeak = "It shows punch action";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#57357;;";
        }
        speak();
    }
}