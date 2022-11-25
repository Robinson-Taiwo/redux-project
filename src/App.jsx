import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { postMedia } from './store/PostReducer';
import Navbar from './Navbar';

function App() {
  const posts = useSelector(state => state.postReducer.posts)
  const dispatch = useDispatch()
  console.log(posts)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const date = new Date().toLocaleString()

    const newPosts = {
      title: form.title.value,
      body: form.body.value,
      author: form.author.value,
      date: date
    };

    dispatch(postMedia(newPosts))
    console.log(newPosts)
    form.reset();

  };



  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>

        <input className='title' type="text" name="title" placeholder='Header' required />
        <textarea className='body' name="body" placeholder='write posts here' required />
        <input className='author' type="text" name='author' placeholder='author' required />
        <button className='button' type="submit">post</button>
      </form>


      <div className='posts'>
        <Navbar posts={posts} />
        {posts.map(post => {
          return <div className='container' key={post.id}>
            <h3 className='title-cont' >{post.title}</h3>
            <div className='body-cont' >{post.body}</div>
            <span> published by: <div className='author-cont' >{post.author}</div>  </span>
            <span className="line"></span>
            <div className='date-cont' >{post.date}</div>
          </div>
        })}
      </div>

    </div>
  );
}

export default App;
