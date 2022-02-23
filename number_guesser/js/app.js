window.addEventListener("DOMContentLoaded", () => {
  let max = 10,
    min = 1,
    guesses = 3;

  const input = document.querySelector("#guess-input");
  const submit = document.querySelector("#guess-btn");
  const minNum = document.querySelector(".min-num");
  const maxNum = document.querySelector(".max-num");
  const message = document.querySelector(".message");

  const num = Math.ceil(Math.random() * 10);
  console.log(num);

  minNum.textContent = min;
  maxNum.textContent = max;

  submit.addEventListener("click", checknumber);

  function checknumber() {
    if (isNaN(input.value) || input.value < min || input.value > max) {
      message.textContent = `Введите число от ${min} до ${max}`;
      input.value = "";
    } else {
      guesses--;
      console.log(input.value);
      if (guesses === 0 || input.value == num) {
        submit.textContent = "Новая игра";
        input.disabled = true;
        input.style.border = "2px solid green";

        if (input.value == num) message.textContent = "Правильно";
        message.style.color = "green";
        submit.addEventListener("click", () => {
          location.reload();
        });
      } else if (input.value > num) {
        message.textContent = `Введите число поменьше. У Вас осталось попыток: ${guesses}.`;
      } else {
        message.textContent = `Введите число побольше. У Вас осталось попыток: ${guesses}.`;
      }
      if (guesses === 0) {
        message.textContent = `Вы проиграли. Спрятанное число ${num}`;
        input.disabled = true;
        input.style.border = "2px solid red";
        message.style.color = "red";
      }

      input.value = "";
      console.log(guesses);
    }
  }
});
