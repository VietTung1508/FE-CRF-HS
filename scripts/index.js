// Price slider
var swiper = new Swiper(".media-swiper", {
    slidesPerView: "auto", 
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        enabled: false
      }
    },
    initialSlide: 1
  });
  
  const rangeInput = document.getElementById("labels-range-input");
   
  let previousValue = rangeInput.value;
   
  rangeInput.addEventListener("input", function (event) {
    const currentValue = parseInt(event.target.value);
    const planPrices = document.querySelectorAll(".plan-price");
   
    if (currentValue === 13) return;
   
    if (currentValue > previousValue) {
      planPrices.forEach((plan) => {
        const number = parseInt(plan.textContent.replace(/[^0-9]/g, ""), 10);
        plan.textContent =
          "$" + (number + 1).toLocaleString();
      });
    } else if (currentValue < previousValue) {
      planPrices.forEach((plan) => {
        const number = parseInt(plan.textContent.replace(/[^0-9]/g, ""), 10);
        plan.textContent =
          "$" + (number - 1).toLocaleString();
      });
    }
   
    previousValue = currentValue;
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const firstItem = document.querySelector(".open-content");
    toggleCollapse(firstItem);
  });
  
  
  function updateRangeBackground(slider) {
    const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #9F32FF 0%, #66BFFF ${value}%, #4d4d83 ${value}%)`;
  }
  `linear-gradient(to right, , #FF95FA 100%)`;
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("labels-range-input");
    updateRangeBackground(slider);
  });
  
  
  
  function toggleCollapse(button) {
    const content = button.nextElementSibling;
    const iconContainer = button.querySelector(".icon-container");
    if (Number(content.style.maxHeight.replace("px", ""))) {
      content.style.maxHeight = 0;
      iconContainer.innerHTML =
        '<img src="{{ get_asset_url('/crf-test-2/assets/svgs/plus-circle.svg')}}" class="size-4 lg:size-6">';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      iconContainer.innerHTML =
        '<img src="{{ get_asset_url('/crf-test-2/assets/svgs/minus-circle.svg')}}" class="size-4 lg:size-6">';
    }
  }
  
  function btnShowPlan() {
    document.querySelector('.btnShowPlan').style.display = 'none';
    document.querySelector('.cloud-text ').style.display = 'none';
  }
  
  function updateMaxValue() {
    const rangeInput = document.getElementById("labels-range-input");
    if (window.innerWidth <= 1028) {
      rangeInput.max = 4;
    } else {
      rangeInput.max = 13;
    }
  }
  
  window.addEventListener("load", updateMaxValue);
  window.addEventListener("resize", updateMaxValue);
    