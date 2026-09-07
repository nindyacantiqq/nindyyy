const typingEl=document.getElementById("typing");
const phrases=["student • creator • future dentist","science & tech enthusiast","designing little things","learning something new ✦"];
let pi=0,ci=0,deleting=false;
function type(){const text=phrases[pi];typingEl.textContent=deleting?text.slice(0,ci--):text.slice(0,ci++);
if(!deleting&&ci>text.length){deleting=true;setTimeout(type,1200);return}
if(deleting&&ci<0){deleting=false;pi=(pi+1)%phrases.length;ci=0}
setTimeout(type,deleting?45:75)} type();

const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");e.target.classList.add("animate");}}),{threshold:.12});
reveals.forEach(el=>observer.observe(el));
const skills=document.querySelectorAll(".skill"); const skillObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.5});skills.forEach(s=>skillObs.observe(s));

const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const theme=document.querySelector(".theme-btn");
theme.addEventListener("click",()=>{document.body.classList.toggle("dark");theme.textContent=document.body.classList.contains("dark")?"☾":"☼";localStorage.setItem("nindyTheme",document.body.classList.contains("dark")?"dark":"light")});
if(localStorage.getItem("nindyTheme")==="dark"){document.body.classList.add("dark");theme.textContent="☾"}

const dot=document.querySelector(".cursor-dot"),ring=document.querySelector(".cursor-ring");
window.addEventListener("mousemove",e=>{dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px";ring.animate({left:e.clientX+"px",top:e.clientY+"px"},{duration:450,fill:"forwards"})});
document.querySelectorAll("a,button,.project-card").forEach(el=>{el.addEventListener("mouseenter",()=>{ring.style.width="42px";ring.style.height="42px"});el.addEventListener("mouseleave",()=>{ring.style.width="28px";ring.style.height="28px"})});

window.addEventListener("scroll",()=>{document.querySelector(".navbar").style.boxShadow=scrollY>30?"0 8px 25px rgba(36,55,70,.06)":"none"});
