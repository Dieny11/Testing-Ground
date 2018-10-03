import React from "react"
import { Timeline } from 'react-twitter-widgets'
import ReactDOM from 'react-dom'


export default ( )=>

  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'ellvay97'
    }}
    options={{
      username: 'EllVay97',
      height: '1080',
      width:"max"
      
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
