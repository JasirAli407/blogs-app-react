import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';

function PostDetails(props) {
  const { postId } = useParams();
  const [post, setPost] = useState({})
  // console.log(postId);
  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'posts', postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPost(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    })();
  }, []);
  return <div className='post-detail'>
  <h1>{post.title}</h1>
  <p>{post.content}</p>
  </div>;
}

export default PostDetails;
