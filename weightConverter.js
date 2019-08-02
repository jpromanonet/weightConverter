document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046 + " gr";
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046 + " Kg";
  document.getElementById("ozOutput").innerHTML = lbs * 16 + " Oz";
  document.getElementById("stOutput").innerHTML = lbs / 14 + " st";
  document.getElementById("tnOutput").innerHTML = lbs /  2204.623 + " tn";
});
