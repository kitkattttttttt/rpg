namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const info = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkFront`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`inside`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 4))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    mySprite7 = sprites.create(assets.image`pressA`, SpriteKind.info)
    mySprite7.setPosition(151, 111)
    mySprite7.setFlag(SpriteFlag.RelativeToCamera, true)
    animation.runImageAnimation(
    mySprite7,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f 1 1 1 1 1 1 1 1 f . . . . 
        . f 1 1 1 f f f f 1 1 1 f . . . 
        . f 1 1 f 1 1 1 1 f 1 1 f f . . 
        . f 1 1 f 1 1 1 1 f 1 1 f f . . 
        . f 1 1 f f f f f f 1 1 f f . . 
        . f 1 1 f 1 1 1 1 f 1 1 f f . . 
        . f 1 1 f 1 1 1 1 f 1 1 f f . . 
        . f 1 1 f 1 1 1 1 f 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 f f f . . 
        . . f f f f f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 f f f f 1 1 1 f . . 
        . . f 1 1 f 1 1 1 1 f 1 1 f . . 
        . . f 1 1 f 1 1 1 1 f 1 1 f . . 
        . . f 1 1 f f f f f f 1 1 f . . 
        . . f 1 1 f 1 1 1 1 f 1 1 f . . 
        . . f 1 1 f 1 1 1 1 f 1 1 f . . 
        . . f 1 1 f 1 1 1 1 f 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    pause(1000)
    sprites.destroy(mySprite7)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkBack`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
    mySprite2 = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 12))
    mySprite3 = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(10, 12))
    mySprite4 = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 13))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite8 = sprites.create(assets.image`myImage`, SpriteKind.info)
        mySprite8.setFlag(SpriteFlag.RelativeToCamera, true)
        mySprite8.setPosition(80, 100)
        mySprite9 = sprites.create(assets.image`sillyNPC0`, SpriteKind.info)
        mySprite9.setFlag(SpriteFlag.RelativeToCamera, true)
        mySprite9.setPosition(20, 100)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`forest`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 7))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`lakefront`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 5))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 12))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    mySprite2 = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 12))
    mySprite3 = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(10, 12))
    mySprite4 = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 13))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`clearing`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 5))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`beach`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    mySprite5 = sprites.create(assets.image`notSonicBcThatWouldBeCopyrightInfringement`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(0, 7))
    mySprite6 = sprites.create(assets.image`chadNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(9, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    mySprite2 = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 12))
    mySprite3 = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(10, 12))
    mySprite4 = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 13))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    mySprite2 = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 12))
    mySprite3 = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(10, 12))
    mySprite4 = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 13))
})
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`kikiFront`, SpriteKind.Player)
mySprite.z = 1
tiles.setCurrentTilemap(tilemap`main`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
mySprite2 = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 12))
mySprite3 = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(10, 12))
mySprite4 = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 13))
