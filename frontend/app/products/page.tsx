"use client";

import { useGetProductsQuery } from "@/redux/api/productApi";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { Product } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { setSessionMsg } from "@/redux/slices/authSlice";

export default function ProductsPage() {
  const [redirectUrl, setRedirectUrl] = useState(false);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery({});

  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!token) {
      setRedirectUrl(true);
      dispatch(setSessionMsg(true))
      window.location.replace("/login");
    }
  }, [token,dispatch]);

  if (redirectUrl) {
    return null; // Prevent rendering until redirection
  }

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product Inventory</h2>
        <Link href="/products/add" className="btn-primary text-sm">
          + Add Product
        </Link>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Failed to load products.</p>}
      {data?.length === 0 && <p>No products found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
