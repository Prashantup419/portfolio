import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", password: "" })
    const handleLogin = () => {
        if(data.name && data.password){
            navigate('/home',{state:{data}})    
        }
    }
    return (
        <div>
            <div className="main">
                <div className="mainin">
                    <div className="box">
                        <h1>ACCOUNT LOGIN</h1>
                        <div className="boxin">
                            <form>
                                <h5
                                >USERNAME*</h5>
                                <input type="email" class="email" id="q" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Enter Your Username" />
                                <h5>PASSWORD*</h5>
                                <input type="password" class="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} placeholder="Enter Your Password" />
                                <h5>CLICK me*</h5>
                                {/* <Link to="/home"><button>Login</button></Link> */}
                                <button type='button' onClick={handleLogin}>Login</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;