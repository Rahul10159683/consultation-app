export const InputField = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full m-3 p-2 border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
