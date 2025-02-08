import { useState } from "react";
import { useNavigate } from "react-router";

const useCategories = () => {
    
    const categories = [
        { id: 0, name: 'Mới nhất' },
        { id: 10, name: 'Âm nhạc' },
        { id: 20, name: 'Trò chơi' },
        { id: 1, name: 'Phim ảnh' },
    ];

    const [selectedCategory, setSelectedCategory] = useState(0);
    const navigate = useNavigate();

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        navigate(`/trending/${categoryId}`)
    };

    return {
        categories,
        selectedCategory,
        handleCategoryChange,
    }
};

export default useCategories;