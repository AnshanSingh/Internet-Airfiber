
  // const images = ["image1.jpeg", "image4.jpeg", "image3.jpeg","image2.jpeg"]; // Add your image filenames
  // let currentIndex = 0;
  // const imageElement = document.getElementById("carouselImage");

  // function changeImage() {
  //   // Fade out
  //   imageElement.style.opacity = 0;

  //   // Wait for fade out
  //   setTimeout(() => {
  //     const nextImage = new Image();
  //     nextImage.src = images[currentIndex];
  //     nextImage.onload = () => {
  //       imageElement.src = nextImage.src;

  //       // Fade in
  //       imageElement.style.opacity = 1;
  //     };
  //     currentIndex = (currentIndex + 1) % images.length;
  //   }, 1000); // match with CSS transition time
  // }

  // setInterval(changeImage, 4000); // Change every 4 seconds


  // const slides = [
  //   {
  //     heading: "Blazing Fast Fiber Internet",
  //     sub: "Stream, browse, and download at lightning speed."
  //   },
  //   {
  //     heading: "Unlimited Data Plans",
  //     sub: "No more worrying about your monthly limit."
  //   },
  //   {
  //     heading: "Secure and Stable Connectivity",
  //     sub: "Stay connected with zero interruptions."
  //   },
  //   {
  //     heading: "Future-Ready Internet Service",
  //     sub: "Upgrade to the next-gen fiber experience."
  //   }
  // ];

  // let index = 0;
  // const headingEl = document.getElementById("headingText");
  // const subEl = document.getElementById("subText");
  // const container = document.querySelector(".sliding-text-container");

  // function updateSlide() {
  //   container.style.animation = "slideOut 1s ease forwards";

  //   setTimeout(() => {
  //     headingEl.innerText = slides[index].heading;
  //     subEl.innerText = slides[index].sub;
  //     container.style.animation = "slideIn 1s ease forwards";

  //     index = (index + 1) % slides.length;
  //   }, 1000);
  // }

  // // Set initial content
  // headingEl.innerText = slides[0].heading;
  // subEl.innerText = slides[0].sub;
  // index = 1;

  // setInterval(updateSlide, 3000);


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

    let index = 0;

    function updateText() {
      const headingEl = document.getElementById("headingText");
      const subTextEl = document.getElementById("subText");

      headingEl.classList.remove("heading");
      subTextEl.classList.remove("subtext");

      // Trigger reflow to restart animation
      void headingEl.offsetWidth;

      headingEl.textContent = headings[index];
      subTextEl.textContent = subtexts[index];

      headingEl.classList.add("heading");
      subTextEl.classList.add("subtext");

      index = (index + 1) % headings.length;
    }

    setInterval(updateText, 3000);


