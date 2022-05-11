import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, title }) => {
    // const blogs=props.blogs;
    // const title=props.title;
    // const [launches,setLaunches]=useState([]);

    // await Promise.all(
    //     blogs.launches.map(async (id) => {
    //       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //       const todo = await response.json()
    //       console.log(todo.title)
    //     })
    //   )



    return (
        <div className="Blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    
                    <h2>{blog.name}</h2>
                    <h3>{blog.details}</h3>
                    
                    <h3 style={ {marginTop:"5px", color:"red"}  }>{blog.status}</h3>
                    {/* <p>Written by{blog.author}</p> */}
                    
                    

                    {blog.launches.length==0&&(<div>
                        No Launches
                    </div>)}
                    {blog.launches&&
                        blog.launches.slice(0,3).map((ele,index)=>{
                           
                            return (
                                
                            <div>
                                <Link to={`/blogs/${ele}`}>
                               <div> Launch {index+1}</div>
                                </Link>
                            </div>
                            
                        )})
                    }
                </div>
            ))}
        </div>
    );
}

export default  BlogList;