import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";
import style from './DefaultLayout.module.scss'
const cx = classNames.bind(style)
function DefaultLayout({ children }) {
    return (
        <div style={{ height: 2000 }} className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <SideBar></SideBar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;