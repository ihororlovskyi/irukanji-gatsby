import React from 'react'

import './style.scss'

class MixcloudPlayer extends React.Component {
    render() {
        return (
            <div className='mixcloud-player'>
<!--                 <iframe className="mixcloud-player__iframe" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Flunecell_sets%2Flunecellfractiliannewyears2014%2F&hide_cover=1&autoplay=0" /> -->
                <iframe className="mixcloud-player__iframe" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Firukanji%2Fgood-murning-morning-zenonesque-psytrance-djset-by-irukanji%2F" />
            </div>
        );
    }
}

export default MixcloudPlayer
