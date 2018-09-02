import { Container } from "unstated";
import metaJSON from "../assets/meta.js";

class PaymentMethodStore extends Container {
  state = {
    paymentMethods: metaJSON.paymentMethods,
    selected: 0
  };

  selectPaymentMethod = id => {
    this.setState({
      selected: this.paymentMethods[id]
    });
  };
}

export default PaymentMethodStore;
