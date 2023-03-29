import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss"
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountPreview({ src, alt, username, fullName }) {
    return (
        <div className={cx('preview')}>
            <div className={cx('heading')}>
                <Link to={`@${username}`}>
                    <Image
                        src={src}
                        alt={alt}
                        className={cx('avatar')}
                    >

                    </Image>
                </Link>
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('infor')}>
                <h4 className={cx('username')}>
                    <span>{username}</span>
                    {true && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('name')}>{fullName}</span>
            </div>
            <div className={cx('footer')}>
                <span className={cx('statsText')}>8.3M</span>
                <span className={cx('statsDesc')}>Followers</span>
                <span className={cx('statsText')}>5M</span>
                <span className={cx('statsDesc')}>Likes</span>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
}

export default AccountPreview;