import { faCheckCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './VideoInfor.module.scss'
const cx = classNames.bind(styles);
function VideoInfor({ className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('content')}>
                <div className={cx('infor')}>
                    <div>
                        <h3 className={cx('username')}>
                            <span>quynhditbu</span>
                            {true && <FontAwesomeIcon className={cx('user-icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                        </h3>
                        <h4 className={cx('name')}>
                            Vi Thúy Quỳnh
                        </h4>
                    </div>
                </div>
                <Button small outline className={cx('follow-btn')}>Follow</Button>
                <div className={cx('description')}>
                    <a href="/" className={cx('tags')}>#xuhuong</a> viquynhiuanh
                </div>
                <a href="/" className={cx('music-infor')}>
                    <FontAwesomeIcon className={cx('music-icon')} icon={faMusic}></FontAwesomeIcon>
                    <span className={cx('music-name')}>Kỳ Vọng Sai Lầm (MK Remix) [Short Version] - Exclusive Music & Tăng Phúc & Nguyễn Đình Vũ & Yuno Bigboi</span>
                </a>
            </div>
        </div>
    );
}

export default VideoInfor;