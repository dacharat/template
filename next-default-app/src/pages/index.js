import Welcome from "../components/home/Welcome";
import Common from "../components/common/Common";
import { greeting } from "../utils/utils";

const Home = ({ query }) => {
  return (
    <>
      <Welcome />
      <Common />
      <p>{greeting(JSON.stringify(query, null, 2))}</p>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;

  return { props: { query } };
};

export default Home;
