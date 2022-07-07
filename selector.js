// Get the shoe name
var url = new URL(window.location.href);
var shoe_name = url.searchParams.get("name");

// Find the shoe model or default to the sneaker one
if(shoe_name != null) {
    document.getElementById("model").setAttribute("src", "models/" + shoe_name + ".glb");
    document.getElementById("model").setAttribute("ios-src", "models/" + shoe_name + ".usdz");
}
else {
    document.getElementById("model").setAttribute("src", "models/sneaker.glb");
    document.getElementById("model").setAttribute("ios-src", "models/sneaker.usdz");
}