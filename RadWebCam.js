const flip = false; // whether to flip the webcam

let constraints = {
    audio: false,
    facingMode: "environment",
    video: true,
    width: webCamHeight,
    height: webCamWidth
};


class RadEdjeWebCam {

    constructor(width = 400, height = 400, flip = false, constraints = constraints) {
        this.width = width;
        this.height = height;
        this.flip = flip;
        this.constraints = constraints;
    }



    getWebCam() {        
        if (!window.navigator.mediaDevices || !window.navigator.mediaDevices.getUserMedia) {
            console.warn('getUserMedia() is not supported by your browser');
            return Promise.reject('Your browser does not support WebRTC. Please try another one.');
        }


        const video = document.createElement('video');

        // Activate the webcam stream.
        return navigator.mediaDevices.getUserMedia(this.constraints)
            .then((mediaStream) => {
                video.srcObject = mediaStream;
                video.addEventListener('loadedmetadata', () => {
                    // const { videoWidth: vw, videoHeight: vh } = video; DO I NEED THIS?
                    video.width = this.width;
                    video.height = this.height;
                });

                return video;

            }, () => {
                return Promise.reject('Could not open your camera. You may have denied access.');

            });




    }

    async setup() {
        console.log(`constraints is ${Object.entries(this.constraints)}`);
        console.log(`function is ${this.getWebCam}`);

        if (!this.webcam) {
            this.webcam = await this.getWebCam();


            // DON'T NEED CANVAS.... just render the video element directly like in jason's lecture
            // if (!this.canvas) {
            //     this.canvas = document.createElement('canvas');
            //     this.canvas.width = this.width;
            //     this.canvas.height = this.height;
        
            // }
        }
    }

    play() {
        const promise = this.webcam.play();
        return promise;
    }


    pause() {
        this.webcam.pause();
    }


    // update() {
    //     this.renderCameraToCanvas();
    // }





//removed render to canvas since I'm using the video element directly generated 
    // renderCameraToCanvas() {
    //     if (this.canvas && this.webcam) {
    //         const ctx = this.canvas.getContext('2d');

    //         if (this.webcam.videoWidth !== 0) {
    //             const croppedCanvas = cropTo(this.webcam, this.width, this.flip);
    //             ctx.drawImage(croppedCanvas, 0, 0);
    //         }
    //     }
    // }

    // for future use?
    // stopStreamedVideo(videoEl: HTMLVideoElement) {
    //     const stream = videoEl.srcObject as MediaStream;
    //     const tracks = stream.getTracks();

    //     tracks.forEach((track) => {
    //         track.stop();
    //     });

    //     videoEl.srcObject = null;
    // }

}




