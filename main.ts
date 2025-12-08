controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkBack`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 4))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`clearing`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 5))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkFront`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 1))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`lakefront`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 5))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 12))
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`kikiFront`, SpriteKind.Player)
mySprite.z = 1
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
