import { useState } from "react";
import Header from "./Header";
import DVD from "./DVD";
import Furniture from "./Furniture";
import Book from "./Book";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

const Form = () => {
  const [selectedValue, setSelectedValue] = useState("Choose type");
  const [validSKU, setValidSKU] = useState(false);
  const navigate = useNavigate();
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleChange = (event) => {
    if (event.target.value === "DVD") setSelectedValue("DVD");
    if (event.target.value === "Furniture") setSelectedValue("Furniture");
    if (event.target.value === "Book") setSelectedValue("Book");
  };

  const checkSKU = (e) => {
    let SKU = e.target.value;

    fetch("http://scandiweb-test.42web.io/action/isSKUvalid.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SKU),
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        data === "1" ? setValidSKU(true) : setValidSKU(false);
      });
  };

  return (
    <div>
      <Header
        text="Product Add"
        buttontext1="Save"
        buttontype="submit"
        form="product_form"
        onClick={handleSubmit((data) => {
          fetch("http://scandiweb-test.42web.io/action/addNewProduct.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }).then(() => {
            navigate("/");
          });
        })}
      />

      <FormProvider {...methods}>
        <form className="add-form" id="product_form">
          <label>SKU</label>
          <input
            {...register("SKU", {
              required: "Please, submit required data!",
              pattern: {
                value: /[a-zA-Z0-9]+/,
                message: "Please, provide the data of indicated type",
              },
              validate: {
                isSKUValid: () => {
                  return validSKU || "Product with this SKU already exists";
                },
              },
            })}
            type="text"
            id="sku"
            onChange={checkSKU}
          />
          <br></br>
          <p className="error-message">{errors.SKU?.message}</p>
          <label>Name</label>
          <input
            {...register("Name", {
              required: "Please, submit required data!",
              pattern: {
                value: /[a-zA-Z0-9]+/,
                message: "Please, provide the data of indicated type",
              },
            })}
            type="text"
            id="name"
          />
          <br></br>
          <p className="error-message">{errors.Name?.message}</p>
          <label>Price ($)</label>
          <input
            {...register("Price", {
              required: "Please, submit required data!",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a number!",
              },
            })}
            type="text"
            id="price"
          />
          <br></br>
          <p className="error-message">{errors.Price?.message}</p>
          <label>Type switcher</label>
          <select
            {...register("switcher", {
              required: "Please, select product type.",
            })}
            id="productType"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>{" "}
          <p className="error-message">{errors.switcher?.message}</p>
          {selectedValue === "DVD" ? (
            <DVD />
          ) : selectedValue === "Furniture" ? (
            <Furniture />
          ) : selectedValue === "Book" ? (
            <Book />
          ) : null}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
