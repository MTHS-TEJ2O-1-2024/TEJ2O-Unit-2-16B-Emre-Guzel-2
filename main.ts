// Copyright (c) 2020 MTHS All rights reserved
// Created by: Emre Guzel
// Created on: Nov 2024
// This program sends radio messages to another micro:bit


// Setting the variables
let distance: number = 0

// Setting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Setting the radio group
radio.setGroup(13)

// Event handler for receiving a Number over radio
radio.onReceivedNumber(function(receivedNumber: number) {
   distance = receivedNumber
})

// Main loop for checking the distance
while (true) {
   basic.clearScreen()
    if (distance >= 10) {
        basic.showIcon(IconNames.Happy)
    }
    else if (distance < 10) {
        basic.showString("Too close")
    }
}