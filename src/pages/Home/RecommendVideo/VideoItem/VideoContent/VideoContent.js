import VideoInfor from "./VideoInfor";
import VideoAudio from "./VideoAudio"
import classNames from "classnames/bind";
import styles from './VideoContent.module.scss'
const cx = classNames.bind(styles);

function VideoContent() {
    return (
        <div className={cx('wrapper')}>
            <VideoInfor ></VideoInfor>
            <VideoAudio></VideoAudio>
        </div>
    );
}

export default VideoContent;