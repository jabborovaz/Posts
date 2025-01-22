import React, {useEffect} from 'react'
import { getPostsApi } from './api'

function Main() {

  useEffect(() => {

    getPostsApi()



  }, [])


  return (
    <div>
      
    </div>
  )
}

export default Main
