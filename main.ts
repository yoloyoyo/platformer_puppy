namespace SpriteKind {
    export const door = SpriteKind.create()
}
function chooseLevel () {
    if (level == 0) {
        scene.setTileMap(list[level])
        createLevel()
    } else if (level == 1) {
        scene.setTileMap(list[level])
        createLevel()
    } else {
        scene.setTileMap(list[level])
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
            . . 2 2 b b b b b . . . . . . . 
            . 2 b 4 4 4 4 4 4 b . . . . . . 
            2 2 4 4 4 4 d d 4 4 b . . . . . 
            2 b 4 4 4 4 4 4 d 4 b . . . . . 
            2 b 4 4 4 4 4 4 4 d 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 e . . . . 
            2 2 b 4 4 4 4 4 4 4 b e . . . . 
            . 2 b b b 4 4 4 b b b e . . . . 
            . . e b b b b b b b e e . . . . 
            . . . e e b 4 4 b e e e b . . . 
            . . . . . e e e e e e b d b b . 
            . . . . . . . . . . . b 1 1 1 b 
            . . . . . . . . . . . c 1 d d b 
            . . . . . . . . . . . c 1 b c . 
            . . . . . . . . . . . . c c . . 
            `, SpriteKind.door)
        scene.place(value, portal)
    }
    for (let value of scene.getTilesByType(2)) {
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
    for (let value of scene.getTilesByType(5)) {
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
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (puppers.isHittingTile(CollisionDirection.Bottom)) {
        puppers.vy = -300
    }
})
function deleteOldLevel () {
    for (let value of sprites.allOfKind(SpriteKind.door)) {
        value.destroy()
    }
}
let portal: Sprite = null
let level = 0
let list: Image[] = []
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
list = [img`
    .........................8
    ..........................
    ...................55555..
    ..........................
    .......55555..............
    ..........................
    ..........................
    .............55555........
    ..........................
    ..55555...................
    ..........................
    ..........................
    22222222222222222222222222
    22222222222222222222222222
    `, img`
    ..........................
    55........................
    ............5555.....5....
    .....................5....
    ....5555...........555..8.
    .....................5....
    .....................5..22
    ...............5555..5.222
    .....................52222
    ..5555555...........222222
    ...................2222222
    .................222222222
    22222222222222222222222222
    22222222222222222222222222
    `, img`
    ......................8...
    ...............5..........
    ...555555...........5555..
    ..........................
    ..............555.........
    ..........................
    .....................55...
    .5555....22.........5555..
    ........2222..............
    ........22222...2.........
    .......222222.2222........
    .......2222222222222......
    .....222222222222222222222
    22222222222222222222222222
    `]
level = 0
chooseLevel()
