# RTSPtoHLS

RTSP Stream to WebBrowser HLS over HTTP based TS segments

full native! not use ffmpeg or gstreamer


![RTSPtoHLS image](doc/demo4.png)

## Team

Deepch - https://github.com/deepch streaming developer

Dmitry - https://github.com/vdalex25 web developer

## Installation
1.
```bash
go get github.com/deepch/RTSPtoHLS
```
2.
```bash
cd $GOPATH/src/github.com/deepch/RTSPtoHLS
```
3.
```bash
go run *.go
```
4.
```bash
open web browser http://127.0.0.1:8083
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



[![paypal.me/AndreySemochkin](https://ionicabizau.github.io/badges/paypal.svg)](https://www.paypal.me/AndreySemochkin) - You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:


