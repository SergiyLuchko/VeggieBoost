const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal__close");
const btnOpen = document.querySelectorAll(".open-modal");

// Функция для отключения скролла
const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

// Функция для включения скролла
const enableScroll = () => {
  document.body.style.overflow = "auto";
};

// Открытие модального окна
btnOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("modal--active");
    disableScroll(); // Отключаем скролл при открытии модального окна
  });
});

// Закрытие модального окна
btnClose.addEventListener("click", () => {
  modal.classList.remove("modal--active");
  enableScroll(); // Включаем скролл при закрытии модального окна
});

// Закрытие модального окна при клике вне его области
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal--active");
    enableScroll(); // Включаем скролл при закрытии модального окна
  }
});

// Закрытие модального окна при нажатии на Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("modal--active")) {
    modal.classList.remove("modal--active");
    enableScroll(); // Включаем скролл при закрытии модального окна
  }
});
