"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate/100; 
    return taxAmount; 
};
const processEntries = () => {
    const sales = parseFloat($("#sales").value);
    const taxes = parseFloat($("#taxes").value);

    if (isNaN(sales) || sales <= 0) {
        alert(getErrorMsg("Sales Amount"));
        focusAndSelect("#sales");
    } else if (isNaN(taxes) || taxes <= 0 || taxes >= 100) {
        alert(getErrorMsg("Tax Percent"));
        focusAndSelect("#taxes");
    } else {
        $("#total").value = (sales + calculateTax(sales, taxes)).toFixed(2);
    }
};

var clearEntries = () => {
    $("#sales").value = "";
    $("#taxes").value = "";
    $("#total").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#sales").focus();
});