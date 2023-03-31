import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './BoxProfile.module.scss'
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Avatar from "../Avatar";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function BoxProfile({ children, offset = [-8, 4] }) {
    const renderBoxProfile = () => {
        return (
            <PopperWrapper>
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>
                        <Avatar small></Avatar>
                        <div className={cx(('follow-btn'))}>
                            <Button outline>Follow</Button>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('infor')}>
                            <h3 className={cx('username')}>
                                vithuyquynh
                                {true && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                            </h3>
                            <h4 className={cx('name')}>
                                Vi Thúy Quỳnh
                            </h4>
                        </div>
                    </div>
                    <div className={cx('statsUser')}>
                        <span className={cx('statsText')}>9.2M</span>
                        <span className={cx('statsDesc')}>Followers</span>
                        <span className={cx('statsText')}>9.2M</span>
                        <span className={cx('statsDesc')}>Likes</span>
                    </div>
                    <div className={cx('footer')}>
                        <p className={cx('description')}>
                            📩 𝐃𝐢𝐫𝐞𝐜𝐭 𝐟𝐨𝐫 𝐰𝐨𝐫𝐤 💌
                            𝐈𝐆:  _𝐭𝐡𝐮𝐲𝐝𝐮𝐨𝐧𝐠𝐧𝐠𝐮𝐲𝐞𝐧__
                        </p>
                    </div>
                </div>
            </PopperWrapper>
        )
    }
    return (
        <div>
            <Tippy
                // visible
                delay={[800, 0]}
                interactive
                render={renderBoxProfile}
                placement='bottom-start'
                offset={offset}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default BoxProfile;