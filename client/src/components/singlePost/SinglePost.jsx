import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
                className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i> 
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Sangsriti</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere optio nesciunt quidem earum, beatae unde eveniet animi explicabo ab error ullam illum temporibus nostrum vitae maiores qui molestias aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere optio nesciunt quidem earum, beatae unde eveniet animi explicabo ab error ullam illum temporibus nostrum vitae maiores qui molestias aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere optio nesciunt quidem earum, beatae unde eveniet animi explicabo ab error ullam illum temporibus nostrum vitae maiores qui molestias aspernatur.
            </p>
        </div>
    </div>
  );
}