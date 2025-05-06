// Плавная прокрутка к секциям
document.querySelectorAll(".HeaderNavRight").forEach((item) => {
  item.addEventListener("click", function () {
    const sectionId = this.getAttribute("data-section");
    const section = document.getElementById(sectionId);

    if (section) {
      // Учитываем высоту фиксированного хедера
      const headerHeight = document.querySelector("header").offsetHeight;
      const sectionPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  });
});

// Подсветка активного пункта меню при скролле
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + 100; // +100px для ранней активации

  document.querySelectorAll(".HeaderNavRight").forEach((item) => {
    const sectionId = item.getAttribute("data-section");
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Удаляем активный класс у всех
        document.querySelectorAll(".HeaderNavRight").forEach((i) => {
          i.classList.remove("active-nav");
        });
        // Добавляем текущему
        item.classList.add("active-nav");
      }
    }
  });
});
