import React, { Component } from 'react';
import VideoOverlay from '../VideoOverlay';
import './styles.scss';

class VideoBlock extends Component {
    render() {
        return (
            <div class="video-block">
                <div class="video-block__container">
                    <video autoplay="" loop="" class="video-block__video" style={{width: '1543px', height: '867.938px'}}>
                        <source type="video/mp4" src="vid/bg-video.mp4"/>
                        <source type="video/webm" src="vid/bg-video.webm"/>
                        <source type="video/ogg" src="vid/bg-video.ogv"/>
                    </video>
                    <VideoOverlay />
                </div>
            </div>
        );
    }
}

export default VideoBlock;
