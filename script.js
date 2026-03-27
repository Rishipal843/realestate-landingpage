
    document.addEventListener("DOMContentLoaded", () => {
        
    const body = document.body;
    const scrollWrapper = document.getElementById("scroll-wrapper");

    function updateBodyHeight() {
        // Set the body height to match the container's height 
        // so the scrollbar knows how long the page is
        body.style.height = scrollWrapper.getBoundingClientRect().height + "px";
    }

    window.addEventListener("scroll", () => {
        // Get the current scroll position
        const scrollY = window.scrollY;
        // Move the container up by the scroll amount
        scrollWrapper.style.transform = `translateY(-${scrollY}px)`;
    });

    // Recalculate height on resize or image load
    window.addEventListener("resize", updateBodyHeight);
    window.addEventListener("load", updateBodyHeight);

        // 1. Setup the Observer
        const observerOptions = {
            threshold: 0.15, // Trigger when 15% of the element is visible
            rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the bottom
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'active' class to start the CSS animation
                    entry.target.classList.add('active');
                    
                    // Stop watching this element once it's animated (optional)
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // 2. Target all elements that have our reveal classes
// Target all reveal types
const elementsToAnimate = document.querySelectorAll('.reveal-up, .reveal-drop, .reveal-left, .reveal-right');        
        // 3. Start observing each element
        elementsToAnimate.forEach(el => {
            scrollObserver.observe(el);
        });
    });
