const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let totalPrice = 0;

	const price = document.querySelectorAll(".price");

	price.forEach(item => {
        totalPrice += parseInt(item.innerText);
    });

	document.getElementById("ans").innerText = totalPrice;
  
};

getSumBtn.addEventListener("click", getSum);

