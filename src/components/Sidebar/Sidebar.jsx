import "./Sidebar.scss";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiHistoryLine } from "react-icons/ri";
import { RiMeteorFill } from "react-icons/ri";
import { PiMusicNotesLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import YtbPre from "../../assets/images/ytbPre.png";
import YtbMusic from "../../assets/images/Youtube_Music_icon.svg.png";
import { RiFlagLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import YtbKids from "../../assets/images/ytbKids.webp";

export const Sidebar = () => {
  const isExpanded = true;

  return (
    <>
      {isExpanded ? (
        <div className="navbar_wrap">
          <div className={`navbar ${isExpanded ? "" : "collapsed"}`}>
            {/* block 1 */}
            <div className="block_1_wrap">
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <MdHome className="block_1_icon" />
                </div>
                <p>Home</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <SiYoutubeshorts className="block_1_icon" />
                </div>
                <p>Shorts</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <MdOutlineSubscriptions className="block_1_icon" />
                </div>
                <p>Subcriptions</p>
              </div>
            </div>

            {/* block 2 */}
            <div className="block_1_wrap">
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <HiOutlineUserCircle className="block_1_icon" />
                </div>
                <p>You</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <RiHistoryLine className="block_1_icon" />
                </div>
                <p>History</p>
              </div>
            </div>

            {/* block 3 */}
            <div className="block_3_wrap">
              <div className="block_3_text">
                <p>Sign in to like videos, comment, and subscribe.</p>
              </div>
              <div className="block_3_signIn_wrap">
                <div className="block_3_signIn_icon_wrap">
                  <HiOutlineUserCircle className="block_3_signIn_icon" />
                </div>
                <p>Sign in</p>
              </div>
            </div>

            {/* block 4 */}
            <div className="block_1_wrap">
              <div className="explore">
                <h3>Explore</h3>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <RiMeteorFill className="block_1_icon" />
                </div>
                <p>Trending</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <PiMusicNotesLight className="block_1_icon" />
                </div>
                <p>Music</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <SiYoutubegaming className="block_1_icon" />
                </div>
                <p>Gaming</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <MdNewspaper className="block_1_icon" />
                </div>
                <p>News</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <IoTrophyOutline className="block_1_icon" />
                </div>
                <p>Sports</p>
              </div>
            </div>

            {/* block 5 */}
            <div className="block_1_wrap">
              <div className="explore">
                <h3>More from YouTube</h3>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  {/* <FaYoutube className="block_5_icon" /> */}
                  <img src={YtbPre} className="block_5_icon" />
                </div>
                <p>Youtube Premium</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  {/* <SiYoutubemusic className="block_5_icon" /> */}
                  <img src={YtbMusic} className="block_5_icon" />
                </div>
                <p>Youtube Music</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  {/* <SiYoutubekids className="block_5_icon" /> */}
                  <img src={YtbKids} className="block_5_icon" />
                </div>
                <p>Youtube Kids</p>
              </div>
            </div>

            {/* block 6 */}
            <div className="block_1_wrap">
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <IoSettingsOutline className="block_1_icon" />
                </div>
                <p>Settings</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <RiFlagLine className="block_1_icon" />
                </div>
                <p>Report history</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <MdHelpOutline className="block_1_icon" />
                </div>
                <p>Help</p>
              </div>
              <div className="block_1">
                <div className="block_1_icon_wrap">
                  <RiFeedbackLine className="block_1_icon" />
                </div>
                <p>Send feedback</p>
              </div>
            </div>

            {/* block 7 */}
            <div className="block_1_wrap">
              <div className="block">
                <div className="top_block_line">
                  <a href="">About</a>
                  <a href="">Press</a>
                  <a href="">Copyright</a>
                </div>
                <div className="top_block_line">
                  <a href="">Contact us</a>
                  <a href="">Creator</a>
                </div>
                <div className="top_block_line">
                  <a href="">Advertise</a>
                  <a href="">Developers</a>
                </div>
              </div>
              <div className="block">
                <div className="top_block_line">
                  <a href="">Terms</a>
                  <a href="">Privacy</a>
                  <a href="">Policy & Safety</a>
                </div>
                <div className="top_block_line">
                  <a href="">How Youtube works</a>
                </div>
                <div className="top_block_line">
                  <a href="">Test new features</a>
                </div>
              </div>
              <div className="bottom_block">
                <p>
                  <FaRegCopyright className="copyrightIcon" /> 2025 Google LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar_wrap">
          <div className="inActive_navbar">
            <div className="inActive_navbar_son">
              <div>
                <MdHome className="inActive_navbar_icon" />
              </div>
              <p>Home</p>
            </div>
            <div className="inActive_navbar_son">
              <div>
                <SiYoutubeshorts className="inActive_navbar_icon" />
              </div>
              <p>Shorts</p>
            </div>
            <div className="inActive_navbar_son">
              <div>
                <MdOutlineSubscriptions className="inActive_navbar_icon" />
              </div>
              <p>Subcriptions</p>
            </div>
            <div className="inActive_navbar_son">
              <div>
                <HiOutlineUserCircle className="inActive_navbar_icon" />
              </div>
              <p>You</p>
            </div>
            <div className="inActive_navbar_son">
              <div>
                <RiHistoryLine className="inActive_navbar_icon" />
              </div>
              <p>History</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
