"use client";

import Link from "next/link";
import { useDeleteProductMutation } from "@/redux/api/productApi";
import toast from "react-hot-toast";
import { ProductProps, RTKError } from "@/types";
import Image from "next/image";

const fallbackImg =
  "https://dummyjson.com/image/400x200/008080/ffffff?text=No+Product+Img!&fontSize=16";

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const imgSrc =
    product?.image?.match("/") !== null ? product?.image : fallbackImg;
  const imgAlt = product?.name ?? `product?-${product?._id}`;

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      await deleteProduct(product?._id).unwrap();
      toast.success("Product deleted!");
    } catch (err: unknown) {
      const e = err as RTKError;
      toast.error(e?.data?.msg || "Error deleting product");
      console.error("DeleteMutaion ~ err:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={300}
        height={300}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{product?.name}</h3>
      <p className="text-gray-600 text-sm">Stock: {product?.stock}</p>

      <div className="flex justify-between items-center mt-4">
        <Link
          href={`/products/edit/${product?._id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
