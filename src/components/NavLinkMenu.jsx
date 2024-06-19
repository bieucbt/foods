
import { Link } from 'react-router-dom'

const NavLinkMenu = ({item, active, changeActive, className, cssA}) => {

    

  return (
    <li className={`md:min-w-[80px] text-center cursor-pointer ${className}`}
    onClick={() => changeActive(item.url)}>
       <a href={item.url}
        className={`text-[18px] text-gray-500 hover:border-b-[1px]
        border-gray-400 max-lg:text-[16px] inline-block w-full ${cssA}
        ${active === item.url ? 'border-b-[1px]' : ''}`}>{item.title}</a>
    </li>
  )
}

export default NavLinkMenu
