import React, {Component} from 'react';

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        }
        console.log(123);
    }

    render() {
        return (
            <div className="card text-center">
                <img src={this.state.avatar_url}
                     alt=""
                     className="round-img"
                     style={{width: '60px'}}/>

                     <div>
                         <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
                             More
                         </a>
                     </div>
            </div>
        );
    }
}

export default UserItem;