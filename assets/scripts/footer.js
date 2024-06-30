document.addEventListener("DOMContentLoaded", function() {
    // Footer content
    var footer = document.getElementById('footer');
    var footerContent = '<div class="footer-content">';
        footerContent += '<p>&copy; 2024 Neuro INT. All rights reserved.</p>';
        footerContent += '</div>';

    // Set the innerHTML of the footer element
    footer.innerHTML = footerContent;
});