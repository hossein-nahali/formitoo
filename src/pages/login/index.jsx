import './assets/css/login.scss'
import {Language} from "../../config/Language.js";
import {User, Lock, Eye} from '../../assets/icons'

export const Login = () => {
    const {login_title, label_username, login, label_password} = Language.fa

    const formHandler = (e) => {
        e.preventDefault()
        console.log('ok')
    }

    return (
        <div className={'login-box'}>
            <h1>{login_title}</h1>
            <form onSubmit={formHandler}>
                <div className="input-field">
                    <label htmlFor="username">{label_username}</label>
                    <div>
                        <input type="text" id="username" placeholder={label_username}/>
                        <div className="icon-field">
                            <User/>
                        </div>
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="username">{label_password}</label>
                    <div>
                        <input type="password" id="username" placeholder={label_password}/>
                        <div className="icon-field">
                            <Lock/>
                        </div>
                        <div className="secondary-icon-field">
                            <Eye/>
                        </div>
                    </div>
                </div>
                <div className={'submit'}>
                    <input type="submit" value={login}/>
                </div>
            </form>
        </div>
    )
}