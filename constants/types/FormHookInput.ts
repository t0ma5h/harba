import { Control, UseControllerProps, FieldErrorsImpl } from "react-hook-form";

export type FormHookInput = FormHookInputControl &
  FormHookError & {
    name: string;
    numeric?: boolean;
    placeHolder?: string;
    rules: UseControllerProps["rules"];
    characterLimit: number;
  };

export type FormHookInputControl = {
  control: Control;
};

export type FormHookError = {
  errors: FieldErrorsImpl;
};

export type FormHookInputWrapper = FormHookInputControl & FormHookError;
