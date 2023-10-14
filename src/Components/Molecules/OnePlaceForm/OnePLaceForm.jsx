import React from "react";
import { InpuText } from "../../Atoms/InputText/InputText";
import { InputSubmit } from "../../Atoms/InputSubmit/InputSubmit";

export const OnePLaceForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <InpuText onChange={props.onChangeText} />
      <InputSubmit />
    </form>
  );
};
