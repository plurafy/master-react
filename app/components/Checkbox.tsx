import { useRef, useEffect } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  label,
  checked,
  indeterminate = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <li>
      <label>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />{" "}
        {label}
      </label>
    </li>
  );
};
