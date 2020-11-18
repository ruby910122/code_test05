input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
