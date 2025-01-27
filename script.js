function isMobile() {
    return window.innerWidth <= 800;
}



function locomotiveAnimation() {
    
        // First register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Then initialize Locomotive Scroll
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true,
            multiplier: 1, // Add this to control scroll speed
            lerp: 0.07 // Add this for smoother scrolling
        });

        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });


        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
 

}

locomotiveAnimation()

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        delay: 0.5,
        duration: 0.6
    })
    tl.from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: function () {
            var timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function () {
                if (grow < 100) {
                    timer.innerHTML = grow++
                } else {
                    timer.innerHTML = grow
                }
            }, 35)
        }
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.8,
        delay: 3.5,
    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("#page1", {
        y: 1000
    })
    tl.from("#nav", {
        opacity: 0
    })
    tl.from("#hero1 h1, #hero2 h1, #hover h1, #hover h2, #hero3 h1", {
        y: 150,
        opacity: 0,
        stagger: 0.3,
        duration: 0.5,
        delay: 0.3
    })
    tl.from("#page3", {
        y: 1000
    })

}

loadingAnimation()


function crsrAnimation() {

    var crsr = document.querySelector("#crsr")
    document.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            x: dets.x,
            y: dets.y,
        })
    })

    Shery.makeMagnet("#nav-part2 a", {
        //Parameters are optional.
        ease: "cubic-bezier(0.25, 1, 0.360, 1)",
        duration: 0.4,
    });
    Shery.makeMagnet(".box h5", {
        //Parameters are optional.
        ease: "cubic-bezier(0.25, 1, 0.360, 1)",
        duration: 0.4,
    });
    Shery.makeMagnet(".box a", {
        //Parameters are optional.
        ease: "cubic-bezier(0.25, 1, 0.360, 1)",
        duration: 0.4,
    });
    Shery.makeMagnet(".blue-div-elem h4", {
        //Parameters are optional.
        ease: "cubic-bezier(0.25, 1, 0.360, 1)",
        duration: 0.4,
    });
}
crsrAnimation()


function sheryAnimation() {
    if(!isMobile()){
        Shery.imageEffect("#project-img", {
            style: 4,
            config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6645864536528541},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.24,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":17}},"discard_threshold":{"value":0.37,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]}},
            gooey: true,
            // debug:true
        })
    }else{
        Shery.imageEffect("#project-img", {
            style: 4,
            config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6645864536528541},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.24,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":17}},"discard_threshold":{"value":0.37,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]}},
            // gooey: true,
            // debug:true
        })
    }

}
sheryAnimation()


function flag() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flag", {
            x: dets.x - 200,
            y: dets.y - 100
        })
    })
    document.querySelector("#hover").addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1,
            display: "block"
        })
    })
    document.querySelector("#hover").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0,
            display: "none"
        })
    })
}
flag()


function pagesAnimation() {
    if (!isMobile()) {
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page3 h1",
                scroller: "#main",
                start: "top 30%",
                end: "top 32%",
                // markers: true
            }
        })

        tl2.from("#page3 .underline-project", {
            transform: "translateX(100%)",
            opacity: 0,
            duration: 1
        }, "along")
        tl2.from("#page3 h1", {
            opacity: 0,
            duration: 0.7,
            y: 100
        }, "along")


        gsap.from("#page4 h1", {
            opacity: 0,
            duration: 0.7,
            y: 100,
            scrollTrigger: {
                trigger: "#page4 h1",
                scroller: "#main",
                start: "top 10%",
                end: "top 12%",
                // markers: true
            }
        }, "along2")
        gsap.from("#page4 .underline", {
            transform: "translateX(100%)",
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#page4",
                scroller: "#main",
                start: "top 20%",
                end: "top 21%",
                // markers: true
            }
        }, "along2")
        gsap.from("#page4-paragraph p", {
            y: -120,
            opacity: 0,
            duration: 0.35,
            stagger: 0.2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#page4",
                scroller: "#main",
                start: "top 20%",
                end: "top 21%",
                // markers: true
            }
        })


        gsap.from("#footer h1", {
            opacity: 0,
            duration: 0.7,
            y: 100,
            scrollTrigger: {
                trigger: "#footer h1",
                scroller: "#main",
                start: "top 20%",
                end: "top 21%",
                // markers: true
            }
        })
        gsap.from("#footer .underline-footer", {
            transform: "translateX(100%)",
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#footer h1",
                scroller: "#main",
                start: "top 20%",
                end: "top 21%",
                // markers: true
            }
        }, "along2")
    }


}

pagesAnimation()

