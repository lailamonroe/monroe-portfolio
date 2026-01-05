// Active nav link 
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// Contact modal
const backdrop = document.querySelector("[data-modal-backdrop]");
const openBtns = document.querySelectorAll("[data-open-contact]");
const closeBtns = document.querySelectorAll("[data-close-contact]");

function openModal(){
  if(!backdrop) return;
  backdrop.style.display = "grid";
  document.body.style.overflow = "hidden";
}
function closeModal(){
  if(!backdrop) return;
  backdrop.style.display = "none";
  document.body.style.overflow = "";
}

openBtns.forEach(btn => btn.addEventListener("click", openModal));
closeBtns.forEach(btn => btn.addEventListener("click", closeModal));

if(backdrop){
  backdrop.addEventListener("click", (e) => {
    if(e.target === backdrop) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeModal();
  });
}





