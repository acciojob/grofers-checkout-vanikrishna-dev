const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let totalPrice = 0;

	const prices = document.querySelectorAll(".prices");

	prices.forEach(item => {
        let value = item.innerText.trim();

        let nums = value.match(/\d+/g);
        let finalValue = nums ? nums[nums.length - 1] : 0;

        totalPrice += parseInt(finalValue);
    });

	document.getElementById("ans").innerText = totalPrice;
};

getSumBtn.addEventListener("click", getSum);