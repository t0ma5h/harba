import { FormHookInputWrapper } from "../../constants/types";
import CommonFormsHookInput from "./CommonFormsHookInput";

const BoatLengthInput = ({
  control,
  errors,
}: FormHookInputWrapper): JSX.Element => {
  const lengthRegex = new RegExp(/^[1-9]?[0-9]{1}$|^100$/i);

  return (
    <CommonFormsHookInput
      control={control}
      errors={errors}
      name={"length"}
      characterLimit={3}
      numeric
      placeHolder={"Boat lenght in meters (0 - 100)"}
      rules={{
        required: {
          value: true,
          message: "Boat length is required!",
        },
        pattern: {
          value: lengthRegex,
          message: "It's not a valid length!",
        },
      }}
    />
  );
};

export default BoatLengthInput;
