var express =require ('express');
const app = express();
app.set('view engine', 'jade');
app.set('views','./views')
app.use(express.static('public'));
app.get('/template', function(req,res){
    res.render('temp');
} )
app. get('/',function(req,res){
    res.send('<h1>Hello home page</h1>');
}); //사용자가 웹 들어갈 때 get방식으로 들어온 사용자 인식 '/'는 홈화면 '/hello' 등으로 추가 페이지 지정 가능 -req는 request -res는 응답에 대한 개체
app.get('/login',function(req,res){
    res.send('<h1>Login plz</h1>');
});
app.get('/route',function(req,res){
    res.send('Hello, Router!, <img src= "/LayerSwitch.jpg">')
})
app.get('/dynamic',function(req,res){
    var lis = '';
    for (var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello, dynamic!</h1>
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
})
app.listen(3000,function(){
    console.log('Connected 3000 Port!')
}); 