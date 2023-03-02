import { Navbar, Nav, InputGroup, Input } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import SearchIcon from '@rsuite/icons/Search';

const TopNave = () => (
  <Navbar>
    <Nav>
    <Nav.Item>
    <InputGroup size="lg" inside >
    <Input placeholder="Search" />
    <InputGroup.Button>
    <SearchIcon /> 
    </InputGroup.Button>
  </InputGroup>
  </Nav.Item>
    </Nav>
    <Nav pullRight>
   <Nav.Item>Home</Nav.Item>
    </Nav>
  </Navbar>
);
export default TopNave