input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        . # . # .
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("B C5 E D E A G F ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Dakshin sucks him")
})
input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    music.setVolume(200)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Noise,
    1,
    5000,
    0,
    255,
    9999,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
    basic.clearScreen()
})
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
led.plot(4, 0)
led.plot(3, 1)
led.plot(2, 2)
led.plot(1, 3)
led.plot(0, 4)
led.plot(4, 4)
led.plot(3, 3)
led.plot(1, 1)
led.plot(2, 2)
led.plot(0, 0)
basic.forever(function () {
	
})
