import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import { toggleAccountReducer } from "../../helpers/AccountReducer";
import { getBirthdayDate } from "../../helpers/getDate";

import { SideNav } from "../../components/routes/index";

import {
  AccountBlock,
  UserPasswordBlock,
  UserDataBlock,
  UserAdressBlock,
} from "../../components/ui/index";

import {
  shipStyles,
  shippingStyles,
  userDataStyles,
  passwordStyles,
  passwordData,
  shipData,
} from "../../helpers/AccountData";

const Account = () => {
  const [state, dispatch] = useReducer(toggleAccountReducer, {
    data: false,
    address: false,
    password: false,
  });

  const { fullName, email, birthday, deliveryAddress, avatarUrl } = useSelector(
    (state) => state.auth.data
  );

  const personalData = [fullName, email, getBirthdayDate(birthday)];
  const addressData = Object.values(deliveryAddress);

  return (
    <div className="account-container">
      {
        <>
          <SideNav avatar={avatarUrl} />
          <div className="middle">
            {!state.data ? (
              <AccountBlock
                setVisible={() => dispatch({ type: "data" })}
                styles={userDataStyles}
                data={personalData}
                section={"Presonal Data"}
              />
            ) : (
              <UserDataBlock setVisible={() => dispatch({ type: "data" })} />
            )}
            {!state.address ? (
              <AccountBlock
                setVisible={() => dispatch({ type: "address" })}
                section={"My shipping addresses"}
                data={addressData}
                styles={shippingStyles}
              ></AccountBlock>
            ) : (
              <UserAdressBlock
                setVisible={() => dispatch({ type: "address" })}
              />
            )}
            {!state.password ? (
              <AccountBlock
                setVisible={() => dispatch({ type: "password" })}
                section={"Change Password"}
                data={passwordData}
                styles={passwordStyles}
              />
            ) : (
              <UserPasswordBlock
                setVisible={() => dispatch({ type: "password" })}
              />
            )}
          </div>
          <div className="right">
            <AccountBlock
              data={shipData}
              styles={shipStyles}
              section={"Default Shipping"}
            />
            <AccountBlock
              data={shipData}
              styles={shipStyles}
              section={"Default Shipping Method"}
            />
          </div>
        </>
      }
    </div>
  );
};

export default Account;
