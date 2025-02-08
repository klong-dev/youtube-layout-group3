export const formatDuration = (isoDuration) => {
  if (!isoDuration) return "00:00";

  // Tách giờ, phút, giây bằng Regular Expression
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "00:00"; // Xử lý trường hợp không khớp

  // Lấy giá trị giờ, phút, giây (mặc định 0 nếu không tồn tại)
  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);

  // Định dạng thời gian
  const formatted = [
    hours > 0 ? hours.toString() : null, // Chỉ thêm giờ nếu có
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ]
    .filter(Boolean) // Loại bỏ giá trị null
    .join(":");

  return formatted;
};