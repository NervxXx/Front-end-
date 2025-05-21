const readMore = document.getElementById("readMore");
const seoText = document.getElementById("seoText");
const collapsedHeight = 300;

let expanded = false;

readMore.addEventListener("click", () => {
  const fullHeight = seoText.scrollHeight;

  if (!expanded) {
    seoText.style.height = fullHeight + "px";
    seoText.classList.add("no-fade");
    readMore.textContent = "Скрыть";
  } else {
    seoText.style.height = collapsedHeight + "px";
    seoText.classList.remove("no-fade");
    readMore.textContent = "Читать далее";
  }

  expanded = !expanded;
});
