


//---------------------------//
//         COUNTDOWN         //
//---------------------------//
// Countdown Timer target date to Sep 12, 2024
const targetDate = new Date("September 11, 2024 00:00:00").getTime();

// Updating timer every second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculating days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displaying countdown
    document.getElementById("countdown").innerHTML = `
        <div><strong>${padNumbers(days)}</strong><span class="timer">أيام</span></div>
        <div><strong>${padNumbers(hours)}</strong><span class="timer">ساعات</span></div>
        <div><strong>${padNumbers(minutes)}</strong><span class="timer">دقائق</span></div>
        <div><strong>${padNumbers(seconds)}</strong><span class="timer">ثواني</span></div>
    `;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<p>WELCOME HOME</p>";
    }
}, 1000);

function padNumbers(number) {
    return number < 10 ? "0" + number : number;

}





//---------------------------//
//       NEWS SELECTOR       //
//---------------------------//
// Total number of news features
const totalNewsFeatures = document.querySelectorAll('.news-features > div').length;

// Current page index
let currentPage = 1;

// Function to show news features for the current page
function showNewsFeatures() {
    // Add console log to check if the function is being called
    console.log('showNewsFeatures() called');

    // Hide all news features
    document.querySelectorAll('.news-features > div').forEach(function(feature) {
        feature.style.display = 'none';
    });

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * 2; // Show three features per page
    const endIndex = Math.min(startIndex + 2, totalNewsFeatures);

    // Show news features for the current page
    for (let i = startIndex; i < endIndex; i++) {
        const newsFeature = document.querySelector('.news-feature-' + (i + 1));
        if (newsFeature) {
            newsFeature.style.display = 'block';
        }
    }
	
	// Highlight the current page button
    const selectedPage = document.getElementById('page' + currentPage);
    if (selectedPage) {
        selectedPage.classList.add('font-bold');
    }

    // Add console log to check the value of currentPage
    console.log('Current Page:', currentPage);
}

// Function to navigate to the previous page
function prevPage() {
    // Add console log to check if the function is being called
    console.log('prevPage() called');

    if (currentPage > 1) {
        currentPage--;
        showNewsFeatures();
    }
}

// Function to navigate to the next page
function nextPage() {
    // Add console log to check if the function is being called
    console.log('nextPage() called');

    const totalPages = Math.ceil(totalNewsFeatures / 2); // Three features per page
    if (currentPage < totalPages) {
        currentPage++;
        showNewsFeatures();
    }
}

// Function to navigate to a specific page
function goToPage(page) {
    // Add console log to check if the function is being called and the value of the page argument
    console.log('goToPage() called with page:', page);

    if (page >= 1 && page <= Math.ceil(totalNewsFeatures / 2)) {
        currentPage = page;
        showNewsFeatures();
    }
}

// Function to generate the page selector buttons dynamically
function generatePageSelector() {
    const totalPages = Math.ceil(totalNewsFeatures / 2); // Three features per page
    const pageSelector = document.querySelector('.selector');

    // Clear existing buttons
    pageSelector.innerHTML = '';

    // Add first page button
    addButton('<<', 1);

    // Add previous page button
    if (currentPage > 1) {
        addButton('<', currentPage - 1);
    }

    // Add current page and adjacent pages
    for (let a = Math.max(1, currentPage - 1); a <= Math.min(currentPage + 1, totalPages); a++) {
        addButton(a, a, a === currentPage);
    }

    // Add next page button
    if (currentPage < totalPages) {
        addButton('>', currentPage + 1);
    }

    // Add last page button
    addButton('>>', totalPages);

    // Function to add a page button
    function addButton(label, page, isActive = false) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('btn', 'btn-default', 'mx-1');
        pageButton.textContent = label;
        pageButton.addEventListener('click', function() {
            goToPage(page);
        });
        if (isActive) {
            pageButton.innerHTML = '<strong>' + label + '</strong>';
        }
        pageSelector.appendChild(pageButton);
    }
}

// Show news features for the initial page
showNewsFeatures();

// Generate page selector buttons
generatePageSelector();






//---------------------------//
//         PLAYLIST          //
//---------------------------//

function changeVideo(button, videoUrl, title) {
    document.querySelectorAll('.select-video').forEach(function(btn) {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    var videoContainer = document.querySelector('.video-container');

    videoContainer.innerHTML = `
        <div class="video-playlist">
            <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
           
        </div>
    `;
}






//---------------------------//
//         FAQS SEC          //
//---------------------------//
document.addEventListener("DOMContentLoaded", function() {
    var faqsAccordions = document.querySelectorAll('.faqs-accordion');
    var faqsPanels = document.querySelectorAll('.faqs-panel');

    // Hide additional FAQs initially
    for (var i = 5; i < faqsAccordions.length; i++) {
        faqsAccordions[i].style.display = 'none';
    }

    // Show the first 5 FAQ accordions and make them clickable
    for (var i = 0; i < Math.min(faqsAccordions.length, 5); i++) {
        faqsAccordions[i].addEventListener('click', togglePanel);
    }

 	function togglePanel() {
    var panel = this.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('active'); // Toggle active class for clicked accordion

    // Toggle icon based on its current content
    var icon = this.querySelector('.icon');
    icon.textContent = icon.textContent === '+' ? '-' : '+';
	}
	
	
    // Show/hide remaining FAQs when "View More" button is clicked
    var viewMoreBtn = document.getElementById('viewMoreBtn');
    viewMoreBtn.addEventListener('click', function() {
        for (var i = 5; i < faqsAccordions.length; i++) {
            var accordion = faqsAccordions[i];
            accordion.style.display = accordion.style.display === 'block' ? 'none' : 'block';
            accordion.classList.toggle('active-accordion'); // Toggle active class for remaining accordions
            if (accordion.style.display === 'block') {
                accordion.addEventListener('click', togglePanel);
            } else {
                accordion.removeEventListener('click', togglePanel);
            }
        }
        this.textContent = this.textContent === 'عرض أقل' ? 'عرض المزيد' : 'عرض أقل';
    });
});