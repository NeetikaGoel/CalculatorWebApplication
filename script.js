// TO DO:: CLEAR ONE BY ONE FUNCTION !!

console.log("SCRIPT IS RUNNING !!")
let string = "";
console.log(string);
let buttons = document.querySelectorAll('.button');
console.log(buttons);

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log('Button clicked:', e.target);

        if (e.target.innerHTML === "=") {
            try 
            
            {
                string = eval(string);
                console.log('Evaluated result:', string);
                document.querySelector('input').value = string;
            } 
            
            catch (error) {
                console.error('Error during evaluation:', error);
                // You may want to handle the error in a way that makes sense for your application
                // For now, clear the string and display an error message
                string = "";
                document.querySelector('input').value = 'Error';
            }
        } 
        else if (e.target.innerHTML === "AC")
        {
            string = "";
            console.log(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML === "%") {
            try {
                // Parse the expression and divide by 100 to get the percentage value
                string = eval(string) / 100;
                console.log('Evaluated result:', string);
                document.querySelector('input').value = string;
            } 
            
            catch (error) {
                console.error('Error during percentage calculation:', error);
                string = "";
                document.querySelector('input').value = 'Error';
            }
        } 
        
        else 
        {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }

        console.log('Current string:', string);
    });
});
