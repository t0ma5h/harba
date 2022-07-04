import { FormHookInputWrapper } from "../../constants/types";
import CommonFormsHookInput from "./CommonFormsHookInput";

const BoatNameInput = ({
  control,
  errors,
}: FormHookInputWrapper): JSX.Element => {
  const nameRegex = new RegExp(/^[a-zA-Z]+$/i);

  return (
    <CommonFormsHookInput
      control={control}
      errors={errors}
      name={"name"}
      label={"Boat Name"}
      characterLimit={20}
      placeHolder={"Boat Name"}
      rules={{
        required: {
          value: true,
          message: "Name Field is required!",
        },
        pattern: {
          value: nameRegex,
          message: "It's not a valid name",
        },
      }}
    />
  );
};

export default BoatNameInput;
