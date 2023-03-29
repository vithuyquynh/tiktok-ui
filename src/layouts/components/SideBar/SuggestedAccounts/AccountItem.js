import PropTypes from 'prop-types';
import styles from "./SuggestedAccounts.module.scss"
import classNames from "classnames/bind";
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ src, alt, username, fullName }) {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview
                        src={src}
                        alt={alt}
                        username={username}
                        fullName={fullName}
                    >
                    </AccountPreview>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                placement='bottom-start'
                render={renderPreview}
                offset={[-8, -2]}
            >
                <Link to={`@${username}`} className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src={src}
                        alt={fullName}
                    >
                    </Image>
                    <div className={cx('infor')}>
                        <h4 className={cx('username')}>
                            <span>{username}</span>
                            {true && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                        </h4>
                        <span className={cx('name')}>{fullName}</span>
                    </div>
                </Link >
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
}

export default AccountItem;