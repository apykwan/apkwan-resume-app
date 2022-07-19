import { renderProjects } from './renderProjects.js';
import { renderSkills, dragAndDrop } from './renderSkills.js';
import { sendButton, js_send, js_form } from './sendMail.js';

/**
 *  Portfolio Section
 */
// Render project list
renderProjects();

// Re-render when screen resized
window.addEventListener('resize', renderProjects);

/**
 *  Skills Section
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
 *  Contact Section
 */

// Render Contact section
sendButton.onclick = js_send;
js_form.addEventListener("submit", function (e) {
    e.preventDefault();   
});

/**
 *  Footer Section
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
