"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RegisterFormInputs } from "@/types";
import { ApiError } from "next/dist/server/api-utils";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const router = useRouter();

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw new Error("Registration failed");
      toast.success("Registration successful!");
      router.push("/login");
    } catch (err: unknown) {
      const e = err as ApiError;
      toast.error(e.message || "Something went wrong");
      console.error("Auth ~ err:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold">Register</h2>

      <div>
        <label>Name</label>
        <input {...register("name", { required: true })} className="input" />
        {errors.name && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="input"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
      </div>

      <div>
        <label>Password</label>
        <input
          {...register("password", { required: true })}
          type="password"
          className="input"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">Password is required</p>
        )}
      </div>

      <button type="submit" className="btn-primary">
        Register
      </button>
    </form>
  );
}
