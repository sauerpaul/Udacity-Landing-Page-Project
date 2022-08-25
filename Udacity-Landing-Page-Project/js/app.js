/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Global Variables for Landing Page

const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar-list');


// Build the Navigation Function

function buildNavigationLinks() {
  // for...of loop to capture array of sections
  for (let sectionAttribute of sections) {
    let sectionID = sectionAttribute.getAttribute('id');
    let sectionData = sectionAttribute.getAttribute('data-nav');

    // Create list items for <ul> element
    const li = document.createElement('li');

    // Add anchor element to list items with section attributes
    li.innerHTML = `<a class='menu-link' href='#${sectionID}'>${sectionData}</a>`;

    // Append list items to #navbar-list
    ul.appendChild(li);
  }
};

// Call the Navigation Function

buildNavigationLinks();


// Section Active State

// Detect Viewport Location

function isInViewport() {

  // for...of loop for active state section
  for (let activeState of sections) {
    // Use .getBoundingClientRect to get the bounding rectangle of the viewport
    let activeClass = activeState.getBoundingClientRect(); 

    if (
      activeClass.top >= 0 && 
      activeClass.left >= 0 &&
      activeClass.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      activeClass.right <= (window.innerWidth || document.documentElement.clientWidth) 
      ) 
    // Add class="your-active-class" to each section when scrolling through the viewport
    { 
      activeState.classList.add('your-active-class'); // Add your-active-class
    } else {
      activeState.classList.remove('your-active-class'); // Remove your-active-class
    }
  };
};

// Event Listener for Function isInViewport()

window.addEventListener('scroll', isInViewport, true);


// Highlight Navigation List Items on Scroll

function highlightNavigation() {

  const navigationHighlighting = document.querySelectorAll('li');

  // for...loop to iterate over the array of sections
  for (let i = 0; i < sections.length; i++) {

    let sectionPosition = sections[i].getBoundingClientRect(); 

    if (
      sectionPosition.top >= 0 && 
      sectionPosition.left >= 0 &&
      sectionPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      sectionPosition.right <= (window.innerWidth || document.documentElement.clientWidth) 
      ) 
    // Add class="active" to each list item when scrolling through the section viewports
    { 
      navigationHighlighting[i].classList.add('active'); // Add Active Class
    } else {
      navigationHighlighting[i].classList.remove('active'); // Remove Active Class
    }
  };
};

// Event Listener for Scroll Highlighting

window.addEventListener('scroll', highlightNavigation, false);


// Scroll to Section from Navigation Link

const navigationLinks = document.getElementsByClassName('menu-link');

// for...of loop to capture menu-link HTMLCollection
for (let navbarLink of navigationLinks) {
  // Event Listener for Navigation Links
  navbarLink.addEventListener('click', function(e) {

    let scrollToAnchor = navbarLink.getAttribute('href');
    e.preventDefault();
    // Scroll to anchor position using .scrollIntoView method
    document.querySelector(scrollToAnchor).scrollIntoView(
      {
        behavior: 'smooth',
      }
    );
  });
};


// Scroll to Anchor ID using scrollTO Event

const button = document.getElementById('anchor').addEventListener('click', function() {

  // Use window.scrollTo() Method
  window.scrollTo(
    {
      top: 200,
      behavior: 'smooth'
    }
  );
});


// Creating Collapsible Sections

const collapseSections = document.getElementsByClassName('landing-container');

// for...loop through <div> elements
for (let i = 0; i < collapseSections.length; i++) {

  // Use classList.toggle() Method - CSS is Provided
  collapseSections[i].addEventListener('click', function() {
    this.classList.toggle('collapse');
  });
};
