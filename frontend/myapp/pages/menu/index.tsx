import React from 'react'
import GetMenu from '../../components/GetMenu'
import Menu from '../../components/Menu'
import SmoothScroll from '../../components/Scolling/SmoothScroll'


interface Props {}

const index = () => {
  return (
    <>
  <div className='h-screen flex items-center justify-end pt-96 pr-56'>
<SmoothScroll>
    <Menu />
    </SmoothScroll>
    
  </div>
  
  </>
  )
}

export default index