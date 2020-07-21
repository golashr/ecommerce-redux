import { size } from 'lodash';

class Checkout {
  constructor() {  
    this.checkoutItems = [];
  }

  scan(item) {
    this.checkoutItems.push(item);
    return;
  }

  cumulateProducts(productList, skus) {
    let totalProductBySKU = [];
    for (let i = 0; i < skus.length; i++) {
      totalProductBySKU.push({
        sku: skus[i].sku,
        number: size(productList.filter(product => product.sku === skus[i].sku))
      });
    }
    this.checkoutItems = totalProductBySKU;
    return totalProductBySKU;
  }
}
export default Checkout;
