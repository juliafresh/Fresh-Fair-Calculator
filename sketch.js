function setup() {
  createCanvas(600, 300).parent(document.body);
  textSize(16);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  text("Welcome to the Artist Calculator!", width / 2, height / 2);
}

function calculate() {
  const basePrice = parseFloat(document.getElementById('basePrice').value);
  if (isNaN(basePrice) || basePrice <= 0) {
    document.getElementById('results').innerHTML = 'אנא הזן מחיר עבודה תקין.';
    return;
  }

  const shippingCost = 300;
  const taxRate = 0.18;
  const commissionRate = 0.25;

  const priceWithShipping = basePrice + shippingCost;
  const finalPrice = priceWithShipping * (1 + taxRate);
  const netIncome = basePrice * (1 - commissionRate);

  document.getElementById('results').innerHTML = `
    <p><strong>מחיר סופי ללקוח: ${finalPrice.toFixed(2)} ש\"ח</strong></p>
    <p>הכנסה נטו: ${netIncome.toFixed(2)} ש\"ח</p>
  `;
}
