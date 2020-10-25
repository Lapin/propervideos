import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Wrapper from './styles/Wrapper';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Duration from '../components/Duration';
// import '../assets/debugger.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class VideoContainer extends Component {
  state = {
    url: 'https://www.youtube.com/watch?v=ni5hRK1ehzk',
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };

  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url),
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = (e) => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log('onEnablePIP');
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log('onDisablePIP');
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = (state) => {
    console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log('onEnded');
    this.setState({ playing: this.state.loop });
  };

  handleDuration = (duration) => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
    } = this.state;

    return (
      <div className="flex-grow relative">
        <div className="h-full w-full">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            height="100%"
            width="100%"
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.handlePlay}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={(e) => console.log('onSeek', e)}
            onEnded={this.handleEnded}
            onError={(e) => console.log('onError', e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-braunNotWhite bg-opacity-75">
          <Wrapper>
            <div className="flex items-center">
              <button onClick={this.handlePlayPause} className="">
                {playing ? 'Pause' : 'Play'}
              </button>

              <div className="flex items-center">
                <button onClick={this.handleToggleMuted}>
                  {muted ? 'Muted' : 'Volume'}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={volume}
                  onChange={this.handleVolumeChange}
                />

                <div
                  class="length range__slider"
                  data-min="4"
                  data-max="32"
                ></div>
              </div>

              <div className="flex items-center">
                <Duration seconds={duration * played} />

                <input
                  type="range"
                  min={0}
                  max={0.999999}
                  step="any"
                  value={played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
                />

                <Duration seconds={duration * (1 - played)} />
              </div>

              <button onClick={this.handleClickFullscreen}>
                Fullscreen
              </button>
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default VideoContainer;
