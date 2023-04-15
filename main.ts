dht11.set_pin(DigitalPin.P0)
basic.forever(function () {
    basic.showString("H")
    basic.showNumber(dht11.humidity())
    basic.showString("T")
    basic.showNumber(dht11.temperature())
})
