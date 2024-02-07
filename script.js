//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Check if the user's language preference is already stored
    const storedLanguage = sessionStorage.getItem('language');

    // If language preference is not stored, prompt the user to choose
    if (!storedLanguage) {
        const preferredLanguage = prompt('Please choose your preferred language (e.g., English, Spanish, French):');
        sessionStorage.setItem('language', preferredLanguage);
    }

    // Retrieve the stored language preference
    const currentLanguage = sessionStorage.getItem('language');

    // Display the current language preference (for demonstration purposes)
    console.log('Current language preference:', currentLanguage);
});
