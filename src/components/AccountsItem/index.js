import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountsItem.module.scss'
const cx = classNames.bind(styles)
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/64b046b0f739b728234bc0ac5c2e53f6~c5_100x100.jpeg?x-expires=1678417200&x-signature=xxWP6MTRNXbwHKjx0vA6937NkRY%3D" alt="hoa"></img>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountsItem;