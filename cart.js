function purchase(totalAmount) {

    // Discount 10%
    const discount = totalAmount * 0.10;
    const afterDiscount = totalAmount - discount;

    // VAT 5%
    const tax = afterDiscount * 0.05;
    const finalAmount = afterDiscount + tax;

    return finalAmount;

}