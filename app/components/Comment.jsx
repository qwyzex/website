export default function CommentSection() {
    return (
        <section>
            <form onSubmit={postComment}>
                <input type="text" placeholder="Your Comment Here..." />
                <button type="submit">POST</button>
            </form>
        </section>
    );
}

const postComment = (e) => {
    e.preventDefault();
    alert("POSTED!");
};
