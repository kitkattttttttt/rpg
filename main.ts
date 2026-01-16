namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const info = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    kikiSprite,
    assets.animation`walkFront`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    timer.throttle("action", 5000, function () {
        if (randint(0, 100) == 1) {
            SillyHead = sprites.create(assets.image`sillyNPC0`, SpriteKind.NPC)
            tiles.placeOnRandomTile(SillyHead, assets.tile`myTile38`)
            timer.debounce("action", 1000, function () {
                sprites.destroy(SillyHead)
            })
        } else if (randint(0, 100) == 2) {
            EmoHead = sprites.create(assets.image`emoNpc0`, SpriteKind.NPC)
            tiles.placeOnRandomTile(EmoHead, assets.tile`myTile38`)
            timer.debounce("action", 1000, function () {
                sprites.destroy(EmoHead)
            })
        } else if (randint(0, 100) == 3) {
            NormalHead = sprites.create(assets.image`normalNPC0`, SpriteKind.NPC)
            tiles.placeOnRandomTile(NormalHead, assets.tile`myTile38`)
            timer.debounce("action", 1000, function () {
                sprites.destroy(NormalHead)
            })
        } else if (randint(0, 100) == 4) {
            ChadHead = sprites.create(assets.image`chadNPC0`, SpriteKind.NPC)
            tiles.placeOnRandomTile(ChadHead, assets.tile`myTile38`)
            timer.debounce("action", 1000, function () {
                sprites.destroy(ChadHead)
            })
        } else if (randint(0, 100) > 75) {
            Coin = sprites.create(assets.image`Coin`, SpriteKind.info)
            tiles.placeOnRandomTile(Coin, assets.tile`myTile38`)
            timer.debounce("action", 1000, function () {
                sprites.destroy(Coin)
            })
        } else {
            goblinEnemy = sprites.create(assets.image`goblinEnemy`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(goblinEnemy, assets.tile`myTile38`)
            timer.debounce("action", 1000, function () {
                sprites.destroy(goblinEnemy)
            })
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`inside`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(5, 4))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == sillySprite) {
        if (sillyVar == 1) {
            timer.throttle("action", 2000, function () {
                sillySprite.sayText("wanna be friends?", 500, true)
            })
        } else {
            timer.throttle("action", 2000, function () {
                sillySprite.sayText("Hello!", 500, true)
            })
        }
    }
    if (otherSprite == emoSprite) {
        if (emoVar == 1) {
            timer.throttle("action", 4000, function () {
                emoSprite.sayText("You seem ok..... I guess", 1000, true)
            })
        } else {
            timer.throttle("action", 4000, function () {
                emoSprite.sayText("Um... you can't come through here...", 1000, true)
            })
            animation.runImageAnimation(
            emoSprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f c f 2 2 f . . . . . 
                . . . . f f c f f f 2 f . . . . 
                . . . . c f c 2 f 2 f 2 f . . . 
                . . . . c f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f c f 2 2 f . . . . . 
                . . . 2 f f c f f f 2 f . . . . 
                . . . . c f c 2 f 2 f 2 f . . . 
                . . . . c f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . 2 . f c f 2 2 f . . . . . 
                . . 2 . 2 f c f f f 2 f . . . . 
                . . . 2 c f c 2 f 2 f 2 f . . . 
                . . . . c f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . 2 . 2 . f f f f . . . . . . 
                . 2 2 . 2 2 c f 2 2 f . . . . . 
                . . . . . f c f f f 2 f . . . . 
                . 2 2 . 2 2 c 2 f 2 f 2 f . . . 
                . . 2 . 2 f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . 2 . f c f 2 2 f . . . . . 
                . . 2 . 2 f c f f f 2 f . . . . 
                . . . 2 c f c 2 f 2 f 2 f . . . 
                . . . . c f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f c f 2 2 f . . . . . 
                . . . 2 f f c f f f 2 f . . . . 
                . . . . c f c 2 f 2 f 2 f . . . 
                . . . . c f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f c f 2 2 f . . . . . 
                . . . . f f c f f f 2 f . . . . 
                . . . . c f c 2 f 2 f 2 f . . . 
                . . . . c f f c 2 f c f f . . . 
                . . . . c f 6 d c c c f f . . . 
                . . . . . c d d d c c f f . . . 
                . . . . . . f e e f c c f . . . 
                . . . . . f f f f f f c f . . . 
                . . . . f f c f f c f f f . . . 
                . . . . f c f f f f c f . . . . 
                . . . d d f f f f f f d d . . . 
                . . . . . f c f c c f . . . . . 
                . . . . . c c c f c c . . . . . 
                . . . . . f f f f f f . . . . . 
                `],
            500,
            false
            )
        }
    }
    if (otherSprite == normalSprite) {
        if (normalVar == 1) {
            timer.throttle("action", 4000, function () {
                normalSprite.sayText("Theres a shop there usually!", 1000, true)
            })
        } else {
            timer.throttle("action", 4000, function () {
                normalSprite.sayText("Sorry, road's under construction right now.", 1000, true)
            })
        }
    }
    if (otherSprite == chadSprite) {
        if (chadVar == 1) {
            timer.throttle("action", 4000, function () {
                chadSprite.sayText("we should ride a sick wave together sometime dude ahaha", 2000, true)
            })
        } else {
            timer.throttle("action", 4000, function () {
                chadSprite.sayText("Dude, these waves are like, so sick ahaha", 2000, true)
            })
        }
    }
    if (otherSprite == notSonicBcThatWouldBeCopyrightInfringementSprite) {
        notSonicBcThatWouldBeCopyrightInfringementSprite.setImage(assets.image`notSonicBcThatWouldBeCopyrightInfringement`)
        timer.throttle("action", 4000, function () {
            notSonicBcThatWouldBeCopyrightInfringementSprite.sayText("...gotta go... fast...", 2000, true)
            notSonicBcThatWouldBeCopyrightInfringementSprite.setVelocity(50, 50)
        })
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    kikiSprite,
    assets.animation`walkBack`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(0, 12))
    sillySprite = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(sillySprite, tiles.getTileLocation(8, 12))
    animation.runImageAnimation(
    sillySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    300,
    true
    )
    emoSprite = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(emoSprite, tiles.getTileLocation(10, 12))
    normalSprite = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(normalSprite, tiles.getTileLocation(10, 13))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`forest`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(15, 7))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`lakefront`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(5, 5))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.info, function (sprite, otherSprite) {
    if (otherSprite == Coin) {
        coinCount += 1
        if (coinCount == 0) {
            coinCounter.setImage(assets.image`Zero`)
            info.setLife(3)
        } else if (coinCount == 1) {
            coinCounterNumber.setImage(assets.image`One`)
        } else if (coinCount == 2) {
            coinCounterNumber.setImage(assets.image`Two`)
        } else if (coinCount == 3) {
            coinCounterNumber.setImage(assets.image`Three`)
        } else if (coinCount == 4) {
            coinCounterNumber.setImage(assets.image`Four`)
        } else if (coinCount == 5) {
            coinCounterNumber.setImage(assets.image`Five`)
        }
        sprites.destroy(Coin)
    } else if (otherSprite == SillyHead) {
        sillyVar = 1
    } else if (otherSprite == NormalHead) {
        normalVar = 1
    } else if (otherSprite == EmoHead) {
        emoVar = 1
    } else if (otherSprite == ChadHead) {
        chadVar = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    timer.throttle("action", 5000, function () {
        ghostEnemy = sprites.create(assets.image`ghostEnemy`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(ghostEnemy, assets.tile`myTile39`)
        timer.debounce("action", 1000, function () {
            sprites.destroy(ghostEnemy)
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(7, 12))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sillySprite = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(sillySprite, tiles.getTileLocation(8, 12))
    animation.runImageAnimation(
    sillySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    300,
    true
    )
    emoSprite = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(emoSprite, tiles.getTileLocation(10, 12))
    normalSprite = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(normalSprite, tiles.getTileLocation(10, 13))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`clearing`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(5, 5))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`beach`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(10, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    notSonicBcThatWouldBeCopyrightInfringementSprite = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(notSonicBcThatWouldBeCopyrightInfringementSprite, tiles.getTileLocation(3, 7))
    chadSprite = sprites.create(assets.image`chadNPC`, SpriteKind.NPC)
    tiles.placeOnTile(chadSprite, tiles.getTileLocation(9, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(8, 15))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sillySprite = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(sillySprite, tiles.getTileLocation(8, 12))
    animation.runImageAnimation(
    sillySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    300,
    true
    )
    emoSprite = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(emoSprite, tiles.getTileLocation(10, 12))
    normalSprite = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(normalSprite, tiles.getTileLocation(10, 13))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    kikiSprite,
    assets.animation`walkLeft`,
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    kikiSprite,
    assets.animation`walkRight`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`main`)
    tiles.placeOnTile(kikiSprite, tiles.getTileLocation(7, 8))
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sillySprite = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
    tiles.placeOnTile(sillySprite, tiles.getTileLocation(8, 12))
    animation.runImageAnimation(
    sillySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 1 4 4 f . . . . . 
        . . . . f 1 4 1 1 1 4 f . . . . 
        . . . f 4 1 d 4 1 4 1 4 f . . . 
        . . . f 4 1 f d 4 f 4 1 f . . . 
        . . . f 4 1 6 d d 6 4 1 f . . . 
        . . . f 1 4 d d d d 4 1 f . . . 
        . . . f 4 3 2 e e 2 3 4 f . . . 
        . . . f 3 a a 7 7 a a 3 f . . . 
        . . . f a a c 7 7 c a a f . . . 
        . . . . a c a 7 7 a c a . . . . 
        . . . d d a a 7 7 a a d d . . . 
        . . . . . f c f c c f . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    300,
    true
    )
    emoSprite = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
    tiles.placeOnTile(emoSprite, tiles.getTileLocation(10, 12))
    normalSprite = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
    tiles.placeOnTile(normalSprite, tiles.getTileLocation(10, 13))
})
let ghostEnemy: Sprite = null
let notSonicBcThatWouldBeCopyrightInfringementSprite: Sprite = null
let chadSprite: Sprite = null
let goblinEnemy: Sprite = null
let Coin: Sprite = null
let ChadHead: Sprite = null
let NormalHead: Sprite = null
let EmoHead: Sprite = null
let SillyHead: Sprite = null
let sillyVar = 0
let normalVar = 0
let emoVar = 0
let chadVar = 0
let coinCount = 0
let coinCounterNumber: Sprite = null
let coinCounter: Sprite = null
let normalSprite: Sprite = null
let emoSprite: Sprite = null
let sillySprite: Sprite = null
let kikiSprite: Sprite = null
scene.setBackgroundColor(15)
kikiSprite = sprites.create(assets.image`kikiFront`, SpriteKind.Player)
kikiSprite.z = 1
info.setLife(3)
tiles.setCurrentTilemap(tilemap`main`)
scene.cameraFollowSprite(kikiSprite)
controller.moveSprite(kikiSprite)
tiles.placeOnTile(kikiSprite, tiles.getTileLocation(7, 8))
sillySprite = sprites.create(assets.image`sillyNPC`, SpriteKind.NPC)
tiles.placeOnTile(sillySprite, tiles.getTileLocation(8, 12))
animation.runImageAnimation(
sillySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 4 1 4 4 f . . . . . 
    . . . . f 1 4 1 1 1 4 f . . . . 
    . . . f 4 1 d 4 1 4 1 4 f . . . 
    . . . f 4 1 f d 4 f 4 1 f . . . 
    . . . f 4 1 6 d d 6 4 1 f . . . 
    . . . f 1 4 d d d d 4 1 f . . . 
    . . . f 4 3 2 e e 2 3 4 f . . . 
    . . . f 3 a a 7 7 a a 3 f . . . 
    . . . f a a c 7 7 c a a f . . . 
    . . . . a c a 7 7 a c a . . . . 
    . . . d d a a 7 7 a a d d . . . 
    . . . . . f c f c c f . . . . . 
    . . . . . c c c f c c . . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . . f 4 1 4 4 f . . . . . 
    . . . . f 1 4 1 1 1 4 f . . . . 
    . . . f 4 1 d 4 1 4 1 4 f . . . 
    . . . f 4 1 f d 4 f 4 1 f . . . 
    . . . f 4 1 6 d d 6 4 1 f . . . 
    . . . f 1 4 d d d d 4 1 f . . . 
    . . . f 4 3 2 e e 2 3 4 f . . . 
    . . . f 3 a a 7 7 a a 3 f . . . 
    . . . f a a c 7 7 c a a f . . . 
    . . . . a c a 7 7 a c a . . . . 
    . . . d d a a 7 7 a a d d . . . 
    . . . . . f c f c c f . . . . . 
    . . . . . c c c f c c . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 4 1 4 4 f . . . . . 
    . . . . f 1 4 1 1 1 4 f . . . . 
    . . . f 4 1 d 4 1 4 1 4 f . . . 
    . . . f 4 1 f d 4 f 4 1 f . . . 
    . . . f 4 1 6 d d 6 4 1 f . . . 
    . . . f 1 4 d d d d 4 1 f . . . 
    . . . f 4 3 2 e e 2 3 4 f . . . 
    . . . f 3 a a 7 7 a a 3 f . . . 
    . . . f a a c 7 7 c a a f . . . 
    . . . . a c a 7 7 a c a . . . . 
    . . . d d a a 7 7 a a d d . . . 
    . . . . . f c f c c f . . . . . 
    . . . . . c c c f c c . . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . . f 4 1 4 4 f . . . . . 
    . . . . f 1 4 1 1 1 4 f . . . . 
    . . . f 4 1 d 4 1 4 1 4 f . . . 
    . . . f 4 1 f d 4 f 4 1 f . . . 
    . . . f 4 1 6 d d 6 4 1 f . . . 
    . . . f 1 4 d d d d 4 1 f . . . 
    . . . f 4 3 2 e e 2 3 4 f . . . 
    . . . f 3 a a 7 7 a a 3 f . . . 
    . . . f a a c 7 7 c a a f . . . 
    . . . . a c a 7 7 a c a . . . . 
    . . . d d a a 7 7 a a d d . . . 
    . . . . . f c f c c f . . . . . 
    . . . . . c c c f c c . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
300,
true
)
emoSprite = sprites.create(assets.image`emoNpc`, SpriteKind.NPC)
tiles.placeOnTile(emoSprite, tiles.getTileLocation(10, 12))
normalSprite = sprites.create(assets.image`normalNPC`, SpriteKind.NPC)
tiles.placeOnTile(normalSprite, tiles.getTileLocation(10, 13))
coinCounter = sprites.create(assets.image`Coin0`, SpriteKind.info)
coinCounter.setPosition(12, 20)
coinCounter.setFlag(SpriteFlag.RelativeToCamera, true)
coinCounterNumber = sprites.create(assets.image`Zero`, SpriteKind.info)
coinCounterNumber.setPosition(16, 20)
coinCounterNumber.setFlag(SpriteFlag.RelativeToCamera, true)
coinCount = 0
chadVar = 0
emoVar = 0
normalVar = 0
sillyVar = 0
