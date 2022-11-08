document.addEventListener("DOMContentLoaded", function () {

    let projectJson = {
        "tutorial":{    
            "basicInfo":{
                "card_basicInfo_body":{
                    "innerHTML":"<p>Quick Instructions:</p><p>Scroll all the way to the top to reveal the \
                    Camera Icon at the right  lower corner. Click the camera icon and focus your camera on a \
                    the scene or image you want to analyze. Try  to focus on a specific part and see how the AI algorithm \
                    tries to guess what it is.</p> </br> <p>If you have your own custom model hosted on teachable machine's \
                    servers, you can copy and paste the link to your model in the form box. This will updated the model used\
                    as well as the classes that the AI model will try to predict. It is highly advised that you only use links or \
                    URL's to models trained personally by you or AI/ML models from people you trust. Under no circumstance will this web app\
                    ask for personal or private information in order to run.</p>"
                },
                "card_basicInfo_link":{
                    "href":"https://www.youtube.com/channel/UCHfixhX7E5ewBKB4kDMBvfQ" 
                },
                "card_imageSearch_background":{
                    "backgroundImage":"url('./public/images/normalBrain.png')"
                },
                "card_imageSearch_link":{
                    "href":"https://www.youtube.com/channel/UCHfixhX7E5ewBKB4kDMBvfQ"
                }
            }
        },
        "ddx": {
            "normal":{
                "card_basicInfo_body":{
                    "innerHTML":"<p>Quick Instructions:</p><p>Scroll all the way to the top to reveal the \
                    Camera Icon at the right  lower corner. Click the camera icon and focus your camera on a \
                    the scene or image you want to analyze. Try  to focus on a specific part and see how the AI algorithm \
                    tries to guess what it is.</p>"
                },
                "card_basicInfo_link":{
                    "href":"https://radiopaedia.org/articles/normal-brain-imaging-examples-1" 
                },
                "card_imageSearch_background":{
                    "backgroundImage":"url('./public/images/normalBrain.png')"
                },
                "card_imageSearch_link":{
                    "href":"https://www.google.com/search?client=ubuntu&hs=Hzc&biw=360&bih=640&tbm=isch&sa=1&q=normal+brain+ct+mri+radio&oq=normal+brain+ct+mri+radio&aqs=mobile-gws-lite.."
                }
            },
            "schizenOpen":{
                "card_basicInfo_body":{
                    "innerHTML":"<p>Quick description:</p><p>There is a gray matter lined cleft extending from the ependyma to the pia mater. The walls of the cleft are completely separated by cerebrospinal fluid.</p>"
                },
                "card_basicInfo_link":{
                    "href":"https://radiopaedia.org/cases/schizencephaly-open-lip-1" 
                },
                "card_imageSearch_background":{
                    "backgroundImage":"url('./public/images/schizenOpen.png')"
                },
                "card_imageSearch_link":{
                    "href":"https://www.google.com/search?q=Schizencephaly_(Open_Lip)%3F&tbm=isch"
                }
            },
            "schizenClosed":{
                "card_basicInfo_body":{
                    "innerHTML":"<p>Quick description:</p><p>There is a gray matter lined cleft extending from the ependyma to the pia mater. The walls of the cleft are in close apposition.</p>"
                },
                "card_basicInfo_link":{
                    "href":"https://radiopaedia.org/cases/closed-lip-schizencephaly" 
                },
                "card_imageSearch_background":{
                    "backgroundImage":"url('./public/images/schizenClosed.png')"
                },
                "card_imageSearch_link":{
                    "href":"https://www.google.com/search?q=Schizencephaly_(Closed_Lip)%3F&tbm=isch"
                }
            },
            "Hydranencephaly":{
                "card_basicInfo_body":{
                    "innerHTML":"<p>Quick description:</p><p>There is no significantly discernable cortical tissue. There is a fluid filled cranium. The falx, thalami and posterior fossa are still visualized.</p>"
                },
                "card_basicInfo_link":{
                    "href":"https://radiopaedia.org/articles/hydranencephaly" 
                },
                "card_imageSearch_background":{
                    "backgroundImage":"url('./public/images/hydranencephaly.png')"
                },
                "card_imageSearch_link":{
                    "href":"https://www.google.com/search?q=Hydranencephaly&tbm=isch"
                }
            },
            "DandyWalker":{
                "card_basicInfo_body":{
                    "innerHTML":"<p>Quick description:</p><p>There is hypoplasia of the cerebellar vermis, cystic dilatatioin of the fourth ventricle and an enlarged posterior fossa</p>"
                },
                "card_basicInfo_link":{
                    "href":"https://radiopaedia.org/articles/dandy-walker-malformation-1" 
                },
                "card_imageSearch_background":{
                    "backgroundImage":"url('./public/images/dandy_walker.png')"
                },
                "card_imageSearch_link":{
                    "href":"https://www.google.com/search?q=Dandy-Walker_Malformation_axial&tbm=isch"
                }
            }           
        },
        
    };

    document.pj = projectJson;

});