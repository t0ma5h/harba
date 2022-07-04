import { Controller } from "react-hook-form";
import styled from "styled-components/native";
import { FormHookInput } from "../../constants/types";
import { Dimensions } from "../../constants/types/Dimensions";
import { InputLabel } from "../labels/InputLabel";
import CommonTextInput from "./CommonTextInput";
import ErrorLabel from "./ErrorLabel";

const CommonFormsHookInput = ({
  control,
  name,
  rules,
  characterLimit,
  errors,
  placeHolder,
  label,
  numeric = false,
  width = "80%",
  height = "7%",
}: FormHookInput & Dimensions) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <InputLabel width={width} bold>
              {label}
            </InputLabel>
            <CommonTextInput
              value={value}
              width={width}
              height={height}
              onBlur={onBlur}
              keyboardType={numeric ? "numeric" : "default"}
              onChangeText={(value) =>
                characterLimit && value.length > characterLimit
                  ? undefined
                  : onChange(value)
              }
              placeholder={placeHolder}
            />
          </>
        )}
        rules={rules}
      />
      {errors ? (
        <ErrorLabel error={errors[name]?.message?.toString()}></ErrorLabel>
      ) : null}
    </>
  );
};

export default CommonFormsHookInput;
