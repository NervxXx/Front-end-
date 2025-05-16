AOS.init({
  easing: "ease-in-out",
  offset: 100,
});

document.addEventListener("DOMContentLoaded", () => {
  const tariffGroups = document.querySelectorAll(".fifthSelectionInsideMain");
  let current = 0;

  const showGroup = (index) => {
    tariffGroups.forEach((group, i) => {
      group.classList.toggle("hidden", i !== index);
    });
  };

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % tariffGroups.length;
    showGroup(current);
  });

  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + tariffGroups.length) % tariffGroups.length;
    showGroup(current);
  });

  showGroup(current);
});
