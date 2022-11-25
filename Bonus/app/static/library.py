from org.transcrypt.stubs.browser import *
import random
import math

def calculated2():
	# The following line get the value of the text input called "numbers"
	land = document.getElementsByName("land")[0].value
	water = document.getElementsByName("water")[0].value
	machinery = document.getElementsByName("machinery")[0].value
	# Throw alert and stop if nothing in the text input
	if land == "" or water == "" or machinery == "":
		window.alert("Your textbox is empty")
		return
	else:
		land=int(land)
		water=int(water)
		machinery = int(machinery)

		l=land*land
		w=water*water
		if(machinery == 0):
			m=math.log(1,10)
		else:
			m=math.log(machinery,10)

	y = (1.96*(math.power(10,8)))+(2.076*(math.power(10,6))*l)+(7.1*((math.power(10,7))*w)+(1.24*((math.power(10,6))*m)
	document.getElementById("predict").innerHTML = y
