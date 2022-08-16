/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 17:14:41
 * @Description: CardMenus
 * @FilePath: \react_micro_web\src\layouts\CardMenus\index.tsx
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

const CardMenus = (props: any) => {
  const goRouter = (path: string) => {
    props.history.push({
      pathname: path,
      state: { name: 'state' },
      query: { name: 'query' },
      search: 'name=search',
    });
  };
  return (
    <div className="container" data-component="CardMenus">
      <div className="card-menus">
        {props.menus.map((menu: any) => {
          return (
            <div className="box" key={menu.path}>
              <div
                className="img"
                onClick={() => {
                  goRouter(menu.path);
                }}
              >
                {menu.imgURL ? <img src={menu.imgURL} alt={menu.name} title={menu.name} /> : menu.icon}
              </div>
              <p>{menu.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(CardMenus);
