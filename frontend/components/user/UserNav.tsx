import { FaRegCircleUser } from "react-icons/fa6";
import { ReactNode, useEffect, useRef, useState } from "react";

type UserNavProps = {
  children: ReactNode;
  user: { email: string } | null;
};

const UserNav = (props: UserNavProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block " ref={menuRef}>
      {/* Toggle Button */}

      <FaRegCircleUser
        className="cursor-pointer size-6 text-(--color-foreground) hover:text-blue-600"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown Panel */}
      <div
        className={`absolute right-0 mt-4 w-auto bg-(--color-foreground) shadow-lg rounded-md z-10 px-5 py-4 transform transition-all duration-200 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col divide-amber-600 divide-y-2 gap-2">
          <p className="p-1 text-amber-100">{props?.user?.email}</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default UserNav;
