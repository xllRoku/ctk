import SignIn from "./Form/components/sign_in/SignIn";
import SingUp from "./Form/components/sign_up/SingUp";
import { LocationLoginProps } from "./Form/interface/LocationLoginProps";

const Form = ({ location }: LocationLoginProps) => {
  return <>{location === "sign-in" ? <SignIn /> : <SingUp />}</>;
};

export default Form;
