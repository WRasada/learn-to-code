import turtle

window = turtle.Screen()
window.bgcolor("red")
pen = turtle.Turtle()
pen.speed(4)


def draw_square():
    i = 0
    pen.color("blue")
    pen.shape("turtle")
    while i < 4:
        pen.forward(100)
        pen.right(90)
        i += 1

def draw_circle():
    pen.pu()
    pen.color("yellow")
    pen.setpos(-50, 0)
    pen.pd()
    pen.circle(100)

def draw_triangle():
    i = 0
    pen.color("green")
    pen.pu()
    pen.setpos(-50, -100)
    pen.pd()
    while i < 3:
        pen.lt(120)
        pen.fd(110)
        i += 1

draw_square()
draw_circle()
draw_triangle()

window.exitonclick()
