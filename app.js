const playerFactory = (name) =>{
    return {name }
}

const gameboard = (() =>{

    let playerOneWin = false;
    let playerTwowin = false;
    let playerA = '';
    let playerB = '';
    let playerAArray = [];
    let playerBArray = [];
    let counter  = 0;
    let playerOneTurn = true;
    let playerTwoTurn = false;
  
   
    const displayArea = document.querySelector('.display');
    const playerOneNameArea = document.getElementById('pOneName');
    const playerTwoNameArea = document.getElementById('pTwoName');
    const startGame = document.getElementById('start');

    const clearFocus = () => {
        playerOneNameArea.addEventListener('click', () =>{
            playerOneNameArea.placeholder = '';
        })

        playerTwoNameArea.addEventListener('click', () =>{
            playerTwoNameArea.placeholder = '';
        })
    }

    const playerInfo = () => {
        startGame.addEventListener('click', () =>{
            playerA = (playerOneNameArea.value)
            playerB = (playerTwoNameArea.value)
            displayArea.textContent = playerA + ' you go first!'            

        }) 
    }

    const winningSequences = 
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const winCheckPlayerA = () => {

        winningSequences.forEach(item =>{
        if (item.every(elem => playerAArray.includes(elem)))
        
        {displayArea.textContent = playerA + ' Wins'
        playerOneWin === true
    }
        })
    }

    const winCheckPlayerB = () => {

        winningSequences.forEach(item =>{
        if (item.every(elem => playerBArray.includes(elem))){ 
          {displayArea.textContent = playerB + ' Wins'
        playerTwoWin === true
    }
    }
        })
    }

    const startCheck = () =>{
        if (playerA === '' || playerB ===''){displayArea.textContent ='Please enter names and press Start to begin'
        
        }
    }


    const drawCheck = () => {
        if (counter === 9) {displayArea.textContent = 'Its a draw'}
    }
    const playGame = () => {
        startCheck()
        startGame.addEventListener('click', ()=>{})
        let cell = document.querySelectorAll('.cell');
        cell.forEach(cell =>{

            cell.addEventListener('click', () =>{

                if(cell.textContent === 'X' || cell.textContent === 'O')
                 {return}

                else if (playerOneTurn === true)
                {
                    
                    playerOneTurn = false;
                    playerTwoTurn = true
                    displayArea.textContent = playerB + 'take your turn'
                    cell.textContent = 'X';
                    playerAArray.push(Number(cell.getAttribute('data-value')))
                    counter++
                    drawCheck()
                    winCheckPlayerA()
                }
    
                else {
                    playerOneTurn = true;
                    playerTwoTurn = false
                    displayArea.textContent = playerA + ' take your turn'
                    cell.textContent = 'O';
                    playerBArray.push(Number(cell.getAttribute('data-value')))
                    counter++
                    drawCheck()
                    winCheckPlayerB()
                }
            })
            })
    }

    return {
      clearFocus , playerInfo , winCheckPlayerA ,winCheckPlayerB , playGame

    }


})();

gameboard.playerInfo()
gameboard.clearFocus()
gameboard.playGame()