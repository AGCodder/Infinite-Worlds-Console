document.addEventListener("DOMContentLoaded", async function () {
  const gameDetails = JSON.parse(localStorage.getItem("selectedGame"));

  if (gameDetails) {
    const gameDetailsContainer = document.getElementById("game-details");
    // console.log(gameDetails.name);
    document.title = `IWC.gg | ${gameDetails.name}`;
    const bg_contain = document.createElement("div");
    bg_contain.className = "bg_contain";

    const img = document.createElement("img");
    img.className = "bg_img";
    img.src = gameDetails.imgSrc;
    img.alt = gameDetails.name;

    const img2 = document.createElement("img");
    img2.className = "main_img";
    img2.src = gameDetails.imgSrc;
    img2.alt = gameDetails.name;

    const img3 = document.createElement("img");
    img3.className = "rating_img";
    img3.src = "ratings_chart.png";
    img3.alt = gameDetails.name;

    const info_contain = document.createElement("div");
    info_contain.className = "info_contain";

    const text_contain = document.createElement("div");
    text_contain.className = "text_contain";

    const title = document.createElement("h1");
    title.textContent = gameDetails.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${gameDetails.price}`;

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags-container";

    gameDetails.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "tag";
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    const response = await fetch("gameDescriptions.json");
    const descriptions = await response.json();
    const description = document.createElement("p");
    description.textContent =
      descriptions[gameDetails.name] || '"Description not available."'; // Use game ID or name as key
    description.className = "des_text";

    const rating_contain = document.createElement("div");
    rating_contain.className = "rating_contain";

    const rating = document.createElement("p");
    rating.textContent = `${(Math.random() + 4).toFixed(1)}`;
    rating.className = "rating";

    const star_img = document.createElement("img");
    star_img.className = "star_img";
    star_img.src = "star.svg";

    const purchaseButton = document.createElement("button");
    purchaseButton.textContent = `Buy Now for ${gameDetails.price}`;
    purchaseButton.className = "purchase-button";

    gameDetailsContainer.appendChild(bg_contain);
    bg_contain.appendChild(img);
    gameDetailsContainer.appendChild(img2);
    // gameDetailsContainer.appendChild(img);
    gameDetailsContainer.appendChild(info_contain);
    info_contain.appendChild(text_contain);
    text_contain.appendChild(title);
    text_contain.appendChild(tagsContainer);
    text_contain.appendChild(rating_contain);
    rating_contain.appendChild(rating);
    rating_contain.appendChild(star_img);
    // text_contain.appendChild(description);
    info_contain.appendChild(description);
    // text_contain.appendChild(price);
    text_contain.appendChild(purchaseButton);
    text_contain.appendChild(img3);
  }
});
