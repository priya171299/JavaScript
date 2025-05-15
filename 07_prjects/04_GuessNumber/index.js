const form = document.querySelector(".form")
const guessField = parseInt(document.querySelector("#guessField").value)
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

let ranmdomNumber = Math.floor((Math.random()*100)+1);

for(let i = 1; i<=10; i++){
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(guessField === ranmdomNumber){
      lowOrHi.innerHTML = `you won`
    }
    else{
      if(guessField > ranmdomNumber ){
        lowOrHi.innerHTML = `guess is heigh`
      }else{
        lowOrHi.innerHTML = `guess is low`
      }
      guesses += guessField;
      lastResult.innerHTML = 10 - i;
    }
    
  })
}