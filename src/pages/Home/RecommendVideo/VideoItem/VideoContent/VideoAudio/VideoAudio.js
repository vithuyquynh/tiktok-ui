import classNames from "classnames/bind";
import styles from './VideoAudio.module.scss'
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
            <div>Action</div>
        </div>
    );
}

export default VideoAudio;