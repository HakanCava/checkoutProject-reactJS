

import AddProduct from "../components/AddProduct"

import ProductCard from "../components/ProductCard";

const Main = ({show,products,getProducts,isPending}) => {



  return (
    <div className="row justify-content-center">
      {show&& <AddProduct getProducts={getProducts}/>}
      <ProductCard products={products} isPending={isPending} getProducts={getProducts}/>
    
    </div>
  )
}

export default Main