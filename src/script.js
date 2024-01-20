function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#submit-instructions");
  let apiKey = "22de0057ea42aa649cbcof0e3b1te784";
  let context =
    "You are a Poem expert and love to write short poems. You mission is to generate poem with a maximum of 10 lines in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(typePoem);
}

function typePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
