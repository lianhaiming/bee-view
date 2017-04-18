import React, {Component} from 'react'
import './details.scss'

class NewsDetail extends Component{
    render() {
        return (
            <div>
                <div className="news_wrap">
                    <h1 className="news_title">雄安新区来了，将带来哪些重大利好？</h1>
                    <div className="news_notice">
                        <span>author</span>
                        <span>2017-4-17</span>
                        <span>阅读450次</span>
                    </div>
                    <div className="news_img_wrap">
                        <img src="http://image.sike.news.cn/uploads/2017/04/2017-04-0568.jpg" alt="" className="news_img"/>
                    </div>
                    <p className="news_cont">
                        &nbsp;&nbsp;又是一个充满生机的春天。日前，中共中央、国务院印发通知，决定设立河北雄安新区。“这必将是中国历史上影响千年的大事”“雄安新区将成为支撑京津冀一体化发展的核心基点”“设立雄安新区树立了政府转型更为明确的风向标”
                        与当年的深圳、浦东一样，雄安新区刚刚诞生就引来了空前关注，作为由中共中央、国务院发文决定设立的国家级新区，雄安新区“新”在哪？有哪些“新”的发展规划？在建设的过程中如何避免大城市病？对当地的居民会带来哪些改变？思客综合编辑了几位智库专家的观点，就雄安新区的设立、建设、发展模式以及产业结构等问题进行全方位的解读。
                    </p>
                </div>
                <hr/>
                <div className="news_address">源地址：<a href="http://www.hebtv.com/2017/0406/372626.shtml">http://www.hebtv.com/2017/0406/372626.shtml</a></div>
            </div>
        )
    }
}

export default NewsDetail;