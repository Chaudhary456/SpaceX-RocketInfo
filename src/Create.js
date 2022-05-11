import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
   const[title, setTitle ]= useState('');
   const[body, setbody]= useState('');
   const[author, setAuthor]= useState(' flash');
   const[isPending, setIsPending]= useState(false);
   const History= useHistory();

   const handleSubmit =(e)=>{
          e.preventDefault();
          const blog={title, body, author};

            setIsPending(true);

          fetch('http://localhost:8000/blogs', { 
          method: 'POST',
          headers : {"Content-Type": "application/json"},
          body : JSON.stringify(blog)
        }).then(() => {
           console.log('new blog added');
           setIsPending(false);
        //    history.go(-1);
              History.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setbody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                   value={author}
                   onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value=" flash"> flash</option>
                    <option value=" yellow"> yellow</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;
