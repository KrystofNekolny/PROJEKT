const playerImage = new Image();
    playerImage.src = '60-601000_red-hoodie-boy-game-sprites-2d-character-hoodie_run.png';
const spriteWidth = 575;
const spriteHeight = 523;
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas')
           
  
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.background = 'transparent' ;
    
    
        
      
    
        

    

function animate (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(100, 50, 100, 100 );
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, 0 * spriteWidth, 9 * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
};
animate();

    class InputHandler {
        
    }
    class Projectile{

    }
    class Particle{

    }
    class Player{
         constructor(game, image){
            this.game = game;
            this.image image;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
            this.Image = src('60-601000_red-hoodie-boy-game-sprites-2d-character-hoodie_run.png');
         }
         update(){
            this.y += this.speedY;
         }
         draw(context){
            context,fillRect(this.x, this.y, this.width, this.height);
         }
    }
    class Enemy{

    }
    class Layer{
        constructor(game, image, speedModifier){
            this.game = game;
            this.image = image;
            this.speedModifier = speedModifier;
            this.width = 2000;
            this.height = 2100;
            this.x = 0;
            this.y = 0;

        }

    }
    class Background{

    }
    class UI{
        
    }
    class Game{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.player = new Player();
    }
    update(){
        this.player.update();
    }
    draw(){
        this.player.draw(0, 0, canvas.width, canvas.height);
    }
    }


});