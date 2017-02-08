import turtle

pen = turtle.Turtle()
window = turtle.Screen()
window.bgcolor("black")
pen.speed("fastest")

def new_pen_pos(x,y):
    pen.pu()
    pen.setpos(x,y)
    pen.pd()

def draw_circles():
    for i in range(45):
        pen.color("white")
        pen.circle(40)
        pen.lt(10)
    for i in range(45):
        pen.color("blue")
        pen.circle(30)
        pen.lt(10)
    for i in range(45):
        pen.color("red")
        pen.circle(20)
        pen.lt(10)

def draw_art():

    draw_circles()
    new_pen_pos(75,75)
    draw_circles()
    new_pen_pos(75,-75)
    draw_circles()
    new_pen_pos(-75,75)
    draw_circles()
    new_pen_pos(-75,-75)
    draw_circles()

    window.exitonclick()


draw_art()
