import {

  useEffect

}
from "react";

import {

  useQuery

}
from "@tanstack/react-query";

import useCollaboratorStore
from "../store/collaboratorStore";

const fetchCollaborators =
  async () => {

    const response =
      await fetch(

        "https://jsonplaceholder.typicode.com/users"
      );

    return response.json();
  };

const CollaboratorsList = () => {

  const collaborators =
    useCollaboratorStore(
      s => s.collaborators
    );

  const setCollaborators =
    useCollaboratorStore(
      s => s.setCollaborators
    );

  const {

    data,

    isLoading

  } = useQuery({

    queryKey:
      ["collaborators"],

    queryFn:
      fetchCollaborators
  });

  useEffect(() => {

    if (data) {

      setCollaborators(
        data
      );
    }

  }, [data]);

  if (isLoading) {

    return (
      <h2>
        Loading...
      </h2>
    );
  }

  return (

    <div>

      <h2>
        Collaborators
      </h2>

      <ul>

        {collaborators.map(c => (

          <li key={c.id}>

            {c.name}

          </li>
        ))}

      </ul>

    </div>
  );
};

export default
  CollaboratorsList;