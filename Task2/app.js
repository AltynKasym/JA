//1. Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'
let str = "ddd@bbb@ccc";
document.write(str.replaceAll("@", "!") + "<br>");

// 2. Дана строка 'js'. Сделайте из нее строку 'JS'.
let str2 = "js";
document.write(str2.toUpperCase() + "<br>");
// 3. Дана строка 'JS'. Сделайте из нее строку 'js'.
let str3 = "JS";
document.write(str3.toLowerCase() + "<br>");
// 4. Дана строка 'I am a hero!'. Выведите в консоль количество символов в этой строке.
let str4 = "I am a hero!";
document.write(str4.length + "<br>");

/*5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. 
Скрипт должен обработать полученный номер и показать на странице последние 4 цифры 
а остальные цифры карты должны заменены на *.
    
    Пример: "Номер вашей карты: **********1245" */

const symb = "*";
let userCard = prompt("Введите номер карты");
let finishNumberCard = prompt("Сколько последних чисел вам показать? ");
let NonVisNum = userCard.length - finishNumberCard;
let NonVisCardNum = userCard.slice(0, NonVisNum);
let NonVisCardLenght = NonVisCardNum.length;
let nonVisReplace = NonVisCardNum.replace(
  userCard.slice(0, NonVisNum),
  symb.repeat(NonVisCardLenght)
);

document.write(
  `Показываем последние ${finishNumberCard} цифр(ы) вашей карты: ${nonVisReplace}${userCard.slice(
    userCard.length - finishNumberCard,
    userCard.length
  )}`
);
