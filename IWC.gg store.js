document.addEventListener("DOMContentLoaded", function () {
  const storeContainer = document.getElementById("store-container");

  const totalGames = 90;
  const imageFolder = "Games poster";
  const imagePrefix = "download";
  const imageExtension = ".jpg"; // or .png, depending on your images

  const gameNames = [
    "GNRADIFE MEAUI",
    "3IDTERGIT",
    "NGHETA",
    "SAETHEUS",
    "BREVARTS",
    "CFEARMENS",
    "SEMES RMEDS",
    "PCAMAB",
    "GNCETRAM",
    "GEEAFAFEEFE SAEERE",
    "ECNTEI DAKIIC",
    "RIPE FIRE",
    "PRE FIR",
    "I AM BTECTNID",
    "GNIMCANFET",
    "GAREZEF",
    "G FORESZD",
    "FORTMITEE",
    "DAR PRAM",
    "GAIRKIRAE",
    "SHUNEADILIDAJU 2",
    "NLIRVQDEIS",
    "SF FICEQCE",
    "CEFEATTIET",
    "IEEI3NCAE",
    "ZENENTIN",
    "ONTIRMCH R",
    "WORLD WAFCRIAFT",
    "PDKRTP",
    "GAPLEX N",
    "ADNE7TZILL",
    "GRIFNUTEG",
    "GAM. .MEATS",
    "GOER RAIR",
    "GAYACE",
    "GIEONZKK",
    "ETHIRMANIE",
    "EULPLICEIUICFAVEIA",
    "RPEMEASR",
    "MFEE FRAFA",
    "CURVIVAL 3",
    "STARD WEEW",
    "SAPWDEVW",
    "DASK",
    "BGACB",
    "IVNANTS CAMES",
    "ATNCAMH RAGHSHER",
    "DYN.TRANC",
    "CIMIUO",
    "RIICMUOD",
    "DIAMFRRO",
    "ARPNAS",
    "ASRXLSZ",
    "SUWAAY",
    "I WANT GIME SUPRES",
    "CALLL-INVONIANL DEDUITY",
    "JCAMENY CAMLLY",
    "GALL 4N DITY",
    "CALL OF NYTY",
    "CLASH THEN OF CLANS",
    "HAW WIAY",
    "--UMMU--ANER",
    "ROMADSS",
    "GAAM BANK",
    "KAMEYXDE",
    "CLASH RYIVALLE",
    "i WRAME C4MPS ",
    "MCUNS ENQAN",
    "GAUME GUWS",
    "G COPRGOAEYS",
    "GMUFE",
    "BRIPVE",
    "GRAND TOTN=T ----",
    "NINIEAINHANE",
    "ROLBROX",
    "ROLBOIX",
    "ROBOX",
    "RIOBUBX",
    "CONTEVIRER U4",
    "HARTY POTTER",
    "FICK WRACH",
    "AVNALIONR",
    "VVOLID Y INPK",
    "BRMVEL SRARS",
    "SREAN TO",
    "GAMEEX",
    "AVENDERDS",
    "RIAPWS",
    "BAAKINIAS",
    "GA-EIAAES",
  ];

  const gameTags = [
    ["Action", "Adventure"],
    ["Puzzle", "Family"],
    ["Strategy", "RPG"],
    ["Fantasy", "RPG"],
    ["Shooter", "Single Player"],
    ["Simulation", "Survival"],
    ["Sports", "Racing"],
    ["Horror", "Mystery"],
    ["Platformer", "Arcade"],
    ["Educational", "Casual"]
  ];

  for (let i = 1; i <= totalGames; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.title = `${gameNames[i - 1]}`;

    const img = document.createElement("img");
    img.src = `${imageFolder}/${imagePrefix} (${i})${imageExtension}`;
    img.alt = `Game ${i}`;

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = gameNames[i - 1];

    const cardPrice = document.createElement("div");
    cardPrice.className = "card-price";
    const price = function (a, b) {
      var output = (Math.random() * a + b).toFixed(2);
      if (output <= 0) {
        output = "Free";
      } else {
        output = `₹${output}`;
      }
      return output;
    };
    cardPrice.textContent = `${price(2, -1)}`; // Random price between $10 and $60

    const new_or_not = function (a) {
      var num = Math.random();
      var frac = a / 100;
      var n = "";
      if (num < frac) {
        n = "New";
      }
      return n;
    };
    const cardNew = document.createElement("div");
    cardNew.className = "new";
    const newTagText = new_or_not(50);
    cardNew.textContent = newTagText;
    if (newTagText === "") {
      cardNew.style.visibility = "hidden";
    }

    const cardTags = document.createElement("div");
    cardTags.className = "card-tags";

    // Add tags to each card
    (gameTags[i % gameTags.length] || []).forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "tag";
      tagElement.textContent = tag;
      cardTags.appendChild(tagElement);
    });

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardPrice);
    cardContent.appendChild(cardTags);
    card.appendChild(cardNew);
    card.appendChild(img);
    card.appendChild(cardContent);

    card.addEventListener("click", function() {
      const gameDetails = {
        name: gameNames[i - 1],
        imgSrc: img.src,
        price: cardPrice.textContent,
        tags: gameTags[i % gameTags.length]
      };
      localStorage.setItem("selectedGame", JSON.stringify(gameDetails));
      window.location.href = "IWC.gg Game.html";
    });

    storeContainer.appendChild(card);
  }
});
