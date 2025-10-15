const timelineFill = document.getElementById("timelineFill");
const labels = document.querySelectorAll(".timeline-label");
const totalSections = labels.length;

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollingSpeed: 800,
  onLeave: function(origin, destination) {
    // update fill height
    const progress = (destination.index / (totalSections - 1)) * 100;
    timelineFill.style.height = `${progress}%`;

    // update active label
    labels.forEach((label, i) => {
      label.classList.toggle("active", i === destination.index);
    });
  }
});

// jump to sections directly
labels.forEach(label => {
  label.addEventListener('click', () => {
    const index = parseInt(label.dataset.index, 10); // get section index
    fullpage_api.moveTo(index + 1); // FullPage.js sections are 1-based
  });
});

const categories = document.querySelectorAll(".skills-category");
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs and categories
    tabs.forEach(t => t.classList.remove("active"));
    categories.forEach(c => c.classList.remove("active"));

    // Activate clicked tab and corresponding category
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// const eduTimeline = document.querySelector(".education-timeline-wrapper");
// const eduItems = document.querySelectorAll(".edu-item");

// eduTimeline.addEventListener("scroll", () => {
//   const scrollLeft = eduTimeline.scrollLeft;
//   const containerWidth = eduTimeline.scrollWidth - eduTimeline.clientWidth;

//   eduItems.forEach((item, i) => {
//     const itemOffset = item.offsetLeft;
//     if (scrollLeft + 100 >= itemOffset) {
//       item.querySelector(".edu-dot").style.background = "#00ffff";
//     } else {
//       item.querySelector(".edu-dot").style.background = "rgba(255,255,255,0.3)";
//     }
//   });
// });
