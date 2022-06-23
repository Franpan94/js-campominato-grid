let gridcontainer = document.getElementById('grid-container');
let button = document.getElementById('button');


button.addEventListener('click' , function(){
        

    gridcontainer.innerHTML='';

    for (let i = 0 ; i < 100 ; i++) {
        let gridbox = creategridbox ();
    
        
        gridbox.innerHTML = i;
    
        if(i % 2 === 0) {
            
            creategridelementclass(gridbox , 'azure-box');
        
        } else {
    
            creategridelementclass(gridbox , 'red-box');
        
        }
    
        gridcontainer.append(gridbox);
    
    }
    
})







// Funzioni

function creategridbox (){
    
    let grid = document.createElement('div');

    grid.classList.add('box');

    return grid;

}

function creategridelementclass(gridelement , gridclass) {

     gridelement.addEventListener('click' , function() {
        
        gridelement.classList.toggle(gridclass);

     }
)}


   