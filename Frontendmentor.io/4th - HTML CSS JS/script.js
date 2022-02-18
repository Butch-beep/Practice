var slider = document.getElementById("slider");
var output = document.getElementById("currentPrice");
var views = document.getElementById("pageViews");
var billingToggle = document.getElementById("billingToggle");
var billing = document.getElementById("billing");
output.innerHTML = "$" + slider.value + ".00";

slider.oninput = function() {
    output.innerHTML = " $" + this.value + ".00";
    views.innerHTML = slider.value + "K PAGEVIEWS";
}

function myFunction() {
    if (billingToggle.checked == true){
        billing.innerHTML = "year";
    } else {
        billing.innerHTML = "month";
    }
}