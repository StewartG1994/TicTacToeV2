

const playerFactory = (name) =>{
    return {name }
}

const gameboard = (() =>{

    let playerA = [];
    let playerB = [];
    let playerAArray = [];
    let playerBArray = [];

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
            playerA.push(playerOneNameArea.value)
            playerB.push(playerTwoNameArea.value)
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


    return {
        winningSequences , clearFocus , playerA, playerInfo
    }


})();

gameboard.clearFocus()
console.log(gameboard.playerA)
gameboard.playerInfo()