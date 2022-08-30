const playerFactory = (name) =>{
    return {name }
}

const gameboard = (() =>{

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

    const playGame = () => {
    }


    return {
        winningSequences , clearFocus , playerA, playerInfo , cellData , playGame
    }


})();

gameboard.playerInfo()
gameboard.clearFocus()
gameboard.playGame()
gameboard.cellData()