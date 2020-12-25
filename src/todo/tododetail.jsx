const TodoDetail = ({location}) => {

    return (
        <div>
            Title : {location.state.title}
            <br></br>
            Content : {location.state.content}
        </div>
    )
}
export default TodoDetail