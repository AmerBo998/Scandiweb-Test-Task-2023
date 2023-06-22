import { useFormContext } from "react-hook-form";
const DVD = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <span className="description">Please, provide size.</span>
      <br />
      <br />
      <label>Size (MB)</label>
      <input
        {...register("size", {
          required: "Please, submit required data!",
          pattern: {
            value: /^[0-9]+$/,
            message: "Please enter a number!",
          },
        })}
        type="text"
        id="size"
      />

      <p className="error-message">{errors.size?.message}</p>
      <br></br>
    </div>
  );
};

export default DVD;
