const express=require("express");
const app=express();
const path=require("path");
const carData = require("./car_data_updated.json");
let port=8080;



app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`server was running on port ${port}`);
})

app.get("/cars",(req,res)=>{
   const data =carData.cars;
   const uniqueBrands = [...new Set(data.map(car => car.make))];
   res.render("carlist.ejs",{brands:uniqueBrands});
})

app.post("/cars", (req, res) => {
    const { carmaker } = req.body;

    const matchedCars = carData.cars.filter(car => 
        car.make && car.make.toLowerCase() === carmaker.toLowerCase()
    );

    if (matchedCars.length > 0) {
        res.render("cars.ejs", { cars: matchedCars });
    } else {
        res.render("error.ejs", { carmaker });
    }
});

