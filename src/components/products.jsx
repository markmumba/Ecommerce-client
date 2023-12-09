import useSWR from "swr";
import { ENDPOINT, fetcher } from "../App";

function ProductPage() {
  const { data, error, isLoading } = useSWR(`${ENDPOINT}/products`, fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <h1>Error fetching data</h1>
        <p>{error.message}</p>
      </>
    );
  }
  return (
    <>
      <h1 className="text-3xl font-bold p-10">Here is the product page </h1>
      <div className="flex flex-wrap gap-x-6 gap-y-4 mx-10">
        {data ? (
          data.map((product) => {
            return (
              <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
                <img
                  className="w-full object-contain h-auto"
                  src={product.image}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{product.name}</div>
                  <p class="text-gray-700 text-base">
                    {product.description}
                  </p>
                  <button className="bg-blue-600 rounded-md px-5 py-2 mt-3">Add to cart </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Error no data</h1>
        )}
      </div>
    </>
  );
}

export default ProductPage;
