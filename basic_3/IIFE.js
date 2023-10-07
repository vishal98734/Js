// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONEECTED`);   
})();

( (name) => {
    console.log(`DB CONEECTED TWO ${name}`);
})("vishal")

// TWO IIFE