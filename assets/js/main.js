// "use strict";

// let accordionExamples = Array.from(
//   document.querySelectorAll(".accordion-item").forEach(function (item) {
//     item.onclick = function () {
//       alert("ok");
//       let accordionBtn = document.querySelector(".accordion-button");
//       // look for what accordionBtn controls
//       let aria_controls = accordionBtn.getAttribute("aria-controls");

//       // look for the element with id that matches what accordionBtn controls
//       let accordionControlledElement = document.getElementById(aria_controls);
//         if(accordionControlledElement.classList.contains('collapsing')){
//             accordionControlledElement.classList.replace('collapse', 'show')
//         }
//         alert('levo')
//       //   alert("clicked");
//       //   alert(aria_controls);
//       console.log(accordionBtn);
//       console.log(accordionControlledElement);
//     };
//   })
// );

// let accordionBtn = document.querySelector(".accordion-button");
// accordionBtn.onclick = function () {
//   // look for what accordionBtn controls
//   let aria_controls = accordionBtn.getAttribute("aria-controls");

//   // look for the element with id that matches what accordionBtn controls
//   let accordionControlledElement = document.getElementById(aria_controls);

//   //   alert("clicked");
//   //   alert(aria_controls);
//   console.log(accordionBtn);
//   console.log(accordionControlledElement);
// };
