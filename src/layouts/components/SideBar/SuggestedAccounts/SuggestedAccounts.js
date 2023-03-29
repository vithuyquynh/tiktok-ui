import PropTypes from 'prop-types';
import styles from "./SuggestedAccounts.module.scss"
import classNames from "classnames/bind";
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccounts({ label, title }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>{label}</h4>
            <AccountItem
                src='https://scontent.xx.fbcdn.net/v/t1.15752-9/336595151_1327228821469085_1895277577890850764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z5fmDjISC74AX8WImcv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSUjaqvzzHrmc_KM3-oRM1AsI_t3KfyO33IjKoszUy5-Q&oe=644270AA'
                alt='avatar'
                fullName='Vi Thúy Quỳnh'
                username='quynhditbu'
            >
            </AccountItem>
            <AccountItem
                src='https://scontent.xx.fbcdn.net/v/t1.15752-9/336595151_1327228821469085_1895277577890850764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z5fmDjISC74AX8WImcv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSUjaqvzzHrmc_KM3-oRM1AsI_t3KfyO33IjKoszUy5-Q&oe=644270AA'
                alt='avatar'
                fullName='Vi Thúy Quỳnh'
                username='quynhditbu'
            >
            </AccountItem>
            <AccountItem
                src='https://scontent.xx.fbcdn.net/v/t1.15752-9/336595151_1327228821469085_1895277577890850764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z5fmDjISC74AX8WImcv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSUjaqvzzHrmc_KM3-oRM1AsI_t3KfyO33IjKoszUy5-Q&oe=644270AA'
                alt='avatar'
                fullName='Vi Thúy Quỳnh'
                username='quynhditbu'
            >
            </AccountItem>
            <AccountItem
                src='https://scontent.xx.fbcdn.net/v/t1.15752-9/336595151_1327228821469085_1895277577890850764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z5fmDjISC74AX8WImcv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSUjaqvzzHrmc_KM3-oRM1AsI_t3KfyO33IjKoszUy5-Q&oe=644270AA'
                alt='avatar'
                fullName='Vi Thúy Quỳnh'
                username='quynhditbu'
            >
            </AccountItem>
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default SuggestedAccounts;