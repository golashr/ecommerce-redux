import $ from 'jquery';
import axios from 'axios';
import { constants } from 'Utils/constants';

export const ecommerceSKUsAPI = async () => {
  try {
    const ecommerceApiPoint = constants.BASE_URL + 'getSKUs';
    console.log('ecommerceApiPoint ', ecommerceApiPoint);
    const req = {
      method: 'get',
      url: ecommerceApiPoint,
    };
    const res = await axios(req);
    const { data } = await res;
    return data;
  } catch (error) {
    console.log('ERROR    ', error);
  }
};

export const ecommerceCheckoutAPI = async listOfProducts => {
  try {
    const checkoutApiPoint = constants.BASE_URL + 'checkout';
    console.log('checkoutApiPoint ', checkoutApiPoint);
    const res = await axios({
      method: 'post',
      url: checkoutApiPoint,
      headers: {
        'content-type': 'application/json',
      },
      data: listOfProducts.payload,
    });
    const { data } = await res;
    console.log('data ', data.data);
    return data.data;
  } catch (error) {
    console.log('ERROR    ', error);
  }
};
