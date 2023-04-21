const express=require('express');
const app = express();
const port =8000;

const expressLayouts=require('express-ejs-layouts');

app.use(express.static('./assets'));




app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    if(err){
        console.log(`error :${err}`);
    }else{
        console.log(`listening :${port}`);
    }
})

app.use(expressLayouts);
app.use('/',require('./routers'))