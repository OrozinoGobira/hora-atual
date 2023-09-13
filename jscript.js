function carregar (){
 var msg = document.getElementById ('msg')
 var img = document.getElementById ('imagem')
var data = new Date ()
var hora = data.getHours ()

msg.innerHTML=`Agora são ${hora} horas`
if (hora < 12){
   img.src='fotomanhã.jpg'
} else if (hora <=18){
   img.src='fototarde.jpg'
} else if (hora <=23){
   img.src='fotonoite.jpg'
}else {
   msg.innerHTML=`Hora invalida`
}
}