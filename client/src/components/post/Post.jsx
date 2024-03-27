import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
          className="postImg"
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt=""
        />
        <div className="postIntfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, excepturi eveniet voluptatem voluptas odio deserunt ex possimus vel culpa veritatis quis quae, ea libero magnam quam placeat, nobis architecto. Officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, excepturi eveniet voluptatem voluptas odio deserunt ex possimus vel culpa veritatis quis quae, ea libero magnam quam placeat, nobis architecto. Officiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, excepturi eveniet voluptatem voluptas odio deserunt ex possimus vel culpa veritatis quis quae, ea libero magnam quam placeat, nobis architecto. Officiis!
        </p>
    </div>
  )
}
