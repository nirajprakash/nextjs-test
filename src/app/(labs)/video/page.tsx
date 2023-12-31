

"use client" 

import React, { FC, useCallback } from 'react';

import styles from './styles.module.css';
import Video1 from '@/ui/sections/Video1/Video1';

interface PagesProps {}

const Pages: FC<PagesProps> = () =>{
  
 
  return ( <div className={styles.Main}>
    {/* <ReportGeneration></ReportGeneration> */}
    <Video1 src={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}></Video1>

  </div>
)
  };

export default Pages;


// export default function Page() {
//     return <h1 >Hello, Next.js!</h1>
    
//   }


  