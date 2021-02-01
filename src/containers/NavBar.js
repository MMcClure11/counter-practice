import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='class-counter'>Counter built with a Class Component</NavLink>
        </li>
        <li>
          <NavLink to='hook-counter'>Counter built using Hooks</NavLink>
        </li>
        <li>
          <NavLink to='countdown'>3 Minute Countdown</NavLink>
        </li>
        <li>
          <NavLink to='countdown-5'>5 Minute Countdown</NavLink>
        </li>
        <li>
          <NavLink to='pause-counter'>Pausable Counter</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar