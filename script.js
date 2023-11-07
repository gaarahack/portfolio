




gsap.from(".hero2 .right img",{
    y:300,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".hero2 .right img",
        scroll:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 70%"
        
    }
})

gsap.to(".hero3 h1",{
    x:-2500,
    duration:2,
    scrollTrigger:{
        trigger:".hero3",
        scroll:"#main",
        scrub:2,
        pin:true,
        start:"top 0%",
        end:"top -200%"
    }
})

function videoplayer(){
    var btn = document.querySelector(".hero6 .box")
    var video = document.querySelector(".hero6 video")

    btn.addEventListener("mouseenter",()=>{
        video.style.opacity = "1"
    })
    btn.addEventListener("mouseleave",()=>{
        video.style.opacity = "0"
    })
}


// locomotive js

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function videosScale(){
    var vdo1 = document.querySelector(".pro1 video");
    var vdo2 = document.querySelector(".pro2 video");
    var vdo3 = document.querySelector(".pro3 video");
    var vdo4 = document.querySelector(".pro4 video");

    vdo1.addEventListener("mouseenter",()=>{
        vdo1.style.transform = "scale(1.3)"
    })
    vdo1.addEventListener("mouseleave",()=>{
        vdo1.style.transform = "scale(1)"
    })

    vdo2.addEventListener("mouseenter",()=>{
        vdo2.style.transform = "scale(1.3)"
    })
    vdo2.addEventListener("mouseleave",()=>{
        vdo2.style.transform = "scale(1)"
    })

    vdo3.addEventListener("mouseenter",()=>{
        vdo3.style.transform = "scale(1.3)"
    })
    vdo3.addEventListener("mouseleave",()=>{
        vdo3.style.transform = "scale(1)"
    })

    vdo4.addEventListener("mouseenter",()=>{
        vdo4.style.transform = "scale(1.3)"
    })
    vdo4.addEventListener("mouseleave",()=>{
        vdo4.style.transform = "scale(1)"
    })

}


gsap.from(".hero h1",{
    z:400,
    scale:3,
    opacity:0,
    duration:1.5,
    delay:0.5,
    stagger:0.4,
})






window.addEventListener("load",()=>{
    videosScale();
})


window.addEventListener("load",()=>{
    videoplayer();
})