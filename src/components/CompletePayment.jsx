import React from "react";

import "./CompletePayment.css";

const CreatePayment = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <h1>Complete Payment</h1>
          <p>Enter your credit or debit card details below:</p>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Card Number"/>
          <div style={{ display: "flex" }}>
            <input type="text" placeholder="MM/YY" style={{ width: "70%" }} />
            <input type="text" placeholder="CVC" style={{ width: "30%" }} />
          </div>
          <button>Confirm Payment</button>
        </div>
        <div className="right">
          <h1>Order Summary</h1>
          <table>
            <tbody>
              <tr>
                <td>Plan Name</td>
                <td>Basic</td>
              </tr>
              <tr>
                <td>Billing Credit</td>
                <td>Monthly</td>
              </tr>
              <tr>
                <td>Plan Price</td>
                <td>₹ 200/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CreatePayment;
