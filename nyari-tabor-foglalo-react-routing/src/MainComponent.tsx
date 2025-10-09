import './App.css'

function MainComponent() {

  return (
    <>
      <div><a href="/home">Nyári Tábor Foglaló</a></div>
      <nav>
        <ul>
          <li><a href="/home">Főoldal</a></li>
          <li><a href="/camps">Táborok böngészése</a></li>
          <li><a href="/addcamp">Új tábor</a></li>
          <li><a href="/addlocation">Új táborhelyszín</a></li>
          <li><a href="/applications">Jelentkezéseim</a></li>
          @if (isLoggedIn) {
          <li><a href="/profile">Profil</a></li>
          }

          @if (!isLoggedIn) {
          <li><a href="/login">Bejelentkezés</a></li>
          }

          @if (isLoggedIn) {
          <li><a href="#">Kijelentkezés</a></li>
          }
        </ul>
      </nav>
    </>
  )
}

export default MainComponent
