document.addEventListener("DOMContentLoaded", function () {
    let hand = document.getElementById("hand");
    let pageContent = document.querySelector(".page-content"); 
    let designerText = document.getElementById("designerText"); 


    pageContent.style.transform = "translateY(200px)";
    pageContent.style.opacity = "0";

    
    gsap.to(hand, {
        duration: 1,
        top: "100px",
        opacity: 1,
        ease: "power2.out",
        delay: 1
    });


    setTimeout(() => {
        designerText.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
        designerText.style.opacity = "0";
    }, 2000);


    setTimeout(() => {
        gsap.to(hand, {
            scale: 0.9, 
            duration: 0.3
        });
    }, 2000);

    setTimeout(() => {
        gsap.to(pageContent, {
            duration: 1.5, 
            transform: "translateY(0)",
            opacity: 1,
            ease: "power4.out"
        });

        
        gsap.to(hand, {
            duration: 1.5, 
            top: "-200px",
            opacity: 0,
            ease: "power4.out"
        });

    }, 2500);
});
