document.addEventListener("DOMContentLoaded", () => {
  let itr = 0;
  let highs = 0;
  const cardArray = [
    {
      name: "fries",
      img: "./imgs/i1.png",
      b: false,
    },

    {
      name: "cheeseburger",
      img: "./imgs/i2.png",
      b: false,
    },
    {
      name: "icecream",
      img: "./imgs/i3.png",
      b: false,
    },
    {
      name: "milkshake",
      img: "./imgs/i4.jpg",
      b: false,
    },
    {
      name: "burger",
      img: "./imgs/i5.jpg",
      b: false,
    },
    {
      name: "pizza",
      img: "./imgs/i6.jpg",
      b: false,
    },
    {
      name: "fries",
      img: "./imgs/i1.png",
      b: false,
    },

    {
      name: "cheeseburger",
      img: "./imgs/i2.png",
      b: false,
    },
    {
      name: "icecream",
      img: "./imgs/i3.png",
      b: false,
    },
    {
      name: "milkshake",
      img: "./imgs/i4.jpg",
      b: false,
    },
    {
      name: "burger",
      img: "./imgs/i5.jpg",
      b: false,
    },
    {
      name: "pizza",
      img: "./imgs/i6.jpg",
      b: false,
    },
  ];
  const button = document.querySelector("#button");
  button.addEventListener("click", rst);

  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const rt = document.querySelector("#rt");
  const hgs = document.querySelector("#hgs");
  const mvs = document.querySelector("#moves");
  // create board
  function rst() {
    cardArray.sort(() => 0.5 - Math.random());
    grid.innerHTML = "";
    rt.textContent = "";
    for (let i = 0; i < cardArray.length; i++) {
      cardArray[i].b = false;
      itr = 0;
      cardsWon = [];
      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = "";
      mvs.textContent = "";
    }

    createboard();
  }
  cardsWon = [];
  cardsChosen = [];
  cardsChosenId = [];
  function createboard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "./imgs/bk1.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    itr = itr + 1;
    mvs.textContent = itr;
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optiontwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      //   alert("you  found a match!!");

      cards[optionOneId].setAttribute("src", "./imgs/w4.jpg");
      cards[optiontwoId].setAttribute("src", "./imgs/w4.jpg");
      cardsWon.push(cardsChosen);
    } else {
      //   alert("Try again!!");
      cardArray[optionOneId].b = false;
      cardArray[optiontwoId].b = false;
      cards[optionOneId].setAttribute("src", "./imgs/bk1.jpg");
      cards[optiontwoId].setAttribute("src", "./imgs/bk1.jpg");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == 6) {
      rt.textContent = " Congratulations!! You win!";
      let me = eval(606 - itr);
      if (highs < me) highs = me;
      hgs.textContent = highs;
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    if (cardArray[cardId].b === false) {
      cardArray[cardId].b = true;
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardArray[cardId].img);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }
  createboard();
});
