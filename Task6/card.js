window.alert(`Работа оценивается на 500$. Вам скидка 50%`);

const wrapper = document.createElement("div");
const card = document.createElement("div");
const image = document.createElement("img");
image.src = "./images/image-equilibrium.jpg";
const title = document.createElement("h1");
const paragraph = document.createElement("p");
const section = document.createElement("section");
const priceBlock = document.createElement("div");
const price = document.createElement("p");
const priceImg = document.createElement("img");
priceImg.src = "./images/icon-ethereum.svg";
const timeBlock = document.createElement("div");
const time = document.createElement("p");
const timeImg = document.createElement("img");
timeImg.src = "./images/icon-clock.svg";
const footer = document.createElement("footer");
const avatar = document.createElement("img");
avatar.src = "./images/image-avatar.png";
const footerText = document.createElement("p");
const avatarName = document.createElement("span");
const linkTitle = document.createElement("a");
linkTitle.setAttribute("href", "#");
const linkAvatar = document.createElement("a");
linkAvatar.setAttribute("href", "#");
const imageSrc = document.createElement("a");
imageSrc.setAttribute("href", image.src);

wrapper.setAttribute("id", "wrapper");
title.innerText = "Equilibrium #3429";
paragraph.innerText = "Our Equilibrum collection promotes balance and  calm.";
price.innerText = "0.041eth";
time.innerText = "3 days left";
footerText.innerText = "Creation of";
avatarName.innerText = "Jules Wyvern";

document.body.append(wrapper);
wrapper.append(card);
card.appendChild(imageSrc);
card.appendChild(image);
imageSrc.appendChild(image);
card.appendChild(linkTitle);
card.appendChild(title);
linkTitle.appendChild(title);
card.appendChild(paragraph);
card.appendChild(section);
section.appendChild(priceBlock);
priceBlock.appendChild(priceImg);
priceBlock.appendChild(price);
section.appendChild(timeBlock);
timeBlock.appendChild(timeImg);
timeBlock.appendChild(time);
card.appendChild(footer);
footer.appendChild(avatar);
footer.appendChild(footerText);
footer.appendChild(avatarName);
footer.appendChild(linkAvatar);
linkAvatar.appendChild(avatarName);

document.body.style = `margin:0`;
wrapper.style = `background:hsl(217, 54%, 11%); display:flex; flex-wrap:wrap; justify-content:center; align-items:center; min-height:100vh;`;
card.style = `width:280px; background:hsl(216, 50%, 16%); font-family:"Outfit"; font-size:1rem; color:hsl(215, 51%, 70%); display:flex; flex-direction:column; justify-content:center;  padding:20px; margin:20px; border-radius:10px; box-shadow: 0px 15px 8px 10px hsl(217, 54%, 11%)`;
image.style = `width:100%; border-radius:5px`;
title.style = `font-size:1.1rem; color:#fff; text-align:left;   margin:0;`;
linkTitle.style = `text-decoration:none; margin:20px 0;`;
paragraph.style = `margin:0;`;
section.style = `width:100%; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid hsl(215, 32%, 27%); padding:10px 0; margin-bottom:10px`;
priceBlock.style = `display:flex; align-items:center;`;
priceImg.style = `height:100%; padding-right:5px`;
price.style = `color:hsl(178, 100%, 50%); text-transform:uppercase;`;
timeBlock.style = `display:flex; align-items:center;`;
timeImg.style = `height:100%; padding-right:5px`;
avatar.style = `width:11%; border-radius:100%;border:1px solid #fff; margin: 0 20px 0 0`;
avatarName.style = `padding-left:5px`;
linkAvatar.style = `text-decoration:none; color:#fff`;
footer.style = `display:flex; align-items:center`;
