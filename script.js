function showCar(car) {
  const carName = document.getElementById("carName");
  const details = document.getElementById("details");

  if (car === "bmw") {
    carName.innerText = "BMW M4";
    details.innerHTML = `
      Engine: 3.0L Twin-Turbo<br>
      Power: 503 HP<br>
      0–100 km/h: 3.8s
    `;
  }

  if (car === "audi") {
    carName.innerText = "Audi R8";
    details.innerHTML = `
      Engine: V10<br>
      Power: 602 HP<br>
      Top Speed: 330 km/h
    `;
  }

  if (car === "lambo") {
    carName.innerText = "Lamborghini Huracán";
    details.innerHTML = `
      Engine: V10<br>
      Power: 630 HP<br>
      0–100 km/h: 2.9s
    `;
  }
}
