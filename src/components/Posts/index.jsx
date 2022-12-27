import { useCallback, useEffect, useReducer } from "react";

// 最初の状態
const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("no such action type");
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      if (!res.ok) {
        throw new Error("エラーが発生してます！！！");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ロード中</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }
  return (
    <ol>
      {state.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </ol>
  );
};
