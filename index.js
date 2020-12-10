const translateBtn = document.getElementsByClassName("translate-btn");
let inputTxt = document.getElementById("user-input");
let outputTxt = document.getElementById("user-output");

let apiUrl = "https://api.funtranslations.com/translate/pirate.json";

function errorHandler(error) {
  console.log("Something went wrong!", error);
  alert(
    "It seems we surpassed the free api limit, please try after some time :)"
  );
}

let translateToKlingon = (text) => {
  hitUrl = apiUrl + "?text=" + text;
  fetch(hitUrl)
    .then((response) => response.json())
    .then((toJson) => {
      var translatedText = toJson.contents.translated;
      outputTxt.innerText = translatedText;
    })
    .catch(errorHandler);
};
function translate() {
  console.log("I will translate");
  translateToKlingon(inputTxt.value);
}

translateBtn[0].addEventListener("click", translate);
