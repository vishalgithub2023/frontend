const loadData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price%27")
    const data = await response.json()
    document.getElementById("productList").innerHTML =
        data.products.map((elm) => (
            `<li>${elm.id}-${elm.title}</li>`)).join("")
}