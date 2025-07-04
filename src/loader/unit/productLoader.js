import instances from "../../instance/instance";

const ProductLoader = async () => {
    const response = await instances.get(`/products`);
    return response.data;
}

export default ProductLoader;