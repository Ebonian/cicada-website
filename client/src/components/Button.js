export default function Button({ Text, Route }) {
  return (
    <Link to={Route}>
      <div className="flex w-64 h-16 border-2 border-gray-200 text-gray-600 rounded-lg items-center px-4 cursor-pointer justify-between duration-300 hover:bg-gray-100 hover:border-gray-100 text-lg">
        <p>{Text}</p>
        <FiArrowRight />
      </div>
    </Link>
  );
}
