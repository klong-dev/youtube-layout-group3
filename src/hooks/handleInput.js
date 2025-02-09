import { useNavigate } from "react-router";

export const useSearch = () => {
    const navigate = useNavigate();
    return (query) => {
        // custom useNavigate hook
        navigate(`/search/${query}`);
    };
}