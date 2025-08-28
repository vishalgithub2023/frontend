const rectangle = () => {
    alert("Outer rectangle clicked")
}
const rectangle2 = (event) => {
    event.stopPropagation()
    alert("Inner rectangle clicked")
}
const rectangle3 = (event) => {
    event.stopPropagation()
    alert("Child rectangle clicked")
}
