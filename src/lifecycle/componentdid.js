import { render } from "@testing-library/react";
import { Component } from "react";
import { Spinner } from "react-bootstrap";
import Childcard from "./childlife";
class Mounting extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        document.title = "myapp";
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    posts: response
                });
            });
    }

    render() {
        return (
            this.state.posts.length > 0 ? (
                <>
                    {this.state.posts.map((eachpost) => (
                        <Childcard key={eachpost.id} message={eachpost.title} />
                    ))}
                </>
            ) : (
                <Spinner />
            )
        );
    }
}

export default Mounting;
