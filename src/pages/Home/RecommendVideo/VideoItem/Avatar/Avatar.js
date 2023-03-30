import Image from "~/components/Image";
import classNames from "classnames/bind";
import styles from './Avatar.module.scss'
const cx = classNames.bind(styles);
function Avatar() {
    return (
        <Image
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/943188687245fe8f0209a105d9e3dc5b~c5_100x100.jpeg?x-expires=1680368400&x-signature=vODInTTdbKDMP05EyBJxQ6Ac3JA%3D"
            alt="avatar"
            className={cx('avatar')}
        >

        </Image>
    );
}

export default Avatar;