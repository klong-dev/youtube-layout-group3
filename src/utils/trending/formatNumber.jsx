export const formatNumber = (num) => {
    if (!num) return "0";

    const n = typeof num === "string" ? parseInt(num, 10) : num;
    if (isNaN(n)) return "0";

    if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + " Tỷ";
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + " Tr";
    if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + " N";

    return n.toLocaleString("vi-VN"); // Thêm dấu phẩy cho hàng nghìn
}