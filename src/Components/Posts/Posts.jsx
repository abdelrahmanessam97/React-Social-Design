import Post from "../Post/Post";
import "./Posts.scss";

export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "John",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Soe",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 3,
      name: "Doe",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeABcF8EBGZcIdRMCF-l-HzjMJnDBopRBbw&s",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://media.istockphoto.com/id/1364380431/photo/the-eiffel-tower-from-the-river-seine-in-paris.jpg?s=612x612&w=0&k=20&c=XgeWO_B-gfuHU_fulflMN40VbhvxtTMvEEFA4tshilI=",
    },
    {
      id: 4,
      name: "Jan",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweQm8xRJPiSSsPolxg4_L9aNtWS8ffZx81A&s",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
