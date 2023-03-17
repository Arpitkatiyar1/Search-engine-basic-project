const search = () =>{
    const searchstring = document.getElementById("search-item").value.toUpperCase();
    const AccesOfproducList = document.getElementById("product-list");
    const listOfProducts = document.querySelectorAll(".product");
    const listOfProductName = document.getElementsByTagName("h2");
  

    for (var i = 0; i < listOfProducts.length; i++) {
        let productElement = listOfProducts[i].getElementsByTagName("h2")[0];

        if (productElement) {
            let productName = productElement.textContent || productElement.innerHTML;

            if (productName.toUpperCase().indexOf(searchstring) >-1) {
                 listOfProducts[i].style.display="";
            }
            else{
                listOfProducts[i].style.display="none";
            }
        }
    }
}