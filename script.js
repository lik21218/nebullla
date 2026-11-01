let items = document.querySelectorAll(".item");
let leftItems = document.querySelectorAll(".left-item");
let carousel = document.querySelector(".carousel");
let index = 0;

// ручной скролл - твой старый код
document.addEventListener("scroll", () => {
  let proportion = carousel.getBoundingClientRect().top / window.innerHeight;
  let i = Math.ceil(-1 * (proportion + 0.5));
  if (i < 0) i = 0;
  if (i >= items.length) i = items.length - 1;
  items.forEach(
    (item, n) => (item.className = n == i ? "item active" : "item"),
  );
  index = i; // запоминаем где мы сейчас
});

// автоскролл каждые 3 секунды
setInterval(() => {
  index++;
  if (index >= leftItems.length) index = 0; // в конце - в начало
  leftItems[index].scrollIntoView({ behavior: "smooth", block: "center" });
}, 3000);
