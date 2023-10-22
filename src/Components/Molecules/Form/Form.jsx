import "./Form.css";
import InputText from "../../Atoms/InputText";

const Form = (props) => {
  return (
    <>
      <form {...props}>
        <label>Pokemon Name: </label>
        <InputText title="Pokemon Name" placeholder="Pokemon name" />
        <button type="submit" {...props}>
          Search
        </button>
      </form>
    </>
  );
};

export default Form;
