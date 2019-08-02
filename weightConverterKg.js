document.getElementById("output").style.visibility = "hidden";
document.getElementById("kgInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  document.getElementById("gramsOutput").innerHTML = kg * 1000 + " gr";
  document.getElementById("lbsOutput").innerHTML = kg * 2.2046 + " lbs";
  document.getElementById("ozOutput").innerHTML = kg * 35.274 + " Oz";
  document.getElementById("stOutput").innerHTML = kg / 6.35 + " st";
  document.getElementById("tnOutput").innerHTML = kg /  1000 + " tn";
});
