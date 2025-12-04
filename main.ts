controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkBack`,
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkLeft`,
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkRight`,
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkFront`,
    200,
    false
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(3)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 7))
