import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error loading products</h2>

  return (
    <div>
      <h1>Products</h1>

      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home