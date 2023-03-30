import RecommendVideo from "./RecommendVideo";
import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <RecommendVideo>

            </RecommendVideo>
        </div>
    );
}

export default Home;