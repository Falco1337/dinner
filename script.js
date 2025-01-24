const adminUsers = ["admin1", "admin2", "admin3", "admin4", "admin5"];  
const currentUser = "admin1";  

const videoElement = document.getElementById('videoElement');
const adminLiveBtn = document.getElementById('adminLiveBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
let mediaRecorder;
let recordedChunks = [];

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        });
        videoElement.srcObject = stream;
    } catch (error) {
        console.error("Error accessing camera:", error);
    }
}

// Show live preview button if user is an admin
if (adminUsers.includes(currentUser)) {
    adminLiveBtn.style.display = 'inline-block';
    adminLiveBtn.addEventListener('click', function() {
        window.location.href = "mon.html";  
    });
}

function startRecording() {
    recordedChunks = [];
    const stream = videoElement.srcObject;
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = saveVideo;

    mediaRecorder.start();
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
}

function stopRecording() {
    mediaRecorder.stop();
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
}

function saveVideo() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'FSR_Dinner_Night_Recording.webm';
    a.click();
    window.URL.revokeObjectURL(url);
}

setupCamera();
startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);
