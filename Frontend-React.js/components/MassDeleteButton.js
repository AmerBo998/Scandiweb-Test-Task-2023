import { useContext } from "react";
import { DeleteContext } from "../context/DeleteContext";

const MassDeleteButton = () => {
  const { deleteProducts } = useContext(DeleteContext);

  const massDelete = () => {
    console.log(deleteProducts);
    fetch("http://scandiweb-test.42web.io/action/massDelete.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteProducts),
    }).then(() => {
      deleteProducts.length > 0 && window.location.reload(false);
    });
  };

  return (
    <button
      id="delete-product-btn"
      className="mass-del-btn"
      onClick={massDelete}
    >
      MASS DELETE
    </button>
  );
};

export default MassDeleteButton;
