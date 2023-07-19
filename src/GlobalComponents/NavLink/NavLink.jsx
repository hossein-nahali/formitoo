import {Link, useLocation} from 'react-router-dom';

export const NavLink = ({to, children}, props) => {
    const location = useLocation()
    let isActive = location.pathname === to;
    let className = isActive ? 'active' : '';

    return (
        <Link className={className} {...props} to={to}>
            {children}
        </Link>
    );
}