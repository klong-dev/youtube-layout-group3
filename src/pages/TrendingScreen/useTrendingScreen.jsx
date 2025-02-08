import { useParams } from "react-router";

const useTrendingScreen = () => {

    const categoryId = useParams().categoryId || "0";

    return {
        categoryId,
    };
};

export default useTrendingScreen;