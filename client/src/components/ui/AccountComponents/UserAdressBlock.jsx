import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles.css";

import { AddressInput } from "../../forms/index";
import Buttons from "../Buttons/Buttons";

const UserAdressBlock = ({ setVisible }) => {
  return (
    <form className="address-data-form">
      <AddressInput label={"Lastname"} />
      <AddressInput label={"Name"} />
      <AddressInput label={"Surname"} />
      <AddressInput label={"Post index"} />
      <AddressInput label={"Region"} />
      <AddressInput label={"Street"} />
      <AddressInput label={"City/Town"} />
      <AddressInput label={"Phone Number"}>
        <PhoneInput country={"ua"} />
      </AddressInput>
      <AddressInput label={"Email"} type={"email"} />
      <Buttons setVisible={setVisible} />
    </form>
  );
};

export default UserAdressBlock;
