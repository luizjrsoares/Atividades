function LeiaMaisMenos() {
    var etc = document.getElementById("etc");
    var maistexto = document.getElementById("mais");
    var btn1 = document.getElementById("btn1");
  
    if (etc.style.display === "none") {
      etc.style.display = "inline";
      btn1.innerHTML = "Leia mais";
      maistexto.style.display = "none";
    } else {
      etc.style.display = "none";
      btn1.innerHTML = "Leia menos";
      maistexto.style.display = "inline";
    }
  }