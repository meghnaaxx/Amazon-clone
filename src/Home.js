import React from "react";
import "./Home.css";
import Product from "./product";

function Home() {
    return <div className="home">
              <div className="home_container">
              <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
              


                   <div className="home_row"> 
                   <Product title= "the Lean startup- How Constant Innovations Create Radically Successful Businesses| Paperback'" price={399} image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"   rating={5}/> 
                   <Product title= "'De'Longhi Kenwood Kitchen Machine Kmix Kmx750Wh-1000W|5L Mixing Bowl|K-Beater, Whipping Tool & Dough Kneading Tool" price={40000} image="https://m.media-amazon.com/images/I/71Q5iEc0PXL._SL1500_.jpg" rating={5}/> 
                   <Product title= "White Westinghouse 12 KG Toughned Glass Semi Automatic Washing Machine with Hammer Wash Technology (SFW1200, white & black, Hammer Wash Technology)" price={11999}  image="https://m.media-amazon.com/images/I/51ae0NnOIzL._SY445_SX342_QL70_FMwebp_.jpg" rating={5}/> 
                   </div> 

                    <div className="home_row"> 
                    <Product title="All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue" price={5999} image="https://m.media-amazon.com/images/I/71cV-ickxOL._SX679_.jpg" rating={4}/>  
                    <Product title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Silver (4th Generation)" price={79900} image="https://m.media-amazon.com/images/I/8124D1qS2UL._SX679_.jpg" rating={4}/> 
                    </div>

                    <div className="home_row">
                    <Product title="HyperX Cloud Stinger 2 Greatness Refined, Lightweight Wired Over Ear Headset with mic, PC Compatible - Black (519T1AA)" price={4690} image="https://m.media-amazon.com/images/I/61ll3eZ9XvL._SX522_.jpg" rating={4}/> 
                    <Product title="Noise ColorFit Pro 4 Alpha 1.78 ,AMOLED Display, Bluetooth Calling Smart Watch, Functional Crown, Metallic Build(Jet Black)" image="https://m.media-amazon.com/images/I/4123OnLZCFL._SX300_SY300_QL70_FMwebp_.jpg" price={2999} rating={3}/> 
                    <Product title="Acer XZ396Q 38.5 Inch (97.79 Cm) 2560 x 1440 Pixels Led 3000R Curve WQHD VA Panel LCD Monitor" price={34999} image="https://m.media-amazon.com/images/I/41JBRsjrMnL._SY300_SX300_QL70_FMwebp_.jpg" rating={4}/> 
                    <Product title="EGate i9 Pro with Keystone, Bluetooth & Tripod, FHD 1080 Support & 720p Native, 4k Support from HDMI | (Ei9027, White)" price={6990} image="https://m.media-amazon.com/images/I/71k9-3c3sdL._SX522_.jpg" rating={5}/> 
                    </div>

                   <div className="home_row">
                   <Product title="Semaniom Craft Solid Sheesham Wood Entertainement TV Unit with 2 Drawers |Unique Curving Wooden TV Table |(Brown Color - Honey Finish)" image="https://m.media-amazon.com/images/I/51Z9NoiZDNL._SY300_SX300_QL70_FMwebp_.jpg" price={16780} rating={4} />

                   </div>
          </div>    
 </div>

}

export default Home;
