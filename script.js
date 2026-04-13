const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let totalPrice = 0;

	const prices = document.querySelectorAll(".prices");

	prices.forEach(item => {
        let value = item.innerText.trim();

        let numbers = value.match(/\d+/g);
        let lastNumber = numbers ? numbers[numbers.length - 1] : 0;

        totalPrice += parseFloat(lastNumber);
    });

    const existing = document.querySelector(".total-row");
    if (existing) existing.remove();

    const tr = document.createElement("tr");
    tr.classList.add("total-row");

    const td = document.createElement("td");
    td.colSpan = 2;
    td.innerText = "Total Price: Rs " + totalPrice;

    tr.appendChild(td);

    const table = document.querySelector("table");
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);