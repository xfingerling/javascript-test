const gallery = document.querySelector(".gallery");

function showFoto(e) {
  const { target } = e;

  if (target.tagName === "IMG") {
    target.parentElement.style.border = "3px solid rgb(43, 43, 43)";
    target.parentElement.style.borderRadius = "5px";
    target.classList.remove("filter");
  }
}

function hideFoto(e) {
  const { target } = e;
  const imgs = gallery.querySelectorAll(".gallery__img");

  if (target.tagName === "IMG") {
    imgs.forEach((el) => {
      el.parentElement.style.border = "";
      target.classList.add("filter");
    });
  }
}

gallery.addEventListener("mouseover", showFoto);

gallery.addEventListener("mouseout", hideFoto);

function debounce(f, ms) {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}
