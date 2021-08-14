input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.round((elapsed - 7000) / 1000)
    if (score == 0) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("E D G F B A C5 B ", 240)
    }
    if (score < 0) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showNumber(score)
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showNumber(score)
    }
})
let score = 0
let elapsed = 0
let start = 0
basic.showString("7s")
basic.forever(function () {
	
})
