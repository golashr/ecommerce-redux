# ECommerce Application 
This application demonstrates a small functionality of calculating the total estimated cost of a shopping cart on an e-commerce portal. 
It works with one microservice '**ecommerce-server**' and It deals with 4 SKUs which are inserted into MongoDB as part of the initialisation of the '**ecommerce-server**' service and frontend fetches it at the time of the launch.   

Here is the price list to begin with..
| SKU |    Name     |     Price |
| --- | :---------: | --------: |
| ipd | Super iPad  |  \$549.99 |
| mbp | MacBook Pro | \$1399.99 |
| atv |  Apple TV   |  \$109.50 |
| vga | VGA adapter |   \$30.00 |

Some additional discounts are offered on the launch day!

- The website offers to have a 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only
- The brand new Super iPad will have a bulk discounted applied, where the price will drop to \$499.99 each, if someone buys more than 4
- The website will bundle in a free VGA adapter free of charge with every MacBook Pro sold.

## Example scenarios

SKUs Scanned: atv, atv, atv, vga
Total expected: \$249.00

SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd
Total expected: \$2718.95

SKUs Scanned: mbp, vga, ipd
Total expected: \$1949.98

## Technology used
This application is built using Frontend framework React/Redux and uses **ecommerce-server** API. It uses
- React
- React-Redux
- React-saga
- Typescript
- Dev and Production Webpack setup
- HMR
- ecommerce-server API - 
  - http://localhost:3002/api/v1/getSKUs to fetch SKUs
  - http://localhost:3002/api/v1/checkout to calculate price of checkedout SKUs

## Getting started

Clone the repo

```
git clone https://github.com/golashr/ecommerce-redux
cd ecommerce-redux
```

The install the packages and start the server - Production Build .

## Production Build

```
yarn install
yarn build
yarn start
```
Open http://localhost:3000/ with browser.

## Development Build

```
yarn install
npm start:dev
```
Open http://localhost:5000/ with browser.

## **Further**

- The unit testing to be done
- Better css styling
