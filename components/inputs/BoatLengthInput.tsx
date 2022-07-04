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
      label={"Boat length in meters (0 - 100)"}
      characterLimit={3}
      numeric
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
