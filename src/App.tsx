import { useState } from 'react'
import { SearchPage } from './SearchPage'

export const App = () => {


  return (
    // put html in here, that uses the other components
    <div>
      <div className='welcome'>Welcome!</div>
      <div> <SearchPage/> </div>
    </div>
  )

}
