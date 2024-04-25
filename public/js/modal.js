const modalBtn = document.querySelector('.modalBtn');
const form = document.querySelector('.orderForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const orderForm = document.querySelector('.orderForm');
  const formData = new FormData(orderForm);
  const inputs = Object.fromEntries(formData);

  const res = await fetch('/order/submit', {
    method: 'POST',
    body: formData,
  });
});

// const orderButton = document.querySelector(".order");

// const orderHeader = document.querySelector(".orderPage h2");

// orderButton.addEventListener("click", () => {
//   if (orderHeader) {
//     orderHeader.scrollIntoView({ behavior: "smooth" });
//   }
// });

function smoothScrollTo(targetY, duration = 500) {
  const start = window.scrollY;
  const distance = targetY - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const currentScroll = start + distance * progress;
    window.scrollTo(0, currentScroll);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

const orderButton = document.querySelector('.order');
const orderHeader = document.querySelector('.orderPage h2');

orderButton.addEventListener('click', () => {
  if (orderHeader) {
    const headerPosition = orderHeader.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(headerPosition);
  }
});
