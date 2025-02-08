import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="w-svw h-svh flex flex-col justify-center items-center">
      <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="Not Found" />
      <p className="text-black text-2xl mt-8 w-[600px] text-wrap">Trang này không có sẵn. Mong bạn thông cảm. Bạn thử tìm cụm từ khác xem sao nhé.</p>
      <Link to="/" className="text-blue-600 text-xl mt-4">
        Quay lại trang chủ
      </Link>
    </div>
  );
};
