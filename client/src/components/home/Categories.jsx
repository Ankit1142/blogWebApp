import { Button,makeStyles,table, TableHead, TableRow,TableCell,tableBody } from "@material-ui/core";
import { categories } from "../../constants/data";
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
//  create : {
   
//     background:'#6495ED',
//     margin:'40px',
//    color:'#fff',
//    width:'100%'
// },
table : {
     width:'140px',
    margin:'5px 15px 15px 40px',
    border : '1px solid rgba(224,224,224,1)',
    // display:'inline'
   
}

})



const Categories =() =>{
  const classes = useStyle();
    return(
       <>
    
       <Link to='/create'>
            <button  className="btn btn-outline-primary btn-lg" style={{margin:'15px 10px 15px 35px'}}>CREATE BLOG</button>
            </Link>
       <table className={classes.table}>
           <TableHead >
               <TableRow>
                   <TableCell>All Categories</TableCell>
               </TableRow>
           </TableHead>
           <tablebody >
              {
                  categories.map(category=>(
                      <TableRow> 
                          <TableCell>{category}</TableCell>
                         
                      </TableRow>
                  ))   
              }
           </tablebody>
       </table>
       
       </>
    )
} 

export default Categories;