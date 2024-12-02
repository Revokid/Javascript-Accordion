document.querySelectorAll('.accordion > div > a').forEach(function(link, index) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Use string concatenation instead of template literals
        const sectionId = 'section-' + (index + 1);
        const section = document.querySelector('#' + sectionId);
        
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            console.log('Section ' + (index + 1) + ' is now open');
        } else {
            section.style.display = 'none';
            console.log('Section ' + (index + 1) + ' is now closed');
        }
    });
});
