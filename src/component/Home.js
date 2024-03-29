import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";


function HomeCompo() {
    const [datahome] = useContext(Store)
    console.log(datahome)

    return (
        <>
            <div className="top">
            <div className="onetwo">
                    {datahome.filter((item) => item.id === 77).map((item, index) => {
                        return (
                            <div key={index} >
                                <img src={item.image} className="imagetoptwo" alt="Not Found" />
                            </div>
                        )

                    })}
                </div>
                
                <div className="midtop">
               
                <div  >
                    {datahome.filter((item) => item.id === 76).map((item, index) => {
                        return (
                            <div key={index} >

                              <img src={item.image} className="imagetopone" alt="Not Found"/>  
                            </div>
                        )

                    })}
                </div>
                <div>
                    {datahome.filter((item) => item.id === 78).map((item, index) => {
                        return (
                            <div  key={index} >
                                <img src={item.image}className="imagetopthree" alt="Not Found"/>
                            </div>
                        )

                    })}
                </div>
                </div>
            </div>
            <h1 className="latest">The Latest</h1>
            <div className="secondtop">


                {datahome.filter((item) => item.id % 25 === 0).map((item, index) => {
                    return (

                        <div className="underdivfirst" key={index}>
                            <h1 className="namecard">{item.name}</h1>
                            <img className="homeimage" src={item.image} alt="Not Found" />
                            <NavLink to={`/details/${item.id}`}> <span className="parahome" >{item.para.slice(0,250)}...</span></NavLink>
                            
                        </div>
                    )
                })}
            </div>




            <div className="thirdtop">
                <div className="topstories">
                    <h2 className="tops">Top Stories</h2>
                    {datahome.filter((item) => item.id % 9 === 0).map((item, index) => {
                        return (
                            <>

                                <div key={index} >

                                    <div className="datatwo">


                                        <span className="headingone">{item.name.slice(0,10)}</span>

                                        <span className="paraone">{item.para.slice(0, 100)}</span>
                                        <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image} className="imageone" alt="Not Found"/></NavLink>
                                    </div>
                                </div>
                            </>

                        )
                    })}
                </div>

                <div className="toppost">
                    <h2 className="post">Top Posts</h2>
                    {datahome.filter((item) => item.id % 12 === 0).map((item, index) => {
                        return (
                            <>

                                <div key={index} className="ddddd">

                                    <div className="data">
                                        <span className="headingtwo">{item.name.slice(0, 10)}</span> 
                                        <span  className="number">{index +1}</span>
                                        <img src={item.image} className="imagetwo" alt="Not Found"/>
                                        <NavLink className='navlinktwo' to={`/details/${item.id}` }>     <p className="paratwo">{item.para.slice(0, 100)}...</p></NavLink>
                                        

                                    </div>
                                </div>
                            </>


                        )
                    })}
                    <div className="advisment">Advertisement</div>

                </div>

            </div>




            <div className="footer">

<div className="logoshome">
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not found"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt=""/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt=""/>

</div>
<div className="location">  <img className="renlogoonehome" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt=""/></div> <span className="lochome">Kolkata, West Bengal</span>




<img className="logoonephonehome" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found"/><span className="phohome">22097756675</span>


<img className="logoonemailhome" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found"/><span className="emailhome">jyo95.mukh@gmail.com</span> 

<div className="gotonavhome">
    <p style={{color:'white', fontSize:'1.1em'}}>Click On This Link</p>

<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/'>Home</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/holly'>Hollywood</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/bolly'>Bollywood</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/fitness'>Fitness</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/food'>Food</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})} to='/tech'>Technology</NavLink>
</div>

 </div>
        </>
    )

}
export default HomeCompo;
