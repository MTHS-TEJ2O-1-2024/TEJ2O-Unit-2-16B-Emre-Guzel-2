/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Nov 7 2024
 * This program sends massege and recvies maeesage from microbit 
*/
// Setting the varivles
let disanceTobjct:number = 0

// Setting the screen 
basic.clearScreen()
basic.showIcon(IconNames.Happy)
// Setting the radio 
radio.setGroup(13)

// Setting the distance for sonar in while loop
while (true) {
    basic.clearScreen()
        disanceTobjct = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
    }


