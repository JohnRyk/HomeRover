## Intro：

​	To create a simple wifi network telerobot with OrangePi PC.

## Materials：

​	The frame of our robot and serval wheel, an USB camera, an USB wireless network adropter, Motor driver (L298N), some wire jumper , a 18560 bettery and bettery holder (5v2a output), a voltage stabilizing module (XL6009E1) and our OrangePi PC x1

## Choosing Pins：

​	Using GPIO PA7 to PA10 for the motor control signal output

​	Using PG8 for the LED light control signal output

## Prepare for the usb cam：

​	Check if your device was been identified：

```shell
	ls  /dev/vi*			#SEe if there has "/dev/video0" 
```

​	Check mounted usb dev in sys：

```shell
	lsusb				   					
	Bus 004 Device 003: ID 1908:2311 GEMBIRD		#You will see you usbcam device here
```



## The RT vedio stream solution：

​	board：OrangePi PC

​	system： Lubuntu which officially provided by OrangePi 

​	package：mjpg-streamer

​	location：https://github.com/jacksonliam/mjpg-streamer.git

​	Shooting depenedncy:（https://github.com/jacksonliam/mjpg-streamer）：

​		gcc and g++ already installed in Lubuntu，so skip to install cmake and libjpeg8-dev：

```shell
	sudo apt-get install cmake libjpeg8-dev
```

​	cd mjpg-streamer-experimental，make and install：

```shell
	make
	sudo make install
```

​	When installation finished you will see a lot of file with *.so* postfix（which mean the plugins of mjpg-streamer）：

​	show help info：

```shell
	mjpg_streamer -h
```

​	check the usage of the plugin "input_uvc.so"	

```shell
	mjpg_streamer -i "input_uvc.so -h"
```

​	In the directory there has a start script I try to run it:

```shell
	./start.sh
```

​	But it was fail when try to init :

```markdown
MJPG Streamer Version: git rev: 501f6362c5afddcfb41055f97ae484252c85c912
│ i: Using V4L2 device.: /dev/video0
│ i: Desired Resolution: 640 x 480
│ i: Frames Per Second.: -1
│ i: Format............: JPEG
│ i: TV-Norm...........: DEFAULT
│Unable to set format: 1196444237 res: 640x480
│Init v4L2 failed !! exit fatal
│ i: init_VideoIn failed
```

​	Seem the format is not correct, the Format is JPEG 

​	It is clearly not match to my usbCam. (my usbCam is not using JPEG format)

​	I use -h option to see the parameter of the plugin "input_uvc.so" and try serval format and I found the format YUV will work (use -y) !

```shell
	mjpg_streamer -i "input_uvc.so -d /dev/video0 -y" -o "output_http.so -p 8090"
```

​	GOOD！

​	Lets access to the webcam using the follow url：

​	http://IPAddress:port/?action=stream

