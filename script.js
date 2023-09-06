let buttons= document.querySelectorAll(".button")
const color = document.querySelector(".color")

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener("click",function(tick){
      if(tick.target.id==="red"){
        color.style.backgroundColor = tick.target.id;
      }
      if(tick.target.id==="yellow"){
        color.style.backgroundColor = tick.target.id;
      }
      if(tick.target.id==="green"){
        color.style.backgroundColor = tick.target.id;
      }
      if(tick.target.id==="aqua"){
        color.style.backgroundColor = tick.target.id;
      }
      if(tick.target.id==="purple"){
        color.style.backgroundColor = tick.target.id;
      }
    })
})

