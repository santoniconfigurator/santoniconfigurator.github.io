// Get the shoe name
var url = new URL(window.location.href);
var shoe_name = url.searchParams.get("name");

var default_raw_url = "https://raw.githubusercontent.com/santoniconfigurator/santoniconfigurator.github.io/main/models/";

// Find the shoe model or default to the sneaker one
if(shoe_name != null) {
    document.getElementById("model").setAttribute("src", default_raw_url + shoe_name + ".glb");
    document.getElementById("model").setAttribute("ios-src", default_raw_url + shoe_name + ".usdz");
}
else {
    document.getElementById("model").setAttribute("src", "models/sneaker.glb");
    document.getElementById("model").setAttribute("ios-src", "models/sneaker.usdz");
}