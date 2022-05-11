import BlogList from './BlogList';
import useFetch from './useFetch';

const Home =() => {

   const{ data: blogs, isPending, error }= useFetch('https://api.spacexdata.com/v4/launchpads');
   

    return(
       <div className="home">
          { error && <div>{error}</div> }
          {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Rockets"  />}
        
       </div> 
    );
}

export default Home;