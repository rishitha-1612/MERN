import {

  render,

  screen,

  fireEvent

} from "@testing-library/react";

import {

  ArticleApproval

} from "../components/ArticleApproval";

test(

  "shows Approved after click",

  () => {

    render(

      <ArticleApproval

        article={{

          title:
            "News",

          author:
            "Jane"
        }}

      />
    );

    fireEvent.click(

      screen.getByText(
        "Approve"
      )
    );

    expect(

      screen.getByText(
        "Approved!"
      )

    ).toBeInTheDocument();
  }
);