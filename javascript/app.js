const FetchData = async () => {
  var result = null;
  await fetch("../data/data.json")
    .then((res) => res.json())
    .then((data) => (result = data))
    .catch((error) => console.log(error));

  if (result != null) {
    DisplayData(result);
  }
};

const DisplayData = (spendingData) => {
  const chart = document.querySelector(".chart");

  spendingData.forEach((dayData) => {
    const height = (7 * dayData.amount) / 478.33;

    var eachDay = document.createElement("div");
    eachDay.classList.add("each-day");

    var tooltip = document.createElement("span");
    tooltip.textContent = `$${dayData.amount}`;
    tooltip.classList.add("tooltip");
    tooltip.style.bottom = `${height * 10 + 2}rem`;

    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${height * 10}rem`;
    bar.style.backgroundColor =
      dayData.day === "wed" ? "hsl(186, 34%, 60%)" : "";

    var day = document.createElement("span");
    day.textContent = dayData.day;
    day.classList.add("day");

    eachDay.appendChild(tooltip);
    eachDay.appendChild(bar);
    eachDay.appendChild(day);

    chart.append(eachDay);
  });
};
