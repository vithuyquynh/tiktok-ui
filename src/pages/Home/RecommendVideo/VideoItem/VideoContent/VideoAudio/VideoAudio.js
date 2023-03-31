import classNames from "classnames/bind";
import styles from './VideoAudio.module.scss'
import ActionBtn from "./ActionBtn";
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import MenuItem from './MenuItem'
const cx = classNames.bind(styles);

function VideoAudio() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <video
                    className={cx('audio')}
                    controls
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/1953-64245f4ac2376.mp4"
                >
                </video>
            </div>
            <div className={cx('actions')}>
                <ActionBtn like icon={faHeart} actionCount="3.9M"></ActionBtn>
                <ActionBtn comment icon={faCommentDots} actionCount="3.9M"></ActionBtn>
                <MenuItem>
                    <ActionBtn share icon={faShare} actionCount="3.9M"></ActionBtn>
                </MenuItem>
            </div>
        </div>
    );
}

export default VideoAudio;