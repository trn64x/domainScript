import "./Blog.css";
import  NotFound  from '../header/images/nf.svg';
export default function Blogsite(){
return(
    <div className='container-blog'>
    <div id="Blog">#BLOG</div>
    <div className="fluid">
        <img src={ NotFound }></img>
        <p>There is no blog found yet.</p>
    </div>
    </div>
);
}