import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { DeleteContext } from "../context/DeleteContext";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [deleteProducts, setDeleteProducts] = useState([]);

  const checkedProducts = (e) => {
    deleteProducts.includes(e.target.id)
      ? setDeleteProducts((current) =>
          current.filter((product) => {
            return product !== e.target.id;
          })
        )
      : setDeleteProducts((current) => [...current, e.target.id]);
  };

  useEffect(() => {
    fetch("http://scandiweb-test.42web.io/action/getData.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <DeleteContext.Provider value={{ deleteProducts }}>
        <Header text="Product list" buttontext1="ADD" buttontype="button" />
      </DeleteContext.Provider>
      <div className="product-containter">
        {data.map((data) => (
          <ProductCard
            key={data.SKU}
            check={checkedProducts}
            SKU={data.SKU}
            name={data.Name}
            price={data.Price}
            attribute={data.attribute}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
