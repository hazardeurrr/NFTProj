import React, { Component } from "react";
import {Link} from "react-router-dom";



const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

const PortfolioList = (props) => {
  
         const column = "col-lg-4 col-md-6 col-sm-6 col-12";
         const styevariation = "text-center mt--40";
         const [metadatas, setMetadatas] = React.useState([])
        // const list = PortfolioListContent.slice(0 , this.props.item);
        fetch("../../../public/assets/metadata/1.json").then(
            function(res){
            return res.json()
          }).then(function(data){
          // store Data in State Data Variable
            setMetadatas([metadatas, data])
            console.log(data)
          }).catch(
            function(err){
              console.log(err, ' error')
            }
          )

        return(
            // <React.Fragment> 
            //     {list.map((value , index) => (
            //         <div className={`${column}`} key={index}>
            //             <div className={`portfolio ${styevariation}`}>
            //                 <div className="thumbnail-inner">
            //                     <div className={`thumbnail ${value.description}`}></div>
            //                     <div className={`bg-blr-image ${value.attributes}`}></div>
            //                 </div>
            //                 <div className="content">
            //                     <div className="inner">
            //                         <p>{value.category}</p>
            //                         <h4>{value.title}</h4>
            //                         <div className="portfolio-button">
            //                             <a className="rn-btn" href="/portfolio-details">View on Opensea</a>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     ))}
               
            // </React.Fragment>



            <React.Fragment> 
               {metadatas.map((a) => (
                     <div className={`${column}`} key={a.name}>
                         <div className={`portfolio ${styevariation}`}>
                             <div className="thumbnail-inner">
                                 <div className={`thumbnail ${a.name}`}></div>
                                 <div className={`bg-blr-image ${a.image}`}></div>
                             </div>
                             <div className="content">
                                 <div className="inner">
                                     <p>{a.description}</p>
                                     <h4>{a.name}</h4>
                                     <div className="portfolio-button">
                                         <a className="rn-btn" href="/portfolio-details">View on Opensea</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 ))}
               
            </React.Fragment>
        )
    }

export default PortfolioList;