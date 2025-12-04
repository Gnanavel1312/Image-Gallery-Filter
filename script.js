const searchBox = document.getElementById("searchBox");
const items = document.querySelectorAll(".item");

searchBox.addEventListener("keyup", function() {
    let filter = searchBox.value.toLowerCase();

    items.forEach(item => {
        let altText = item.querySelector("img").alt.toLowerCase();

        if (altText.includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
