import { Button,makeStyles,table, TableHead, TableRow,TableCell,tableBody } from "@material-ui/core";
import { categories } from "../../constants/data";


const useStyle = makeStyles({
 create : {
   
    background:'#6495ED',
    margin:'20px',
   color:'#fff',
   width:'84%'
},
table : {
    border : '1px solid rgba(224,224,224,1)',
    padding : '50px'
}

})



const Categories =() =>{
  const classes = useStyle();
    return(
       <>
       <button variant="outlined" className={classes.create}>Create Blog</button>
       <table className={classes.table}>
           <TableHead>
               <TableRow>
                   <TableCell>All Categories</TableCell>
                   {/* <TableCell>balla ne balli ko dant dia</TableCell> */}
               </TableRow>
           </TableHead>
           <tablebody>
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