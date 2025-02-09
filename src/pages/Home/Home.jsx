import data from "@/mocks/homeVideo.json";
import { formatView } from "@/utils/format";

export const Home = () => {
  return (
    <div className="flex flex-1 justify-center gap-4 flex-wrap md:ml-[180px] pt-20 pb-20">
      {data.map((video, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-[394px] rounded-xl text-white  pb-6"
        >
          <img
            className="rounded-xl h-[226px] w-full object-cover"
            src={video.thumbnail.high.url}
            alt="hero"
          />
          <div className="flex gap-4">
            <img
              className="rounded-full w-9 h-9 mt-[0.25rem]"
              src={video.channelImage}
              alt="avatar"
            />
            <div className="flex flex-col gap-2">
              <a
                className="text-lg line-clamp-2 leading-tight"
                id="video-title-link"
                aria-label={video.title}
                title={video.title}
                href={video.videoUrl}
              >
                <p>{video.title}</p>
              </a>
              <div className="flex flex-col gap-0 text-md">
                <a href={video.channelUrl}>{video.channelTitle}</a>
                <span className="text-gray-500">
                  {formatView(video.statistics.viewCount | 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
