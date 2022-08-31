const playerFactory = (name) =>{
    return {name }
}

const gameboard = (() =>{

    let playerA = '';
    let playerB = '';
    let playerAArray = [3,4,5];
    let playerBArray = [0,1,2];
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
            displayArea.textContent = playerA + 'take your turn'            

        }) 
    }

    const cellData = () => {
        let cell = document.querySelectorAll('.cell')
        cell.forEach(cell =>{cell.addEventListener('click', () =>{
            console.log(cell.getAttribute('data-value'))
        })
})}

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
        if (item.every(elem => playerAArray.includes(elem))){console.log('testw')}
        })
    }

    const winCheckPlayerB = () => {

        winningSequences.forEach(item =>{
        if (item.every(elem => playerBArray.includes(elem))){console.log('testC')}
        })
    }

    const playGame = () => {
        let cell = document.querySelectorAll('.cell');
        cell.forEach(cell =>{

            if (playerOneTurn == true)
            {
                playerOneTurn = false;
                cell.addEventListener('click', () =>{
                cell.textContent = 'X';
                
                console.log(playerOneTurn)
              
            })}

            else if (playerOneTurn == false){
                playerOneTurn = true;
                cell.addEventListener('click', () =>{
                    cell.textContent = 'O';
                })
            }
        })
        

    }

    return {
      clearFocus , playerInfo , cellData , winCheckPlayerA ,winCheckPlayerB , playGame

    }


})();

gameboard.playerInfo()
gameboard.clearFocus()
gameboard.winCheckPlayerA()
gameboard.winCheckPlayerB()
gameboard.cellData()
gameboard.playGame()