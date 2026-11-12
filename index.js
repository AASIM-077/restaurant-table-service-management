// Change website pages
function showPage(pageName, button) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageName).classList.add("active");

    document.querySelectorAll("nav button").forEach(function(btn) {
        btn.classList.remove("active");
    });

    if(button) {
        button.classList.add("active");
    }
}

// Table booking
function bookTable(event) {
    event.preventDefault();

    document.getElementById("bookingMessage").innerHTML =
        "Your table booking request has been submitted!";

    event.target.reset();
}

// Food order
function placeOrder(event) {
    event.preventDefault();

    let price = Number(document.getElementById("food").value);
    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    document.getElementById("orderMessage").innerHTML =
        "Order submitted successfully! Total Amount: ₹" + total;

    event.target.reset();
}

// Generate bill
function generateBill(event) {
    event.preventDefault();

    let name = document.getElementById("customer").value;
    let amount = Number(document.getElementById("amount").value);
    let tax = Number(document.getElementById("tax").value);

    let total = amount + tax;

    document.getElementById("result").innerHTML =
        "Customer Name: " + name +
        "<br>Food Amount: ₹" + amount +
        "<br>Tax: ₹" + tax +
        "<br>Total Bill: ₹" + total;
}

// Contact message
function sendMessage(event) {
    event.preventDefault();

    document.getElementById("contactMessage").innerHTML =
        "Thank you! Your message has been submitted.";

    event.target.reset();
}
