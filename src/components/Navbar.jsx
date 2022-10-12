import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// Styles
import '../components/Navbar.css'

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = ( e ) => {
    e.preventDefault()

    if(!search) {
      return
    }
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <div>
        <nav id="navbar"><h2>
          <Link to='/' ><BiCameraMovie />Cine Pixxie</Link>
          </h2>
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Pesquise seu filme...'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
            <button type='submit'><BiSearchAlt2/></button>
          </form>
        </nav>
    </div>
  )
}

export default Navbar