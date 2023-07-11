const name = ['Maximilian', 'Manuel'];

function Post() {
    const choseName = Math.random() > 0.5 ? name[0] : name[1];
    return (
        <div>
            <p>{choseName}</p>
            <p>React.js is awesome!</p>
        </div>

    )
}

export default Post;