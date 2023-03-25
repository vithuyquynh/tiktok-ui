import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";
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

export default DefaultLayout;