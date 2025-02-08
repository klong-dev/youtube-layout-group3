export const formatRelativeTime = (isoDate) => {
    const date = new Date(isoDate);
    const now = new Date();
    
    const diffInSeconds = Math.floor((now - date) / 1000); // Khoảng cách thời gian tính theo giây
    
    const secondsInMinute = 60;
    const secondsInHour = 60 * 60;
    const secondsInDay = 24 * 60 * 60;
    const secondsInMonth = 30 * secondsInDay;
    const secondsInYear = 12 * secondsInMonth;
  
    if (diffInSeconds < secondsInMinute) {
      return `${diffInSeconds} giây trước`;
    } else if (diffInSeconds < secondsInHour) {
      return `${Math.floor(diffInSeconds / secondsInMinute)} phút trước`;
    } else if (diffInSeconds < secondsInDay) {
      return `${Math.floor(diffInSeconds / secondsInHour)} giờ trước`;
    } else if (diffInSeconds < secondsInMonth) {
      return `${Math.floor(diffInSeconds / secondsInDay)} ngày trước`;
    } else if (diffInSeconds < secondsInYear) {
      return `${Math.floor(diffInSeconds / secondsInMonth)} tháng trước`;
    } else {
      return `${Math.floor(diffInSeconds / secondsInYear)} năm trước`;
    }
  };
