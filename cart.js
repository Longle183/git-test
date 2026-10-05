function purchase(totalAmount) {

    const discount = totalAmount * 0.10;
    const finalAmount = totalAmount - discount;

    return finalAmount;

}

