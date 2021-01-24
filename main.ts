let Color = 0
let SingleLED = 0
basic.showIcon(IconNames.Heart)
let Leds = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    SingleLED = randint(0, 24)
    Color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    Leds.setPixelColor(SingleLED, Color)
    Leds.show()
    basic.pause(100)
})
