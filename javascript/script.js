//Slider
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




//Button scroll back to top
		//Get the button:
		mybutton = document.getElementById("myBtnTop");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		  } else {
			mybutton.style.display = "none";
		  }
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
		  document.body.scrollTop = 0; // For Safari
		  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
