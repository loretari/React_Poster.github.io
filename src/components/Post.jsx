import classes from './Post.module.css';

function Post(props) {

    return (
        <div className= {classes.post}>
            <p className={classes.author}>{props.auth}</p>
            <p className={classes.text}>{props.body}</p>
        </div>

    )
}

export default Post;