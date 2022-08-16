/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 17:59:44
 * @Description: 登录页面
 * @FilePath: \react_micro_web\src\views\Login\index.tsx
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Login = () => {
  const history = useHistory();
  const onBlur = (e: any) => {
    !e.target.value && e.target.classList.remove('focus');
  };
  const onFocus = (e: any) => {
    e.target.classList.add('focus');
  };
  const stopEvent = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <div data-component="Login">
      <div className="container" id="login-box">
        <div className="form-container sign-up-container">
          <form>
            <h1>注册</h1>
            <div className="txtb">
              <input type="text" onFocus={onFocus} onBlur={onBlur} />
              <span data-placeholder="Username"></span>
            </div>
            <div className="txtb">
              <input type="email" onFocus={onFocus} onBlur={onBlur} />
              <span data-placeholder="Email"></span>
            </div>
            <div className="txtb">
              <input type="password" onFocus={onFocus} onBlur={onBlur} />
              <span data-placeholder="Password"></span>
            </div>
            <div className="txtb">
              <input type="password" onFocus={onFocus} onBlur={onBlur} />
              <span data-placeholder="Confirm Password"></span>
            </div>
            <button
              onClick={(e: any) => {
                stopEvent(e);
                alert('注册成功');
              }}
            >
              注册
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>登录</h1>
            <div className="txtb">
              <input type="email" onFocus={onFocus} onBlur={onBlur} />
              <span data-placeholder="Email"></span>
            </div>
            <div className="txtb">
              <input type="password" onFocus={onFocus} onBlur={onBlur} />
              <span data-placeholder="Password"></span>
            </div>
            <a href="#">忘记密码？</a>
            <button
              onClick={(e: any) => {
                stopEvent(e);
                history.replace('/');
              }}
            >
              登录
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>已有账号？</h1>
              <p>请使用您的账号进行登录</p>
              <button
                className="ghost"
                id="signIn"
                onClick={(e: any) => {
                  stopEvent(e);
                  document.querySelector('#login-box').classList.remove('right-panel-active');
                }}
              >
                登录
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>没有账号?</h1>
              <p>立即注册加入我们，和我们一起开始旅程吧</p>
              <button
                className="ghost"
                id="signUp"
                onClick={(e: any) => {
                  stopEvent(e);
                  document.querySelector('#login-box').classList.add('right-panel-active');
                }}
              >
                注册
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Login;
