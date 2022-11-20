

function Navbar() {
    return (
      <div className="bg-purple-900 h-12 flex flex-row items-center justify-center text-white">
        <ul className="flex flex-row">
            <li className="m-1">
                <a href="/" className="uppercase font-bold">
                    Home
                </a>
            </li>
            <li className="m-1 mx-2">
                <a href="/" className="uppercase font-bold">About</a>
            </li>
            <li className="m-1 mx-2">
                <a href="/" className="uppercase font-bold">Profile</a>
            </li>
            <li className="m-1 mx-2">
                <a href="/" className="uppercase font-bold">Experince</a>
            </li>
            <li className="m-1 mx-2">
                <a href="/" className="uppercase font-bold">Education</a>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;