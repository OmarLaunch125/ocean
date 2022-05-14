console.log("Entramos API");
const serchFish = () => {
    const fishName = document.getElementById("txtFish").value.toLowerCase();   
    console.log(fishName);
    const url = `https://www.fishwatch.gov/api/species/${fishName}`
    fetch(url)
    .then(res => res.json())
    .then(jsonRes => console.log(jsonRes))
    .catch(error => console.log(error));
}