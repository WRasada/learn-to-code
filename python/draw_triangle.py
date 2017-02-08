import turtle

pen = turtle.Turtle()
window = turtle.Screen()
window.bgcolor("black")
pen.speed("fastest")
pen.color("white")

def draw_triangle():
    for i in range(3):
        pen.fd(200)
        pen.lt(120)
    draw_triforce()
    new_pen_pos(50.00,86.60)
    draw_triforce()
    new_pen_pos(100.00,-0.00)
    draw_triforce()

    window.exitonclick()

def new_pen_pos(x,y):
    pen.pu()
    pen.setpos(x,y)
    pen.pd()

def draw_triforce():
    for i in range(3):
        pen.fd(100)
        print pen.pos()
        pen.lt(120)


draw_triangle()
