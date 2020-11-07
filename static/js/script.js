let blackjackGame = {
  you: { scoreSpan: "#your-result", div: "#your-box", score: 0 },
  dealer: { scoreSpan: "#dealer-result", div: "#dealer-box", score: 0 },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("./static/sounds/swish.mp3");
const winSound = new Audio("./static/sounds/cash.mp3");
const lossSound = new Audio("./static/sounds/aww.mp3");

document.querySelector("#hitButton").addEventListener("click", blackjackHit);
document.querySelector("#standButton").addEventListener("click", dealerLogic);
document.querySelector("#dealButton").addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  return blackjackGame["cards"][
    Math.floor(Math.random() * blackjackGame["cards"].length)
  ];
}
function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `./static/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    //If adding 11 keeps me below 21 add 11, otherwise, add 1
    //this is for value :11
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    }
    //this is for value :1
    else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }
  blackjackGame["turnsOver"] = true;
  let winner = computeWinner();
  showResult(winner);
}

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;

    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");

    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }
    for (let i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;

    document.querySelector("#your-result").textContent = 0;
    document.querySelector("#dealer-result").textContent = 0;

    document.querySelector("#your-result").style.color = "#ffffff";
    document.querySelector("#dealer-result").style.color = "#ffffff";

    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "#ffffff";
    document.querySelector("#blackjack-result").style.textShadow = "none";

    blackjackGame["turnsOver"] = true;
  }
}

//compute winner and who just won
//update the wins, draws and losses
function computeWinner() {
  let winner;

  if (YOU["score"] <= 21) {
    /*condition : higher score than dealer or 
    when dealer busts but you're 21 or under */
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      console.log("YOU WON!");
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      console.log("YOU LOST!");
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      console.log("YOU DREW!");
      blackjackGame["draws"]++;
    }
  }
  // condition : when YOU(user) busts but dealer doesn't
  else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    console.log("YOU LOST!");
    blackjackGame["losses"]++;
    winner = DEALER;
  }
  //condition : when YOU(user) and DEALER BOTH busts
  else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    console.log("YOU DREW!");
    blackjackGame["draws"]++;
  }

  console.log("Winner is ", winner);
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      css("wins");
      message = "You won!";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      css("losses");
      message = "You lost!";
      messageColor = "red";
      lossSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      css("draws");
      message = "You drew!";
      messageColor = "white";
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}

function css(result) {
  if (result === "losses") {
    console.log("loss shadow");
    document.querySelector(
      `#blackjack-result`
    ).style.textShadow = `#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px`;
  } else if (result === "wins") {
    console.log("win shadow");
    document.querySelector(
      `#blackjack-result`
    ).style.textShadow = `0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18`;
  } else {
    console.log("draw shadow");
    document.querySelector(
      `#blackjack-result`
    ).style.textShadow = `0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00`;
  }
}
