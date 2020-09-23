const str = `/* 一只可爱的皮卡丘即将闪亮登场，Are you ready? */
/* 小提示：可以点击快速按钮加快绘画速度哦~ */
/* 首先涂上颜色，然后画个鼻子 */

body {
    background-color: #FFE600;
}
.nose {
    width: 0px;
    height: 0px;
    border: 10px solid;
    border-color: black transparent transparent transparent;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -10px;
    z-index: 1;
}
.nose::before{
    content: '';
    display: block;
    width: 20px;
    height: 6px;
    position: absolute;
    bottom: 10px;
    margin-left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
}

/* 再画上两个卡姿兰大眼睛 */

.eye{
    width: 58px;
    height: 58px;
    border: 2px solid black;
    position: absolute;
    top: 68px;
    left: 50%;
    margin-left: -29px;
    border-radius: 50%;
    background-color: #2E2E2E;
}
.eye::before{
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 8px;
}
.eye.left{
    transform: translateX(-118px);
}
.eye.right{
    transform: translateX(118px);
}

/* 画上嘴巴 */

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: -2px;
}
.mouth .up .lip{
    width: 88px;
    height: 28px;
    border: 3px solid;
    position: absolute;
    top: 132px;
    left: 50%;
    background-color: #FFE600;
    border-top-color: #FFE600;
    z-index: 1;
}
.mouth .up .lip::before{
    content: '';
    display: block;
    background-color: #FFE600;
    position: absolute;
    height: 28px;
}
.mouth .up .lip.left{
    margin-left: -84px;
    border-radius: 0 0 0 42px;
    border-right-color: #FFE600;
    transform: rotate(-20deg);
}
.mouth .up .lip.left::before{
    width: 88px;
    bottom: 0px;
    border-radius: 0 0 0 42px;
}
.mouth .up .lip.right{
    border-radius: 0 0 42px 0;
    border-left-color: #FFE600;
    transform: rotate(20deg);
}
.mouth .up .lip.right::before{
    width: 90px;
    bottom: 1px;
    right: 0px;
    border-radius: 0 0 42px 0;
}
.mouth .down{
    width: 100%;
    height: 190px;
    position: absolute;
    top: 140px;
    overflow: hidden;
}
.mouth .down .tongue{
    width: 134px;
    height: 400px;
    border: 3px solid black;
    position: absolute;
    left: 50%;
    margin-left: -68px;
    border-radius: 100px/290px;
    bottom: 20px;
    background-color: #9B000A;
    overflow: hidden;
}
.mouth .down .tongue .tongue-shadow{
    width: 132px;
    height: 200px;
    position: absolute;
    bottom: -64px;
    border-radius: 71px/60px;
    background-color: #FF485F;
}

/* 再把脸给画好 */

.cheek{
    width: 88px;
    height: 88px;
    border: 3px solid black;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    top: 180px;
    border-radius: 50%;
    background-color: red;
}
.cheek.left{transform: translateX(-160px);}
.cheek.right{transform: translateX(160px);}

/* 一个可爱的皮卡丘就蛋生啦~ */
/* 不会动的皮卡丘是没有灵魂滴，让它的眼睛动起来吧 */

.eye::before{animation: eyeMove 3s infinite;}

/* OK，这只快乐的皮卡丘就送给你啦~ */
/* 祝你天天开心，笑口常开~ */
/* 小提示：可以试试点击皮卡丘鼻子和嘴巴哦~ */

`
let n = 1
const demo = document.querySelector('#demo')
const ui = document.querySelector('#ui')
const btnPause = document.querySelector('#btnPause')
const btnPlay = document.querySelector('#btnPlay')
const btnSlow = document.querySelector('#btnSlow')
const btnNormal = document.querySelector('#btnNormal')
const btnFast = document.querySelector('#btnFast')
const tongue = document.querySelector('.tongue')
const nose = document.querySelector('.nose')
let id
demo.innerText = str.substr(0, n)
ui.innerHTML = str.substr(0, n)

const player = {
    run: () => {
        n += 1
        if (n > str.length) {
            clearInterval(id)
            return
        }
        demo.innerText = str.substr(0, n)
        ui.innerHTML = str.substr(0, n)
        demo.scrollTop = demo.scrollHeight
    },
    play: (time) => {
        id = setInterval(player.run, time)
    },
    clear: () => {
        window.clearInterval(id)
    }
}
const slow = () => {
    player.clear()
    player.play(400)
}
const normal = () => {
    player.clear()
    player.play(30)
}
const fast = () => {
    player.clear()
    player.play(5)
}

player.play(30)

btnPause.onclick = player.clear
btnPlay.onclick = () => {
    player.play(30)
}
btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast

tongue.onclick = () => {
    tongue.style = 'animation:openMouth 3s'
    setTimeout(() => {
        tongue.style = ''
    }, 4000)
}
nose.onclick = () => {
    nose.style = 'animation: wave 1s linear;'
    setTimeout(() => {
        nose.style = ''
    }, 1000)
}