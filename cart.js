function purchase(totalAmount) {
    const tax = totalAmount * 0.05;
    return totalAmount + tax;
}