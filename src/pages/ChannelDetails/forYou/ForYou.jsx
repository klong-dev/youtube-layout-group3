// import Carousel from "react-multi-carousel";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import "react-multi-carousel/lib/styles.css";

// const ForYou = ({ channelDetails }) => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const formatNumber = (number) => {
//     if (number >= 1000 && number < 1000000) {
//       return (number / 1000).toFixed(1) + " K";
//     } else if (number >= 1000000) {
//       return (number / 1000000).toFixed(1) + " M";
//     } else if (number < 1000) {
//       return number;
//     }
//   };

//   return (
//     <div>
//       <div className="channelDetails_danhChoBan ml-[110px]">
//         <div className=" mt-[17px] mb-[17px]">
//           <p className="text-white text-[20px] font-bold">Dành cho bạn</p>
//         </div>
//         <div className="channelDetails_danhChoBan_videoList flex">
//           <Carousel className="w-[1080px]" responsive={responsive}>
//             {channelDetails.videos.map((video) => (
//               <div
//                 className="channelDetails_danhChoBan_videoList_card"
//                 key={video.videoId}
//               >
//                 <img
//                   className="w-[354px] h-[198px] rounded-2xl"
//                   src={video.thumbnail}
//                 />
//                 <div className="channelDetails_danhChoBan_videoList_card_info">
//                   <div className="channelDetails_danhChoBan_videoList_card_info_title flex mt-[10px]">
//                     <p className="text-white  line-clamp-2">{video.title}</p>
//                     <BsThreeDotsVertical className="text-white w-[100px]" />
//                   </div>
//                   <div className="channelDetails_danhChoBan_videoList_card_info_view mt-[5px]">
//                     <p className="text-[rgb(170,170,170)] text-[12px]">
//                       {formatNumber(video.viewCount)} lượt xem
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <div className="ml-[50px] mt-[20px] border-b border-b-[rgba(170,170,170,0.4)]"></div>
//     </div>
//   );
// };

// export default ForYou;
