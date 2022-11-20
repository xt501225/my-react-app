import { RegisterCardData } from "../models/RegisterCardData";
import Greeting from "./Greeting";
import Header from "./Header";
import RegisterCardForm from "./RegisterCardForm";

const RegisterCard = () => {
  const handleSubmit = (data: RegisterCardData) => {
    //console.log(data);
    console.log(`Thank you for registering a credit card.\n Card number: ${data.cardNumber}\n CVC: ${data.cvc}\n Expiry: ${data.expiry}`);
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header headerText="Register Card Form" />
      <Greeting />
      <div className="w-full flex-grow pb-12 flex flex-col items-center justify-end sm:justify-center">
        <RegisterCardForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default RegisterCard;
