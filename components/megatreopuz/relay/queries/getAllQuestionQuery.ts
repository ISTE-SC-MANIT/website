import { graphql } from "relay-runtime";

const getAllQuestionsQuery = graphql`
    query getAllQuestionQuery {
        getAllQuestion {
            questionNo
            imgUrl
            description
        }
    }
`;

export default getAllQuestionsQuery;
