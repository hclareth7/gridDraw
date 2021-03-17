
var grid_1 = document.getElementById("grid-1");
var grid_2 = document.getElementById("grid-2");

var message = document.getElementById("message");

grid2_row = 0;
grid2_cels = 0;

response_index = 0;
var response = [];



document.addEventListener('keypress', logKey);

function logKey(e) {
    console.log(e.code)
    if (e.code === 'KeyN' || e.code === 'KeyB' || e.code === 'Space' || e.code === 'Enter') {
        message.innerHTML = "";

        if (e.code === 'KeyN') {

            grid_2.rows[grid2_row].cells[grid2_cels].style.backgroundColor = "#252222";

            if (grid_2.rows[grid2_row].cells.length - 1 > grid2_cels) {
                grid2_cels++;

            } else if (grid_2.rows.length - 1 > grid2_row) {
                grid2_row++;
                grid2_cels = 0;
            }


        }

        if (e.code === 'KeyB') {

            grid_2.rows[grid2_row].cells[grid2_cels].style.backgroundColor = "#e2e2e2";

            if (grid_2.rows[grid2_row].cells.length - 1 > grid2_cels) {
                grid2_cels++;

            } else if (grid_2.rows.length - 1 > grid2_row) {
                grid2_row++;
                grid2_cels = 0;
            }


        }

        if (e.code === 'Space') {
            

            grid_2.rows[grid2_row].cells[grid2_cels].style.backgroundColor = "white";

            if (grid_2.rows[grid2_row].cells.length - 1 >= grid2_cels && grid2_cels != 0) {
                grid2_cels--;

            } else if (grid2_cels == 0 && grid2_row != 0) {
                grid2_row--;
                grid2_cels = grid_2.rows[grid2_row].cells.length - 1;
            }

            response = [];
            response_index = 0;


        }


        if (e.code === 'Enter') {
            console.log("enter")

            if (response.length == 0){
                for (let i = 0; i < grid_1.rows.length; i++) {
                    for (let j = 0; j < grid_1.rows[i].cells.length; j++) {
                        grid_1.rows[i].cells[j].style.backgroundColor = "white";

                    }
                
                
                }
            }

            for (let i = 0; i < grid_2.rows.length; i++) {

                for (let j = 0; j < grid_2.rows[i].cells.length; j++) {
                    if (grid_2.rows[i].cells[j].style.backgroundColor == "rgb(226, 226, 226)"){
                        response.push("rgb(226, 226, 226)");
                    }else if (grid_2.rows[i].cells[j].style.backgroundColor == "rgb(37, 34, 34)"){
                        response.push("rgb(37, 34, 34)");
                    }
                    
                }
            }


            for (let i = 0; i < grid_1.rows.length; i++) {
                for (let j = 0; j < grid_1.rows[i].cells.length; j++) {
                    grid_1.rows[i].cells[j].style.backgroundColor = response[response_index];
                    response_index ++;
                }
            
            
            }


        }


    } else {
        message.innerHTML = "Solo se aceptan las letras B y N.";
    }

}