const frame = document.createElement("div");
frame.className = "frame";
const view = document.createElement("div");
view.className = "view";
frame.append(view);
const textView = document.createElement("h1");
textView.className = "digits";
view.append(textView);
textView.innerText = 0;
const buttonFrame = document.createElement("div");
buttonFrame.className = "btn-frame";
frame.append(buttonFrame);
let board = [];
let buttonText = [
  "+/-",
  "AC",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
let viewArray = [];

const viewHandler = (e) => {
  if (e.target.innerText != "AC" && e.target.innerText != "+/-") {
    viewArray.push(e.target.innerText);
    console.log(viewArray);
    textView.innerText = viewArray.join("");
  }

  if (e.target.innerText == "AC") {
    viewArray = [];
    textView.innerText = 0;
  }

  if(e.target.innerText == "+/-") {
        viewArray.unshift("-");
        console.log(viewArray);
        textView.innerText = viewArray.join("");
  }
};

const equals = () => {
  let answer = eval(viewArray.join(""));
  console.log(answer);
  textView.innerText = answer;
  viewArray = [];
  return answer;
};

for (let i = 0; i < 19; i++) {
  let btn = document.createElement("button");
  btn.setAttribute("data-index", i);
  board.push(btn);
  board[i].className = "btn";
  frame.append(board[i]);
  if (i != 18) {
    board[i].addEventListener("click", viewHandler);
  } else {
    board[i].addEventListener("click", equals);
  }
}

const root = document.getElementById("root");
root.append(frame);

for (let i = 0; i < board.length; i++) {
  board[i].innerText = buttonText[i];
}
