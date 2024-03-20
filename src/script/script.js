const rateTabs = document.querySelectorAll(".rate-tab");

rateTabs.forEach(rateTab => {
    rateTab.addEventListener("click", function() {
        rateTabs.forEach(tab => {
            tab.classList.remove("rate-tab-active");
        });
        this.classList.add("rate-tab-active")
    })
})