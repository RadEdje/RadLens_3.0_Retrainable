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

Updated as of 11/27/2019:
using the teachable machine API
https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image
Will now use tmImage module to handle the video capture and model predict functions

Updated as of April 2022:
I've also taken recent inspiration from the teachable machine (see links  below)
which allows anyone to train their own AI models in the cloud. The updated version 
uses the teachable machines libarary to more easily load AI/ML models using
tensorflow.js.


CREDITS:
inspired by code from 
https://github.com/google/emoji-scavenger-hunt under the APACHE 2.0 License
https://github.com/googlecreativelab/teachable-machine-v1 under the APACHE 2.0 License



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
            // console.log(`the distance from the top is ${top}`);

            if (top != 0) {

                $gfab.classList.add("float-away");
                $prediction.classList.add("float-away");
                $form_modelSelector.classList.add("float-away");
                // $mpr.classList.add("float-away");

            } else if (top == 0) {
                $gfab.classList.remove("float-away");
                $prediction.classList.remove("float-away");
                $form_modelSelector.classList.remove("float-away");
                // $mpr.classList.remove("float-away");
            }
        }


    })();



    // AI FUNCITONS


    // DOCUMENTO API 

    document.api = {}; //for future reusable glabal functions

    // GLOBAL FILE REFERENCE RESOURCE VARIABLES:

    // GLOBAL VARIABLES:
    let URL = "";
    let sensitivity = 0;

    let initialModeltoRun = (function () {

        // VARIABLES
        //CACHE DOME
        //BIND DOM
        let $mpr = document.querySelector("#mpr");
        let $sensitivityInput = document.querySelector("#sensitivityInput");
        $mpr.value = "./my_model/";
        $sensitivityInput.value = 0.9;
        URL = $mpr.value;
        sensitivity = $sensitivityInput.value


    })();



    let modelURLsetter = (function () {

        // variables

        //cache dom
        let $form_modelSelector = document.querySelector("#form_modelSelector");
        let $mpr = document.querySelector("#mpr");
        let $splash = document.querySelector("#splash");
        let $loading = document.querySelector("#loading");
        let $loading0 = document.querySelector("#loading0");
        let $welcome = document.querySelector("#welcome");
        let $ddxScore = document.querySelector("#ddxScore");

        //bind dom
        $form_modelSelector.addEventListener("submit", function (event) {

            event.preventDefault();

            render();


        });

        // functions

        function reloadLayout() {
            $welcome.scrollTo(0, 0);
            $splash.classList.add('splash--noClick');
            $splash.classList.remove('splash__out');
            $loading.innerHTML = "Loading AI model........";
            $loading0.style.display = "block";
            $ddxScore.innerHTML = "";

        }

        function reloadNewModel() {

            URL = String($mpr.value);
            document.api.reloadModel();

        }


        //render
        function render() {

            reloadLayout();
            reloadNewModel();

        }


        document.api.modelURLsetter = render;



    })();



    let model, webcam, labelContainer, maxPredictions, webCamRequestGranted = false,
        webCamElement;
    let topScorer = 0;
    console.log(topScorer);




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
            const metadataURL = URL + "metadata.json";

            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // or files from your local hard drive
            // Note: the pose library adds "tmImage" object to your window (window.tmImage)
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();

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





    //TODO: REMOVE? disable the card builders using the projectJson.js for now since you're not  USING  project.Json.js for this project.
    // let infoCardsBuilder = (function(){

    //     // variables
    //     let infoSettings;

    //     //cache dom
    //     let $card_basicInfo_body = document.querySelector("#card_basicInfo_body");
    //     let $card_basicInfo_link = document.querySelector("#card_basicInfo_link");


    //     //TODO: disable this for now since you're not creating an info image card yet
    //     // let $card_imageSearch_background = document.querySelector("#card_imageSearch_background");
    //     // let $card_imageSearch_link = document.querySelector("#card_imageSearch_link");

    //     //bind dom


    //     //render runction



    //     function render(){

    //         staticCardBuilderInfo();
    //         // staticCardBuilder();

    //     }


    //     render();

    //     //functions

    //     function staticCardBuilderInfo(){
    //         infoSettings = document.pj.tutorial.basicInfo;
    //         $card_basicInfo_body.innerHTML = infoSettings.card_basicInfo_body.innerHTML;
    //         $card_basicInfo_link.href = infoSettings.card_basicInfo_link.href;

    //     }


    //     // TODO: disable this for now since your static card builder isn't changing based on the ddx yet.
    //     // function staticCardBuilder(){

    //     //     if(ddxIndex==0){
    //     //         infoSettings = document.pj.ddx.schizenOpen;
    //     //     }else if(ddxIndex==1){
    //     //         infoSettings = document.pj.ddx.schizenClosed;                    
    //     //     }else if(ddxIndex==2){
    //     //         infoSettings = document.pj.ddx.Hydranencephaly;
    //     //     }else if(ddxIndex==3){
    //     //         infoSettings = document.pj.ddx.normal;

    //     //     }else if(ddxIndex==4){
    //     //         infoSettings = document.pj.ddx.normal;
    //     //     }else if(ddxIndex==5){
    //     //         infoSettings = document.pj.ddx.DandyWalker;
    //     //     }

    //     //     console.log(`ddxIndex is ${ddxIndex}`);


    //     //     $card_basicInfo_body.innerHTML = infoSettings.card_basicInfo_body.innerHTML;
    //     //     $card_basicInfo_link.href = infoSettings.card_basicInfo_link.href;

    //     //     $card_imageSearch_background.style.backgroundImage = infoSettings.card_imageSearch_background.backgroundImage;   
    //     //     $card_imageSearch_link.href = infoSettings.card_imageSearch_link.href;

    //     // }        

    //     // api     

    //     document.api.infoCardsBuilder = render;

    // })();



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
                // return
                // this may no longer be needed since it is always set to initiate 
                // clicking the  fab button always stops the web cam feed and webcam init needs to be
                // used again. this is Safer
                // runWebcam();

            };







        })();

    })();


    // the WEBCAM ELEMENT 

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

        let constraints = {
            audio: false,
            facingMode: "environment"
            // facingMode: {exact: "environment"}
        }


        const flip = false; // whether to flip the webcam
        webcam = new tmImage.Webcam(webCamHeight, webCamWidth, flip); // width, height, flip
        await webcam.setup(constraints); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);
        webCamRequestGranted = true;

        //append elements to DOM
        // adding the child webcam canvas to the container 
        webCamContainer.appendChild(webcam.canvas);
        webCamContainerChildren = webCamContainer.children;
        webCamContainerChildren[0].id = "webcamElement";
        webCamElement = document.querySelector("#webcamElement");



        // adding to the ddxScore debug element for predictions
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            ddxScore.appendChild(document.createElement("p"));
        }


    };

    async function runWebcam() {

        await webcam.play();
        window.requestAnimationFrame(loop);


    };


    async function loop() {

        // variables
        let gfab = document.querySelector("#gfab");
        let webCamContainer = document.querySelector("#webcamContainer");


        // functions
        webcam.update(); // update the webcam frame
        await predict();

        if (gfab.classList.contains("gfab-active")) {
            window.requestAnimationFrame(loop);
        } else {

            console.log("stopped predicting");

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
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            console.log("predicting");

            let classNameString = prediction[i].className.toString();
            let className_ = classNameString.replace(/\_/g, ' ');
            let className = className_.replace(/\?/g, '');


            const classPrediction = className + ": " + prediction[i].probability.toFixed(2);
            ddxScore.childNodes[i].innerHTML = classPrediction;

            if (topScorer < sensitivityLevel) {


                if (prediction[i].probability.toFixed(2) > topScorer) {

                    topScorer = prediction[i].probability.toFixed(2);
                    console.log(topScorer);

                }
            }


            if (topScorer >= sensitivityLevel) {


                let final_ddx = document.querySelector('#final_ddx');


                // let gfab = document.querySelector("#gfab");
                let ddxString = prediction[i].className.toString();
                let final_ddxString = ddxString.replace(/\_/g, ' ');
                let final_ddxSringGsearchTerms = ddxString.replace(/\_/g, '+');
                console.log(final_ddxString);



                final_ddx.innerHTML = "<p>Please look for a <a href=https://www.google.com/images?q=" + final_ddxSringGsearchTerms + ">" + final_ddxString + "</a>?<br>(Scroll down for more info).</p>";

                card_imageSearch_link.href = "https://www.google.com/images?q=" + final_ddxSringGsearchTerms;



                ddxIndex = i;

                // TODO: Remov: Disabled for now since the site is not using a virtual dom with json
                // document.api.infoCardsBuilder();

                topScorer = 0;
                // gfab.click();


            }
        }
    };


});