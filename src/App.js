import React from 'react'
import './App.css'
import {FaInstagram, FaFacebook, FaEnvelope, FaBookOpen} from 'react-icons/fa'
class App extends React.Component {
  render() {
    return (<Bridge />);
  }
}

class Bridge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timedelta : new Date().getTime(),
      seminarList : [
        {
          href : "https://google.com",
          topic : "Brain Computer Interface",
          mentor : "표중현",
          course : "생명과학과 통합과정",
          month: 4,
          day: 29
        },
        {
          href : "https://google.com",
          topic : "기계학습과 무선 통신",
          mentor : "김지오",
          course : "컴퓨터공학과 통합과정",
          month: 5,
          day: 2
        },
        {
          href : "https://google.com",
          topic : "생체모방: 로봇의 디자인과 R&D 그리고 운용",
          mentor : "김태식",
          course : "IT융합공학과 통합과정",
          month: 5,
          day: 13
        },
        {
          href : "https://google.com",
          topic : "화학전공자들의 기술 창업",
          mentor : "김동영",
          course : "박사 후 연구원",
          month: 6,
          day: 17
        }
      ]
    }
    console.log(this.state.seminarList)
  }
  isTimeRange(seminar) {
    //let dt = new Date().getTime() - new Date(2020, month, day, 19, 30, 0, 0).getTime()
    let dt = new Date().getTime() - new Date(2021, seminar.month, seminar.day, 2, 30, 0, 0).getTime()
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
        <nav>
          <span className = "title">
            <a href = "/">
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
            <a href = "https://instagram.com/postech.techreview">
              <FaInstagram size="20px"/>
            </a>
            <a href = "https://facebook.com/postech-techreview">
              <FaFacebook size="20px"/>
            </a>
          </span>
          
        </nav>
        <main>
          <h1>
            Upcoming Seminars
          </h1>
          <div className = "seminarhead">
            <div>
              날짜
            </div>
            <div>
              주제
            </div>
          </div>
          {this.state.seminarList.map(seminar => { return (
            <div className = "seminar">
              <div className = "date">
                {seminar.month}월 {seminar.day}일 (목)<br/>19시 30분
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
