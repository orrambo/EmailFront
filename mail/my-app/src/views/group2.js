import React from 'react'

import { Helmet } from 'react-helmet'

import './group2.css'

const Group2 = (props) => {
  return (
    <div className="group2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="group2-group2">
        <div className="group2-group1">
          <div className="group2-frame-text-field">
            <div className="group2-input">
              <span className="group2-text componentsinputLabel">
                <span>Почта</span>
              </span>
              <div className="group2-content">
                <div className="group2-minheight"></div>
                <span className="group2-text02 componentsinputText">
                  <span>Введите данные</span>
                </span>
              </div>
              <img
                src="/playground_assets/underlinei6013-b5w.svg"
                alt="UnderlineI6013"
                className="group2-underline"
              />
            </div>
          </div>
          <div className="group2-frame-text-field1">
            <div className="group2-input1">
              <span className="group2-text04 componentsinputLabel">
                <span>Пароль</span>
              </span>
              <div className="group2-content1">
                <div className="group2-minheight1"></div>
                <span className="group2-text06 componentsinputText">
                  <span>Введите данные</span>
                </span>
              </div>
              <img
                src="/playground_assets/underlinei6013-zjx.svg"
                alt="UnderlineI6013"
                className="group2-underline1"
              />
            </div>
          </div>
          <button className="group2-frame-button">
            <div className="group2-base">
              <span className="group2-text08">
                <span>вход</span>
              </span>
            </div>
          </button>
          <span className="group2-text10">
            <span className="group2-text11">
              <span>Вход</span>
              <br></br>
              <span></span>
            </span>
            <span>для работы с почтой</span>
          </span>
          <button className="group2-frame-button1">
            <div className="group2-base1">
              <span className="group2-text16">
                <span>Создать аккаунт</span>
              </span>
            </div>
          </button>
        </div>
        <img
          src="/playground_assets/vector6041-llip.svg"
          alt="Vector6041"
          className="group2-vector"
        />
      </div>
    </div>
  )
}

export default Group2
