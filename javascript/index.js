import { renderProjects } from './renderProjects.js';
import { renderSkills, dragAndDrop } from './renderSkills.js';
import { sendButton, js_send, js_form } from './sendMail.js';

/**
 *  PORFOLIO SECTION
 */
// Render project list
renderProjects();

// Re-render when screen resized
window.addEventListener('resize', renderProjects);

// Accordion arrow toggle
export function AccordionArrowToggle() {
    const cardAccordions = document.querySelectorAll('.card-accordion');
    for (let i = 0; i < cardAccordions.length; i++) {
        const imageEl = cardAccordions[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.classList;
        const targetDiv = cardAccordions[i].lastElementChild.classList;

        if ( targetDiv.contains('show')) imageEl.add('arrow-rotate');
        cardAccordions[i].addEventListener('click', () => {
            targetDiv.contains('show') ? imageEl.add('arrow-rotate') : imageEl.remove('arrow-rotate');
        });
    }
}
AccordionArrowToggle();

/**
 *  SKILLS SECTION
 */
// Render skill list
renderSkills();
dragAndDrop();

// Re-render when screen resized
window.addEventListener('resize', event => {
    renderSkills();
    dragAndDrop();
});

/**
 *  CONTACT SECTION
 */
// Render Contact section
sendButton.onclick = js_send;
js_form.addEventListener("submit", function (e) {
    e.preventDefault();   
});

/**
 *  FOOTER SECTION
 */
// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

$('.collapsible').click(function () {
    $('.collapse').collapse('hide');
});

$(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});


/**
 *  Phone Number rendering
 */
// Detertine if the client is in Canada
$.getJSON('https://ipapi.co/json/', function(result) {
  if(result.country === 'CA') {
    $('.phone-number').text('(778) 984-6017');
    $('.my-resume').prop('href', 'file/andypkwanResume_Van.docx')
  } 
});