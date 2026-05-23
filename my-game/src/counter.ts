let counter = 0;

export function setupCounter(button: HTMLButtonElement, header: HTMLHeadElement) {
  const setCounter = (count: number) => {
    counter = count
    header.innerHTML = counter.toString(); 
  }
  button.addEventListener('click', () => {
    setCounter(counter + 1)
  })
  
  setCounter(0)
}

