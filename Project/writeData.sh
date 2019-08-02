#!/bin/bash

writeData(){
	echo "Set value: $1 $2 $3 $4"
	echo $1 > "/sys/class/gpio_sw/PA7/data"
	echo $2 > "/sys/class/gpio_sw/PA8/data"
	echo $3 > "/sys/class/gpio_sw/PA9/data"
	echo $4 > "/sys/class/gpio_sw/PA10/data"	
	sleep 0.2
	echo 0 > "/sys/class/gpio_sw/PA7/data"
	echo 0 > "/sys/class/gpio_sw/PA8/data"
	echo 0 > "/sys/class/gpio_sw/PA9/data"
	echo 0 > "/sys/class/gpio_sw/PA10/data"
}
