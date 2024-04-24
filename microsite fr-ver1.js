//---------------------------//
//           NAVBAR          //
//---------------------------//

//function to hide the menu when option is clicked
$(document).ready(function() {
    $('.navbar-nav > li > a').not('[data-toggle="dropdown"]').click(function() {
        var $navbarCollapse = $('.navbar-collapse');
        $navbarCollapse.collapse('hide');
        setTimeout(function() {
            $navbarCollapse.removeClass('in');
        }, 350); 
    });
});

//---------------------------//
//         COUNTDOWN         //
//---------------------------//
// Countdown Timer target date to May 12, 2024
const targetDate = new Date("May 12, 2024 00:00:00").getTime();

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
        <div>${padNumbers(days)}<span class="timer">JOURS</span></div>
        <div>${padNumbers(hours)}<span class="timer">HEURES</span></div>
        <div>${padNumbers(minutes)}<span class="timer">MINUTES</span></div>
        <div>${padNumbers(seconds)}<span class="timer">SECONDES</span></div>
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
//       V-CON HISTORY       //
//.        MAIN MENU         //
//---------------------------//
var acc = document.getElementsByClassName("menu-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    
    // Close all panels except the one clicked
    var allPanels = document.querySelectorAll(".history-panel");
    for (var j = 0; j < allPanels.length; j++) {
      if (allPanels[j] !== panel) {
        allPanels[j].style.display = "none";
        acc[j].classList.remove("accordion-active");
      }
    }

    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    this.classList.toggle("accordion-active");
  });
}
//END


//---------------------------//
//       V-CON HISTORY       //
//.        YEAR MENU         //
//---------------------------//
var yearSelection = document.getElementsByClassName("year-selection");
for (var i = 0; i < yearSelection.length; i++) {
  yearSelection[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    // Close all year content panels except the one clicked
    var allPanels = this.parentNode.querySelectorAll(".year-content");
    for (var j = 0; j < allPanels.length; j++) {
      if (allPanels[j] !== panel) {
        allPanels[j].style.display = "none";
        yearSelection[j].classList.remove("selection-active");
      }
    }

    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    this.classList.toggle("selection-active"); // Toggle active class for remaining content
  });
}
//END




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
        this.textContent = this.textContent === 'VOIR MOINS' ? 'VOIR PLUS' : 'VOIR MOINS';
    });
});



//---------------------------//
//         MERCH GALLERY     //
//---------------------------//
document.getElementById('view-catalogue-button').addEventListener('click', function() {
    $('#merch-gallery').removeClass('hidden');
    $.fancybox.open({
        src: '#merch-gallery'
    });
});




//---------------------------//
//       NEWS SELECTOR       //
//---------------------------//
// Total number of news features
const totalNewsFeatures = document.querySelectorAll('.news-features > div').length;

// Current page index
let currentPage = 1;

// Function to show news features for the current page
function showNewsFeatures() {
    // Hide all news features
    document.querySelectorAll('.news-features > div').forEach(function(feature) {
        feature.style.display = 'none';
    });

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * 3; // Show three features per page
    const endIndex = Math.min(startIndex + 3, totalNewsFeatures);

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
}
		

// Function to navigate to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showNewsFeatures();
    }
}

// Function to navigate to the next page
function nextPage() {
    const totalPages = Math.ceil(totalNewsFeatures / 3); // Two features per page
    if (currentPage < totalPages) {
        currentPage++;
        showNewsFeatures();
    }
}

// Function to navigate to a specific page
function goToPage(page) {
    if (page >= 1 && page <= Math.ceil(totalNewsFeatures / 3)) {
        currentPage = page;
        showNewsFeatures();
    }
}

// Show news features for the initial page
showNewsFeatures();







//---------------------------//
//      SOCIAL STORIES       //
//---------------------------//
document.addEventListener("DOMContentLoaded", function() {
    var viewMoreButton = document.getElementById("view-more-stories");
    var hiddenPosts = document.querySelectorAll(".hidden-story");

    viewMoreButton.addEventListener("click", function() {
        hiddenPosts.forEach(function(post) {
            post.classList.toggle("hidden-story");
        });

        if (viewMoreButton.textContent === "VOIR PLUS D'HISTOIRES") {
            viewMoreButton.textContent = "VOIR MOINS D'HISTOIRES";
        } else {
            viewMoreButton.textContent = "VOIR PLUS D'HISTOIRES";
        }
    });
});







//---------------------------//
//       PLAYLIST SEC        //
//---------------------------//
// Keep track of the currently playing video element
let currentVideo = null;

// Function to play a video
function playVideo(videoElement) {
    // Pause the currently playing video, if any
    if (currentVideo && currentVideo !== videoElement) {
        currentVideo.pause();
    }

    // Set the new video as the current one
    currentVideo = videoElement;

    // Play the video
    videoElement.play();
}

// Function to handle clicking on thumbnails and play the corresponding video
function goToPlaylistPage(pageNumber) {
    // Hiding all playlist pages
    var pages = document.querySelectorAll('.playlist-page');
    pages.forEach(function(page) {
        page.classList.remove('video-active');
    });

    // Show the selected playlist page
    var selectedPage = document.querySelector('.page-' + pageNumber);
    selectedPage.classList.add('video-active');

    // Update thumbnail styles
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail, index) {
        if (index + 1 === pageNumber) {
            thumbnail.classList.add('active-thumbnail');
        } else {
            thumbnail.classList.remove('active-thumbnail');
        }
    });

    // Play the corresponding video
    var video = document.querySelector('.video-' + pageNumber + 'video');
    playVideo(video);
}
//Function to create thumbnails
function createThumbnails() {
    var thumbnailContainer = document.querySelector('.thumbnail-container');
    var totalPages = document.querySelectorAll('.playlist-page').length;

	
	
	//Change Thumbnail for each video. First one is the first video//
    for (var h = 1; h <= totalPages; h++) {
        var thumbnail = document.createElement('img');
        if (h === 1) {
            thumbnail.src = 'Assets/3. Events, Gallery and Socials/3. News/04122024-vmalaysia2024-mission-unstoppable-vp-donna-imson-lecaroz924fcf8f-6ce5-47c4-b821-611cb7f1a564.png';
        } else if (h === 2) {
			thumbnail.src = 'Assets/3. Events, Gallery and Socials/3. News/04122024-vmalaysia2024-mission-unstoppable-vp-sachin-gupta5005745c-f83e-4540-a900-adff4fdfc17a.png';
		} else if (h === 3) {
			thumbnail.src = 'Assets/3. Events, Gallery and Socials/3. News/04112024-vmalaysia2024-mission-unstoppable-vp-ranjit-singh67aa8380-f32d-4dfa-8438-564815e31383.png';
		} else if (h === 4) {
			thumbnail.src = 'Assets/3. Events, Gallery and Socials/3. News/04112024-join-v-kids-and-v-teens-at-vmalaysia2024-1d65ef0a8-e856-42c6-a305-1641297b571d.jpg';
		} else if (h === 5) {
			thumbnail.src = 'https://i.ibb.co/BZB5hxj/04052024-VMalaysia2024-Mission-Unstoppable-VP-TG-Kintanar.jpg';
		} else if (h === 6) {
			thumbnail.src = 'https://i.ibb.co/JRtV3cp/04052024-VMalaysia2024-Mssion-Unstoppable-Sathi-Senathirajah.jpg';
		} else if (h === 7) {
			thumbnail.src = 'https://i.ibb.co/9wSdQTg/04012024-VMalaysia2024-Rise-Towards-Your-Unstoppable-Greatness.jpg';
		} else if (h === 8) {
			thumbnail.src = 'https://i.ibb.co/k53BP5J/03302024-VMalaysia2024-Mission-Unstoppable-VP-Dev-Johl.jpg';
		} else if (h === 9) {
			thumbnail.src = 'https://i.ibb.co/gZX5Rt8/03262024-VMalaysia2024-Mission-Unstoppable-VP-David-Sharma.jpg';
		} else if (h === 10) {
			thumbnail.src = 'https://i.ibb.co/3SCqGQr/02212024-VMalaysia2024-Make-Your-Decision-to-Be-Unstoppable.jpg';
		}
		
        thumbnail.alt = 'Thumbnail ' + h;
        thumbnail.classList.add('thumbnail');
        thumbnail.dataset.page = h;

        thumbnail.addEventListener('click', function() {
            var page = parseInt(this.dataset.page);
            goToPlaylistPage(page);
        });
		
		// Set the first thumbnail as active (not muted)
        if (h === 1) {
            thumbnail.classList.add('active-thumbnail');
        } else {
            thumbnail.muted = true; // Mute the rest of the thumbnails
        }

        thumbnailContainer.appendChild(thumbnail);
    }
}


// Call the function to create thumbnails
createThumbnails();







//---------------------------//
//     LANGUAGE CHANGE       //
//---------------------------//
document.addEventListener("DOMContentLoaded", function() {
    const languageDropdown = document.querySelector('.dropdown-menu');

    async function fetchTranslations(lang) {
        const response = await fetch(`translations_${lang}.json`);
        console.log(`Response status for translations_${lang}.json: ${response.status}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch translations for language ${lang}`);
        }
        return response.text();
    }

    async function updateLanguage(lang) {
		try {
			const translationsText = await fetchTranslations(lang);
			const translations = JSON.parse(translationsText);

			const defaultTranslations = {
				'en': 'English',
				'ar': 'العربية',
				'bi': 'Bahasa Indonesia',
				'fr': 'Français',
				'ru': 'Русский',
				'tr': 'Türkçe',
				'si': 'සිංහල',
				'ta': 'தமிழ்',
			};

			// Special handling for RTL languages
			const isRTL = ['ar'].includes(lang);
			document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
			
			if (isRTL) {
			const nav = document.querySelector('nav');
				if (nav) {
					nav.style.float = 'left';
				}

			const logo = document.querySelector('.navbar-v-logo');
				if (logo) {
					logo.style.float = 'left';
				}
			}

			// Update translations for elements with 'translate' class
			const elementsToTranslate = document.querySelectorAll('.translate');
			elementsToTranslate.forEach(element => {
				const key = element.getAttribute('data-key');
				const translation = translations[key];
				if (translation !== undefined && typeof translation === 'string') {
					element.textContent = translation;
					if (lang === 'ar') {
						element.classList.add('arabic-text'); //Setting styles for Arabic Texts
					} else {
						element.classList.remove('arabic-text'); //Removing styles if non-Arabic
					}
				} else {
					console.warn(`Translation not found for key '${key}'`);
				}
			});

			// Update language options in the dropdown menu
			const dropdownOptions = document.querySelectorAll('.dropdown-menu [data-lang]');
			dropdownOptions.forEach(option => {
				const langCode = option.getAttribute('data-lang');
				if (langCode) {
					const langTranslation = translations[langCode] || defaultTranslations[langCode];
					if (langTranslation && typeof langTranslation === 'string') {
						option.textContent = langTranslation;
					} else {
						console.warn(`Translation not found or invalid for language code '${langCode}'`);
					}
				} else {
					console.warn(`No language code found for dropdown option`);
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

    languageDropdown.addEventListener('click', function(event) {
        if (event.target.matches('.dropdown-menu [data-lang]')) {
            const selectedLang = event.target.getAttribute('data-lang');
            updateLanguage(selectedLang);
        }
    });

    updateLanguage('en'); // Initial language setup
});
