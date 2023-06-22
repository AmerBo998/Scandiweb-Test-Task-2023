import { useFormContext } from "react-hook-form";
const Furniture = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <span className="description">Please, provide dimensions.</span>
      <br />
      <br />

      <label>Height (CM)</label>
      <input
        {...register("height", {
          required: "Please, submit required data!",
          pattern: {
            value: /^[0-9]+$/,
            message: "Please enter a number!",
          },
        })}
        type="text"
        id="height"
      />

      <p className="error-message">{errors.height?.message}</p>
      <br></br>
      <label>Width (CM)</label>
      <input
        {...register("width", {
          required: "Please, submit required data!",
          pattern: {
            value: /^[0-9]+$/,
            message: "Please enter a number!",
          },
        })}
        type="text"
        id="width"
      />

      <p className="error-message">{errors.width?.message}</p>
      <br></br>
      <label>Length (CM)</label>
      <input
        {...register("length", {
          required: "Please, submit required data!",
          pattern: {
            value: /^[0-9]+$/,
            message: "Please enter a number!",
          },
        })}
        type="text"
        id="length"
      />

      <p className="error-message">{errors.length?.message}</p>
      <br></br>
    </div>
  );
};

export default Furniture;
