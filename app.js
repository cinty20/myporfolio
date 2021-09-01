const express = require('express');
const app = express();
const path =require("path")
const mainRouter =require("./routers/main")

/*recursos estatico*/
app.use(express.static("public"));


/* configura del motor de plantillas */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
    
/*rutas*/
app.use("/", mainRouter);

/*servidor*/
app.listen (3030, ()=> console.log('Servidor funcionando'))
   

    