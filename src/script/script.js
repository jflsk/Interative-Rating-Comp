const rateTabs = document.querySelectorAll(".rate-tab");
const ratingContainer = document.getElementById("rating-container");
const resultContainer = document.getElementById("result-container");
const revealResult = document.getElementById("rev-result__rate");

rateTabs.forEach(rateTab => {
    rateTab.addEventListener("click", function() {
        rateTabs.forEach(tab => {
            tab.classList.remove("rate-tab-active");
        });
        this.classList.add("rate-tab-active");

        const selectedValue = this.getAttribute("data-value");

        revealResult.textContent = selectedValue;
    });
});

function showResult() {
    const selectedTab = document.querySelector(".rate-tab.rate-tab-active");
    if (!selectedTab) {
        alert("Please select a rating before submitting.");
        return;
    }

    ratingContainer.classList.add('hidden');
    resultContainer.classList.add('result-container-active');
}