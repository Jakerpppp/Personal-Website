// Adapted from https://codepen.io/Hyperplexed/pen/rNrJgrd

function hackedEffect(element) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
  
    // Store the original text content of the element
    const originalText = element.innerText;
  
    element.onmouseover = event => {
      let iteration = 0;
  
      clearInterval(interval);
  
      interval = setInterval(() => {
        event.target.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
  
        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
  
        iteration += 1 / 6;
      }, 30);
    };
    
    // Reset the text content when the mouse leaves the element
    element.onmouseout = event => {
      clearInterval(interval);
      element.innerText = originalText;
    };
  }
  

export default hackedEffect

