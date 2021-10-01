import React from 'react'
import './StoryReel.css'
import Story from './Story'
import pic from './storyPic.png'
import logo from './fb-logo.png'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image={pic} profileSrc={logo} title='Story 1'/>
            <Story image={pic} profileSrc={logo} title='Story 2'/>
            <Story image={pic} profileSrc={logo} title='Story 3'/>
            <Story image={pic} profileSrc={logo} title='Story 4'/>
            <Story image={pic} profileSrc={logo} title='Story 5'/>
        </div>
    )
}

export default StoryReel
