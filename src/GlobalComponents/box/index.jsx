import {Link} from "react-router-dom";
import './assets/css/Box.scss'

export const Box = ({children, title, readMore, bg, className}, props) => {
    const style = {
        marginBottom: 25
    }

    return (
        <div className={`box ${bg ? 'without-bg' : ''} ${className ? className : ''}`} {...props}>
            < div className={'title-box'} style={style}>
                <h2>{title}</h2>
                {readMore ? <Link to={readMore.path}>{readMore.text}</Link> : ''}
            </div>
            {children}
        </div>
    )
}