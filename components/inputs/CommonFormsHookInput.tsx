import { Controller } from "react-hook-form";
import { FormHookInput } from "../../constants/types";
import CommonTextInput from "./CommonTextInput";
import ErrorLabel from "./ErrorLabel";

const CommonFormsHookInput = ({
  control,
  name,
  rules,
  characterLimit,
  errors,
  placeHolder,
  numeric = false,
}: FormHookInput) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <CommonTextInput
            value={value}
            onBlur={onBlur}
            keyboardType={numeric ? "numeric" : "default"}
            onChangeText={(value) =>
              characterLimit && value.length > characterLimit
                ? undefined
                : onChange(value)
            }
            placeholder={placeHolder}
          />
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
