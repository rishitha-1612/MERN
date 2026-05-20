import { useDesignHubStore } from "../store";

interface Props {

  fileId: string;
}

const CommentsPanel = ({
  fileId
}: Props) => {

  const comments =
    useDesignHubStore(

      s =>
        s.getCommentsByFile(
          fileId
        )
    );

  const addComment =
    useDesignHubStore(
      s => s.addComment
    );

  return (

    <div>

      <h2>
        Comments
      </h2>

      <button

        onClick={() =>

          addComment({

            id:
              crypto.randomUUID(),

            fileId,

            author:
              "Alex",

            text:
              "Nice Design!"
          })
        }
      >

        Add Comment

      </button>

      <ul>

        {comments.map(c => (

          <li key={c.id}>

            {c.author}
            :
            {" "}
            {c.text}

          </li>
        ))}

      </ul>

    </div>
  );
};

export default CommentsPanel;
