function calculate() {
    const deliveryCity = document.getElementById("deliveryCity").checked;
    const distance = document.getElementById("deliveryCityDistance").value;
    const displayDeliveryPrice = document.getElementById("displayDeliveryPrice");

    if (deliveryCity === true) {
        displayDeliveryPrice.innerText = "Cena za dostawe to: 5zł";
    } else if (distance) {
        displayDeliveryPrice.innerText = "Cena za dostawe to: " + (distance * 2) + "zł";
    } else {
        displayDeliveryPrice.innerText = "Proszę wybrać jedną z opcji";
    }
}