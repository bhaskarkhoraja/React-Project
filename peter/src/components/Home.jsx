import { Notes } from "./Notes";

export const Home = (props) => {
  return (
    <>
      <Notes showalert={props.showalert} />
    </>
  );
};
