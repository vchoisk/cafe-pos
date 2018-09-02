import React from "react";
import { Subscribe } from "unstated";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SummrayTotal from "./SummaryTotalComponent.jsx";
import { PaymentMethodStore } from "../../stores";

const SummaryPaymentMethodComponent = props => {
  return (
    <Subscribe to={[PaymentMethodStore]}>
      {paymentMethodStore => (
        <div className="summary-payment-method">
          <div className="summary-payment-method__radio-group-row">
            <div className="summary-payment-method__radio-group-label">
              결제수단 선택
            </div>
            <div className="summary-payment-method__radio-group">
              <RadioGroup
                value={paymentMethodStore.state.selected}
                onChange={e => {
                  paymentMethodStore.selectPaymentMethod(e.target.value);
                }}
              >
                {paymentMethodStore.state.paymentMethods.map(
                  (paymentMethod, index) => (
                    <FormControlLabel
                      value={index.toString()}
                      control={<Radio />}
                      label={paymentMethod.label}
                    />
                  )
                )}
              </RadioGroup>
            </div>
          </div>
          <SummrayTotal label="총 합계" applyCoupon applyCashDiscount />
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryPaymentMethodComponent;
