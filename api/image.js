var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
let tileArray;
fetch('/wmtsFetch/20/20/8')
    .then(response => response.text())
                .then((text) => {
                    console.log(text);
                    tileValues = text;
                }).then(() => {
                    console.log(tileValues);
                    tileArray = tileValues.split(" ");
                    console.log(tileArray);
                }).then(()=>{
                    console.log(tileArray);

                    fetch(`'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/VIIRS_SNPP_DayNightBand_ENCC/default/2020-01-01/500m/'${tileArray[0]}/${tileArray[1]}/8.png`)
                        .then((response) => {
                            console.log(response);
                        })


                })

});
module.exports = router;

