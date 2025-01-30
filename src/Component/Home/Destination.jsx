import { Grid } from '@mui/material'
import React from 'react'
import destination1 from '../../assets/destination1.jpg'
import destination2 from '../../assets/destination3.jpg'
import destination3 from '../../assets/destination6.jpg'

function Destination() {
  return (
    <div>

        <section  className='banner z-50 relative flex flex-col justify-center items-center'>

            <div className='lg:w-[50vw] sm:w-[50vw] md:w-[50vw] z-10 text-center'>
               <p className=' sm:text-2xl text-xl lg:text-4xl font-bold z-10 py-7'>Explore Top Destination</p> 
               <p className='z-10 text-gray-300 sm:text-xl lg:text-2xl leading-loose pb-3'>Destination</p>
            </div>
            <div className='my-2'>

              <Grid></Grid>
              <Grid container spacing={2} justifyContent="center">
  <Grid
    item
    xs={10}
    sm={5}
    md={4}
    lg={4}
  >
    <img
      className="w-full xs:p-3  xs:h-72  lg:h-64 lg:object-fill rounded-md mx-auto"
      src={destination1}
      alt="Restaurant"
    />
  </Grid>
  <Grid
    item
    xs={10}
    sm={5}
    md={4}
    lg={4}
   
  >
    <img
      className="w-full  xs:h-72  lg:h-64 object-fill rounded-md mx-auto"
      src={destination2}
      alt="Restaurant"
    />
  </Grid>
  <Grid
    item
    xs={10}
    sm={5}
    md={4}
    lg={4}
    
  >
    <img
      className="w-full  xs:h-72  lg:h-64 object-fill rounded-md mx-auto"
      src={destination3}
      alt="Restaurant"
    />
  </Grid>
 

</Grid>




            </div>

        </section>
      
    </div>
  )
}

export default Destination
