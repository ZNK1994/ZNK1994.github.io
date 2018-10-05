var judul = document.getElementById('judul');
judul.addEventListener('click', function() {
  alert('Hello!');
});
var nilai = 1;

//untuk merubah gambar dan nama Pokemon
var arrImgPoke = [
    "Gambar/Pokemon/Pikachu.png",
    "Gambar/Pokemon/Rattata.png",
    "Gambar/Pokemon/Spearow.png",
    "Gambar/Pokemon/Squirtle.png",
    "Gambar/Pokemon/Weedle.png",
    "Gambar/Pokemon/Zubat.png",
    "Gambar/Pokemon/Bulbasaur.png",
    "Gambar/Pokemon/Charmender.png",
    "Gambar/Pokemon/Eevee.png",
    "Gambar/Pokemon/Pidgey.png"
]

var arrNamePoke = [
    "Pikachu", "Rattata", "Spearow", "Squirtle", 
    "Weedle","Zubat", "Bulbasaur", "Charmender",
    "Eevee", "Pidgey"
]

var img1 = document.getElementById('img1');
img1.addEventListener('click', function() {
    img1.src = arrImgPoke[nilai]
    name1.innerHTML = arrNamePoke[nilai]
    nilai++;
    if (nilai === 10){
        nilai = 0
    }
})

//untuk merubah gambar dan nama Stand Up Comedy
var arrImgStand = [
    "Gambar/StandUp/Radit.jpg",
    "Gambar/StandUp/Soleh.jpg",
    "Gambar/StandUp/Uus.jpg",
    "Gambar/StandUp/Arie.png",
    "Gambar/StandUp/Babe.jpg",
    "Gambar/StandUp/Dodit.jpg",
    "Gambar/StandUp/Ernest.jpg",
    "Gambar/StandUp/Ge.jpg",
    "Gambar/StandUp/Kemal_Palevi.jpg",
    "Gambar/StandUp/Pandji.jpg"
]
var arrNameStand = [
    "Raditya Dika", "Soleh Solihun", "Uus",
    "Arie Kriting", "Babe Cabita", "Dodit Mulyanto",
    "Ernest Prakasa", "Ge Pamungkas", "Kemal Palevi",
    "Pandji Pragiwaksono"
]

var img2 = document.getElementById('img2');
img2.addEventListener('click', function() {
    img2.src = arrImgStand[nilai]
    name2.innerHTML = arrNameStand[nilai]
    nilai++;
    if (nilai === 10){
        nilai = 0
    }
})

//untuk merubah gambar dan nama Singer
var arrImgSinger = [
    "Gambar/Top_Artist/ariana_grande.jpg",
    "Gambar/Top_Artist/bebe_rexha.jpg",
    "Gambar/Top_Artist/Camila.jpg",
    "Gambar/Top_Artist/chainsmokers.jpg",
    "Gambar/Top_Artist/christina_aguilera.jpg",
    "Gambar/Top_Artist/dua_lipa.jpg",
    "Gambar/Top_Artist/Ed_Sheeran.jpg",
    "Gambar/Top_Artist/Justin_Timberlake.jpg",
    "Gambar/Top_Artist/Katy_Perry.jpg",
    "Gambar/Top_Artist/Taylor_Swift.jpg"
]
var arrNameSinger = [
    "Ariana Grande", "Bebe Rexha", "Camila Cabello",
    "Chainsmokers", "Christina Aguilera", "Dua Lipa",
    "Ed Sheeran", "Justin Timberlake", "Katy Perry",
    "Taylor Swift"
]
var img3 = document.getElementById('img3');
img3.addEventListener('click', function() {
    img3.src = arrImgSinger[nilai]
    name3.innerHTML = arrNameSinger[nilai]
    nilai++;
    if (nilai === 10){
        nilai = 0
    }
})

//untuk merubah gambar dan nama Kucing
var arrImgCat = [
    "Gambar/PopularCat/Persia.jpg", 
    "Gambar/PopularCat/Siamese.jpg",
    "Gambar/PopularCat/maine-coon.jpg",
    "Gambar/PopularCat/Abyssinian.jpg",
    "Gambar/PopularCat/Ragdoll.jpg",
    "Gambar/PopularCat/Savannah.jpg",
    "Gambar/PopularCat/manx.jpg",
    "Gambar/PopularCat/angora.jpg",
    "Gambar/PopularCat/garfield.jpg",
    "Gambar/PopularCat/sphynx.jpg"
]

var arrNameCat = [
    "Persia", "Siamese", "Maine Coon",
    "Abyssinian", "Ragdoll", "Savannah",
    "Manx", "Angora", "Garfield", "Sphynx"
]

var img4 = document.getElementById('img4');
img4.addEventListener('click', function() {
    img4.src = arrImgCat[nilai]
    name4.innerHTML = arrNameCat[nilai]
    nilai++;
    if (nilai === 10){
        nilai = 0
    }
})

//untuk merubah gambar dan nama Bunga
var arrImgFlower = [
    "Gambar/Beautiful Flower/cherry-blossom.jpg",
    "Gambar/Beautiful Flower/bird-of-paradise.jpg",
    "Gambar/Beautiful Flower/Bleeding.png",
    "Gambar/Beautiful Flower/dahlia.jpg",
    "Gambar/Beautiful Flower/lily.jpg",
    "Gambar/Beautiful Flower/Gazania.jpg",
    "Gambar/Beautiful Flower/Lotus.jpg",
    "Gambar/Beautiful Flower/tulip.jpg",
    "Gambar/Beautiful Flower/orchid.jpg",
    "Gambar/Beautiful Flower/rose.jpg"
]

var arrNameFlower = [
    "Cherry Blossom", "Bird of Paradise",
    "Bleeding Heart", "Dahlia", "Lily",
    "Gazania", "Lotus", "Tulip",
    "Orchid", "Rose" 
]

var img5 = document.getElementById('img5');
img5.addEventListener('click', function() {
    img5.src = arrImgFlower[nilai]
    name5.innerHTML = arrNameFlower[nilai]
    nilai++;
    if (nilai === 10){
        nilai = 0
    }
})

//untuk tombol restart
var reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    nilai = 0
    img1.src = arrImgPoke[nilai]
    img2.src = arrImgStand[nilai]
    img3.src = arrImgSinger[nilai]
    img4.src = arrImgCat[nilai]
    img5.src = arrImgFlower[nilai]
    name1.innerHTML = arrNamePoke[nilai]
    name2.innerHTML = arrNameStand[nilai]
    name3.innerHTML = arrNameSinger[nilai]
    name4.innerHTML = arrNameCat[nilai]
    name5.innerHTML = arrNameFlower[nilai]
})

//membuat suara background
var bgSong = document.createElement('audio');
bgSong.setAttribute('id', 'effectsong');
bgSong.setAttribute('src', 'Audio/DuaLipa-BetheOne.mp3');
bgSong.setAttribute('autoplay', 'true');
bgSong.setAttribute('loop', 'true');
main.appendChild(bgSong);