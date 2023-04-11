import FormState from "../redux/state/formState";

export const fulfilledState = (): FormState => {
  const formState: FormState = {
    loading: false,
    isSuccess: true,
    isError: false
  };

  return formState;
};

export const errorState = (message: string, stackTrace?: string): FormState => {
  const formState: FormState = {
    loading: false,
    isSuccess: false,
    errorMessage: message,
    isError: true
  };

  return formState;
};

export const rejectedState = (message?: string): FormState => {
  const formState: FormState = {
    loading: false,
    isError: true,
    isSuccess: false
  };
  return formState;
};

export const pendingState = (): FormState => {
  const formState: FormState = {
    loading: true,
    isSuccess: false,
    isError: false
  };
  return formState;
};

export const resetState = (): FormState => {
  const formState: FormState = {
    loading: false,
    isSuccess: false,
    isError: false,
  };
  return formState;
};
