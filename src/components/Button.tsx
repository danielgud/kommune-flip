import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        {...props}
        className="z-20 bg-blue-900 text-white text-3xl font-semibold px-10 py-4 mt-8 rounded-xl transition-colors hover:bg-blue-800 shadow-white shadow-sm hover:shadow-lg hover:shadow-white outline-none focus-visible:ring-4 ring-offset-4 ring-offset-focus select-none min-w-[150px]"
      >
        {children}
      </button>
    );
  }
);
