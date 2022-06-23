let gridcontainer = document.getElementById('grid-container');



for (let i = 0 ; i < 100 ; i++) {
    let gridbox = creategridbox ();

    gridbox.innerHTML = i;

    gridcontainer.append(gridbox);

    console.log(gridbox);
}





// Funzioni

function creategridbox (){
    
    let grid = document.createElement('div');

    grid.classList.add('box');

    return grid;

}
   