
function calculate() {
    var a = document.querySelector("#x1")
    var b = document.querySelector("#y1")
    var c = document.querySelector("#z1")

    var d = document.querySelector("#x2")
    var e = document.querySelector("#y2")
    var f = document.querySelector("#z2")

    x1 = a.value
    y1 = b.value
    z1 = c.value

    x2 = d.value
    y2 = e.value
    z2 = f.value
    var p = document.querySelector('#answer')

    var matrice1 = [[x1, y1], [x2, y2]]

    var determinant = calculateDet(matrice1)
    if (determinant != 0) {
        var xDet = calculateDet(m = [[z1, z2], [y1, y2]])
        var yDet = calculateDet(m = [[x1, x2], [z1, z2]])

        var x = xDet / determinant
        var y = yDet / determinant

        p.textContent = `X = ${x.toFixed(5)} and Y = ${y.toFixed(5)}`

        p.setAttribute('class', 'success')

    }
    else {
        p.textContent = `There is no solution for this equation`
        p.setAttribute('class', 'failure')
    }
    a.value = ''
    b.value = ''
    c.value = ''
    d.value = ''
    e.value = ''
    f.value = ''
    console.log(x1);

}

function calculateDet(m) {
    return det = (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])
}

document.querySelector('#btn').addEventListener('click', calculate)