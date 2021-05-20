import React from 'react'
import './App.css'
import {FaInstagram, FaFacebook, FaEnvelope, FaBookOpen} from 'react-icons/fa'
import {Helmet} from 'react-helmet'
class App extends React.Component {
  render() {
    return (<Bridge />);
  }
}

const seminarList = [
  {
    href : "https://forms.gle/X3hCnFHXGjkywuKw9",
    topic : "Brain Machine Interface",
    mentor : "표중현",
    course : "생명과학과 통합과정",
    month: 4,
    day: 29,
    time: new Date(2021, 4 - 1, 29, 19, 30, 0, 0).getTime(),
    img: "1.png"
  },
  {
    href : "https://forms.gle/ztVkoWNmvqwYUHm17",
    topic : "생체모방: 로봇의 디자인과 R&D 그리고 운용",
    mentor : "김태식",
    course : "IT융합공학과 통합과정",
    month: 5,
    day: 13,
    time: new Date(2021, 5 - 1, 13, 19, 30, 0, 0).getTime(),
    img: "2.png"
  },
  {
    href : "https://forms.gle/MWgpLSAdDUa9pmFQ7",
    topic : "기계학습과 무선 통신",
    mentor : "김지오",
    course : "컴퓨터공학과 통합과정",
    month: 5,
    day: 20,
    time: new Date(2021, 5 - 1, 20, 19, 30, 0, 0).getTime(),
    img: "3.png"
  },
  {
    href : "https://forms.gle/QyNR6JP92FBTivuFA",
    topic : "화학전공자들의 기술 창업",
    mentor : "김동영",
    course : "박사 후 연구원",
    month: 6,
    day: 17,
    time: new Date(2021, 6 - 1, 17, 19, 30, 0, 0).getTime(),
    img: "4.png" 
  }
]
const today = new Date().getTime();

class Bridge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  thisweekSeminar() {
    let recent = seminarList[3];
    for (var s of seminarList) {
      if (today < s.time) {
        recent = s;
        break;
      }
    }
    return (
      <div className = "recent">
        <div className = "txtbg">
          <div className = "txt">
            <div className = "thisweek">
              금주의 세미나
            </div>
            <div className = "topic">
              {s.topic}
            </div>
            <div className = "mctgrid">
              <span>
                <div>
                  <span className = "mentor">{s.mentor}</span>
                  <span className = "course">&nbsp;{s.course}</span>
                </div>
                <div className = "time">
                  {s.month}월 {s.day}일 목요일 19시 30분
                </div>
              </span>    
              <span className = "btnWrapper">
                {this.isTimeRange(s)}
              </span>
            </div>
            
          </div>
        </div>
        <div className = "bg">
          <img src = {process.env.PUBLIC_URL + "/" + s.img} alt="d"/>
          <img className = "blur" src = {process.env.PUBLIC_URL + "/" + s.img} alt="d"/>
        </div>
      </div>
    )

  }
  isTimeRange(seminar) {
    //let dt = new Date().getTime() - new Date(2020, month, day, 19, 30, 0, 0).getTime()
    let dt = today - seminar.time
    if (dt >= 5400000)
      return null;
    else return (dt > -300000 && dt < 5400000) ? 
      (<a href = "https://us02web.zoom.us/j/4464915286?pwd=dHNwYWY1UTY0bERYMlFkMC9xMzAxQT09">
        <div className = "apply play">세미나 참여</div>
      </a>) :
      (<a href = {seminar.href}>
        <div className = "apply">사전신청</div>
      </a>)
  }
  render() {
    return (
      <div className = "app">
        <Helmet>
          <title>
            POSTECH TechReview
          </title>
        </Helmet>
        <nav>
          <span className = "title">
            <a href = "/techreview_web/">
              Tech-Review
            </a>
          </span>
          <span className = "menus">
            <a href = "https://bit.ly/2020techreview">
              <FaBookOpen size = "20px"/>
            </a> 
            <a href = "mailto:tech-review@postech.ac.kr">
              <FaEnvelope size = "20px"/>
            </a>
            <a href = "https://instagram.com/postech_techreview">
              <FaInstagram size="20px"/>
            </a>
            <a href = "https://facebook.com/postech.techreview">
              <FaFacebook size="20px"/>
            </a>
          </span>
          
        </nav>
        <main>
          {this.thisweekSeminar()}
          <div className = "seminarhead">
            <div>
              날짜
            </div>
            <div>
              주제
            </div>
          </div>
          {seminarList.map(seminar => { return (
            <div className = "seminar">
              <div className = "date">
                {seminar.month}. {seminar.day} (목)<br/>19시 30분
              </div>
              <span>
                <div className = "topic">
                  {seminar.topic}
                </div>
                <div className = "mentorwrapper">
                  <span className = "mentor">
                    {seminar.mentor}
                  </span>
                  <span className = "course">
                    &nbsp;{seminar.course}
                  </span>
                </div>
              </span>
                {this.isTimeRange(seminar)}
            </div>
          )})}
        </main>
      </div>
    )
  }
}

export default App;
