import { useDesignHubStore } from "../store";

const FileList = () => {

  const files =
    useDesignHubStore(
      s => s.files
    );

  const addFile =
    useDesignHubStore(
      s => s.addFile
    );

  return (

    <div>

      <h2>
        Files
      </h2>

      <button

        onClick={() =>

          addFile({

            id:
              crypto.randomUUID(),

            name:
              "Design File",

            content: ""
          })
        }
      >

        Add File

      </button>

      <ul>

        {files.map(file => (

          <li key={file.id}>

            {file.name}

          </li>
        ))}

      </ul>

    </div>
  );
};

export default FileList;
