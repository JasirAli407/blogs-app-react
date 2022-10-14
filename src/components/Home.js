import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const postsArr = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        // const post = {...doc.data}
        // console.log(doc.data());
        postsArr.push({ id: doc.id, ...doc.data() });
      });
      console.log(postsArr);
      setPosts(postsArr);
    })();
  }, []);

  return (
    <div className="home">
      <h1> Tech Blog</h1>
      <div id="blog-by">Aakash</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
