// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".games");
//   const mainElement = document.querySelector("main");
//   let currentIndex = 0;
//   const totalItems = items.length;
//   const intervalTime = 5000; // 5 seconds
//   items.forEach((item) => {
//     const bgUrl = item.getAttribute("data-bg");
//     item.style.backgroundImage = bgUrl;
//   });
//   function cycleBackgroundImage() {
//     // Set background image for the main element
//     items.forEach((item) => (item.style.outline = ""));
//     items.forEach((item) => (item.style.boxShadow = ""));
//     items.forEach((item) => (item.style.transform = ""));

//     mainElement.style.backgroundImage =
//       items[currentIndex].getAttribute("data-bg");

//     document.body.style.backgroundImage =
//     items[currentIndex].getAttribute("data-bg");

//     items[currentIndex].style.outline = "3px solid greenyellow";
//     items[currentIndex].style.outlineOffset = "2px";
//     items[currentIndex].style.boxShadow = "0px 0px 20px greenyellow";
//     items[currentIndex].style.transform = "scale(1.5) translateY(-15%)";

//     // Update the index for the next cycle
//     currentIndex = (currentIndex + 1) % totalItems;
//   }

//   // Initial call to set the first element's background image
//   cycleBackgroundImage();

//   // Set an interval to cycle through the elements
//   setInterval(cycleBackgroundImage, intervalTime);
// });

//

// document.addEventListener("DOMContentLoaded", function () {
//     const items = document.querySelectorAll(".games");
//     const mainElement = document.querySelector("main");
//     let currentIndex = 0;
//     const totalItems = items.length;
//     const intervalTime = 5000; // 5 seconds
  
//     items.forEach((item) => {
//       const bgUrl = item.getAttribute("data-bg");
//       item.style.backgroundImage = bgUrl;
  
//       // Add hover event listener
//       item.addEventListener("mouseenter", () => {
//         clearInterval(cycleInterval); // Stop cycling when hovering
//         setActiveElement(item);
//       });
  
//       item.addEventListener("mouseleave", () => {
//         startCycling(); // Restart cycling when not hovering
//       });
//     });
  
//     function setActiveElement(item) {
//       // Clear all styles
//       items.forEach((el) => {
//         el.style.outline = "";
//         el.style.boxShadow = "";
//         el.style.transform = "";
//       });
  
//       // Set the background for main and highlight the active item
//       const bgUrl = item.getAttribute("data-bg");
//       mainElement.style.backgroundImage = bgUrl;
//       item.style.outline = "3px solid greenyellow";
//       item.style.outlineOffset = "2px";
//       item.style.boxShadow = "0px 0px 20px greenyellow";
//       item.style.transform = "scale(1.5) translateY(-15%)";
//     }
  
//     function cycleBackgroundImage() {
//       // Cycle to the next element
//       currentIndex = (currentIndex + 1) % totalItems;
//       setActiveElement(items[currentIndex]);
//     }
  
//     // Start cycling images at intervals
//     let cycleInterval = setInterval(cycleBackgroundImage, intervalTime);
  
//     // Initial call to set the first element's background image
//     setActiveElement(items[currentIndex]);
//   });
  

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".games");
    const mainElement = document.querySelector("main");
    let currentIndex = 0;
    const totalItems = items.length;
    const intervalTime = 2500; // 5 seconds
    let cycleInterval; // To hold the interval ID
  
    items.forEach((item, index) => {
      const bgUrl = item.getAttribute("data-bg");
      item.style.backgroundImage = bgUrl;
  
      // Assume each item has a child div with the class 'info-div'
      const infoDiv = item.querySelector('.info-div');
  
      // Set initial visibility
      infoDiv.style.visibility = 'hidden';
  
      // Add hover event listener
      item.addEventListener("mouseenter", () => {
        clearInterval(cycleInterval); // Stop cycling when hovering
        currentIndex = index; // Set currentIndex to hovered element
        setActiveElement(item);
      });
  
      item.addEventListener("mouseleave", () => {
        startCycling(); // Restart cycling when not hovering
      });
    });
  
    function setActiveElement(item) {
      // Clear all styles and reset visibility
      items.forEach((el) => {
        el.style.outline = "";
        el.style.boxShadow = "";
        el.style.transform = "";
        
        // Hide the associated div
        const associatedDiv = el.querySelector('.info-div');
        if (associatedDiv) {
          associatedDiv.style.visibility = 'hidden';
        }
      });
  
      // Set the background for main and highlight the active item
      const bgUrl = item.getAttribute("data-bg");
      mainElement.style.backgroundImage = bgUrl;
      document.body.style.backgroundImage = bgUrl;
      item.style.outline = "3px solid greenyellow";
      item.style.outlineOffset = "2px";
      item.style.boxShadow = "0px 0px 20px greenyellow";
      item.style.transform = "scale(1.45) translateY(-15%)";
  
      // Show the associated div for the active item
      const activeDiv = item.querySelector('.info-div');
      if (activeDiv) {
        activeDiv.style.visibility = 'visible';
      }
    }
  
    function cycleBackgroundImage() {
      // Cycle to the next element
      currentIndex = (currentIndex + 1) % totalItems;
      setActiveElement(items[currentIndex]);
    }
  
    function startCycling() {
      // Start cycling images at intervals
      cycleInterval = setInterval(cycleBackgroundImage, intervalTime);
    }
  
    // Initial call to set the first element's background image
    setActiveElement(items[currentIndex]);
    startCycling(); // Start cycling immediately
  });
  
  