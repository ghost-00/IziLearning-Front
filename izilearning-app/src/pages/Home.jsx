import QuestionsList from "../question/components/QuestionsList";
import UserDetails from "../user/components/UserDetails";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <UserDetails />
      <h2>Questions List</h2>
      {<QuestionsList />}
    </>
  );
};

export default Home;
