import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetails() {
  const { id } = useParams()

  const { data, loading } = useFetch(
    ` https://fakestoreapi.com/products/1/${id}`
  );

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <img src={data.image} width="200" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>${data.price}</h3>
    </div>
  );
}

export default ProductDetails
