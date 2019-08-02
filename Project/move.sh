#!/bin/bash

light="/sys/class/gpio_sw/PG8/data"
source writeData.sh

echo "Choose your option"

case $1 in
1)
	writeData 0 1 1 0
;;
2)
	writeData 1 0 0 1
;;
3)
	writeData 1 0 1 0
;;
4)
	writeData 0 1 0 1
;;
5)
	data=`cat $light`
	if [ $data -eq 0 ]
		then
			echo 1 > $light
		else
			echo 0 > $light
	fi
;;
*)
	echo "Invalid value"
;;
esac

