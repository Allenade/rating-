let ratings = document.querySelectorAll('.circle');  
let btn = document.getElementById('btn'); 
let container = document.querySelector('.container'); 
let thankyou = document.querySelector('.thankyou');
let numberRating = document.getElementsByClassName('.numberRating'); 


for (let i = 0; i < ratings.length; i++) {
         
          ratings[i].addEventListener('click', function () {

          
                    let rating = ratings[i].innerHTML;

                
                    for (let i = 0; i < ratings.length; i++) {
                              ratings[i].classList.contains('selected')
                              ratings[i].classList.remove('selected');
                    }

                    
                    ratings[i].classList.add('selected');

                    btn.addEventListener('click', function () {
                        container.style.display = 'none';
                              thankyou.style.display = 'block';
                              numberRating.innerHTML = rating;
                    })
          })
}
