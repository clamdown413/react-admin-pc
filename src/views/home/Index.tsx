import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IIndexProps {


};
const Index: FC<IIndexProps> = () => {


  return (
    <><div>主页面
    </div><Outlet></Outlet></>
  )

};

export default Index;