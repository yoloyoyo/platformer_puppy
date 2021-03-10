@namespace
class SpriteKind:
    door = SpriteKind.create()
def chooseLevel():
    if level == 0:
        scene.set_tile_map(list2[level])
        createLevel()
    elif level == 1:
        deleteOldLevel()
        scene.set_tile_map(list2[level])
        createLevel()
    else:
        deleteOldLevel()
        scene.set_tile_map(list2[level])
        createLevel()
def createLevel():
    global portal
    for value in scene.get_tiles_by_type(8):
        scene.set_tile(8,
            img("""
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
            """),
            False)
        portal = sprites.create(img("""
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
            """),
            SpriteKind.door)
        scene.place(value, portal)
    for value2 in scene.get_tiles_by_type(2):
        scene.set_tile(2,
            img("""
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
            """),
            True)
    for value3 in scene.get_tiles_by_type(5):
        scene.set_tile(5,
            img("""
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
            """),
            True)
    for value4 in scene.get_tiles_by_type(15):
        scene.set_tile(15,
            img("""
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
            """),
            False)
        portal = sprites.create(img("""
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
            """),
            SpriteKind.food)
        scene.place(value4, portal)

def on_a_pressed():
    if puppers.is_hitting_tile(CollisionDirection.BOTTOM):
        puppers.vy = -300
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def deleteOldLevel():
    for value5 in sprites.all_of_kind(SpriteKind.door):
        value5.destroy()

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    music.power_down.play(255)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global level
    if len(sprites.all_of_kind(SpriteKind.food)) == 0:
        if level == 2:
            game.over(True)
        else:
            level += 1
            puppers.set_position(30, 80)
            chooseLevel()
            music.play_melody("A B A G B C5 - - ", 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.door, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    music.ba_ding.play()
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap3)

poop: Sprite = None
portal: Sprite = None
level = 0
list2: List[Image] = []
puppers: Sprite = None
puppers = sprites.create(img("""
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
    """),
    SpriteKind.player)
puppers.ay = 350
puppers.set_position(30, 80)
controller.move_sprite(puppers, 100, 0)
scene.camera_follow_sprite(puppers)
scene.set_background_color(9)
list2 = [img("""
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
    """),
    img("""
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
    """),
    img("""
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
    """)]
level = 0
chooseLevel()
my_sprite = sprites.create(img("""
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
    """),
    0)

def on_update_interval():
    global poop
    poop = sprites.create_projectile_from_side(img("""
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
        """),
        randint(-50, 50),
        randint(-50, 50))
game.on_update_interval(3000, on_update_interval)
