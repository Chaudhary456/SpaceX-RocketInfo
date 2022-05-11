import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const { data: blog, error, isPending }= useFetch("https://api.spacexdata.com/v4/launches/"+id);
    const history= useHistory();
    console.log(blog) 

    return ( 
        <div className="rocket">
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{ blog.name }</h2>
                    <h2>{ blog.details }</h2>
                    <h2>{ blog.date_utc }</h2>
                    { blog.cores.map((e) => (<div>{e.reused.toString()}</div>)) }
                    <img style={{width:"150px",height:"100px"}} src={blog.links.patch.large}></img>
                    
                </article>

            )}
        </div>
        </div>
     );
}
 
export default BlogDetails;