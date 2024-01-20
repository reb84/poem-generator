function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `My heart’s in the Highlands, my heart is not here,
My heart’s in the Highlands, a-chasing the deer;
Chasing the wild-deer, and following the roe,
My heart’s in the Highlands, wherever I go…`,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
