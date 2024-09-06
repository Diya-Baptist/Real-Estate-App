document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.querySelector('.login-page');
    const searchResultsPage = document.querySelector('.search-results');
    const eligibilityCheckPage = document.querySelector('.eligibility-check');
    const transactionReviewPage = document.querySelector('.transaction-review');
    const approvedOfferPage = document.querySelector('.approved-offer');
    const periodButtons = document.querySelectorAll('.period-button');
    const periodTimeDisplay = document.querySelector('#period-time');
    const searchBar = document.querySelector('#search-bar');
    const resultItems = document.querySelectorAll('.result-item');

    // Initially show login page
    loginPage.style.display = 'block';

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        resultItems.forEach(item => {
            const title = item.querySelector('h2').textContent.toLowerCase();
            if (title.includes(query)) {
                item.style.display = 'flex'; // Show item if it matches
            } else {
                item.style.display = 'none'; // Hide item if it does not match
            }
        });
    });

    // Hide other pages initially
    searchResultsPage.style.display = 'none';
    eligibilityCheckPage.style.display = 'none';
    transactionReviewPage.style.display = 'none';
    approvedOfferPage.style.display = 'none';

    // Handle login
    document.querySelector('.login-button').addEventListener('click', () => {
        loginPage.style.display = 'none';
        searchResultsPage.style.display = 'block';
    });

    // Handle search result selection (show eligibility check)
    let selectedApartment = null;

    resultItems.forEach(item => {
        item.addEventListener('click', () => {
            selectedApartment = {
                title: item.querySelector('h2').textContent,
                address: item.getAttribute('data-address'),
                price: item.getAttribute('data-price'),
                image: item.querySelector('img').src
            };

            searchResultsPage.style.display = 'none';
            eligibilityCheckPage.style.display = 'block';

            // Reset the eligibility form
            document.querySelector('.eligibility-form').reset();
        });
    });

    // Handle eligibility form submission
    document.querySelector('.submit-eligibility').addEventListener('click', (e) => {
        e.preventDefault();
        eligibilityCheckPage.style.display = 'none';
        transactionReviewPage.style.display = 'block';

        // Update transaction review page with selected apartment data
        document.querySelector('.transaction-review img').src = selectedApartment.image;
        document.querySelector('.transaction-review h2').textContent = selectedApartment.title;
        document.querySelector('.transaction-review p').textContent = selectedApartment.address;
        document.querySelector('.transaction-review .price').textContent = `₹ ${selectedApartment.price}`;
        // Add logic to calculate and display payment details
    });

    // Handle pay button on transaction review
    document.querySelector('.pay-button').addEventListener('click', () => {
        transactionReviewPage.style.display = 'none';
        approvedOfferPage.style.display = 'block';
    });

    // Handle period button selection
    periodButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deselect all buttons
            periodButtons.forEach(b => b.classList.remove('selected'));

            // Select the clicked button
            button.classList.add('selected');

            // Update period time text
            const selectedPeriod = button.innerText;
            periodTimeDisplay.innerText = `Period time: ${selectedPeriod}`;
        });
    });

    // Handle back button in the header to go back to search results
    document.querySelector('.back-button').addEventListener('click', () => {
        eligibilityCheckPage.style.display = 'none';
        searchResultsPage.style.display = 'block';
    });
});
