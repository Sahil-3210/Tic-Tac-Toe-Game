let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let winningSymbolColor = "";

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      box.style.color = "red";
      winningSymbolColor = "red";
      turn = false;
    } else {
      box.innerText = "X";
      box.style.color = "darkblue";
      winningSymbolColor = "darkblue";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations Winner is ${winner} 🎉`;
  msg.style.color = winningSymbolColor;
  msgContainer.classList.remove("hide");
  disabledBtn();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    //     let pos1 = boxes[pattern[0]].innerText;
    // where ever we click in the 9 boxes at first time form there it will indicate which pattern it is and it will consider that index as the 0th index.
    // This line accesses the inner text of the first box in the current pattern. The index of this box is stored in pattern[0]. It retrieves the inner text of this box using boxes[pattern[0]].
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

const disabledBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const newGame = () => {
  turn = true;
  enabledBtn();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", newGame);
