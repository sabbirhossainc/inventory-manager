"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setSessionMsg } from "@/redux/slices/authSlice";
import toast from "react-hot-toast";
import { LoginFormInputs } from "@/types";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { ApiError } from "next/dist/server/api-utils";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
  const router = useRouter();
  const { session } = useSelector((state: RootState) => state.auth);

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.msg || "Login failed");

      dispatch(
        setCredentials({ token: result.token, user: { email: data.email } })
      );
      toast.success("Login successful!");
      router.push("/products");
    } catch (err: unknown) {
      const e = err as ApiError;
      toast.error(e.message || "Something went wrong");
      console.error("Auth ~ err:", e);
    }
  };

  useEffect(() => {
    if (session) {
      toast.custom(
        <p className="bg-amber-200 py-2 px-3 rounded-xl shadow-xl shadow-gray-200">
          Session expired!
        </p>
      );
      dispatch(setSessionMsg(false));
    }
  }, [session, dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>

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
        Login
      </button>
    </form>
  );
}
