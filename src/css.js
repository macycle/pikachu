let x=`
.skin *{box-sizing:border-box;margin: 0px; padding: 0px;}
.skin *::before,.skin *::after{box-sizing:border-box;}
.skin{
    position: relative;
    background-color: #ffe600;
    height:100vh;
}
.trangle{
    position: absolute;
    top: 155px;
    left: 50%;
    border:10px solid black;
    width:0px;
    height: 0px;
    transform: translate(-50%,-50%);
    border-color: black transparent transparent;
}

.cycle{
    position: absolute;
    top: -20px;
    left: -10px;
    border: 1px solid black;
    width: 20px;
    height: 10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
    
}


.eye{
    position:absolute;
    left: 50%;
    top:100px;
    border:2px solid black;
    width: 64px;
    height: 64px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::after{
    content: '';
    display: block;
    border: 3px #000 solid;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}

.eye.left{
    transform: translate(-100px);
}

.eye.right{
    transform: translate(100px);
}

.mouth{
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up{
    position: relative;
    top: -10px;
}

.mouth .up .lip{
    border: 3px solid black;
    border-top-color: transparent;
    border-top-width: 0px;
    background-color: #ffe600;
}

.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    border-right-width: 0px;
    transform: rotate(-15deg);
    left: 20px;
}

.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    border-left-color: transparent;
    border-left-width: 0px;
    transform: rotate(15deg);
    margin-left: 100px;
}

.mouth .down{ 
    width: 160px;
    height: 180px;
    margin-left: 20px;
    position: absolute;
    overflow: hidden;
}

.mouth .down .yuan1{
    border:2px solid black;
    border-radius: 80px/400px;
    background-color: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    border: 1px solid gray;
    background-color: #ff485f;
    margin-left: -75px;
    border-radius: 100px;
}

.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 76px;
    height: 76px;
    top:200px;
    margin-left: -38px;
    border-radius: 50%;
    background-color: #ff0000;
}

.face.left{
    transform: translateX(-150px);
}

.face.right{
    transform: translateX(150px);
}
`

export default x;