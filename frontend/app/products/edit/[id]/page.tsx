'use client';

import ProductForm from '@/components/products/ProductForm';
import { useGetProductByIdQuery } from '@/redux/api/productApi';
import { useParams } from 'next/navigation';

export default function EditProductPage() {
  const params = useParams();
  const productId = params?.id as string;

  const { data, isLoading, error } = useGetProductByIdQuery(productId);

  if (isLoading) return  <p>Loading products...</p>;
  if (error || !data) return <p className="text-red-500">Product not found</p>;

  return (
    <section className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded-xl">
      <ProductForm
        isEdit
        productId={productId}
        initialValues={{ name: data.name, image: data.image, stock: data.stock }}
      />
    </section>
  );
}
