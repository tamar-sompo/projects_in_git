// import loudIcon from '../../assets/loude.gif'
import uploadAnimation from '../assets/louder.gif'
import './messageFormat.css';
function LeaderLouder() {
    return (
        <>
            {/* <div style={{background:"red", width:"100%", height:"30px"}}> */}
            <img
                src={uploadAnimation}
                className="uploadAnimation"
                alt="">
            </img>
            {/* </div> */}
            {/* <img src={loudIcon}></img> */}
        </>
    )

}
export default LeaderLouder