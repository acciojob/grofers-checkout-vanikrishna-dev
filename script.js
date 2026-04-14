const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

prices.forEach(item => {
    let value = item.innerText.trim();

    let nums = value.match(/\d+/g);

    let finalValue = nums ? nums[nums.length - 1] : 0;

    totalPrice += parseInt(finalValue);
});

getSumBtn.addEventListener("click", getSum);

