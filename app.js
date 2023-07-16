window.onload = () => {
    let span = document.querySelector('span')
    let celciusInput = document.querySelector('#celcius')
    
    
    
    function celciusToFahrenheit(celcius) {
        return ((celcius * 1.8 ) + 32).toFixed(1)
    }
    
    let tempInCelcius = celciusToFahrenheit
    
    
    
    
    
    function celciusFahrenheit(){
        celciusInput.value = "";
        celciusInput.addEventListener('keyup', (e) => {
            let value = parseInt(e.target.value)
                if (value != Number){
                    span.innerText = 0
                }
                
                if (!isNaN(value)){
                    span.innerText = tempInCelcius(value)
                    
                } else {
                    console.log('Debes ingresar un número');
                }

                if(e.keyCode === 13) {
                    celciusInput.value = "";
                }
            
        })

    }
    
    celciusFahrenheit()


}
