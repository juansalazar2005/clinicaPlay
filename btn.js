let btnBuscar = document.getElementById("searchButton")
let searchBar = document.getElementById("searchBar")
let btnShow = true

btnBuscar.addEventListener("click", function() {
    console.log("clicked")

    if (btnShow == true) {
        searchBar.classList.remove("searchInputFalse")
        btnShow = false
    }
    else {
        if (btnShow == false) {
            searchBar.classList.add("searchInputFalse")
        btnShow = true
        }
    }

})