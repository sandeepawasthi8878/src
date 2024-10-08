import React from 'react'
import WebHeader from './WebHeader';
import MobHeader from './MobHeader';

function MainHeader() {
    let width = window.innerWidth;
     if (width < 768) {
       return (
           <MobHeader />
           );
        } else {
            return (
           <WebHeader />
       );
     }
  
}

export default MainHeader
