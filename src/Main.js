import React from 'react';
import {Link} from 'react-router-dom'
import './Main.css';

const Main = () => {
    return (
      <div>
        <div className="main-content">
          <div className="content-group">
            <div className="content-img">

                <div className ="content-bank">
                <h1>
                    <span className="text">경제 용어?!</span>
                    <br />
                    더 이상 어려움은 NO!
                </h1>
                
                <img src="/mainbank.png" alt="메인 이미지" width="360px" />

                </div>
                
                <div className="content-button">
                    <Link to = "./Education">
                    <button>단계별 교육 바로가기</button>
                    </Link>

                </div>
               
                
            
            </div> 
            <div className="content-hard">
                <div className="hard-text">
                <p class="main_title">어려운 때일 수록 함께 가도록 노력하겠습니다.</p>
                <p class ="sub_title">#ATM #은행 #경제용어</p>
                </div>

                <Link to ="./Map"><button>주변 ATM 위치 찾기 ➡️</button>
                </Link>

                <div className="location-image">
                    <img src="/location.png" alt="위치 이미지" width="250px" />
                </div>

                <div className ="sub-content">
                    <div class="sub-child">
                        <p class ="bold-text">오늘의 경제 퀴즈</p>
                        <img src="/questionmark.png" alt="퀴즈 이미지" width="180px;"/>
                    </div>
                    <div class ="sub-child">
                        <p class ="bold-text">오늘의 경제 뉴스</p>
                        <img src="/news.png" alt="퀴즈 이미지" width="180px;"/>
                    </div>
                    <div class="sub-child">
                        <p class ="bold-text">ATM 체험하기 </p>
                        <img src="/questionmark.png" alt="퀴즈 이미지" width="180px;"/>
                    </div>
                </div>
                
                

                

            </div>
                
                
            
                
            </div>  
            <br/>
            
          
            


        </div>

    
        
     
        
      </div>
      
      
    );
  };

export default Main;