//include this script in instagram.ejs
//at last before ending body bcz we want our
//elements load first

const btns = document.querySelectorAll("button");
 for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log("button was clicked")
    });
 }