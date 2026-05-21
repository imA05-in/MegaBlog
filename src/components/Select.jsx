export default function Select({
  options = [],
  label,
  className,
  ref,
  id,
  ...props
}) {
  return (
    <div>
      {label && <label htmlFor={id}></label>}
      <select
        name=""
        id={id}
        ref={ref}
        className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
        {...props}
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
}
