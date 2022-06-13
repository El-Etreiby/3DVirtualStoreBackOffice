import React from 'react'
import { makeStyles } from '@mui/styles';
import CategoriesCard from '../components/CategoriesCard'
import Elect from "../Images/Electronics.jpeg"
import AddBoxIcon from '@mui/icons-material/AddBox';

const useStyles = makeStyles({
  header: {
    color: "black",
    marginTop:"2vw",
    marginBottom:"2vw",
    textAlign: "center",
    fontFamily: "Phosphate",
    position:"relative",
    left:"42vw"
  },
  card:{
    width: "25vw",
    margin: "auto",
  },
  button:{

  },
  root:{
    display: 'flex'
  }
});


export default function Categories() {
    const classes = useStyles();
    const [categories,setCategories]=React.useState([{
      name:"Electronics",
      image:"",
      description:"Here you can find all electronical supplies you need.Newest Laptops ,TVs ,... are all available here"
    }]);

    //function to get all categories and save it in a list

  return (
    <div >
      <div className={classes.root}>
      <h1 className={classes.header} >Categories 
    </h1>
    {/* <div className={classes.button}>
      <AddBoxIcon />
    </div> */}
      </div>

    <div>
    {
      categories.map((n)=>(
        <div className={classes.card} > 
        <CategoriesCard name={n.name} image={Elect} description={n.description} />
        </div>
      ))
    }
    </div>
    </div>
  )
}


