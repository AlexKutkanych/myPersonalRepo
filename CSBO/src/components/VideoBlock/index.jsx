import React, { Component } from 'react';
import VideoOverlay from '../VideoOverlay';
import Video from '../../video/main-video.mp4';
import './styles.scss';

class VideoBlock extends Component {
    render() {
        return (
            <div class="video-block">
                <div class="video-block__container">
                    <video autoplay="true" loop="true" class="video-block__video" style={{width: '100%', height: '867.938px'}}>
                        <source type="video/mp4" src={Video}/>
                        {/* <source type="video/webm" src="vid/bg-video.webm"/> */}
                        {/* <source type="video/ogg" src="vid/bg-video.ogv"/> */}
                    </video>
                    <VideoOverlay />
                </div>
            </div>
        );
    }
}

export default VideoBlock;
