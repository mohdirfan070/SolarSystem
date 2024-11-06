const byid = id => document.getElementById(id);

const Parent = byid("screen");


const makeStars = () => {
    const CursorDiv = document.createElement("div");
    CursorDiv.setAttribute("id", "cursor");
    // Parent.appendChild(CursorDiv);
    for (let i = 0; i < 300; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "dots");
        newDiv.style.left = `${Math.random() * window.innerWidth}px`;
        newDiv.style.top = `${Math.random() * Parent.offsetHeight}px`;
        newDiv.style.animationDuration = Math.random() + 0.7 + "s";
        Parent.appendChild(newDiv);
    }
}

window.addEventListener("load", makeStars);
window.addEventListener("resize", () => {
    while (Parent.firstChild) {

        Parent.removeChild(Parent.firstChild);
    }
    makeStars();
});

let dotsArray = [...document.querySelectorAll(".dots")];

Parent.addEventListener("mousemove", (e) => {
    const CursorDiv = byid("cursor");
    CursorDiv.style.left = `${e.screenX - 10}px`;
    CursorDiv.style.top = `${e.screenY - 90}px`;
})



//  byid("sun").addEventListener("click",(e)=>{
//     e.target.style.scale=3;
//     e.target.style.transform="translate(80%,-40%)";

//   })


//  byid("mercury").addEventListener("click",(e)=>{
//     e.target.style.scale=5;
//     e.target.style.transform="translate(270%,-40%)";
//  })


//  const revolve = ()=>{

// }



const allPlanets = [...document.getElementsByClassName("planet")];
allPlanets.map((ele,i) => {
     ele.addEventListener("mouseover", (e) => {
        e.stopPropagation();
        
        // alert(e.target.id);
        // e.target.style.transform=`translate(-${e.screenX}%,${e.screenY}px)`;
        // e.target.scrollTo(e.target.clientX,e.target.clientY);  
        // e.target.style.animationName="none";
    }) ;
})

// for(let i = 0 ; i < allPlanets.length ; i ++){
//     allPlanets[i].addEventListener("click", (e) => {
//                 e.stopPropagation();
//                 // alert(e.target.id);
//                 if(allPlanets[i].id!=e.target.id ){ 
//                     allPlanets[i].style.display="none";
//                 }
//             }) ;
// }

// allPlanets.map(ele => {
//     ele.addEventListener("dblclick", (e) => {
//         e.target.style.display = "none";
//     })
// })

