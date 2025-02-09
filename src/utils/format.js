export const formatView = (view) => {
    if (view < 1000) {
        return view.toString() + " views";
    } else if (view < 1000000) {
        return `${Math.round(view / 1000)}K views`;
    } else {
        return `${Math.round(view / 1000000)}M views`;
    }
};

export const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 365) {
        return `${Math.floor(diffInDays / 365)} năm trước`;
    } else if (diffInDays > 30) {
        return `${Math.floor(diffInDays / 30)} tháng trước`;
    } else if (diffInDays > 0) {
        return `${diffInDays} ngày trước`;
    } else if (diffInHours > 0) {
        return `${diffInHours} giờ trước`;
    } else if (diffInMinutes > 0) {
        return `${diffInMinutes} phút trước`;
    } else {
        return 'Vừa xong';
    }
};
