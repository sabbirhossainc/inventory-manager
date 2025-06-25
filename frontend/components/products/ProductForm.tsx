"use client";

import { useForm } from "react-hook-form";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { ProductFormInputs, ProductFormProps, RTKError } from "@/types";

const ProductForm: React.FC<ProductFormProps> = ({
  isEdit = false,
  initialValues,
  productId,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductFormInputs>({
    defaultValues: initialValues || {
      name: "",
      image: "",
      stock: 0,
    },
  });

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const router = useRouter();

  useEffect(() => {
    if (isEdit && initialValues) {
      setValue("name", initialValues.name);
      setValue("image", initialValues.image);
      setValue("stock", initialValues.stock);
    }
  }, [initialValues, isEdit, setValue]);

  const onSubmit = async (data: ProductFormInputs) => {
    try {
      if (isEdit && productId) {
        await updateProduct({ id: productId, ...data }).unwrap();
        toast.success("Product updated!");
      } else {
        await createProduct(data).unwrap();
        toast.success("Product added!");
      }
      router.push("/products");
    } catch (err:unknown) { 
      const e = err as RTKError
      toast.error(e?.data?.msg || "Failed to submit form");
      console.error("Product Submition ~ err:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h2 className="text-2xl font-bold">
        {isEdit ? "Edit Product" : "Add Product"}
      </h2>

      <div>
        <label className="block mb-1 font-medium">Product Name</label>
        <input {...register("name", { required: true })} className="input" />
        {errors.name && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Image URL</label>
        <input {...register("image")} className="input" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Stock</label>
        <input
          type="number"
          {...register("stock", { required: true })}
          className="input"
        />
        {errors.stock && (
          <p className="text-red-500 text-sm">Stock is required</p>
        )}
      </div>

      <button type="submit" className="btn-primary">
        {isEdit ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
