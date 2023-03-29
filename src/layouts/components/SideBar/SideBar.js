import config from "~/config";
import classNames from "classnames/bind";
import style from './SideBar.module.scss'
import Menu, { MenuItem } from "./Menu";
import SuggestedAccounts from "./SuggestedAccounts";
import {
    HomeIcon, HomeActiveIcon,
    UserGroupIcon, UserGroupActiveIcon,
    LiveIcon, LiveActiveIcon,
} from "~/components/Icons";
const cx = classNames.bind(style)
function SideBar() {

    return (
        <aside className={cx('wrapper')}>
            <Menu className={'menu-list'}>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={{
                        default: <HomeIcon />,
                        active: <HomeActiveIcon />,
                    }}
                >
                </MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={{
                        default: <UserGroupIcon />,
                        active: <UserGroupActiveIcon />,
                    }}
                >
                </MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={{
                        default: <LiveIcon />,
                        active: <LiveActiveIcon />,
                    }}
                >
                </MenuItem>
            </Menu>
            <SuggestedAccounts label='Suggested Accounts' title='See all' />
            <SuggestedAccounts label='Following accounts' title='See more' />
        </aside>
    )
}

export default SideBar;