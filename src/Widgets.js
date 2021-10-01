import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                title='Personal'
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                width='100%'
                height='100%'
                style={{border:'none', overflow:'hidden'}}
                frameBorder='0'
                allowtransparency='true'
                allow='encrypted-media'
            />
        </div>
    )
}

export default Widgets
