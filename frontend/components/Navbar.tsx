"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import UserNav from "@/components/user/UserNav";

const Navbar = () => {
  const { token, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Inventory~Manager
      </Link>
      <div className="flex items-center space-x-4">
        {!token ? (
          <>
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Products
            </Link>
            <UserNav user={user}>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-50 cursor-pointer"
              >
                Logout
              </button>
            </UserNav>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
