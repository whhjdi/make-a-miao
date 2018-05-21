! function () {
    $(speedAll).on('click',function(){
        if($(actions).is(':hidden')){
            $(actions).show();
        }else{
            $(actions).hide();
        }
    })
    duration = 50
    $('.actions').on('click','button',(e)=>{
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
	function writeCode(prefix, code, fn) {
		let container = document.querySelector('#code');
		let styleTag = document.querySelector('#styleTag');
        let n = 0;
        let id
		id = setTimeout(function run(){
			n += 1;
			container.innerHTML = prefix+code.substring(0, n);
			styleTag.innerHTML = prefix+code.substring(0, n);
			container.scrollTop = container.scrollHeight
			if (n < code.length) {
				id = setTimeout(run,duration);
            }else{
                fn && fn.call();
			}
		}, duration);
	}
    var css1 = `
/*
*让我们来画一只喵喵吧，喵~
*Show Time
*首先准备一张画布，蓝色的，喵~
*/
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
    background: rgb(10, 126, 140);
}
/*
*然后画一个椭圆的脑袋，喵~
*/
.head {
    width: 375px;
    height: 350px;
    border-radius: 50%;
    background: #171717;
    position: relative;
}
/*
*然后画两只萌萌哒眼睛，喵~
*/
.eyes {
    width: 120px;
    height: 120px;
    background: white;
    border-radius: 50%;
    position: absolute;
}
.eyes.left {
    top: 100px;
    left: 30px;
}
.eyes.right {
    top: 100px;
    right: 30px;
}
.eye {
    width: 80px;
    height: 80px;
    background: #000;
    border-radius: 50%;
    position: absolute;
}
.eye.left {
    top: 40px;
    left: 20px;
}
.eye.right {
    top: 40px;
    right: 20px;
}
.eye::after {
    content: '';
    width: 36px;
    height: 36px;
    display: inline-block;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 38px;
    left: 15px;
}
/*
    *眼睛画完啦，是不是炯炯有神呀，喵~
    *然后画鼻子吧,喵~
    */
.nose {
    width: 46px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 230px;
    left: 165px;
}
/*
    *差点忘了两只大耳朵，喵~
    */
.ears {
    border-bottom: 160px solid #171717;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    position: absolute;
}
.ears.left {
    top: -80px;
    left: -30px;
    transform: rotate(-35deg)
}
.ears.right {
    top: -80px;
    right: -30px;
    transform: rotate(35deg)
}
/*
 *对了，最重要的胡子还没画呢，喵~
*/
.beard {
    width: 260px;
    height: 5px;
    border: 3px solid #000;
    border-color: #000 transparent transparent transparent;
    border-radius: 60%/30px 30px 0 0;
    position: absolute;
}
.beard-left {
    transform: rotate(10deg);
}
.beard-right {
    transform: rotate(-10deg);
}
.beard.left1 {
    top: 240px;
    left: -55px;
}
.beard.left2 {
    top: 250px;
    left: -45px
}
.beard.left3 {
    top: 260px;
    left: -35px
}
.beard.right1 {
    top: 240px;
    right: -55px;
}
.beard.right2 {
    top: 250px;
    right: -45px;
}
.beard.right3 {
    top: 260px;
    right: -35px;
}
/*
*吼吼吼，是不是萌萌哒呀，喵~
*/`
    writeCode('', css1);
    
}.call();