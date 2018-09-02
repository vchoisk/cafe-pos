import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const PaymentDialogComponent = props => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>결제 확인</DialogTitle>
      <div>{props.selectedMenus}</div>
      <div>{props.price}</div>
    </Dialog>
  );
};

export default PaymentDialogComponent;
