var tl=gsap.timeline()

tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y: -100,
    delay:1,
    duration:1,
    opacity:0,
    stagger:0.4
})
tl.from("#main h1",{
    y:200,
    opacity:0,
    stagger:0.5
})
tl.from("#main>img",{
    x:-200,
    opacity:0,
    stagger:0.2
})
tl.from("h5",{
    y:50,
    opacity:0,
    duration:0.5
})