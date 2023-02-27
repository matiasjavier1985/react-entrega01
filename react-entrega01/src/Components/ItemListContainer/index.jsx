function Lista({nombre}) {
    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {nombre}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Trek</a></li>
                <li><a className="dropdown-item" href="#">KTM</a></li>
                <li><a className="dropdown-item" href="#">Vairo</a></li>
                <li><a className="dropdown-item" href="#">SPL</a></li>                
            </ul>
            </li>
    )
}

export default Lista