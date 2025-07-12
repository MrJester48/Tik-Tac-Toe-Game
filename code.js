let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let turn0 = true;
let cnt = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        cnt++;
        if(cnt == 9){
            showWinner("Draw");
        }
    })
});

const checkWinner = () => {
    for(pattern of winPatterns){
        let v1 = boxes[pattern[0]].innerText;
        let v2 = boxes[pattern[1]].innerText;
        let v3 = boxes[pattern[2]].innerText;

        if(v1 != "" && v1 === v2 && v2 === v3){
            showWinner(v1);
        }
    }
};

const showWinner = (winner) => {
    cnt = 0;
    if(winner == "Draw"){
        msg.innerText = `Draw!!`
    }
    else {
        msg.innerText = `Congratulations, Winner is ${winner}`;
    }
    msgContainer.classList.remove('hide');
    for(box of boxes){
        box.disabled = true;
    }
};

const newGame = () => {
    turn0 = true;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add('hide');
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);