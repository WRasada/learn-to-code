import turtle

window = turtle.Screen()
window.bgcolor("black")
pen = turtle.Turtle()
pen.color("white")
pen.speed("fastest")

def draw_circle():
    for i in range(75):
        pen.fd(100)
        pen.lt(90)
        pen.fd(100)
        pen.lt(90)
        pen.fd(100)
        pen.lt(90)
        pen.fd(100)
        pen.lt(95)


def draw_outline():
    pen.pu()
    pen.seth(0)
    pen.setpos(0, -100)
    pen.pd()
    pen.color("yellow")
    pen.pensize(3)
    pen.circle(100)

draw_circle()
draw_outline()
window.exitonclick()
