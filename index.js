let image = ["https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245274/qeg3izrxrngmn1rnhiju.jpg","https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244749/flc5yf33kcubwtirrfyd.jpg",
"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245112/jczdjyod9b8gdujqvbym.jpg","https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244913/mloerh9s6w3vjaqfqddv.jpg"]
let no_of_image = 0;
let image_details=[
    {Name:"X300",description:"Wireless,Portable LED Projector & Speaker"},
    {Name:"Just Launched ! Paris Rhone Laser Projector",description:"Bring the Cinema Home"},
    {Name:"ENGWE X26",description:"All-Terrian-E-Bike:62Mile Longest Range"},
    {Name:"Just Launched ! PIX NII",description:"Most Powerful Mini PC with Dual 4K HDMI"},
]
document.querySelector("#right_btn").addEventListener("click", function(){
    no_of_image++
    if( no_of_image>image.length-1){
        no_of_image=0
    }
    var swiper = document.querySelector("#header_img")
    swiper.src=image[no_of_image]
    var x= document.querySelector("#product_Name")
    x.innerText=image_details[no_of_image].Name
    var y = document.querySelector("#product_Description")
    y.innerText=image_details[no_of_image].description
    document.querySelector(".count").innerText=(no_of_image+1)+"/4"
})
document.querySelector("#left_btn").addEventListener("click", function(){
    no_of_image--
    if( no_of_image<0){
        no_of_image=image.length-1
    }
    var swiper = document.querySelector("#header_img")
    swiper.src=image[no_of_image]
    var x= document.querySelector("#product_Name")
    x.innerText=image_details[no_of_image].Name
    var y = document.querySelector("#product_Description")
    y.innerText=image_details[no_of_image].description
    document.querySelector(".count").innerText=(no_of_image+1)+"/4"
})