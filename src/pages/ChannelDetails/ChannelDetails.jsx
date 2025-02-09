import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelDetailsRequest } from "@/redux/channelDetails/actions";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChannelDetails = () => {
  const dispatch = useDispatch();
  const { channelDetails, loading, error } = useSelector((state) => state);
  const [showComponent, setShowComponent] = useState(false);

  const formatNumber = (number) => {
    if (number >= 1000 && number < 1000000) {
      return (number / 1000).toFixed(1) + " K";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + " M";
    } else if (number < 1000) {
      return number;
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    // Set timeout để delay 3 giây
    const timer = setTimeout(() => {
      setShowComponent(true); // Sau 3 giây thì thay đổi trạng thái để hiển thị component
    }, 1500);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị unmount
  }, []);

  useEffect(() => {
    dispatch(fetchChannelDetailsRequest("UC8YW6FO4bJzh8IKJl3PtZqw"));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("Day la channel details: ", channelDetails);

  return (
    <div className="channelDetails_wrap flex w-full mr-[15px]">
      {showComponent && (
        <div className="channelDetails ml-auto  w-[1290px]">
          <div className="channelDetails_channelInfo">
            <div className="channelDetails_channelInfo_banner ml-[110px]">
              <img
                className="w-[1070px] h-[172px] rounded-2xl"
                src={channelDetails.banner}
              />
            </div>
            <div className="channelDetails_channelInfo_avatar_content flex  mt-[20px]">
              <div className="channelDetails_channelInfo_avatar ml-[110px]">
                <img
                  className="w-[160px] h-[160px] mt-[10px] rounded-full"
                  src={channelDetails.thumbnail.medium.url}
                />
              </div>
              <div className="channelDetails_channelInfo_content ml-[15px]">
                <h2 className="text-[36px] text-white font-bold">
                  {channelDetails.name}
                </h2>
                <p className="text-[rgb(170,170,170)] text-[14.5px] font-sans ">
                  {formatNumber(channelDetails.subscriberCount)} người đăng ký •{" "}
                  {formatNumber(channelDetails.videoCount)} video
                </p>
                <div className="flex mt-[8px] mb-[15px] text-[14.5px] font-sans">
                  <p className="text-[rgb(170,170,170)] truncate w-[550px] cursor-pointer">
                    {channelDetails.description}
                  </p>
                  <p className="text-white cursor-pointer font-medium">
                    xem thêm
                  </p>
                </div>
                <div className="channelDetails_channelInfo_content_dangKy_thamGia flex">
                  <div className="channelDetails_channelInfo_content_dangKy cursor-pointer font-semibold text-[14px] bg-white hover:bg-gray-200 mr-[10px] rounded-4xl pt-[5px] pr-[15px] pb-[5px] pl-[15px]">
                    Đăng ký
                  </div>
                  <div className="channelDetails_channelInfo_content_thamGia cursor-pointer font-semibold text-[14px] text-white hover:bg-[rgb(70,70,70)] bg-black border border-[rgb(170,170,170)] rounded-4xl p-[5px] pt-[5px] pr-[15px] pb-[5px] pl-[15px]">
                    Tham gia
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="channelDetails_options text-[16px] font-medium text-[rgb(170,170,170)] pl-[110px] mt-[30px] flex gap-[25px]">
            <div className="cursor-pointer pb-[10px] border-b-3 border-b-black hover:border-b-[rgb(170,170,170)]">
              Trang Chủ
            </div>
            <div className="cursor-pointer pb-[10px] border-b-3 border-b-black hover:border-b-[rgb(170,170,170)]">
              Video
            </div>
            <div className="cursor-pointer pb-[10px] border-b-3 border-b-black hover:border-b-[rgb(170,170,170)]">
              Shorts
            </div>
            <div className="cursor-pointer pb-[10px] border-b-3 border-b-black hover:border-b-[rgb(170,170,170)]">
              Video phát trực tiếp
            </div>
            <div className="cursor-pointer pb-[10px] border-b-3 border-b-black hover:border-b-[rgb(170,170,170)]">
              Danh sách phát
            </div>
            <div className="cursor-pointer pb-[10px] border-b-3 border-b-black hover:border-b-[rgb(170,170,170)]">
              Bài đăng
            </div>
            <div>
              <HiMagnifyingGlass className="cursor-pointer w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="border-b border-b-[rgb(170,170,170)]"></div>

          <div className="channelDetails_danhChoBan ml-[110px]">
            <div className=" mt-[17px] mb-[17px]">
              <p className="text-white text-[20px] font-bold">Dành cho bạn</p>
            </div>
            <div className="channelDetails_danhChoBan_videoList flex">
              <Carousel className="w-[1080px]" responsive={responsive}>
                {channelDetails.videos.map((video) => (
                  <div
                    className="channelDetails_danhChoBan_videoList_card"
                    key={video.videoId}
                  >
                    <img
                      className="w-[354px] h-[198px] rounded-2xl"
                      src={video.thumbnail}
                    />
                    <div className="channelDetails_danhChoBan_videoList_card_info">
                      <div className="channelDetails_danhChoBan_videoList_card_info_title flex mt-[10px]">
                        <p className="text-white  overflow-hidden text-ellipsis whitespace-nowrap">
                          {video.title}
                        </p>
                        <BsThreeDotsVertical className="text-white w-[100px]" />
                      </div>
                      <div className="channelDetails_danhChoBan_videoList_card_info_view mt-[5px]">
                        <p className="text-[rgb(170,170,170)] text-[12px]">
                          {formatNumber(video.viewCount)} lượt xem
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelDetails;
