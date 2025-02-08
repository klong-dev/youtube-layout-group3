import useCategories from "./useCategories";

const Categories = () => {

    const {
        categories,
        selectedCategory,
        handleCategoryChange,
    } = useCategories();

    return (
        <div className="flex gap-7 px-10">
            {categories.map((category) => (
                <p 
                    key={category.id} 
                    className={`font-semibold py-2 cursor-pointer ${selectedCategory === category.id ? "text-black border-b-3" : "text-gray-400 hover:border-b-3 hover:border-gray-400" }`}
                    onClick={() => handleCategoryChange(category.id)}    
                >
                    {category.name}
                </p>
            ))}
        </div>
    );
};

export default Categories;