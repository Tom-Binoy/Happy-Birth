var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){{
        bio = Img;
        bio.scaleToWidth(800);
        bio.scaleToHeight(500);
        bio.set({
            top : 0 ,
            left : 0
        })
        canvas.add(bio);
    }
	
}

function start(){
    
 function playSound(){
    x.play();
 }	
})
