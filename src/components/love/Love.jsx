import React from 'react'
import './Love.css'

function Love() {
  return (
    <div id="love">
      <ul className="navbar">
        <li>Tình yêu</li>
        <li>Công việc</li>
        <li>Tài vận</li>
      </ul>
      <div className="content">
        <div className="heading">
          <span>My muse tarot</span>
          <span>Bối bài cùng nàng thơ</span>
          <span>Tình yêu - Công việc - Tài vận</span>
        </div>
        <div className="buttonRuilt">
          <button>Nhận thông điệp</button>
        </div>
      </div>
    </div>
  )
}

export default Love