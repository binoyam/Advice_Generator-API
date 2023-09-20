const advice_card = document.querySelector(".card");
const advice_number = document.querySelector(".advice-number");
const advice_quote = document.querySelector(".advice");
const advice_btn = document.querySelector(".btn");

const getAdvice = () => {
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((advice_data) => {
      console.log(advice_data);
      const advice_id = advice_data.slip.id;
      const advice_text = advice_data.slip.advice;
      advice_number.textContent = advice_id;
      advice_quote.textContent = advice_text;
    })
    .catch((error) => {
      console.log(error);
    });
};
advice_btn.addEventListener("click", () => {
  getAdvice();
});
window.onload = () => {
  getAdvice();
};
