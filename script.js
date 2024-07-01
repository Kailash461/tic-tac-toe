let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw=document.querySelector("#draw");


let turnO = true;
let count=0;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

const resetGame = () => {
    turnO = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
   resetBtn.classList.remove("hide");
};

boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.innerHTML = turnO ? "O" : "X";
        count++;
        btn.disabled = true;
        turnO = !turnO;
        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerHTML = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let [a, b, c] = pattern;
        let p1 = boxes[a].innerText;
        let p2 = boxes[b].innerText;
        let p3 = boxes[c].innerText;

        if (p1 && p1 === p2 && p1 === p3) {
            showWinner(p1);
            return;
        }

    }
    if(count === 9){
        drew();
    }
};

const drew=()=>{
    msg.innerText = `Draw, No Winner`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
