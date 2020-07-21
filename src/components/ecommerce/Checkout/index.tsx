import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  ULList,
  LIList,
  SkuName,
  SkuDetails,
  AddButton,
  Heading,
  TotalPrice,
  EcommerceRow,
  EcommerceSku,
  EcommerceSpace,
} from './styles';
import { checkoutRequest } from 'Components/ecommerce/ecommerce.actions';
import Checkout from './checkout';

interface IDispatchProps {
  checkoutRequest: () => void;
}

interface IProps {}
interface IState {}

export type IEcommerceProps = IProps & IDispatchProps & IState;

interface IProps {
  skuItems: any[];
}

interface IState {}

class SKUItemList extends React.Component<IEcommerceProps> {
  constructor(props: IEcommerceProps) {
    super(props);
    this.state = {
      cartArray: [],
      price: 0,
    };
  }

  renderSKUItems = (item: any, index: number) => {
    return (
      // tslint:disable-next-line: jsx-no-lambda
      <LIList key={item.sku}>
        <img src={item.img} alt={item.name} width="250" height="250" />
        <SkuName>
          <strong>Name: </strong>
          {item.name}
        </SkuName>
        <SkuDetails>
          <strong>SKU: </strong>
          {item.sku}
        </SkuDetails>
        <SkuDetails>
          <strong>Price: $</strong>
          {item.price}
        </SkuDetails>
        <AddButton
          type="submit"
          onClick={() => {
            this.ScanItems(item);
          }}
        >
          <strong>Submit</strong>
        </AddButton>
      </LIList>
    );
  };

  ScanItems = item => {
    const checkout = new Checkout();
    checkout.scan(item);
    this.setState({ cartArray: [...this.state.cartArray, item] }, async () => {
      const listOfProducts = checkout.cumulateProducts(this.state.cartArray, this.props.skuItems);
      this.props.checkoutRequest(listOfProducts);
    });
  };

  render() {
    return (
      <React.Fragment>
        <ULList>{this.props.skuItems.map((item, index) => this.renderSKUItems(item, index))}</ULList>
        <TotalPrice>
          <Heading>Total - ${this.props.price && this.props.price.payload}</Heading>
          {this.state.cartArray &&
            this.state.cartArray.map((cart, index) => {
              return (
                <EcommerceRow key={index}>
                  <EcommerceSku>{cart.name}</EcommerceSku>
                  <EcommerceSpace>: </EcommerceSpace>
                  <EcommerceSpace>${cart.price}</EcommerceSpace>
                </EcommerceRow>
              );
            })}
        </TotalPrice>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  console.log('state mapStateToProps', state.ecommerceSKUs.checkoutPrice);
  return {
    price: state.ecommerceSKUs.checkoutPrice,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    checkoutRequest: listOfProducts => {
      dispatch(checkoutRequest(listOfProducts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SKUItemList);
