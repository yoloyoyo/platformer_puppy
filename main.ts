namespace SpriteKind {
    export const door = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    dodging = true
    puppers.setImage(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 5 5 5 e . . e 5 5 5 4 . 2 2 
        2 5 5 5 5 5 e e 5 5 5 5 5 4 . 2 
        2 5 5 4 4 5 5 5 5 4 4 5 5 4 . 2 
        2 5 4 4 5 5 5 5 5 5 4 4 5 e . 2 
        2 e e 5 5 5 5 5 5 5 5 e e . . 2 
        2 . e 5 f 5 5 5 5 f 5 e . . . 2 
        2 . f 5 5 5 4 4 5 5 5 f . . f 2 
        2 . f 4 5 5 f f 5 5 6 f . f 5 2 
        2 . . f 6 6 6 6 6 6 4 4 f 5 5 2 
        2 . . f 4 5 5 5 5 5 5 4 4 5 f 2 
        2 . . f 5 5 5 5 5 4 5 5 f f . 2 
        2 2 . f 5 f f f 5 f f 5 f . 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
})
function chooseLevel () {
    if (level == 0) {
        scene.setTileMap(list2[level])
        createLevel()
    } else if (level == 1) {
        deleteOldLevel()
        scene.setTileMap(list2[level])
        createLevel()
    } else {
        deleteOldLevel()
        scene.setTileMap(list2[level])
        createLevel()
    }
}
function createLevel () {
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        portal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.door)
        scene.place(value, portal)
    }
    for (let value2 of scene.getTilesByType(2)) {
        scene.setTile(2, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            7 7 7 7 7 6 6 6 7 7 7 7 7 6 6 6 
            7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 6 7 7 7 7 6 7 7 7 7 7 6 7 7 7 
            7 7 6 7 7 6 7 7 7 6 7 7 6 7 6 7 
            7 7 6 7 6 6 7 7 6 6 6 7 6 6 6 6 
            6 7 6 6 6 6 7 6 6 6 6 6 8 6 6 6 
            8 8 6 6 8 6 6 6 8 6 6 6 8 8 6 6 
            8 e 6 e e 8 6 6 8 8 6 8 8 8 e 8 
            8 e e e e e 6 e 8 8 e e 8 e e f 
            f e e e e f 8 e e 8 e e e e e f 
            `, true)
    }
    for (let value3 of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            d 1 d d d d d d d 1 d d d d d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            d d d d d 1 d d d d d d d 1 d d 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, true)
    }
    for (let value4 of scene.getTilesByType(15)) {
        scene.setTile(15, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        ham = sprites.create(img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . 2 2 3 3 3 3 2 e . . . . 
            . . . 2 3 d 1 1 d d 3 2 e . . . 
            . . 2 3 1 d 3 3 3 d d 3 e . . . 
            . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
            . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
            2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
            2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
            2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
            2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
            e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
            e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
            e 3 d 3 3 1 d d 3 d 1 b b e e . 
            . e 3 1 1 d d 1 1 1 b b e e e . 
            . . e 3 3 3 3 3 3 b e e e e . . 
            . . . e e e e e e e e e e . . . 
            `, SpriteKind.Food)
        scene.place(value4, ham)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (puppers.isHittingTile(CollisionDirection.Bottom) && dodging == false) {
        puppers.vy = -300
    }
})
function deleteOldLevel () {
    for (let value5 of sprites.allOfKind(SpriteKind.door)) {
        value5.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (dodging == false) {
        otherSprite.destroy()
        music.powerDown.play(255)
info.changeLifeBy(-1)
    } else {
        otherSprite.destroy()
        music.zapped.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        if (level == 2) {
            game.over(true)
        } else {
            level += 1
            puppers.setPosition(30, 80)
            chooseLevel()
            music.playMelody("A B A G B C5 - - ", 200)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    dodging = false
    puppers.setImage(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
})
let poop: Sprite = null
let ham: Sprite = null
let portal: Sprite = null
let dodging = false
let level = 0
let list2: Image[] = []
let puppers: Sprite = null
puppers = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
puppers.ay = 350
puppers.setPosition(30, 80)
controller.moveSprite(puppers, 100, 0)
scene.cameraFollowSprite(puppers)
scene.setBackgroundColor(9)
list2 = [img`
    .........................8
    ..f..................f....
    ...................55555..
    .........f................
    .......55555..............
    ..........................
    ...............f..........
    .............55555........
    ...f...................f..
    ..55555...................
    ..........................
    ..........................
    22222222222222222222222222
    22222222222222222222222222
    `, img`
    f.........................
    55..f...........f.........
    ............5555.....5....
    .....................5....
    ....5555...........555..8.
    ...........f.........5....
    .....................5..22
    ...............5555..5.222
    ...f.................52222
    ..5555555...........222222
    ...................2222222
    .................222222222
    22222222222222222222222222
    22222222222222222222222222
    `, img`
    f..............f......8...
    .....f.........5..........
    ...555555...........5555..
    ..........................
    ..............555.........
    ...............f..........
    ..f.......f..........55f..
    f5555....22.........5555..
    ........2222........f...f.
    ........22222...2.........
    .......222222.2222........
    .......222222f222222....f.
    f...f222222222222222222222
    22222222222222222222222222
    `]
level = 0
chooseLevel()
let my_sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
game.onUpdateInterval(3000, function () {
    poop = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . e e . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . e e e e e e e e . . . 
        . . . . e e e e e e e e e e . . 
        . . . e e e f e e f e e e e e . 
        . . . e e e e e e e e e e e e . 
        . . e e e e e e e e e e e e e . 
        . . e e e f f e e e f f e e e . 
        . . e e e e f f f f f e e e e . 
        . . . e e e e e e e e e e e . . 
        `, randint(-50, 50), randint(-50, 50))
})
