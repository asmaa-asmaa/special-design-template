
// window.localStorage.getItem("color");


let mainColors=localStorage.getItem("color_option");
//console.log(mainColors);

if(mainColors !== null) {
//console.log("hello")

document.documentElement.style.setProperty("--main-color", localStorage.getItem("color_option"));


document.querySelectorAll(".colors-list li").forEach(element=>{
    element.classList.remove("active");

   if(element.dataset.color === mainColors) {
    element.classList.add("active");
   }
})


    
}

let backgroundOption = true;
let backgroundInterval;

let backgroundLocalItem = localStorage.getItem("background_option");

if(backgroundLocalItem !== null){

    if( backgroundLocalItem === "true") {

        backgroundOption = true;

    } else {

        backgroundOption= false;
    }

    document.querySelectorAll(".random-backgrounds span").forEach(element=>{
        element.classList.remove("active");
    });

    if(backgroundLocalItem === "true") {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");


    }

}


document.querySelector(".toggle-setting .fa-gear").onclick= function (){
    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
};

const colorsLi=document.querySelectorAll(".colors-list li");

colorsLi.forEach((li)=>{

li.addEventListener("click",(e)=>{

    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

    localStorage.setItem("color_option", e.target.dataset.color);


    //  e.target.parentElement.querySelectorAll(".active").forEach(element=> {
    //     element.classList.remove("active");
    // });

    // e.target.classList.add("active");
    handleActive(e);

 });

    // li.onclick= function(){
    // document.documentElement.style.setProperty("--main-color", li.dataset.color);
    // }
});



const randomBackEl=document.querySelectorAll(".random-backgrounds span");

randomBackEl.forEach((span)=>{

span.addEventListener("click",(e)=>{

    //  e.target.parentElement.querySelectorAll(".active").forEach(element=> {
    //     element.classList.remove("active");
    // });

    // e.target.classList.add("active");
    handleActive(e)

    if(e.target.dataset.background === "yes") {

        backgroundOption = true;

        randomizeImgs();

        localStorage.setItem("background_option", true);

       
    } else {
        backgroundOption = false;
        clearInterval(backgroundInterval);

        localStorage.setItem("background_option", false);

        

    }

    
   });

});

let landingPage=document.querySelector(".landing-page");
let imagsArray=["landing.png","portfolio-1","portfolio-2","portfolio-3","shuffle-05"];

function randomizeImgs () {

    if(backgroundOption === true) {

          backgroundInterval=setInterval(()=>{


          let randomNumber=Math.floor(Math.random() * imagsArray.length);

            landingPage.style.backgroundImage=`url("images/${imagsArray[randomNumber]}.jpg")`;

  //landingPage.style.backgroundImage=`url("images/`+ imagsArray[randomNumber] +`.jpg")`;

  

     },10000);
        };
};

randomizeImgs();


let ourSkills=document.querySelector(".skills");



window.onscroll= function (){
    let skillsOffSetTop = ourSkills.offsetTop;



    let skillsOuterHeight= ourSkills.offsetHeight;

    let windowHeight=this.innerHeight;

    //let windowScrollTop=this.pageYOffset;
    let windowScrollTop=this.scrollY;


    //pageYoffset=scrollY
    

    // if (window.scrollY >= skillsOffSetTop) {

    //     let allSkills=document.querySelectorAll(".skill-box .skill-progress span");

    //     allSkills.forEach(skill => {
    //         skill.style.width = skill.dataset.progress;

    //     })
    // }

    if (windowScrollTop > (skillsOffSetTop + skillsOuterHeight - windowHeight)) {

        let allSkills=document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;

        })
    }
}


let ourGallery= document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div");
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);

        let popupBox= document.createElement("div");
        popupBox.className="popup-box"

        if(img.alt !=="") {
            let imgHeading=document.createElement("h3");
            let imgText=document.createTextNode(img.alt);
            imgHeading.appendChild(imgText);
            popupBox.appendChild(imgHeading);
        }

        let popupImage=document.createElement("img");
        popupImage.src=img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton=document.createElement("span");
        let closeButtonText=document.createTextNode("x")

        closeButton.appendChild(closeButtonText);
        closeButton.className="close-button";

        popupBox.appendChild(closeButton);

       

    })
    document.addEventListener("click", function (e) {

      if( e.target.classList.contains("close-button")) {
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
      }
    })
})



const allBullets=document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", (e)=> {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:"smooth",
//         })

//     })

// })

const allLinks=document.querySelectorAll(".links li a");

// allLinks.forEach(a => {
//     a.addEventListener("click", (e)=> {
//         // e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:"smooth",
//         })

//     })

// })

    function scrollToSomeWhere(elements){
        elements.forEach(ele => {
            ele.addEventListener("click", (e)=> {
                // e.preventDefault();
        
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior:"smooth",
                })
            })
        })
    }

    scrollToSomeWhere(allBullets);
    scrollToSomeWhere(allLinks);

    function handleActive(ev) {
        ev.target.parentElement.querySelectorAll(".active").forEach(element=> {
            element.classList.remove("active");
        });
    
        ev.target.classList.add("active");

    }
    let bulletsSpan=document.querySelectorAll(".bullets-option span");

    let bulletsContainer=document.querySelector(".nav-bullets");

    let bulletLocalItem=localStorage.getItem("bullets-option");

    if (bulletLocalItem!==null) {


        bulletsSpan.forEach(span => {
            span.classList.remove("active");
        })

        if(bulletLocalItem==="show"){
            bulletsContainer.style.display="block";

            document.querySelector(".bullets-option .yes").classList.add("active");

        } else {
            bulletsContainer.style.display="none";
            document.querySelector(".bullets-option .no").classList.add("active");
        }
    }

    bulletsSpan.forEach(span => {
        span.addEventListener("click",(e)=>{
            if(e.target.dataset.display==="show") {
                bulletsContainer.style.display="block";

            } else {
                bulletsContainer.style.display="none";

            }
            handleActive(e)
            localStorage.setItem("bullets-option", e.target.dataset.display);


        })
    })

    document.querySelector(".reset-options").onclick = function () {
        localStorage.clear();
        //localStorage.removeItem("bullets-option");
        //localStorage.removeItem("color-option");
        //localStorage.removeItem("background-option");

        window.location.reload();

    }

    let toggleBtn=document.querySelector(".toggle-menu");
    let tLinks=document.querySelector(".links");
    let li=document.querySelectorAll(".open li");

    toggleBtn.onclick= function (e) {
        e.stopPropagation();
        this.classList.toggle("menu-active");
        tLinks.classList.toggle("open");
    }

    
    document.addEventListener("click", (e)=>{

        if(e.target !== toggleBtn && e.target !== tLinks) {

            if(tLinks.classList.contains("open")) {
                toggleBtn.classList.toggle("menu-active");
                tLinks.classList.toggle("open")
            }
        }
    })

    //     window.onclick= function (e) {
        
    //     if ( !e.target.classList.contains("toggle-menu")&& !e.target.classList.contains("links") ) {

    //             toggleBtn.classList.remove("menu-active");
    //             tLinks.classList.remove("open");   
    // }
    // }

    tLinks.onclick= function(e){
        e.stopPropagation();

    }













