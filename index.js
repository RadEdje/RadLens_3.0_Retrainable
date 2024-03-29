/** 

index.js

This is the main javascript for the web app.

It was inspired by the emoji scavenger hunt google project and teachable machine(see CREDITS below).
The emoji savenger hunt however was written in typscript. I modified the code so it
could run with raw/vanilla javascript. (Thank you  to the dev team of the
emoji scavenger hunt for ansering all my questions regarding their app). Instead of
creating a UX/UI for a game to detect emojis(like in the original), the current frontEnd 
is used to scan images and then takes you to a google image search to cross reference the image
found. 

Update as of December 2022:
I liked teachable machine a lot but I couldn't train AI right on my phone.
I decided to add this is a new feature to the web app (to apply what I learned from the edx course
of Jason Mayes).
The web app can now
1)Train custom AI models righ on the User's phone,
2)Save and export those models for sharing on sites like glitch or github
3)Use those models for the main C-RISE (customizable reverse image search engine)
4)the web app can still load AI models trianed on the teachable machine website and shared
using teachable machine URL's.



Updated as of April 2022:
I've also taken recent inspiration from the teachable machine (see links  below)
which allows anyone to train their own AI models in the cloud. The updated version 
uses the teachable machines libarary to more easily load AI/ML models using
tensorflow.js.

Updated as of 11/27/2019:
using the teachable machine API
https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image
Will now use tmImage module to handle the video capture and model predict functions


CREDITS:
inspired by code from 
https://github.com/google/emoji-scavenger-hunt under the APACHE 2.0 License
https://github.com/googlecreativelab/teachable-machine-v1 under the APACHE 2.0 License
https://www.edx.org/course/google-ai-for-javascript-developers-with-tensorflowjs (taught by Jason Mayes.



AUTHOR OF CURRENT CODE: Erwin John T. Carpio

 Copyright 2022 ERWIN JOHN T. CARPIO

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


**/






document.addEventListener("DOMContentLoaded", function () {



    document.api = {};
    let ddxIndex = 4;

    // the BUTTONS
    let showMenu = (function () {

        // variables

        // cache dom
        let header__burger = document.querySelector("#header__burger");
        let menu_exit = document.querySelector("#menu_exit");
        let dimmer = document.querySelector('#dimmer');

        // bind dom
        header__burger.addEventListener('click', function () {
            menu.classList.remove('menu--hide');
            dimmer.classList.remove('dimmer--hide');
        });

        // functions

        // render function

        // API

    })();


    let hideMenu = (function () {

        // variables

        // cache dom
        let menu = document.querySelector('#menu');
        let menu_exit = menu.querySelector("#menu_exit");
        let dimmer = document.querySelector('#dimmer');

        // bind dom
        menu_exit.addEventListener('click', function () {
            menu.classList.add('menu--hide');
            dimmer.classList.add('dimmer--hide');
        });

        dimmer.addEventListener('click', function () {
            menu.classList.add('menu--hide');
            dimmer.classList.add('dimmer--hide');
        });

        // functions

        // render function

        // API

    })();

    let toggleShare = (function () {

        // var

        // cache dom
        let shareIcon = document.querySelector("#shareIcon");
        let shareBtns = document.querySelector("#share__btns");

        // bind dom
        shareIcon.addEventListener("click", function () {
            shareBtns.classList.toggle("share__btns--hidden");
        });

        // functions

        // render

        // API

    })();

    let toggleDebug = (function () {

        // var

        // cache dom
        let debug = document.querySelector('#debug');
        let ddx = document.querySelector('#ddx');
        let errors = document.querySelector('#errors');
        let ddxBtn = document.querySelector('#ddxBtn');
        let ddxScore = document.querySelector("#ddxScore");

        // bind dom
        debug.addEventListener("click", function () {
            ddx.classList.toggle("ddx--hide");
            ddxBtn.classList.toggle("ddxBtn--rotated");
            ddxScore.classList.toggle("ddxScore--hide");
            errors.classList.toggle("errors--hide");
        });

        ddxBtn.addEventListener("click", function () {

            ddx.classList.toggle("ddx--hide");
            ddxBtn.classList.toggle("ddxBtn--rotated");
            ddxScore.classList.toggle("ddxScore--hide");

        });

        // functions

        // render

        // API

    })();



    // THE ELEMENTS
    let errors = document.getElementById("errors");
    errors.innerHTML = '';

    let errorTracker = (function () {

        // cache dom
        let errors = document.getElementById("errors");

        // bind dom

    })();

    // for the info  section
    let scrollOutDetector = (function () {
        // variables

        // cache dom
        let $webcamContainer = document.querySelector("#webcamContainer");
        let $gfab = document.querySelector("#gfab");
        let $prediction = document.querySelector("#prediction");
        let $form_modelSelector = document.querySelector("#form_modelSelector");
        let $mpr = document.querySelector("#mpr");


        // bind dom
        window.addEventListener("scroll", function () {

            render();

        });

        // render function
        render();

        function render() {
            locator($webcamContainer);

        }

        // funcions

        function locator(el) {
            // TODO: clean up FROM https://stackoverflow.com/questions/36175336/get-an-element-position-relative-to-the-top-of-the-viewport/36175684#36175684
            // let top = el.getBoundingClientRect().bottom + el.ownerDocument.defaultView.pageYOffset;
            let top = el.getBoundingClientRect().top;


            if (top != 0) {

                $gfab.classList.add("float-away");
                $prediction.classList.add("float-away");
                $form_modelSelector.classList.add("float-away");


            } else if (top == 0) {
                $gfab.classList.remove("float-away");
                $prediction.classList.remove("float-away");
                $form_modelSelector.classList.remove("float-away");

            }
        }


    })();



    // AI FUNCITONS


    // DOCUMENTO API 

    document.api = {}; //for future reusable glabal functions

    // GLOBAL FILE REFERENCE RESOURCE VARIABLES:

    // GLOBAL VARIABLES:
    let URL = "";
    let sensitivity;

    let initialModeltoRun = (function () {

        // VARIABLES
        //CACHE DOME
        //BIND DOM
        let $mpr = document.querySelector("#mpr");
        let $sensitivityInput = document.querySelector("#sensitivityInput");
        $mpr.value = "./my_model/";
        // $mpr.value = "https://radedje.github.io/pretrained_models_public/my_model_tb/";

        $sensitivityInput.value = "any";
        URL = $mpr.value;
        sensitivity = $sensitivityInput.value


    })();



    let modelURLsetter = (function () {

        // variables

        //cache dom
        let $form_modelSelector = document.querySelector("#form_modelSelector");
        let $mpr = document.querySelector("#mpr");
        let $sensitivityInput = document.querySelector("#sensitivityInput");
        let $splash = document.querySelector("#splash");
        let $loading = document.querySelector("#loading");
        let $loading0 = document.querySelector("#loading0");
        let $welcome = document.querySelector("#welcome");
        let $ddxScore = document.querySelector("#ddxScore");
        let $gfab = document.querySelector("#gfab");

        //bind dom
        $form_modelSelector.addEventListener("submit", function (event) {

            event.preventDefault();


            if ($gfab.classList.contains("gfab-active")) {

                alert("click or press camera button first to pause scanning before loading/reloading an AI model  or changing the threshold.");

            } else {

                render();

            }

        });

        // functions

        function reloadLayout() {
            $welcome.scrollTo(0, 0);
            $splash.classList.add('splash--noClick');
            $splash.classList.remove('splash__out');
            $loading.innerText = "Loading AI model........";
            $loading0.style.display = "block";
            $ddxScore.innerHTML = "";

        }

        function reloadNewModel() {

            URL = String($mpr.value);
            sensitivity = $sensitivityInput.value;
            document.api.reloadModel();

        }


        //render
        function render() {

            reloadLayout();
            reloadNewModel();

        }


        document.api.modelURLsetter = render;



    })();


    // GLOBAL VARIABLES:
    let model, modelMetadata, webcam, labelContainer, maxPredictions, webCamRequestGranted = false,
        webCamElement;
    let topScorer = 0;
    console.log(topScorer);




    // recreating the custom load model class function as RadCustomModel



    let preLoadModel = (function () {

        // variables

        //cache dom
        let splash = document.querySelector("#splash");
        let loading0 = document.querySelector("#loading0");
        let loading = document.querySelector("#loading");

        //BIND DOM:
        //FUNCTIONS:
        // Load the image model and setup the webcam
        async function loadModel() {
            const modelURL = URL + "model.json";
            const modelMetadataURL = URL + "metadata.json";




            model = await tf.loadLayersModel(modelURL);

            async function isUrlFound(url) {
                try {
                    // const response = await fetch(url, {
                    //     method: 'HEAD',
                    //     cache: 'no-cache'
                    // });

                    const response = await fetch(url);

                    return response.status === 200;

                } catch (error) {
                    // console.log(error);
                    return false;
                }
            }

            const isValidUrl = await isUrlFound(modelMetadataURL);

            console.log(`%c isValidUrl is ${isValidUrl}`, "color:green")

            if (isValidUrl) {

                console.log("model metadata does exist");

                const response = await fetch(modelMetadataURL);
                const json = await response.json();
                console.log(json.labels);

                modelMetadata = json;
                console.log(`Model metadata is ${json.labels}`);
                console.log(`Model metadata is ${modelMetadata.labels}`);


            } else {
                console.log("model metadata does NOT exist");
            }

            //remove this for now.... this is for the PRE TRAINED MODELS LOADED
            // model.summary();

            function getTotalClasses(model) {
                const output = model.output;
                const totalClasses = output.shape[1];
                return totalClasses;
            }

            maxPredictions = getTotalClasses(model);

            // splash.classList.add('splash__out');
            splash.classList.remove('splash--noClick');
            loading0.style.display = "none";
            loading.innerHTML = "<p id='click2start' class='click2start'>ACCEPT</p>";

            let removeSplashScreen = (function () {

                // variables

                let click2start = document.querySelector("#click2start");
                let splash = document.querySelector("#splash");
                let main = document.querySelector("#main");


                //bind dom
                click2start.addEventListener("click", function () {

                    splash.classList.add('splash__out');
                    main.classList.remove('main--freeze');

                });


            })();

        }

        //render function
        function render() {
            loadModel();

        }

        render();

        //api

        document.api.reloadModel = render;

    })();







    let switchOn = (function () {

        // vars

        // cache dom
        let gfab = document.querySelector("#gfab");
        let header = document.querySelector("#header");

        // bind dom
        gfab.addEventListener("click", function () {
            gfab.classList.toggle("gfab-active");


            if (gfab.classList.contains("gfab-active")) {

                header.classList.add("header--hide");

            } else {

                header.classList.remove("header--hide");
            }


            //FUNCTIONS to toggle for the webcam and the model prediction loop:
            // switching on and off the web cam
            // https://stackoverflow.com/questions/28140147/turn-off-webcam-camera-after-using-getusermedia

            if (webCamRequestGranted == false) {

                initWebcam();

            } else if (webCamRequestGranted == true) {
                return
                // this may no longer be needed since it is always set to initiate 
                // clicking the  fab button always stops the web cam feed and webcam init needs to be
                // used again. this is Safer
                // runWebcam();

            };

        });

    })();







    // the WEBCAM ELEMENT 





    // ********************************************************************************
    // *SECTION ZERO
    // *CREATING A WEB CAM ELEMENT FOR AI
    // ********************************************************************************
    async function initWebcam() {


        // variables 
        let ddxScore;
        let webCamContainer;
        let webCamContainerChildren;

        //Cache DOM
        webCamContainer = document.querySelector("#webcamContainer");
        ddxScore = document.querySelector('#ddxScore');

        // Convenience function to setup a webcam

        let webCamHeight;
        let webCamWidth;

        if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
            webCamHeight = document.documentElement.clientWidth;
            webCamWidth = document.documentElement.clientWidth;
        } else if (document.documentElement.clientHeight < document.documentElement.clientWidth) {
            webCamHeight = document.documentElement.clientHeight;
            webCamWidth = document.documentElement.clientHeight;

        }

        // always start with an empty webCamContainer
        webCamContainer.innerHTML = "";




        const flip = false; // whether to flip the webcam

        let constraints = {
            audio: false,
            video: {
                facingMode: "environment",
                width: webCamHeight,
                height: webCamWidth
            },

        };



        // START the polyfill for webRTC and media devices get user media            

        // Older browsers might not implement mediaDevices at all, so we set an empty object first
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
        }

        // Some browsers partially implement mediaDevices. We can't just assign an object
        // with getUserMedia as it would overwrite existing properties.
        // Here, we will just add the getUserMedia property if it's missing.
        if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = function (constraints) {
                // First get ahold of the legacy getUserMedia, if present
                var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

                // Some browsers just don't implement it - return a rejected promise with an error
                // to keep a consistent interface
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }

                // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
                return new Promise(function (resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            }
        }

        // END the polyfill for webRTC and media devices get user media






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
                video.setAttribute("muted", "");
                video.setAttribute("playsinline", "");
                video.setAttribute("autoplay", "");

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
                // console.log(`constraints is ${Object.entries(this.constraints)}`);
                // console.log(`function is ${this.getWebCam}`);

                if (!this.webcam) {
                    this.webcam = await this.getWebCam();


                    // DON'T NEED CANVAS.... just render the video element directly 
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


            stop() {
                this.stopStreamedVideo(this.webcam);
            }


            stopStreamedVideo(video) {
                const stream = video.srcObject;
                const tracks = stream.getTracks();

                tracks.forEach((track) => {
                    track.stop();
                });

                // video.srcObject = null;
            }





        }







        //now replacing with my custom WebCam class 
        webcam = new RadEdjeWebCam(webCamHeight, webCamWidth, flip, constraints);
        await webcam.setup();
        await webcam.play();


        window.requestAnimationFrame(loop);
        webCamRequestGranted = true;

        //append elements to DOM
        // adding the child webcam canvas to the container 
        webCamContainer.appendChild(webcam.webcam);
        webCamContainerChildren = webCamContainer.children;
        webCamContainerChildren[0].id = "webcamElement";
        webCamElement = document.querySelector("#webcamElement");
        // webCamElement.muted = true;
        // webCamElement.setAttribute("muted","");
        // webCamElement.setAttribute("playsinline", "");


        let $gfab = document.querySelector("#gfab");
        webCamElement.addEventListener("click", function () {

            $gfab.click();

        });





        // adding to the ddxScore debug element for predictions
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            ddxScore.appendChild(document.createElement("p"));
        };




    };

    async function runWebcam() {

        await webcam.play();
        window.requestAnimationFrame(loop);


    };





    // ********************************************************************************
    // SECTION ONE PREDICTING WITH PRETRaINED IMPORTED MODELS
    // FOR SECOND PART
    // ********************************************************************************

    // initially set streaming to false
    let streaming = false;

    async function loop() {

        // variables
        let gfab = document.querySelector("#gfab");
        let webCamContainer = document.querySelector("#webcamContainer");


        // functions

        // webcam.update(); // update the webcam frame... don't need this just us PREDICT 
        await predict();

        if (gfab.classList.contains("gfab-active")) {
            window.requestAnimationFrame(loop);
        } else {

            console.log("stopped predicting");


            //create the canvas that takes a picture of th viddeo feed and pout it before webcam.stop


            let keepLastFrameOfVideo = (function () {

                // variables

                // cache dom
                let $webcamContainer = document.querySelector("#webcamContainer");
                let $scanningCanvas = document.createElement("canvas");
                let $scanningImg = document.createElement("img");
                $scanningImg.id = "scanningId";
                $scanningCanvas.classList.add("scanningId");
                $scanningImg.id = "scanningImg";
                $scanningImg.classList.add("scanningImg");

                if (document.querySelector("#webcamElement")) {
                    $webcamElement = document.querySelector("#webcamElement");



                    $webcamElement.addEventListener(
                        "canplay",
                        (ev) => {
                            if (!streaming) {
                                // height = ($webcamElement.videoHeight / $webcamElement.videoWidth) * $webcamElement.videoWidth;

                                // video.setAttribute("width", width);
                                // video.setAttribute("height", height);
                                $scanningCanvas.setAttribute("width", $webcamElement.videoWidth);

                                // $scanningCanvas.setAttribute("height", height);

                                $scanningCanvas.setAttribute("height", $webcamElement.videoHeight);



                                streaming = true;
                            }
                        },
                        false
                    );
                }






                // bind dom






                // functions






                function takepicture() {
                    const context = $scanningCanvas.getContext("2d");
                    // if ($webcamElement.width && $webcamElement.height) {
                    if ($webcamElement.videoWidth && $webcamElement.videoHeight) {


                        let width = $webcamElement.videoWidth;
                        let height = $webcamElement.videoHeight;

                        $scanningCanvas.width = width;
                        $scanningCanvas.height = height;
                        context.drawImage($webcamElement, 0, 0, width, height);

                        const data = $scanningCanvas.toDataURL("image/png");
                        $scanningImg.setAttribute("src", data);
                        $scanningImg.style.height = height;
                        $scanningImg.style.width = width;

                    } else {
                        clearphoto();
                    }
                }



                function clearphoto() {
                    const context = canvas.getContext("2d");
                    context.fillStyle = "#AAA";
                    context.fillRect(0, 0, $scanningImg.width, $scanningImg.height);

                    const data = canvas.toDataURL("image/png");
                    $scanningImg.setAttribute("src", data);
                    $scanningImg.removeEventListener("click");
                }


                function addImgOnTopOfVideo() {

                    $webcamContainer.appendChild($scanningImg);
                    // $webcamElement.appendChild($scanningImg);

                    $scanningImg.addEventListener("click", function () {

                        let $gfab = document.querySelector("#gfab");
                        gfab.click();

                    });


                }



                //   render function

                function render() {
                    takepicture();
                    addImgOnTopOfVideo();


                }



                render();


            })();


            // webcam.pause();
            webcam.stop();
            webCamRequestGranted = false;
            return;
        };
    };


    // run the webcam image through the image model
    async function predict() {
        let ddxScore = document.querySelector('#ddxScore');
        let sensitivityLevel = sensitivity; //the cut off at which the ai decides, initially set at 0.9

        // predict can take in an image, video or canvas html element
        // const prediction = await model.predict(webcam.canvas);//replace this with a tensor using calculateFeaturesOnCurrentFrame

        let prediction;
        const MOBILE_NET_INPUT_WIDTH = 224;
        const MOBILE_NET_INPUT_HEIGHT = 224;

        tf.tidy(function () {

            let videoFrameAsTensor = tf.browser.fromPixels(webcam.webcam);

            let resizedTensorFrame = tf.image.resizeBilinear(
                videoFrameAsTensor,
                [MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH],
                true
            );

            let normalizedTensorFrame = resizedTensorFrame.div(255);

            return prediction = model.predict(normalizedTensorFrame.expandDims()).squeeze();



        });










        for (let i = 0; i < maxPredictions; i++) {


            let classNameString = modelMetadata.labels[i].toString();
            let className_ = classNameString.replace(/\_/g, ' ');
            let className = className_.replace(/\?/g, '');


            let classPredictionProbability = prediction.arraySync()[i].toFixed(2);
            let classPrediction = className + ": " + classPredictionProbability;


            console.log(`classNameString is ${classNameString} while className is ${className} 
            and sensitivityLevel is ${sensitivityLevel}, and classPrediction is ${classPrediction}`);


            if (classPredictionProbability >= topScorer) {

                topScorer = classPredictionProbability;
                console.log(topScorer);

            }




            if (sensitivityLevel == "any" && classPredictionProbability >= 0.5) {

                console.log("triggered by any");


                let final_ddx = document.querySelector('#final_ddx');
                let gfab = document.querySelector('#gfab');


                // let gfab = document.querySelector("#gfab");
                let ddxString = modelMetadata.labels[i].toString();
                let final_ddxString = ddxString.replace(/\_/g, ' ');
                let final_ddxSringGsearchTerms = ddxString.replace(/\_/g, '+');
                console.log(final_ddxString);

                // TODO: SEEMS i don't need to watch for gfab anymore....? i wonder why? decide you you want to keep with the gfab watcher or just go straight to dinall_ddx.innerHTML without the watcher
                if (gfab.classList.contains("gfab-active")) {
                    final_ddx.innerHTML = "<p>Consider <a href=https://www.google.com/images?q=" + final_ddxSringGsearchTerms + ">" + final_ddxString + "</a>?<br>(Scroll down for more info).</p>";
                    card_imageSearch_link.href = "https://www.google.com/images?q=" + final_ddxSringGsearchTerms;
                }


                // final_ddx.innerHTML = "<p>Please look for a <a href=https://www.google.com/images?q=" + final_ddxSringGsearchTerms + ">" + final_ddxString + "</a>?<br>(Scroll down for more info).</p>";
                // card_imageSearch_link.href = "https://www.google.com/images?q=" + final_ddxSringGsearchTerms;

                // ddxIndex = i;

                // topScorer = 0;
                // gfab.click();
            } else if (sensitivityLevel >= 0 && sensitivityLevel <= 1.0 && topScorer >= sensitivityLevel && classPredictionProbability == topScorer) {

                console.log("triggered by threshold numeric value");

                // TODO: check if it's  better to put gfab click here or below
                gfab.click();


                let final_ddx = document.querySelector('#final_ddx');


                // let gfab = document.querySelector("#gfab");
                let ddxString = prediction[i].className.toString();
                let final_ddxString = ddxString.replace(/\_/g, ' ');
                let final_ddxSringGsearchTerms = ddxString.replace(/\_/g, '+');
                console.log(final_ddxString);


                // TODO:CHECK if the next line is affected by making classes 4 and 5 visible (removing the css hide)

                // if (gfab.classList.contains("gfab-active")) {
                //     final_ddx.innerHTML = "<p>Please look for a <a href=https://www.google.com/images?q=" + final_ddxSringGsearchTerms + ">" + final_ddxString + "</a>?<br>(Scroll down for more info).</p>";
                //     card_imageSearch_link.href = "https://www.google.com/images?q=" + final_ddxSringGsearchTerms;                    
                // }



                final_ddx.innerHTML = "<p>Please look for a <a href=https://www.google.com/images?q=" + final_ddxSringGsearchTerms + ">" + final_ddxString + "</a>?<br>(Scroll down for more info).</p>";
                card_imageSearch_link.href = "https://www.google.com/images?q=" + final_ddxSringGsearchTerms;

                ddxIndex = i;

                topScorer = 0;
                // gfab.click();
            }

            console.log(prediction);
            ddxScore.childNodes[i].innerHTML = classPrediction;
        }
    };



    //may no onger be needed
    function calculateFeaturesOnCurrentFrame() {

        const MOBILE_NET_INPUT_WIDTH = 224;
        const MOBILE_NET_INPUT_HEIGHT = 224;


        return tf.tidy(function () {
            // Grab pixels from current VIDEO frame.
            //   let videoFrameAsTensor = tf.browser.fromPixels(VIDEO);
            console.log(webcam.webcam);
            let videoFrameAsTensor = tf.browser.fromPixels(webcam.webcam);
            console.log(videoFrameAsTensor);

            // Resize video frame tensor to be 224 x 224 pixels which is needed by MobileNet for input.
            let resizedTensorFrame = tf.image.resizeBilinear(
                videoFrameAsTensor,
                [MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH],
                true
            );

            let normalizedTensorFrame = resizedTensorFrame.div(255);

            return model.predict(normalizedTensorFrame.expandDims()).squeeze();
        });
    }



    // ********************************
    // SECTION TWO TRAINING
    // FOR SECOND PART
    // ***********************************



    const STATUS = document.getElementById('status');
    const VIDEO = document.getElementById('webcam');
    const ENABLE_CAM_BUTTON = document.getElementById('enableCam');
    const RESET_BUTTON = document.getElementById('reset');
    const TRAIN_BUTTON = document.getElementById('train');
    //TODO: add a save button separate from the TRAIN BUTTON
    const SAVE_BUTTON = document.querySelector('#save');
    const MOBILE_NET_INPUT_WIDTH = 224;
    const MOBILE_NET_INPUT_HEIGHT = 224;
    const STOP_DATA_GATHER = -1;
    let CLASS_NAMES = [];



    let countTrain = 0;
    ENABLE_CAM_BUTTON.addEventListener('click', function(){
       
        toggleTrainingCam();

        if(countTrain<1){
            VIDEO.addEventListener("click", function () {

                ENABLE_CAM_BUTTON.click();
    
            });
        }
        countTrain +=1; 
        // console.log(`count train is ${countTrain}`);


    });
    TRAIN_BUTTON.addEventListener('click', trainAndPredict);
    SAVE_BUTTON.addEventListener('click', saveAndExport);
    RESET_BUTTON.addEventListener('click', reset);



    // Just add more buttons in HTML to allow classification of more classes of data!

    // Adding more button


    const toggleTrainingControls = (function () {

        // variables

        // cache dom
        const $trainingSection__gfab__icon = document.querySelector("#trainingSection__gfab__icon");
        const $trainingSectionBottomBar = document.querySelector("#trainingSectionBottomBar");


        // bind dom

        $trainingSection__gfab__icon.addEventListener("click", showHideTrainingControls);


        // functions

        function showHideTrainingControls() {

            $trainingSectionBottomBar.classList.toggle("trainingSectionBottomBar--hide");

        }






    })();


    let addClassBtn = (function () {

        // variables

        // cache dom
        // const trainingSectionBottomBar = document.querySelector("#trainingSectionBottomBar");

        const buttonsDataList = document.querySelector("#buttonsDataList");

        const addDataCollectorbtn = trainingSectionBottomBar.querySelector("#addDataCollectorbtn");


        //bind dom

        addDataCollectorbtn.addEventListener("click", () => {

            // getting the last value as basis
            let lastOneHotValue = parseInt(buttonsDataList.lastElementChild.lastElementChild.dataset.onehot, 10);
            let lastNameValue = buttonsDataList.lastElementChild.lastElementChild.dataset.name;


            //create the whole button input unit for the form
            let newInputBtnUnit = document.createElement("div");
            newInputBtnUnit.classList.add("input_btn_unit");

            //create the 3 elements of the btn unit: label, input and button. 
            let newInputLabel = document.createElement("label");
            newInputLabel.setAttribute("for", `input${lastOneHotValue + 2}`);
            newInputLabel.innerText = `Class Name ${lastOneHotValue + 2}`;



            let newInputN = document.createElement("input");
            newInputN.setAttribute("id", `input${lastOneHotValue + 2}`);
            newInputN.setAttribute("type", "text");
            newInputN.classList.add("input_class_name");
            newInputN.setAttribute("value", `Class ${lastOneHotValue + 2}`);
            newInputN.setAttribute("placeholder", "edit name here");



            let newClassBtn = document.createElement("button");
            newClassBtn.dataset.onehot = lastOneHotValue + 1;
            newClassBtn.dataset.name = `Class ${lastOneHotValue+2}`;
            newClassBtn.classList.add("dataCollector");
            newClassBtn.setAttribute("id", `btn${lastOneHotValue+2}`);
            newClassBtn.innerText = `Gather Class ${lastOneHotValue+2} data`;
            // newClassBtn.setAttribute("contenteditable", true);

            newClassBtn.addEventListener('mousedown', gatherDataForClass);
            newClassBtn.addEventListener('mouseup', gatherDataForClass);
            // For mobile.
            newClassBtn.addEventListener('touchend', gatherDataForClass);


            //putting the elements together in the bt unit
            newInputBtnUnit.appendChild(newInputLabel);
            newInputBtnUnit.appendChild(newInputN);
            newInputBtnUnit.appendChild(newClassBtn);



            //append the whole btn input unit to the dom
            buttonsDataList.appendChild(newInputBtnUnit);



            let dataCollectorInputNamesUpdated = document.querySelectorAll('input.input_class_name');
            let dataCollectorButtonsUpdated = document.querySelectorAll('button.dataCollector');
            // for (let i = 0; i < dataCollectorInputNamesUpdated.length; i++) {
            //     dataCollectorButtonsUpdated[i].dataset.name = dataCollectorInputNamesUpdated[i].value;
            //     dataCollectorButtonsUpdated[i].innerHTML = dataCollectorInputNamesUpdated[i].value;

            // }


            // remove the push per and re list all
            // CLASS_NAMES.push(newClassBtn.getAttribute('data-name'));

            CLASS_NAMES = [];
            // dataCollectorButtonsUpdated = document.querySelectorAll('button.dataCollector');

            for (let i = 0; i < dataCollectorButtonsUpdated.length; i++) {
                // REPOPULATE Populate the human readable names for classes.
                CLASS_NAMES.push(dataCollectorButtonsUpdated[i].getAttribute('data-name'));
            }







            // trainingSectionBottomBar.insertBefore(newClassBtn, addDataCollectorbtn);

            //THIS IS RERUNNING THE HEAD PART
            //re use the model2Train function to dispose of all tensors and recreate it with the new parameters
            //remember the number of classes have now increased


            model2Train.dispose();
            model2Train = tf.sequential();
            model2Train.add(tf.layers.dense({
                inputShape: [1280],
                units: 64,
                activation: 'relu'
            }));
            model2Train.add(tf.layers.dense({
                units: CLASS_NAMES.length,
                activation: 'softmax'
            }));

            model2Train.summary();

            // Compile the model with the defined optimizer and specify a loss function to use.
            model2Train.compile({
                // Adam changes the learning rate over time which is useful.
                optimizer: 'adam',
                // Use the correct loss function. If 2 classes of data, must use binaryCrossentropy.
                // Else categoricalCrossentropy is used if more than 2 classes.
                loss: (CLASS_NAMES.length === 2) ? 'binaryCrossentropy' : 'categoricalCrossentropy',
                // As this is a classification problem you can record accuracy in the logs too!
                metrics: ['accuracy']
            });



            gatherDataState = STOP_DATA_GATHER;


        });

        //functions


        //render function

        function render() {



        }

        render();

        //api:

        document.api.name_your_api_function = render;


        return;

    })();







    //the original two buttons. wil be converted to functions (see above)
    let dataCollectorButtons = document.querySelectorAll('button.dataCollector');
    for (let i = 0; i < dataCollectorButtons.length; i++) {
        dataCollectorButtons[i].addEventListener('mousedown', gatherDataForClass);
        dataCollectorButtons[i].addEventListener('mouseup', gatherDataForClass);
        // For mobile.
        dataCollectorButtons[i].addEventListener('touchend', gatherDataForClass);

        // Populate the human readable names for classes.
        CLASS_NAMES.push(dataCollectorButtons[i].getAttribute('data-name'));
    }

    //prevent the default reload action when changing anything in the form
    let $formButtonDataList = document.querySelector("#formButtonDataList");
    $formButtonDataList.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    $formButtonDataList.addEventListener("change", function updateForm() {

        //for editing the input class names
        let dataCollectorInputNames = {};
        let dataCollectorButtons = {};
        dataCollectorInputNames = document.querySelectorAll('input.input_class_name');
        dataCollectorButtons = document.querySelectorAll('button.dataCollector');
        for (let i = 0; i < dataCollectorInputNames.length; i++) {
            dataCollectorButtons[i].dataset.name = dataCollectorInputNames[i].value;
            dataCollectorButtons[i].innerText = dataCollectorInputNames[i].value;

        }


        CLASS_NAMES = [];
        for (let i = 0; i < dataCollectorButtons.length; i++) {
            CLASS_NAMES.push(dataCollectorButtons[i].getAttribute('data-name'));


        }

    });





    let mobilenet = undefined;
    let gatherDataState = STOP_DATA_GATHER;
    let videoPlaying = false;
    let trainingDataInputs = [];
    let trainingDataOutputs = [];
    let examplesCount = [];
    let predict4TrainingModel = false;
    let mobileNetBase = undefined;


    // TODO eventually remove customPrint
    function customPrint(line) {
        let p = document.createElement('p');
        p.innerText = line;
        document.body.appendChild(p);
    }



    /**
     * Loads the MobileNet model and warms it up so ready for use.
     * 
     **/


    async function loadMobileNetFeatureModel() {
        const URL = 'https://storage.googleapis.com/jmstore/TensorFlowJS/EdX/SavedModels/mobilenet-v2/model.json';
        mobilenet = await tf.loadLayersModel(URL);


        STATUS.innerText = 'AI model loaded and ready to train!';

        const layer = mobilenet.getLayer('global_average_pooling2d_1');
        mobileNetBase = tf.model({
            inputs: mobilenet.inputs,
            outputs: layer.output
        });
        mobileNetBase.summary();

        // Warm up the model by passing zeros through it once.
        tf.tidy(function () {
            let answer = mobileNetBase.predict(tf.zeros([1, MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH, 3]));
            console.log(answer.shape);
        });






    }


    loadMobileNetFeatureModel();

    let model2Train = tf.sequential();
    model2Train.add(tf.layers.dense({
        inputShape: [1280],
        units: 64,
        activation: 'relu'
    }));
    model2Train.add(tf.layers.dense({
        units: CLASS_NAMES.length,
        activation: 'softmax'
    }));

    model2Train.summary();

    // Compile the model with the defined optimizer and specify a loss function to use.
    model2Train.compile({
        // Adam changes the learning rate over time which is useful.
        optimizer: 'adam',
        // Use the correct loss function. If 2 classes of data, must use binaryCrossentropy.
        // Else categoricalCrossentropy is used if more than 2 classes.
        loss: (CLASS_NAMES.length === 2) ? 'binaryCrossentropy' : 'categoricalCrossentropy',
        // As this is a classification problem you can record accuracy in the logs too!
        metrics: ['accuracy']
    });


    /**
     * Check if getUserMedia is supported for webcam access.
     **/
    function hasGetUserMedia() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }


    //insert resizer function here...


    let windowResizeWatcher = (function () {

        // variables
        let $trainingSectionBottomBar = document.querySelector("#trainingSectionBottomBar");


        // bind dom
        window.addEventListener("resize", render)



        // functions

        function resizeOnPortratOrLandscape() {


            if (document.documentElement.clientWidth > document.documentElement.clientHeight && !$trainingSectionBottomBar.classList.contains("trainingSectionBottomBar--landscape")) {
                // landscape
                $trainingSectionBottomBar.classList.add("trainingSectionBottomBar--landscape");

            } else if (document.documentElement.clientWidth < document.documentElement.clientHeight && $trainingSectionBottomBar.classList.contains("trainingSectionBottomBar--landscape")) {
                // portrait

                $trainingSectionBottomBar.classList.remove("trainingSectionBottomBar--landscape");


            }


        }



        // render function

        function render() {

            resizeOnPortratOrLandscape();


        }


        render();

    })();




    let webCamHeight;
    let webCamWidth;

    if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
        webCamHeight = document.documentElement.clientWidth;
        webCamWidth = document.documentElement.clientWidth;
    } else if (document.documentElement.clientHeight < document.documentElement.clientWidth) {
        webCamHeight = document.documentElement.clientHeight;
        webCamWidth = document.documentElement.clientHeight;

    }




    /**
     * Enable the webcam with video constraints applied.
     **/
    function toggleTrainingCam() {


        // check if video element exists and is streaming
        if (VIDEO.srcObject !== null && VIDEO.classList.contains("playing")) {

            // VIDEO.pause();



            let stopStreamedVideoTrainer = (function () {

                const stream = VIDEO.srcObject;
                const tracks = stream.getTracks();

                tracks.forEach((track) => {
                    track.stop();
                });

            })();


            VIDEO.classList.remove("playing");
            VIDEO.classList.add("paused");
            console.log("%c paused", "color:red")

            return;

        } else if (VIDEO.srcObject !== null && VIDEO.classList.contains("paused")) {

            // VIDEO.play();

            //re initialize web cam.
            if (hasGetUserMedia()) {
                // getUsermedia parameters.
                const constraints = {
                    audio: false,
                    video: {
                        facingMode: "environment",
                        width: webCamWidth,
                        height: webCamHeight
                    }

                };

                // Activate the webcam stream.
                navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                    VIDEO.srcObject = stream;
                    VIDEO.addEventListener('loadeddata', function () {
                        videoPlaying = true;
                        // ENABLE_CAM_BUTTON.classList.add('removed');
                        VIDEO.classList.add("playing");

                        VIDEO.height = webCamHeight;
                        VIDEO.width = webCamWidth;
                    });
                });
            } else {
                console.warn('getUserMedia() is not supported by your browser');
            }


            VIDEO.classList.remove("paused");
            VIDEO.classList.add("playing");
            console.log("%c playing", "color:green")


            return;

        } else if (VIDEO.srcObject === null) {

            //i first time to run do this.
            if (hasGetUserMedia()) {
                // getUsermedia parameters.
                const constraints = {
                    audio: false,
                    video: {
                        facingMode: "environment",
                        width: webCamWidth,
                        height: webCamHeight
                    }

                };




                // Activate the webcam stream.
                navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {



                    VIDEO.srcObject = stream;
                    VIDEO.addEventListener('loadeddata', function () {
                        videoPlaying = true;
                        // ENABLE_CAM_BUTTON.classList.add('removed');
                        VIDEO.classList.add("playing");

                        VIDEO.height = webCamHeight;
                        VIDEO.width = webCamWidth;
                    });
                });
            } else {
                console.warn('getUserMedia() is not supported by your browser');
            }


        }





    }


    /**
     * Handle Data Gather for button mouseup/mousedown.
     **/
    function gatherDataForClass() {
        // let classNumber = parseInt(this.getAttribute('data-1hot'));

        let classNumber = parseInt(this.getAttribute('data-onehot'));
        gatherDataState = (gatherDataState === STOP_DATA_GATHER) ? classNumber : STOP_DATA_GATHER;



        let $trainingSectionBottomBar = document.querySelector("#trainingSectionBottomBar");

        if (gatherDataState !== STOP_DATA_GATHER) {

            $trainingSectionBottomBar.style.opacity = 0.3;

        } else if (gatherDataState === STOP_DATA_GATHER) {
            $trainingSectionBottomBar.style.opacity = 1.0;

        }


        dataGatherLoop();
    }



    function calculateFeaturesOnCurrentFrame() {
        return tf.tidy(function () {
            // Grab pixels from current VIDEO frame.
            let videoFrameAsTensor = tf.browser.fromPixels(VIDEO);
            // Resize video frame tensor to be 224 x 224 pixels which is needed by MobileNet for input.
            let resizedTensorFrame = tf.image.resizeBilinear(
                videoFrameAsTensor,
                [MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH],
                true
            );

            let normalizedTensorFrame = resizedTensorFrame.div(255);

            return mobileNetBase.predict(normalizedTensorFrame.expandDims()).squeeze();
        });
    }



    /**
     * When a button used to gather data is pressed, record feature vectors along with class type to arrays.
     **/
    function dataGatherLoop() {
        // Only gather data if webcam is on and a relevent button is pressed.
        if (videoPlaying && gatherDataState !== STOP_DATA_GATHER) {
            // Ensure tensors are cleaned up.
            let imageFeatures = calculateFeaturesOnCurrentFrame();

            trainingDataInputs.push(imageFeatures);
            trainingDataOutputs.push(gatherDataState);

            // Intialize array index element if currently undefined.
            if (examplesCount[gatherDataState] === undefined) {
                examplesCount[gatherDataState] = 0;
            }
            // Increment counts of examples for user interface to show.
            examplesCount[gatherDataState]++;

            STATUS.innerText = "";
            for (let n = 0; n < CLASS_NAMES.length; n++) {

                // STATUS.innerText = "placeHolder for now to prevent moving"
                STATUS.innerText += CLASS_NAMES[n] + ' data count: ' + examplesCount[n] + '. ';
            }

            window.requestAnimationFrame(dataGatherLoop);
        }
    }


    /**
     * Once data collected actually perform the transfer learning.
     **/

    let combinedModel;


    async function trainAndPredict() {
        predict4TrainingModel = false;


        let $traingSplashScreen = document.querySelector("#trainingSplashScreen");
        $traingSplashScreen.classList.add("trainingSplashScreen--show");
        // $traingSplashScreen.classList.add("traingSplashScreen--hide");




        tf.util.shuffleCombo(trainingDataInputs, trainingDataOutputs);

        let outputsAsTensor = tf.tensor1d(trainingDataOutputs, 'int32');
        let oneHotOutputs = tf.oneHot(outputsAsTensor, CLASS_NAMES.length);
        let inputsAsTensor = tf.stack(trainingDataInputs);

        let results = await model2Train.fit(inputsAsTensor, oneHotOutputs, {
            shuffle: true,
            batchSize: 5,
            epochs: 5,
            callbacks: {
                onEpochEnd: logProgress
            }
        });

        outputsAsTensor.dispose();
        oneHotOutputs.dispose();
        inputsAsTensor.dispose();
        predict4TrainingModel = true;

        // Make combined model for download.
        combinedModel = tf.sequential();
        combinedModel.add(mobileNetBase);
        combinedModel.add(model2Train);


        combinedModel.compile({
            optimizer: 'adam',
            loss: (CLASS_NAMES.length === 2) ? 'binaryCrossentropy' : 'categoricalCrossentropy'
        });




        combinedModel.summary();


        $traingSplashScreen.classList.remove("trainingSplashScreen--show");

        predictLoop();

    }


    async function saveAndExport() {


        await combinedModel.save('downloads://model');

        //file sizes too big.... will need to experiment with direct upload to servers.
        // const localStorageModel = await combinedModel.save('localstorage://my-model');
        // model2save.dispose();

        console.log("tf memory is " + tf.memory().numTensors);


        let metadata = {

            "labels": CLASS_NAMES

        };

        console.log(metadata);

        function download(content, fileName, contentType) {
            let a = document.createElement("a");
            jsonToSave = JSON.stringify(content);
            let file = new Blob([jsonToSave], {
                type: contentType
            });
            a.href = window.URL.createObjectURL(file);
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(a);
        }

        download(metadata, 'metadata.json', 'text/plain');







    }







    /**
     * Log training progress.
     **/
    function logProgress(epoch, logs) {
        console.log('Data for epoch ' + epoch, logs);
    }


    /**
     *  Make live predictions from webcam once trained.
     **/
    function predictLoop() {
        if (predict4TrainingModel) {
            tf.tidy(function () {
                let imageFeatures = calculateFeaturesOnCurrentFrame();
                let prediction = model2Train.predict(imageFeatures.expandDims()).squeeze();
                let highestIndex = prediction.argMax().arraySync();
                let predictionArray = prediction.arraySync();
                STATUS.innerText = 'Prediction: ' + CLASS_NAMES[highestIndex] + ' with ' + Math.floor(predictionArray[highestIndex] * 100) + '% confidence';
            });

            window.requestAnimationFrame(predictLoop);
        }
    }


    /**
     * Purge data and start over. Note this does not dispose of the loaded 
     * MobileNet model and MLP head tensors as you will need to reuse 
     * them to train a new model.
     **/
    function reset() {
        predict4TrainingModel = false;
        examplesCount.splice(0);
        for (let i = 0; i < trainingDataInputs.length; i++) {
            trainingDataInputs[i].dispose();
        }
        trainingDataInputs.splice(0);
        trainingDataOutputs.splice(0);
        STATUS.innerText = 'No data collected';



        console.log('Tensors in memory: ' + tf.memory().numTensors);


        //to reset the  buttons back to two classes:

        const buttonsDataList = document.querySelector("#buttonsDataList");

        buttonsDataList.innerHTML = "";
        CLASS_NAMES = [];

        function resetClassButtons(n) {

            let resetFormElement = document.createElement("div");
            resetFormElement.classList.add("input_btn_unit");

            let resetLabel = document.createElement("label");
            resetLabel.htmlFor = `input${n}`;
            resetLabel.innerHTML = `Class Name ${n}`;

            let resetInput = document.createElement("input");
            resetInput.id = `input${n}`;
            resetInput.classList.add("input_class_name");
            resetInput.type = "text";
            resetInput.value = `Class ${n}`;
            resetInput.placeholder = "edit name here";

            let resetClassBtn = document.createElement("button");
            resetClassBtn.id = `btn${n}`;
            resetClassBtn.dataset.onehot = n - 1;
            resetClassBtn.dataset.name = `Class ${n}`;
            resetClassBtn.classList.add("dataCollector");
            resetClassBtn.innerHTML = `Gather Class ${n} data`;
            // newClassBtn.setAttribute("contenteditable", true);

            resetClassBtn.addEventListener('mousedown', gatherDataForClass);
            resetClassBtn.addEventListener('mouseup', gatherDataForClass);
            // For mobile.
            resetClassBtn.addEventListener('touchend', gatherDataForClass);


            resetFormElement.appendChild(resetLabel);
            resetFormElement.appendChild(resetInput);
            resetFormElement.appendChild(resetClassBtn);

            buttonsDataList.appendChild(resetFormElement);


            // remove the push per and re list all
            // CLASS_NAMES.push(resetClassBtn.getAttribute('data-name'));


            CLASS_NAMES = [];
            let dataCollectorButtonsUpdated = document.querySelectorAll('button.dataCollector');

            for (let i = 0; i < dataCollectorButtonsUpdated.length; i++) {
                // REPOPULATE Populate the human readable names for classes.
                CLASS_NAMES.push(dataCollectorButtonsUpdated[i].getAttribute('data-name'));
            }



        }

        resetClassButtons(1);
        resetClassButtons(2);



        //This is to RERUN THE HEAD PART of the AI model since you removed everything and are resetting to 2
        // dispose of all tensors and recreate it with the new parameters
        //note that the number of classes have now increased


        model2Train.dispose();
        model2Train = tf.sequential();
        model2Train.add(tf.layers.dense({
            inputShape: [1280],
            units: 64,
            activation: 'relu'
        }));
        model2Train.add(tf.layers.dense({
            units: CLASS_NAMES.length,
            activation: 'softmax'
        }));

        model2Train.summary();

        // Compile the model with the defined optimizer and specify a loss function to use.
        model2Train.compile({
            // Adam changes the learning rate over time which is useful.
            optimizer: 'adam',
            // Use the correct loss function. If 2 classes of data, must use binaryCrossentropy.
            // Else categoricalCrossentropy is used if more than 2 classes.
            loss: (CLASS_NAMES.length === 2) ? 'binaryCrossentropy' : 'categoricalCrossentropy',
            // As this is a classification problem you can record accuracy in the logs too!
            metrics: ['accuracy']
        });

        gatherDataState = STOP_DATA_GATHER;


    }





});