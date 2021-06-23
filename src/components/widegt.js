import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import play1 from '../components/assets/play.png';
import cale1 from '../components/assets/calender.png';
import rep1 from '../components/assets/rep.png';
import harchive1 from '../components/assets/harchive.png';
import ana1 from '../components/assets/ana.png';
import team1 from '../components/assets/team.png';

export default function Widget() {
    return (
        <>
            <div >

                <div className="container-fluid ">
                    {/* <div className="row" >
                        <div className="col-3"></div>
                        <div className="col-6 mt-5" id="new">  +new</div>
                        <div className="col-3"></div>
                      
                    </div> */}
                    {/* <div className="row"><div className="col"><hr></hr></div>
                         </div> */}
                   
                    <div className="row mt-5 ml-3" >
                        <div className="col-3"id="tools"> Tools</div>
                        <div className="col-6"  > </div>
                        <div className="col-3"></div>
                      
                    </div>
                    

                    <div className="row mt-5" id="wid" onClick="">
                        <span className="col-3">
                            <div  style={{backgroundColor:"red"}} className="round " >
                                <img src={play1}  alt="icon" id="img" />
                            </div>

                        </span>
                        <span className="col mb-6">
                            <div className="txt">Time</div>
                        </span>
                    </div>
                    <div className="row mt-5" id="wid" onClick="">
                        <div className="col-4">
                            <div className="round " >
                                <img src={rep1} className="imgreport"alt="icon" />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="txt">Report</div>
                        </div>
                    </div>

                    <div className="row mt-5" id="wid" onClick="">
                        <div className="col-4">
                            <div className="round align-self-center" >
                                <img src={team1}  alt="icon"  id="imgteam" />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="txt">Team</div>
                        </div>
                    </div>


                    <div className="row mt-5" id="wid" onClick="">
                        <div className="col-4">
                            <div className="round " >
                                <img src={ana1}className="imgana" alt="icon" />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="txt">Analytics</div>
                        </div>
                    </div>
                    <div className="row mt-5" id="wid" onClick="">
                        <div className="col-4">
                            <div className="round " >
                                <img src={cale1}className="imgcalen" alt="icon"  />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="txt">Calender</div>
                        </div>
                    </div>
                    <div className="row mt-5 " id="wid" onClick="">
                        <div className="col-4">
                            <div className="round " >
                                <img src={ harchive1}className="imgarc" alt="icon"  />
                            </div>
                        </div>
                        <div className=" col-8 ">
                            <div className="txt">Archive</div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}