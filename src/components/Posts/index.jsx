import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      if (!res.ok) {
        throw new Error("エラーが発生してます！！！");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div>ロード中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (posts.length === 0) {
    return <div>データは空です</div>;
  }
  return (
    <ol>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </ol>
  );
};
