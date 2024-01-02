var rnd = Math.random, flr = Math.floor;
let canvas = document.createElement('canvas');

document.getElementsByTagName('body')[0].appendChild(canvas);
canvas.style.position = 'absolute';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.left = '0';
canvas.style.zIndex = '-1';

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let ctx = canvas.getContext('2d');

function rndNum(num) {
    return rnd() * num + 1;
}

function vector(x, y) {
    this.x = x;
    this.y = y;

    this.add = function (vec2) {
        this.x = this.x + vec2.x;
        this.y = this.y + vec2.y;
    }
}

function particle(pos, vel) {
    this.pos = new vector(pos.x, pos.y);
    this.vel = vel;
    this.finish = false;
    this.start = 0;

    this.update = function (time) {
        let timeSpan = time - this.start;

        if (timeSpan > 500) {
            this.finish = true;
        }

        if (!this.finish) {
            this.pos.add(this.vel);
            this.vel.y = this.vel.y + gravity;
        }
    };

    this.draw = function () {
        if (!this.finish) {
            drawDot(this.pos.x, this.pos.y, 1);
        }
    }

}

function firework(x, y) {
    this.pos = new vector(x, y);
    this.vel = new vector(0, -rndNum(10) - 3);
    this.color = 'hsl(' + rndNum(360) + ', 100%, 50%)'
    this.size = 4;
    this.finish = false;
    this.start = 0;
    let exParticles = [], exPLen = 100;

    let rootShow = true;

    this.update = function (time) {
        if (this.finish) {
            return;
        }

        rootShow = this.vel.y < 0;

        if (rootShow) {
            this.pos.add(this.vel);
            this.vel.y = this.vel.y + gravity;
        } else {
            if (exParticles.length === 0) {
                flash = true;
                for (let i = 0; i < exPLen; i++) {
                    exParticles.push(new particle(this.pos, new vector(-rndNum(10) + 5, -rndNum(10) + 5)));
                    exParticles[exParticles.length - 1].start = time;
                }
            }
            let countFinish = 0;
            for (let i = 0; i < exPLen; i++) {
                let p = exParticles[i];
                p.update(time);
                if (p.finish) {
                    countFinish++;
                }
            }

            if (countFinish === exPLen) {
                this.finish = true;
            }

        }
    }

    this.draw = function () {
        if (this.finish) {
            return;
        }

        ctx.fillStyle = this.color;
        if (rootShow) {
            drawDot(this.pos.x, this.pos.y, this.size);
        } else {
            for (let i = 0; i < exPLen; i++) {
                let p = exParticles[i];
                p.draw();
            }
        }
    }

}

function drawDot(x, y, size) {
    ctx.beginPath();

    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();

    ctx.closePath();
}

var fireworks = [],
    gravity = 0.2,
    snapTime = 0,
    flash = false;

function init() {
    let numOfFireworks = 20;
    for (let i = 0; i < numOfFireworks; i++) {
        fireworks.push(new firework(rndNum(canvas.width), canvas.height));
    }
}

function update(time) {
    for (let i = 0, len = fireworks.length; i < len; i++) {
        let p = fireworks[i];
        p.update(time);
    }
}

function draw(time) {
    update(time);

    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    if (flash) {
        flash = false;
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.font = "30px Segoe UI";
    let newTime = time - snapTime;
    snapTime = time;

    ctx.fillStyle = 'blue';
    for (let i = 0, len = fireworks.length; i < len; i++) {
        let p = fireworks[i];
        if (p.finish) {
            fireworks[i] = new firework(rndNum(canvas.width), canvas.height);
            p = fireworks[i];
            p.start = time;
        }
        p.draw();
    }

    window.requestAnimationFrame(draw);
}

window.addEventListener('resize', function () {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
});

init();
draw();

function initengahan(){
    kadoIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1.5);";
  }
  
  async function mulainama() {
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,200);
    setTimeout(kethalo,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function kethalo(){new TypeIt("#halo", {strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function(){halo.innerHTML = vketikhalo;setTimeout(bqmuncul,200);},}).go();}

  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";if(fungsi==2){By.innerHTML="&#128140; Balas"}}
  document.getElementById("By").onclick = function() {if(fungsi==1){Tombol.style="";fthilang();fungsi=0;pertanyaan();} if(fungsi==2){Tombol.style="";menuju();}}
  
  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";}
  else{ucapan = "Selamat Malam, ";}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    aktiopsL();
  },}).go();
  }
  
  opsLclick=0;opsLcheck=0;defopsL=opsL.innerHTML;
  document.getElementById("bq").onclick = function() {
    if(opsLclick==1){
      if(opsLcheck==1){setTimeout(aktipesan1,400);fthilang();ftganti=1;setTimeout(ftmuncul,300);}
      if(opsLcheck==2){mulaiketik3();}
      if(opsLcheck==3){mulaiketik4();}
      if(opsLcheck==4){mulaiketik5();}
      if(opsLcheck==5){kethalo2();}
      otomatis();opsL.style.opacity="0";opsLclick=0;
    }
  }
  function aktiopsL(){opsL.innerHTML=defopsL;opsL.style.opacity=".8";opsLclick=1;opsLcheck+=1;}
  function gantiopsL(){opsL.innerHTML="[ Klik beberapa LOVE-nya ]";opsL.style.opacity=".8";}
  function otomatis(){pesan3.style="transition:none";pesan8.style="display:none";kalimat.style="opacity:0";if(otoaktipesan==0){setTimeout(otolanj,400)}}
  function otolanj(){kalimat.style="opacity:1";}

  function aktipesan1(){kalimat.innerHTML=pesan1.innerHTML;kolombaru.style="position:relative;opacity:1;transform:scale(1);";}
  vketik2=pesan2.innerHTML;
  function aktipesan2(){
  wallpaper.style="transform: scale(1.5);";
  kolombaru.style="";kalimat.innerHTML="";
  new TypeIt("#kalimat", {
  strings: ["" + vketik2], startDelay: 20, speed: 40, cursor: true, deleteSpeed: 50, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    setTimeout(aktipesan3,500);
  },}).go();
  }
  vketik3=pesan3.innerHTML;pesan3.innerHTML="";
  function aktipesan3(){
  kalimat.style="display:none";
  pesan3.style="position:relative;opacity:1;transform: scale(1)";
  wallpaper.style="transform: scale(1)";
  fthilang();ftganti=2;setTimeout(ftmuncul,300);
  new TypeIt("#pesan3", {
  strings: ["" + vketik3], startDelay: 1, speed: 45, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan3.innerHTML=vketik3;setTimeout(otomatis,600);setTimeout(aktipesan4,1010);
  },}).go();
  }
  function aktipesan4(){
    wallpaper.style="transform: scale(1.5);";kalimat.innerHTML=pesan4.innerHTML + nama + " 🥳";kalimat.style="transform:scale(1.2)";setTimeout(aktipesan5,1000);
  }
  vketik5=pesan5.innerHTML;pesan5.innerHTML="";
  function aktipesan5(){
  fthilang();ftganti=3;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan5", {
  strings: ["" + vketik5], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan5.innerHTML=vketik5 + " ><";setTimeout(aktipesan6,800);
  },}).go();
  }
  vketik6=pesan6.innerHTML;pesan6.innerHTML="";
  function aktipesan6(){
  wallpaper.style="transform: scale(1.5);";
  new TypeIt("#pesan6", {
  strings: ["" + vketik6], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan6.innerHTML=vketik6;setTimeout(aktipesan7,800);
  },}).go();
  }
  vketik7=pesan7.innerHTML;pesan7.innerHTML="";
  function aktipesan7(){
  fthilang();ftganti=1;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan7", {
  strings: ["" + vketik7], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan7.innerHTML=vketik7;fungsi=1;setTimeout(tombol,400);
  },}).go();
  }
  //Pemisah
  vketik81=pesan8.innerHTML;pesan8.innerHTML="";
  vketik9=pesan9.innerHTML;pesan9.innerHTML="";
  vketik10=pesan10.innerHTML;pesan10.innerHTML="";
  function aktipesan8(){
  pesan5.style="display:none";pesan6.style="display:none";pesan7.style="display:none";pesan8.style="";
  wallpaper.style="transform: scale(1);";
  ftganti=4;ftmuncul();
  new TypeIt("#pesan8", {
  strings: ["" + vketik8, "" + vketik9], startDelay: 20, speed: 45, cursor: true, deleteSpeed: 30, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan8.innerHTML=vketik9;setTimeout(otomatis,1300);setTimeout(aktipesan10,1710);
  },}).go();
  }
  function aktipesan10(){
    wallpaper.style="transform: scale(1.5);";
    fthilang();ftganti=5;setTimeout(ftmuncul,300);
    otoaktipesan=1;otomatis();setTimeout(toaktipesan,300);
    setInterval(berjatuhan,400);
    fungsi=2;setTimeout(tombol,2000);
  }
  var otoaktipesan=0;
  function toaktipesan(){kalimat.innerHTML=vketik10;kalimat.style="transform:scale(1);font-size:24px;font-family:var(--gaya-font2)";}

  document.getElementById("lv1").onclick = function() {lv1.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv2").onclick = function() {lv2.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv3").onclick = function() {lv3.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv4").onclick = function() {lv4.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  var slov=0;function checkslov() {if(slov==4){kolombaru.style="position:relative;transform:scale(1)";otomatis();setTimeout(aktipesan2,400);}}
  
  async function pertanyaan(){var { isConfirmed: prtanya } = await swals.fire({title: nama + ' ' + tanya, text: '' + opstanya, imageUrl: '' + fotostiker6.src, showCancelButton: true, confirmButtonText: '' + tompositif, cancelButtonText: '' + tomnegatif,});
    if(prtanya){
  await swalst.fire({title: '' + katatambahan.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
      vketik8=vketik81;aktipesan8();
    } else {
	await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
      vketik8="";aktipesan8();
    }
    }