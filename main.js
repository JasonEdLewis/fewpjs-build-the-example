// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.getElementById('modal')
errorMessage.hidden = true


// const spans = document.querySelectorAll('span');
// spans.forEach(span => span.setAttribute("class", "like-glyph activated-heart"))


// const theArticles = document.querySelectorAll('article');
// theArticles.forEach(art => art.addEventListener('click',(event)))

window.addEventListener('click', (event)=>
{ if(event.target.className === "like-glyph"){
  
  console.log("what happened!!??!?");
  mimicServerCall().then(resp => {
    if (event.target.innerText === FULL_HEART){
      event.target.innerText = EMPTY_HEART 
      event.target.classList.remove("activated-heart")
    }
    else{ 
      event.target.classList.add("activated-heart")
      event.target.innerText = FULL_HEART}

    }
      
    
    
    ).catch(err => errorMessage = !errorMessage)
}



})





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
