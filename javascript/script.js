
			// Listen for click on the document
		document.addEventListener('click', function (event) {
		  
		  //Bail if our clicked element doesn't have the class
		  if (!event.target.classList.contains('accordion-toggle')) return;
		  
		  // Get the target content
		  var content = document.querySelector(event.target.hash);
		  if (!content) return;
		  
		  // Prevent default link behavior
		  event.preventDefault();
		  
		  // If the content is already expanded, collapse it and quit
		  if (content.classList.contains('active')) {
		    content.classList.remove('active');
		    return;
		  }
		  
		  // Get all open accordion content, loop through it, and close it
		  var accordions = document.querySelectorAll('.accordion-content.active');
		  for (var i = 0; i < accordions.length; i++) {
		    accordions[i].classList.remove('active');
		  }
		  
		  // Toggle our content
		  content.classList.toggle('active');
		})


function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);


  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', Marquee('.marquee', 0.4))