import { useFormContext } from "react-hook-form";
const Book = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <span className="description">Please, provide weight.</span>
      <br />
      <br />
      <label>Weight (KG)</label>
      <input
        {...register("weight", {
          required: "Please, submit required data!",
          pattern: {
            value: /^[0-9]+$/,

            message: "Please enter a number!",
          },
        })}
        type="text"
        id="weight"
      />

      <p className="error-message">{errors.weight?.message}</p>
      <br></br>
    </div>
  );
};

export default Book;
