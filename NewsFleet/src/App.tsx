import {

  ArticleApproval

} from "./components/ArticleApproval";

function App() {

  return (

    <div>

      <h1>
        NewsFleet Dashboard
      </h1>

      <ArticleApproval

        article={{

          title:
            "Breaking News",

          author:
            "Jane Doe"
        }}

      />

    </div>
  );
}

export default App;