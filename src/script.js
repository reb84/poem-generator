function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#submit-instructions");
  let apiKey = "22de0057ea42aa649cbcof0e3b1te784";
  let context =
    "You are a Poem expert and love to write short poems. You mission is to generate poem with a maximum of 6 lines in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">( generating a poem about ${instructionsInput.value} )</div>`;

  if (instructionsInput.value === "a dog going on holiday") {
    typeSilly();
  } else {
    axios.get(apiUrl).then(typePoem);
  }
}

function typePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function typeSilly(response) {
  new Typewriter("#poem", {
    strings: `<div class="silly">You can be more creative than that.<br />Why not try again.<br />🐶</div>`,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
