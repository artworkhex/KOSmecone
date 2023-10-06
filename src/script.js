// get search bar element
const searchInput = document.getElementById("searchInput");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("name");

// let hapus = document.getElementById('hapus');

// ================================
// ================================
// ================================
// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();

        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.removeAttribute = "block";
            // nameElement.style.display = "block";

        } else if (name.includes()) {
            nameElement.removeAttribute = "block";
            // nameElement.style.display = "none";
        }
    }
});


// responsive navbar
function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close", list.classList.
        add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))

}



