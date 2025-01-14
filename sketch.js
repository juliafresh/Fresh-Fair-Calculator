function calculate() {
  const basePriceInput = document.getElementById('basePrice');
  const resultsDiv = document.getElementById('results');
  const basePrice = parseFloat(basePriceInput.value);

  // Validate input
  if (isNaN(basePrice) || basePrice <= 0) {
    resultsDiv.innerHTML = '<p style="color: red;">אנא הזן מחיר עבודה תקין.</p>';
    return;
  }

  // Constants
  const shippingCost = 300;
  const taxRate = 0.18;
  const commissionRate = 0.25;

  // Calculations
  const priceWithShipping = basePrice + shippingCost;
  const finalPrice = priceWithShipping * (1 + taxRate);
  const netIncome = basePrice * (1 - commissionRate);

  // Display results
  resultsDiv.innerHTML = `
    <p><strong>פירוט חישוב:</strong></p>
    <p>מחיר העבודה: ${basePrice.toFixed(2)} ש"ח</p>
    <p>תוספת הובלה: ${shippingCost.toFixed(2)} ש"ח</p>
    <p>מע"מ (${(taxRate * 100).toFixed(0)}%): ${(priceWithShipping * taxRate).toFixed(2)} ש"ח</p>
    <p><strong>מחיר סופי ללקוח: ${finalPrice.toFixed(2)} ש"ח</strong></p>
    <p>עמלה (${(commissionRate * 100).toFixed(0)}%): ${(basePrice * commissionRate).toFixed(2)} ש"ח</p>
    <p><strong>הכנסה נטו: ${netIncome.toFixed(2)} ש"ח</strong></p>
  `;
}
