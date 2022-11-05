const randomComp = () => {
  let num = Math.floor(Math.random() * 1000 + 1) % 3;
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else if (num == 2) {
    return "scissor";
  } else {
    return false;
  }
};

const winOrLose = (userIn, comIn) => {
  if (userIn === comIn) {
    return "Draw";
  } else {
    if (userIn === "rock" && comIn === "paper") {
      return "Lose";
    } else if (userIn === "rock" && comIn === "scissor") {
      return "Win";
    } else if (userIn === "paper" && comIn === "rock") {
      return "Win";
    } else if (userIn === "paper" && comIn === "scissor") {
      return "lose";
    } else if (userIn === "scissor" && comIn === "rock") {
      return "lose";
    } else if (userIn === "scissor" && comIn === "paper") {
      return "Win";
    }
  }
};
const domRender = (userIn, comIn, winorlose) => {
  var pre = document.getElementById("data");
  pre.innerText = `You :- ${userIn}` + `   ` + `Computer :- ${comIn}`;
  var t = document.getElementById("won");
  t.innerText = `You :- ${winorlose} `;
};

const final = (randomComp, winOrLose, domRender) => {
  let wol = winOrLose;
  let dom = domRender;

  let a1 = document.getElementById("btn1");
  let a2 = document.getElementById("btn2");
  let a3 = document.getElementById("btn3");
  a1.addEventListener("click", () => {
    let r = randomComp();
    dom("rock", r, wol("rock", r));
  });
  a2.addEventListener("click", () => {
    let r = randomComp();
    dom("paper", r, wol("paper", r));
  });
  a3.addEventListener("click", () => {
    let r = randomComp();
    dom("scissor", r, wol("scissor", r));
  });
};

final(randomComp, winOrLose, domRender);
