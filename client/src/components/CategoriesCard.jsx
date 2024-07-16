const CategoriesCard = ({ title }) => {
  return (
    <div className="px-3 py-5 border min-w-[120px] sm:w-full text-center rounded-lg">
      <h1 className="font-medium text-blue-600">{title}</h1>
    </div>
  );
};

export default CategoriesCard;
