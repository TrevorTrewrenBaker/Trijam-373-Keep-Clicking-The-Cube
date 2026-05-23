let counter = 0;

const displayMessages: [number, string][] = [
  [10, "Good job! Keep going... Get to 300!"],
  [50, "50 clicks is alright... Try and get to 300!"],
  [100, "Wow! 100 clicks... Impressive work! Get to 300! And you should stop at exactly 300"],
  [150, "You got to 150 clicks! That's a lot of clicks... Get to 300 and no further!"],
  [170, "You got to 170 clicks! I'm impressed... Yes, I am a computer program refering to myself as a human..."],
  [200, "200 clicks... You should stop at 300 clicks..."],
  [240, "240 clicks... Damn, you really like clicking the cube, don't you?"],
  [273, "273 clicks... I don't just count in rounded even number"],
  [300, "300 clicks... Okay, stop now..."],
  [310, "Stop now... You reached the goal..."],
  [320, "You can't stop can you?"],
  [330, "Keep on clicking then... I guess I can't stop you."],
  [340, "STOP!!!!!!"],
  [350, "Guess I can stop you myself. You broke me. I've completely disabled the button because you like clicking the cube so much. You win."],
];


export function setupCounter(button: HTMLButtonElement, header: HTMLHeadElement, message: HTMLHeadElement) {
  const setCounter = (count: number) => {
    counter = count
    header.innerHTML = counter.toString();
    
    //Update the message if the item is found.
    const messageItem = displayMessages.find(item => item[0] === counter); 
    if (messageItem != undefined)
    {
       message.innerHTML = messageItem[1]; 
    }

    //If the player reaches 350, end the game. 
    if (counter === 350)
    {
      button.disabled = true; 
      button.style.display = 'none'; 
    }

  }
  button.addEventListener('click', () => {
    setCounter(counter + 1)
  })
  
  setCounter(349)
}



