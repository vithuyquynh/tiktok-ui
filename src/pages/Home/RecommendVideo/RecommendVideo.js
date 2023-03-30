import classNames from "classnames/bind";
import styles from './RecommendVideo.module.scss'
import Avatar from "./VideoItem/Avatar";
import VideoItem from "./VideoItem";
import VideoContent from "./VideoItem/VideoContent";
const cx = classNames.bind(styles);
function RecommendVideo() {
    return (
        <div>
            <VideoItem className={cx('wrapper')}>
                <Avatar></Avatar>
                <VideoContent className={cx('video-infor')}>
                </VideoContent>
            </VideoItem>
        </div>
    );
}

export default RecommendVideo;