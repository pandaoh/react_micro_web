/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 17:10:51
 * @Description: 主组件
 * @FilePath: \react_micro_web\src\views\App\index.tsx
 */
import React, { Component } from 'react';
import AppLoading from '@common/AppLoading';
import Logo from '@resource/images/logo.png';
import './style.scss';
import AppRouter from '@/router';

class App extends Component<any, { loading: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    window.onload = () => {
      setTimeout(() => {
        this.setState({ loading: true });
      }, 3500);
    };
  }

  render() {
    if (this.state.loading) {
      return (
        <AppRouter />
        // <div className="demo">
        //   <img src={Logo} alt="logo" />
        //   <h1>你好，太极！(Hello TaiJi!)</h1>
        // </div>
      );
    }

    return <AppLoading />;
  }
}

export default App;
