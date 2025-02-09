export const saveWatchedVideo = (video) => {
  const watchedVideos = JSON.parse(localStorage.getItem("watchedVideos")) || [];
  if (watchedVideos.some((v) => v.id === video.id)) return;

  const videoWithDate = {
    ...video,
    watchedAt: new Date().toISOString(),
  };

  watchedVideos.push(videoWithDate);
  localStorage.setItem("watchedVideos", JSON.stringify(watchedVideos));
};

export const getWatchedVideos = () => {
  const videos = JSON.parse(localStorage.getItem("watchedVideos")) || [];
  return videos;
};

export const groupByDate = (videos) => {
  return videos.reduce((a, video) => {
    const date = new Date(video.watchedAt).toLocaleDateString();
    if (!a[date]) {
      a[date] = [];
    }
    a[date].push(video);
    return a;
  }, {});
};
