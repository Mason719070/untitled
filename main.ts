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
	
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    1034,
    255,
    255,
    9999,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
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
