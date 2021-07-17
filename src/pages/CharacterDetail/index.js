import React from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const CharacterPage = () => {
  const { id } = useParams();

  return (
      <div>
        <div class="character-link">
          <Link
            to= '/'>
              	&lt; Back
          </Link>
        </div>
          { id }
      </div>
  )
}

export default CharacterPage