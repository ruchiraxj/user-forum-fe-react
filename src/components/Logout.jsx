import { Component } from 'react';
class Logout extends Component {
    state = {  }

    componentDidMount(){
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('role');

        window.location = "/login";
    }

    render() { 
        return null;
    }
}
 
export default Logout;