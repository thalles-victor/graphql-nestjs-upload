import { gql } from "@apollo/client";

export const GET_ALL_CATS = gql`
  query GET_ALL_CATS {
    cats {
      id
      image
      name
    }
  }
`;

const CREATE_CAT_MUTATION = gql`
  mutation CREATE_CAT($file: Upload!) {
    createCat(createCatInput: { 
      
     }) {
      id
      name
      image
      created_at
      
    }
    }
  }
`;
