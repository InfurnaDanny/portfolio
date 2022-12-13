document.addEventListener('DOMContentLoaded',()=>{
    let door = document.querySelector('.door');

    /* Al click apro le porte di "my Skills" */
    let doorChild = door.children
        door.addEventListener('click', ()=>{

            if(!document.querySelector('.left')){
                for(let i=0; i<doorChild.length; i++){
                    if(doorChild[i].src.includes('left')){
                        doorChild[i].setAttribute('class', 'left');
                    }else{
                        doorChild[i].setAttribute('class', 'right');
                    }
                }
            } else{
                for(let i=0; i<doorChild.length; i++){
                    if(doorChild[i].src.includes('left')){
                        doorChild[i].removeAttribute('class', 'left');
                    }else{
                        doorChild[i].removeAttribute('class', 'right');
                    }
                }
            }
        })
})