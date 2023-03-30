function checkAge() {
    var age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 0) {
      alert("Ange en giltig ålder");
    } else if (age <= 12) {
      alert("Du är ett barn");
    } else if (age <= 19) {
      alert("Du är en tonåring");
    } else if (age <= 64) {
      alert("Du är en vuxen");
    } else {
      alert("Du är en senior");
    }
  }