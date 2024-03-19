import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <Link to="/">Hem</Link>
      <Link to="/bli-vår-partner">Bli vår partner</Link>
      <Link to="/jobba-med-oss">Jobba med oss</Link>
      {/* <Link to="/#">Om Oss</Link>
            <Link to="/#">Teamet</Link> */}
    </>
  );
};
export default NavLinks;
