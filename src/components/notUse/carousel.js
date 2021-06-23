// import React from 'react';
// import Carousel from 'react-elastic-carousel'
// import Invoice from '../Invoice/invoice.js'
// import './carousel.css';
// import range from 'lodash/range';
// import { useDispatch, useSelector } from 'react-redux';

// export default class ListInvoice extends React.Component {
     
    
//     constructor(props) {
//         super()
//         this.breakPoints = [
//             { width: 1, itemsToShow: 1 },
//             { width: 280, itemsToShow: 2 },
//             { width: 360, itemsToShow: 2, itemsToScroll: 1, pagination: false },
//             { width: 790, itemsToShow: 4, itemsToScroll: 1, pagination: false },
//             { width: 1022, itemsToShow: 5, itemsToScroll: 1, pagination: false },
//             { width: 1400, itemsToShow: 5, itemsToScroll: 1, pagination: false },
//         ]      
//     }

//     componentWillMount() {
//         this.setState({
//             children: [],
//         });


//       setTimeout(() => {
//         //   if(this.props.allInvoicesToBuisness.length !== 0)
//         //   {
//             console.log("this.props.invoiceList", this.props.invoiceList)
//               this.setState({
//                  children: this.props.invoiceList.map((key, index)=> <div key={index}><Invoice lesson={key} /></div>) 
//             })  
//         //   }    
//         }, 100);        
//     }

//     render() {
//         const {
//             children,
//         } = this.state;
     

//         return (
        
//             <div>
                
//                 <Carousel className="one-carousel"
//                     itemsToScroll={1}
//                     isRTL={true}
//                     breakPoints={this.breakPoints}
//                 >
//                     {children}
//                 </Carousel>
    
//             </div>
//         )
//     }
// };