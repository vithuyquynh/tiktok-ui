import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from './Menu.module.scss'
import MenuItems from "./MenuItems";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(styles)
function Menu({ children, items = [], hideOnClick = 'false', onChange = () => { } }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return (
            current.data.map((item, index) => {
                const isParent = !!item.children
                return <MenuItems key={index} data={item} onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}></MenuItems>
            })
        )
    }
    return (
        <Tippy
            // visible
            hideOnClick={hideOnClick}
            interactive
            offset={[12, 8]}
            delay={[0, 400]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 &&
                            <Header
                                title='Language'
                                onBack={() => {
                                    setHistory(prev => prev.splice(0, prev.length - 1))
                                }}>
                            </Header>}
                        <div className={cx('menu-body')}>
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </ div>
            )}
            onHide={() => {
                setHistory(prev => [prev[0]])
            }}
        >
            {children}
        </Tippy>

    );
}

export default Menu;