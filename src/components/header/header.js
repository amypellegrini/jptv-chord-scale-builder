import createLogo from '../logo/logo';
import './header.css';

export default React => () => {
  const Logo = createLogo(React);

  return (
    <header className="App-header">
      <Logo />
      <p>Chord/Scale Builder</p>
    </header>
  );
}
