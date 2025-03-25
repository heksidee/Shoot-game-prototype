var bullets = [];
var bulletSize = 30;
var bulletSpeed = 20;

function createBullet(x, y, direction) {
    bullets.push({ x: x, y: y, direction: direction});
}

function refreshBllets() {
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];

        if (bullet.direction === "up") {
            bullet.y -= bulletSpeed;
        } else if (bullet.direction === "down") {
            bullet.y += abulletSpeed;
        } else if (bullet.direction === "vasemmalle") {
            bullet.x -= bulletSpeed;
        } else if (bullet.direction === "oikealle") {
            bullet.x += bulletSpeed;
        }

        /*for (var j = 0; j < viholliset.length; j++) {
            var vihollinen = viholliset[j];
            if (tarkistaTörmäys(ammus, vihollinen)) {
                viholliset.splice(j, 1);
                ammukset.splice(i, 1);
                i--;
                break;
            }
        }*/

        if (bullet.x < 0 || 
            bullet.x > canvas.width || 
            bullet.y < 0 || 
            bullet.y > canvas.height
        ) {
            bullets.splice(i, 1);
            i--;
        }
    }
}

function drawBullets() {
    ctx.fillStyle = "red";
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bulletSize, bulletSize);
    }
}

function shoot(e) {

    if (e.key === "ArrowUp") {
        createBullet(
            suorakulmioX + suorakulmioLeveys / 2 - ammuksenKoko / 2, 
            suorakulmioY, 
            "ylös"
        );
    } else if (e.key === "ArrowDown") {
        luoAmmus(
            suorakulmioX + suorakulmioLeveys / 2 - ammuksenKoko / 2,
            suorakulmioY + suorakulmioKorkeus,
            "alas"
            );
    } else if (e.key === "ArrowLeft") {
        luoAmmus(
            suorakulmioX, 
            suorakulmioY + suorakulmioKorkeus / 2 - ammuksenKoko / 2,
            "vasemmalle"
        );
    } else if (e.key === "ArrowRight") {
        luoAmmus(
            suorakulmioX + suorakulmioLeveys,
            suorakulmioY + suorakulmioKorkeus / 2 - ammuksenKoko / 2,
            "oikealle"
        );
    }
}
window.addEventListener("keydown", shoot);