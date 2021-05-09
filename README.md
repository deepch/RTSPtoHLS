# RTSPtoHLS

RTSP Stream to WebBrowser HLS over HTTP based TS segments

full native! not use ffmpeg or gstreamer


![RTSPtoHLS image](doc/demo4.png)

### Download Source

1. Download source
   ```bash 
   $ git clone https://github.com/deepch/RTSPtoHLS  
   ```
3. CD to Directory
   ```bash
    $ cd RTSPtoHLS/
   ```
4. Test Run
   ```bash
    $ GO111MODULE=on go run *.go
   ```
5. Open Browser
    ```bash
    open web browser http://127.0.0.1:8083 work chrome, safari, firefox
    ```

## Configuration

### Edit file config.json

format:

```bash
{
  "server": {
    "http_port": ":8083"
  },
  "streams": {
   "H264_AAC": {
      "url": "rtsp://171.25.232.20/d7b92541b4914c8e98104cba907864f8"
    }
  }
}
```

## Limitations

Video Codecs Supported: H264 all profiles

Audio Codecs Supported: AAC

## Test

CPU usage 0.2% one core cpu intel core i7 / stream

## Team

Deepch - https://github.com/deepch streaming developer

Dmitry - https://github.com/vdalex25 web developer

## Other Example

Examples of working with video on golang

- [RTSPtoWeb](https://github.com/deepch/RTSPtoWeb)
- [RTSPtoWebRTC](https://github.com/deepch/RTSPtoWebRTC)
- [RTSPtoWSMP4f](https://github.com/deepch/RTSPtoWSMP4f)
- [RTSPtoImage](https://github.com/deepch/RTSPtoImage)
- [RTSPtoHLS](https://github.com/deepch/RTSPtoHLS)
- [RTSPtoHLSLL](https://github.com/deepch/RTSPtoHLSLL)

[![paypal.me/AndreySemochkin](https://ionicabizau.github.io/badges/paypal.svg)](https://www.paypal.me/AndreySemochkin) - You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea: