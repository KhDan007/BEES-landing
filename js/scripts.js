youtubeBtn = document.querySelector('#youtube')
instagramBtn = document.querySelector('#instagram')
telegramBtn = document.querySelector("#telegram")

youtubeBlock = document.querySelector(".social__block1")
instagramBlock = document.querySelector(".social__block2")
telegramBlock = document.querySelector(".social__block3")

image = document.querySelector("#image")

youtubeBtn.addEventListener("click", ()=>{
    image.src = "img/social/1.jpg";
    youtubeBtn.classList.add('active');
    telegramBtn.classList.remove('active');
    instagramBtn.classList.remove('active');

    youtubeBlock.style = "display: block;";
    instagramBlock.style = "display: none;";
    telegramBlock.style = "display: none;";
});
instagramBtn.addEventListener("click", ()=>{
    image.src = "img/social/2.jpg";
    youtubeBtn.classList.remove('active');
    telegramBtn.classList.remove('active');
    instagramBtn.classList.add('active');

    youtubeBlock.style = "display: none;";
    instagramBlock.style = "display: block;";
    telegramBlock.style = "display: none;";
});
telegramBtn.addEventListener("click", ()=>{
    image.src = "img/social/3.jpg";
    youtubeBtn.classList.remove('active');
    telegramBtn.classList.add('active');
    instagramBtn.classList.remove('active');

    youtubeBlock.style = "display: none;";
    instagramBlock.style = "display: none;";
    telegramBlock.style = "display: block;";
});