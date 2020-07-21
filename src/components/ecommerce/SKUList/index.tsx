import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Heading, InputBox, ThumbnailGallery, AppHeader, InputText } from './styles';
import { createEcommerceRequest } from 'Components/ecommerce/ecommerce.actions';
import Checkout from 'Components/ecommerce/Checkout';
import Header from 'Components/ecommerce/Header';

interface IDispatchProps {
  createEcommerceRequest: () => void;
}

interface IProps {
  ecommerceSKUs: {
    data: any[];
  };
}

interface IState {}

export type IEcommerceProps = IProps & IDispatchProps;

class EcommerceSKU extends React.Component<IEcommerceProps, IState> {
  constructor(props: IEcommerceProps) {
    super(props);
    this.state = {
      ecommerceSKUs: [],
    };
  }

  componentDidMount = async () => {
    this.props.createEcommerceRequest();
  };

  render() {
    return (
      <>
        <Header />
        <ThumbnailGallery>
          {this.props.ecommerceSKUs && this.props.ecommerceSKUs.payload && this.props.ecommerceSKUs.payload.data && (
            <div>
              <Checkout skuItems={this.props.ecommerceSKUs.payload.data} />
            </div>
          )}
        </ThumbnailGallery>
      </>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  console.log('ecommerceSKUs ', state.ecommerceSKUs);
  return {
    ecommerceSKUs: state.ecommerceSKUs.SKUList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createEcommerceRequest: () => {
      dispatch(createEcommerceRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceSKU);
