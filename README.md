FSR Sport Light Feast  - Video Recording App
This project allows users to stream video from their camera and record it, with a simple user interface for starting and stopping the recording. The application uses modern web technologies like HTML, CSS, and JavaScript to implement this feature.

Features:
- Live camera streaming
- Start and stop video recording
- Save recorded video as a .webm file
- Simple and minimalistic UI
- Built with responsive design for mobile and desktop devices

Technologies Used:
- HTML: Provides the structure of the webpage.
- CSS: Handles the styling, including animations and responsiveness.
= JavaScript: Implements the logic for video recording using the MediaRecorder API and the WebRTC API for accessing the camera.

Getting Started:
1. Clone the repository
Clone this repository to your local machine using:
git clone https://github.com/Falco1337/dinner.git

2. Folder Structure:
fsr-dinner-night/
│
├── index.html    
├── style.css     
├── script.js      
└── README.md

3. Open in Browser
Simply open the index.html file in your web browser to view the project in action.

4. Demo
Open the webpage on your browser (ensure you allow camera permissions).
Press the "Live" button to begin the stream.
You can start and stop recording by clicking the corresponding buttons.

5. Mobile Compatibility:
This application is optimized for mobile devices. The camera stream and recording buttons will adjust based on your device's screen size.

How It Works:
Camera Access:

- The application prompts the user to grant camera access upon page load.
If granted, it uses the navigator.mediaDevices.getUserMedia() API to display the live video stream.
Recording:

- Clicking the "Start Recording" button begins recording the video.
- Clicking the "Stop Recording" button stops the recording and triggers the download of the video file.

Video Download:

- After recording, the video is automatically saved as a .webm file. This happens via the MediaRecorder API, which captures the video stream in chunks.

Contributing:
- If you'd like to contribute to the project, please fork the repository, create a new branch, and submit a pull request with your changes.

To contribute:
- Fork this repository
- Create your feature branch (git checkout -b feature-branch)
- Commit your changes (git commit -am 'Add new feature')
- Push to the branch (git push origin feature-branch)
- Create a new Pull Request

