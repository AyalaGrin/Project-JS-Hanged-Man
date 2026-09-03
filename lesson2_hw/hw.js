  function changeLight(id, color) {
            // turnOff();
            if(color=='red')
               turnOff(); 
            document.getElementById(id).style.backgroundColor = color; 

        }

        function turnOff() {
            const lights = document.getElementsByClassName('light');
            for (let i = 0; i < lights.length; i++) {
                lights[i].style.backgroundColor = '#555';
                lights[i].style.boxShadow = 'none';
            }
        }