
'use client';
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

// import { useRouter } from 'next/router';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (


    <div >

      {/* <WaterMark /> */}




      {/* <Box>

      </Box> */}
        <div className={`td-relative`}>{children}</div>

    </div>
  )
}