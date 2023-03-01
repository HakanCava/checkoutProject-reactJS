
import Card from "./Card";
import CardTotal from "../components/CardTotal";
const ProductCard = ({ products, getProducts,isPending }) => {


  
  return (
    <>
    {isPending && <div  className="alert alert-warning fs-3 " role={alert}>Loading...</div>}
    <div className="card my-3" style={{ maxWidth: "750px" }}>
      {products?.map((item) => 
     <Card getProducts={getProducts} {...item} key={item.id}/>
      )}
        <CardTotal products={products}  />
    </div>
    </>
  );
};

export default ProductCard;

