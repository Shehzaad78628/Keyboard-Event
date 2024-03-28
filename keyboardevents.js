function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let secretKey = alphabet.charAt(getRandomInt(0, 25));

    function handleKeyPress(event) {
        const keyPressed = event.key.toLowerCase()
        if (keyPressed === secretKey) {
            const secretMessage = document.createElement('p');
            secretMessage.textContent = 'SECRET KEY PRESSED';
            document.body.appendChild(secretMessage);
        secretKey = alphabet.charAt(getRandomInt(0, 25));
      }
    }
    document.body.addEventListener('keydown', handleKeyPress);
    const keyboardList = document.getElementById('keyboard');
    for (let i = 0; i < alphabet.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = alphabet.charAt(i);
      listItem.style.visibility = 'hidden';
      keyboardList.appendChild(listItem);
    }