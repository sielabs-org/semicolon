document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- GitHub Star Count ---
    async function fetchGitHubStars() {
        const starCountElement = document.getElementById('github-stars');
        if (!starCountElement) return;

        const CACHE_KEY = 'github_stars';
        const CACHE_EXPIRY_KEY = 'github_stars_expiry';
        const CACHE_DURATION = 3600 * 1000; // 1 hour

        const cachedStars = localStorage.getItem(CACHE_KEY);
        const cacheExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);

        if (cachedStars && cacheExpiry && Date.now() < parseInt(cacheExpiry, 10)) {
            starCountElement.textContent = ` ${cachedStars}`;
            return;
        }

        try {
            const response = await fetch('https://api.github.com/repos/sielabs-org/semicolon');

            if (response.ok) {
                const data = await response.json();
                const stars = data.stargazers_count;
                const formattedStars = stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars;

                starCountElement.textContent = ` ${formattedStars}`;
                localStorage.setItem(CACHE_KEY, formattedStars);
                localStorage.setItem(CACHE_EXPIRY_KEY, Date.now() + CACHE_DURATION);
            } else if (cachedStars) {
                starCountElement.textContent = ` ${cachedStars}`;
            }
        } catch (e) {
            if (cachedStars) {
                starCountElement.textContent = ` ${cachedStars}`;
            }
        }
    }

    fetchGitHubStars();
});
