#!/bin/bash
mjpg_streamer -i "/home/orangepi/mjpg-streamer/mjpg-streamer-experimental/input_uvc.so -d /dev/video0 -y" -o "/home/orangepi/mjpg-streamer/mjpg-streamer-experimental/output_http.so -p 8090"
