

"use client" 

import React, { FC, useCallback } from 'react';

import styles from './styles.module.css';
import Video1 from '@/ui/sections/Video1/Video1';
import Video2 from '@/ui/sections/Video2/Video2';

interface PagesProps {}

const Pages: FC<PagesProps> = () =>{
  
 
  return ( <div className={styles.Main}>
    {/* <ReportGeneration></ReportGeneration> */}
    <Video2 src={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}></Video2>
    

  </div>
)
  };

export default Pages;


// export default function Page() {
//     return <h1 >Hello, Next.js!</h1>
    
//   }


  