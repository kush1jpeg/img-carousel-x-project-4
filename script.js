document.addEventListener('DOMContentLoaded', function() {

next= document.querySelector('#o1')
prev= document.querySelector('#o2')
slide=document.querySelector('.slide')
no=0
img=document.querySelectorAll('.img')

next.addEventListener('click' ,function right(){
    if(no<img.length-1)
        {
            no++; 
    slide.style.transform = `translateX(-${no*800}px)`
    

}
else{
    
        slide.style.transform = `translateX(-0px)`
        no=0;

}
}) 
prev.addEventListener('click' ,function left(){
    if(no<img.length && no!=0)
        {
            no--; 
    slide.style.transform = `translateX(-${no*800}px)`   
}

else if(no==0){
    no= img.length-1;
        slide.style.transform =`translateX(-${no*800}px)`
        
}
}) 

const ax = document.querySelector('#o3');
ax.addEventListener('click', function xyx() { 
    window.open("https://chat.com", "_blank"); //add https:// uske biina bc nahi chal rha tha
} )
}) 