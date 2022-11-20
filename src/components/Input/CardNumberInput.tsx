import { FieldValues, UseControllerProps } from "react-hook-form";
import NumberFormattedInput from "../NumberFormattedInput";


// Default validation rules for credit card number.
const cardNumberRules = {
  required: "Credit card number cannot be empty",
  validate: (value: string) =>
    value.length === 16 ? true : "Invalid card number",
};

const cardNumberFormat = "#### #### #### ####";

/** Custom input component with mask and validation rules for credit card number. */
const CardNumberInput = <TFormFields extends FieldValues>(
  props: UseControllerProps<TFormFields>
) => (
  <NumberFormattedInput
    {...props}
    label="Credit Card Number1"
    format={cardNumberFormat}
    rules={Object.assign(cardNumberRules, props.rules)}
  />
);

export default CardNumberInput;
