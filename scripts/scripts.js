let questions = document.getElementsByClassName('questions');

for(let i=0; i<questions.length;i++) {
    


    questions[i].addEventListener('click', () => {

        let arrow = questions[i].getElementsByClassName('arrows');
        let content = questions[i].getElementsByClassName('q_contents');


        console.log(questions[i]);
            
        console.log(arrow);
        arrow[0].classList.toggle('arrows_on');
                
        console.log(content);
        content[0].classList.toggle('q_contents_on');
    

    });

}




    










 /*let click = false;
   console.log('Clic inicial: ' + click);


    question[i].addEventListener('click', () => {

        if (click == false){
        let arrow = document.getElementsByClassName('arrow');
        arrow[i].style.transform = 'rotate(45deg)';
            console.log(arrow[i] + 'ABIERTO')
        let content = document.getElementsByClassName('q_content');
        console.log(content[i] + 'ABIERTO');
        content[i].style.display = 'block';
        click = true;
        console.log('Clic actual: ' + click);
        }
       
        if(click == true) {
            
            question[i].addEventListener('click', () => {
                let arrow = document.getElementsByClassName('arrow');
                console.log(arrow[i] + 'CERRADO')
                arrow[i].style.transform = 'rotate(225deg)';
                let content = document.getElementsByClassName('q_content');
                console.log(content[i] + 'CERRADO');
                content[i].style.display = 'none'; 
                click = false;
                console.log('Clic final: ' + click);
    
            });

           
        }




    });


 */ 



    
