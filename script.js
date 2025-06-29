let navLinks=document.getElementById("navLinks");
let turn = true;
function toggleMenu(){
    if(turn){
        navLinks.style.visibility="visible";
        turn=false
    }else{
        navLinks.style.visibility="hidden";
        turn=true;
    }
}

gsap.from(".main-right img",{
    y:20,
    duration:3,
    delay:1,
   repeat:-1,
   yoyo:true
})

gsap.from("#projects .project",{
    y:20,
    opacity:0,
  delay:1,
  duration:1,
  stigger:1,
  scrollTrigger:"#projects .project"
})

gsap.from("#projects ",{
    x:203,
    opacity:0,
  delay:1,
  duration:1,
  stigger:1,
  scrollTrigger:"#projects "
})

