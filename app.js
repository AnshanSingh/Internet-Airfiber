
  const headings = [ 
  "Welcome to Fiber Internet",
  "Unlimited High-Speed Access",
  "Future-Ready Broadband"
];

const subtexts = [
  "Enjoy blazing fast internet with reliable connectivity.",
  "No limits, no lag – perfect for work and entertainment.",
  "Experience cutting-edge fiber technology for tomorrow."
];

const images = [
  "https://images.pexels.com/photos/6981024/pexels-photo-6981024.jpeg",
  "https://media.istockphoto.com/id/1456758630/photo/engineer-learn-basic-theory-how-to-operation-maintenance-and-programing-robot-arm-in-training.jpg?s=2048x2048&w=is&k=20&c=VPQTh1OiI4cemEPLRdv03LhCS-FMnLDASaTWBqFmQFo=",
  "https://images.pexels.com/photos/7821488/pexels-photo-7821488.jpeg"
];
let index = 0;

function updateText() {
  const headingEl = document.getElementById("headingText");
  const subTextEl = document.getElementById("subText");
  const imageEl = document.getElementById("mainImage");

  headingEl.classList.remove("heading");
  subTextEl.classList.remove("subtext");

  // Reflow to retrigger animation
  void headingEl.offsetWidth;

  // Update content
  headingEl.textContent = headings[index];
  subTextEl.textContent = subtexts[index];
  imageEl.src = images[index];

  headingEl.classList.add("heading");
  subTextEl.classList.add("subtext");

  index = (index + 1) % headings.length;
}

setInterval(updateText, 3000);


    // best plan
      const buttons = document.querySelectorAll('.plan-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active')); 
      btn.classList.add('active'); 
    });
  });

    const tabs = document.querySelectorAll("#speedTabs button");
  const indicator = document.querySelector(".tab-indicator");

  tabs.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Move red indicator to active button
      const btnRect = btn.getBoundingClientRect();
      const containerRect = btn.parentElement.getBoundingClientRect();
      const offsetLeft = btnRect.left - containerRect.left;

      indicator.style.width = `${btn.offsetWidth}px`;
      indicator.style.left = `${offsetLeft}px`;
    });
  });

  // Initialize on first load
  window.addEventListener("load", () => {
    const active = document.querySelector("#speedTabs button.active");
    if (active) {
      const rect = active.getBoundingClientRect();
      const containerRect = active.parentElement.getBoundingClientRect();
      const offsetLeft = rect.left - containerRect.left;
      indicator.style.width = `${active.offsetWidth}px`;
      indicator.style.left = `${offsetLeft}px`;
    }
  });


