import React from 'react';
import { Row } from 'react-bootstrap'
import classNames from 'classnames'

import css from './Main.css';

class Main extends React.Component {
  render() {
    return(
        <div className="container-fluid" id="main">
            <div className="row">
                {/* page1 */}
                <div className={classNames(css.main_official, css.parallax, "text-center")}>
                    <div className={classNames("col-sm-12", "text-center", css.mainText)}>
                        <p className={css.mainTitle}>F.A.N</p>
                        <a className={classNames("btn", css.mainbtn)} href="#freemeeting">ABOUT US</a>
                    </div>
                </div>

                {/* Free Meeting : 팬 기본정보 */}
                <div className={css.freemeeting} id="freemeeting">
                    <div className={css.fmtext} >
                        <span className={css.f}>F</span>
                        <span className={css.reemeeting}>ree Meeting</span>
                    </div>

                    <div className={classNames("col-sm-10", css.fmcontent, css.col_center, "text-center")}>
                        <div className={classNames("col-sm-3", css.history)}>
                            <img src="/img/main_fm/history.png"/>
                        </div>
                        <div className={classNames("col-sm-3", css.study)}>
                            <img src="/img/main_fm/computer.png"/>
                        </div>
                        <div className={classNames("col-sm-3", css.activity)}>
                            <img src="/img/main_fm/activity.png"/>
                        </div>
                    </div>
                </div>

                {/* Active Studying : 갤러리  */}
                <div className={css.activestudying} id="activestudying">
                    <div className={css.astext} >
                        <span className={css.a}>A</span><span className={css.ctivestudying}>tive Studying</span>
                    </div>
                </div>

                {/* Nice Ending : 임원진 소개, 주소 */}
                <div className={css.niceending} id="niceending">
                    <div className={css.netext} >
                        <span className={css.n}>N</span><span className={css.iceending}>ice Ending</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Main
