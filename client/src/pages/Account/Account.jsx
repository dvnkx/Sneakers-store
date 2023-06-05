import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import { InfoBlock } from "../../components/ui/index";
import { SideNav } from "../../components/routes/index";

import {
  shipStyles,
  shippingStyles,
  userDataStyles,
  passwordStyles,
  passwordData,
  shipData,
} from "../../helpers/AccountData";

const Account = () => {
  const { fullName, email, avatarUrl } = useSelector(
    (state) => state.auth.data
  );

  const personalData = [fullName, email];
  const addressData = [];

  return (
    <div className="account-container">
      <SideNav avatar={avatarUrl} />
      <div className="middle">
        <InfoBlock
          styles={userDataStyles}
          data={personalData}
          section={"Presonal Data"}
        />
        <InfoBlock
          section={"My shipping addresses"}
          data={addressData}
          styles={shippingStyles}
        >
          <button className="new-address">Add new address</button>
        </InfoBlock>
        <InfoBlock
          section={"Change Password"}
          data={passwordData}
          styles={passwordStyles}
        />
      </div>
      <div className="right">
        <InfoBlock
          data={shipData}
          styles={shipStyles}
          section={"Default Shipping"}
        />
        <InfoBlock
          data={shipData}
          styles={shipStyles}
          section={"Default Shipping Method"}
        />
      </div>
    </div>
  );
};

export default Account;
