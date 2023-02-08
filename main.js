var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(){
console.log("a")
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        bio = Img;
        bio.scaleToWidth(800);
        bio.scaleToHeight(500);7
        bio.set({
            top : 0 ,
            left : 0
        })
        canvas.add(bio);
    })
	
}

function start(){
    x.play("bdayaudio.mp3");	
}
