import React from 'react';
import './Main.css';

const Main = () => {
    return (
      <div>
        <div className="main-content">
          <div className="content-group">
            <h1>
              <span className="bold-text">경제 용어?!</span>
              <br />
              더 이상 어려움은 NO!
            </h1>
            <img src="/mainImage.jpeg" alt="메인 이미지" width="372px" />
            <br/>
            
            
          </div>
          <button>단계별 교육 바로가기</button>
        </div>
        
      </div>
      
    );
  };

export default Main;