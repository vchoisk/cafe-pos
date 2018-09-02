import React from "react";
import "../../stylesheets/Payment.css";
import { Subscribe } from "unstated";
import Button from "@material-ui/core/Button";
import { MenuStore, CouponStore, PaymentMethodStore } from "../../stores";
import PaymentDialog from "./PaymentDialogComponent.jsx";

class PaymentComponent extends React.Component {
  state = {
    dialogOpen: false
  };

  handleOpenDialog = () => {
    this.setState({
      dialogOpen: true
    });
  };

  handleCloseDialog = () => {
    this.setState({
      dialogOpen: false
    });
  };

  render() {
    const calculatedValue = (
      menus,
      selectedMenus,
      selectedCoupon,
      selectedPaymentMethod
    ) => {
      const selectedMenuTotal = Object.keys(selectedMenus)
        .sort((a, b) => parseInt(a, 10) > parseInt(b, 10))
        .reduce((sum, id) => sum + menus[id][1] * selectedMenus[id], 0);
      return Math.floor(
        selectedMenuTotal *
          (1 - selectedCoupon) *
          (selectedPaymentMethod === 1 ? 0.95 : 1)
      );
    };

    const paymentText = (
      menus,
      selectedMenus,
      selectedCoupon,
      selectedPaymentMethod
    ) =>
      `${selectedCoupon !== 0 ? `쿠폰할인 ${selectedCoupon * 100}%` : ""}${
        selectedCoupon !== 0 && selectedPaymentMethod === 1 ? ", " : " "
      }${selectedPaymentMethod === 1 ? "현금할인 5% " : ""}${
        selectedCoupon !== 0 || selectedPaymentMethod === 1 ? "적용하여 " : ""
      }${calculatedValue(
        menus,
        selectedMenus,
        selectedCoupon,
        selectedPaymentMethod
      )}원입니다.`;

    const selectedMenus = (menus, selectedMenus) =>
      Object.keys(selectedMenus)
        .sort((a, b) => parseInt(a, 10) > parseInt(b, 10))
        .map(id => menus[id].concat(selectedMenus[id]));

    return (
      <Subscribe to={[MenuStore, CouponStore, PaymentMethodStore]}>
        {(menuStore, couponStore, paymentMethodStore) => (
          <div className="payment__container">
            <div className="payment">
              <div className="payment__text">
                {paymentText(
                  menuStore.state.menus,
                  menuStore.state.selected,
                  couponStore.state.coupons[couponStore.state.selected],
                  parseInt(paymentMethodStore.state.selected, 10)
                )}
              </div>

              <div className="payment__button-container">
                <Button
                  className="payment__button"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={this.handleOpenDialog}
                >
                  결제
                </Button>
              </div>
            </div>
            <PaymentDialog
              open={this.state.dialogOpen}
              selectedMenus={selectedMenus(
                menuStore.state.menus,
                menuStore.state.selected
              )}
              price={calculatedValue(
                menuStore.state.menus,
                menuStore.state.selected,
                couponStore.state.coupons[couponStore.state.selected],
                parseInt(paymentMethodStore.state.selected, 10)
              )}
              handleClose={this.handleCloseDialog}
            />
          </div>
        )}
      </Subscribe>
    );
  }
}

export default PaymentComponent;
