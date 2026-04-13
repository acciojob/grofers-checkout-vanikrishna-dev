const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let totalPrice = 0;
	const prices = document.querySelectorAll(".price")
	
	prices.forEach(item => {
        totalPrice += parseFloat(item.innerText);
    });

	const tr = document.createElement("tr");
    const td = document.createElement("td");

	td.colSpan = 2;
    td.innerText = "Total Price: Rs " + totalPrice;

    tr.appendChild(td);

    const table = document.querySelector("table");
    document.getElementById("ans").innerText = totalPrice;

};

getSumBtn.addEventListener("click", getSum);

