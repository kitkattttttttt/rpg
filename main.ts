controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c c e c e c c c f f . . 
        . . . f c e e e c e e c f . . . 
        . . f c e e e e c e c e c f . . 
        . . . f e c c e e c e c f . . . 
        . . . . f e c e c e e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . d d 2 2 2 2 2 2 d . . . . 
        . . . . . 8 6 8 6 6 8 . . . . . 
        . . . . . 6 6 6 8 6 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c c e c e c c c f f . . 
        . . . f c e e e c e e c f . . . 
        . . f c e e e e c e c e c f . . 
        . . . f e c c e e c e c f . . . 
        . . . . f e c e c e e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . d d 2 2 2 2 2 2 d d . . . 
        . . . . . 8 6 8 6 6 8 . . . . . 
        . . . . . 6 6 6 8 6 6 . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c c e c e c c c f f . . 
        . . . f c e e e c e e c f . . . 
        . . f c e e e e c e c e c f . . 
        . . . f e c c e e c e c f . . . 
        . . . . f e c e c e e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . . d 2 2 2 2 2 2 d d . . . 
        . . . . . 8 6 8 6 6 8 . . . . . 
        . . . . . f 6 6 8 6 6 . . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c c e c e c c c f f . . 
        . . . f c e e e c e e c f . . . 
        . . f c e e e e c e c e c f . . 
        . . . f e c c e e c e c f . . . 
        . . . . f e c e c e e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . d d 2 2 2 2 2 2 d d . . . 
        . . . . . 8 6 8 6 6 8 . . . . . 
        . . . . . 6 6 6 8 6 6 . . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e c e e f f . . . 
        . . . . f e 8 d e c e f . . . . 
        . . . . . d f d e c e e f . . . 
        . . . . . d d d d c e f . . . . 
        . . . . . . e b c e f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . d 2 2 d . . . . . . . 
        . . . . . . 8 6 6 . . . . . . . 
        . . . . . 6 8 6 6 6 f . . . . . 
        . . . . f f f . f f . . . . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e c e e f f . . . 
        . . . . f e 8 d e c e f . . . . 
        . . . . . d f d e c e e f . . . 
        . . . . . d d d d c e f . . . . 
        . . . . . . e b c e f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 d 2 . . . . . . . 
        . . . . . . 6 6 8 . . . . . . . 
        . . . . . . 8 6 6 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e c e e f f . . . 
        . . . . f e 8 d e c e f . . . . 
        . . . . . d f d e c e e f . . . 
        . . . . . d d d d c e f . . . . 
        . . . . . . e b c e f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . d 2 2 2 . . . . . . . 
        . . . . . . 6 6 8 . . . . . . . 
        . . . . . 6 6 8 6 6 f . . . . . 
        . . . . f f f . f f . . . . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . f e e e c e e f f . . . 
        . . . . f e 8 d e c e f . . . . 
        . . . . . d f d e c e e f . . . 
        . . . . . d d d d c e f . . . . 
        . . . . . . e b c e f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 d 2 . . . . . . . 
        . . . . . . 6 6 8 . . . . . . . 
        . . . . . . 8 6 6 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f e e c e e e f . . . . 
        . . . . f e c e d 8 e f . . . . 
        . . . f e e c e d f d . . . . . 
        . . . . f e c d d d d . . . . . 
        . . . . . f e c b e . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . d 2 2 d . . . . . 
        . . . . . . . 6 6 8 . . . . . . 
        . . . . . f 6 6 6 8 6 . . . . . 
        . . . . . . f f . f f f . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f e e c e e e f . . . . 
        . . . . f e c e d 8 e f . . . . 
        . . . f e e c e d f d . . . . . 
        . . . . f e c d d d d . . . . . 
        . . . . . f e c b e . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 d 2 . . . . . . 
        . . . . . . . 8 6 6 . . . . . . 
        . . . . . . . 6 6 8 . . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f e e c e e e f . . . . 
        . . . . f e c e d 8 e f . . . . 
        . . . f e e c e d f d . . . . . 
        . . . . f e c d d d d . . . . . 
        . . . . . f e c b e . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 2 2 d . . . . . 
        . . . . . . . 8 6 6 . . . . . . 
        . . . . . f 6 6 8 6 6 . . . . . 
        . . . . . . f f . f f f . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f e e c e e e f . . . . 
        . . . . f e c e d 8 e f . . . . 
        . . . f e e c e d f d . . . . . 
        . . . . f e c d d d d . . . . . 
        . . . . . f e c b e . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 d 2 . . . . . . 
        . . . . . . . 8 6 6 . . . . . . 
        . . . . . . . 6 6 8 . . . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c e d c e c e e f f . . 
        . . . f c e f d c f c e f . . . 
        . . f e e e 8 d d 8 c e e f . . 
        . . . f e c d d d d c e f . . . 
        . . . . f e c b b c e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . f f c f f f f c f . . . . 
        . . . d d 2 2 2 2 2 2 d . . . . 
        . . . . . 8 6 8 8 6 8 . . . . . 
        . . . . . 6 6 6 8 6 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c e d c e c e e f f . . 
        . . . f c e f d c f c e f . . . 
        . . f e e e 8 d d 8 c e e f . . 
        . . . f e c d d d d c e f . . . 
        . . . . f e c b b c e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . d d 2 2 2 2 2 2 d d . . . 
        . . . . . 8 6 8 6 6 8 . . . . . 
        . . . . . 6 6 6 8 6 6 . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c e d c e c e e f f . . 
        . . . f c e f d c f c e f . . . 
        . . f e e e 8 d d 8 c e e f . . 
        . . . f e c d d d d c e f . . . 
        . . . . f e c b b c e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . . d 2 2 2 2 2 2 d d . . . 
        . . . . . 8 6 8 8 6 8 . . . . . 
        . . . . . f 6 6 8 6 6 . . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . f f f f f f f f f f f f . . 
        . . f f c e d c e c e e f f . . 
        . . . f c e f d c f c e f . . . 
        . . f e e e 8 d d 8 c e e f . . 
        . . . f e c d d d d c e f . . . 
        . . . . f e c b b c e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . 2 2 c 2 2 c 2 2 . . . . 
        . . . . f c f f f f c f . . . . 
        . . . d d 2 2 2 2 2 2 d d . . . 
        . . . . . 8 6 8 6 6 8 . . . . . 
        . . . . . 6 6 6 8 6 6 . . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    200,
    false
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(3)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
