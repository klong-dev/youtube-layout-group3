import { useLocation } from "react-router";

export const useQuery = () => {
    const { search } = useLocation(); // Lấy query string từ URL
    return new URLSearchParams(search); // Trả về một instance URLSearchParams
};