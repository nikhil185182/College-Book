import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {BsFillCalendar2DateFill,BsFillClockFill} from 'react-icons/bs';


Post.propTypes = {
    userList: PropTypes.array,
};

Post.defaultProps = {
    userList: [],
};



function Post(props) {
    const { userList } = props;
    return (
        <div className="container">
            {userList.map((post) => (
                <Card style={{ width: '40rem' , margin:'30px' }}>
                    <Card.Body>
                        <Card.Title>{post.email}</Card.Title>
                            <Card.Subtitle className="gaparound mb-1 text-muted"><BsFillCalendar2DateFill/>  {post.postdate.slice(0,10)}  <BsFillClockFill/> {post.posttime}</Card.Subtitle>
                        <Card.Text>
                            {post.textd}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}

        </div>
    );
}
export default Post;