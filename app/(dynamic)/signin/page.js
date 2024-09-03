"use client"

import { useRouter } from "next/router";
import { useState } from "react";
import styles from './page.module.css'
import Button from "../../components/button/Button";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

const Signin = () => {
    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })
    const [_, setCookies] = useCookies(["access-token"])
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/auth/register", inputs)
        setCookies("access-token", response.data.accessToken)
        window.localStorage.setItem("userID", response.data.id)
        window.location.reload(false)
        setInputs({
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        })

    }
    return (
        <div className={styles.container}>
            <div className={styles.loginform}>
                <h2 className={styles.logintitle}>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                    <div>
                        <label className={styles.label1}>First Name:</label>
                        <input
                            className={styles.input1}
                            type="text"
                            value={inputs.first_name}
                            onChange={(e) => setInputs({ ...inputs, first_name: e.target.value })}
                            placeholder="Enter your first name"
                            required
                        />
                    </div>    <div>
                        <label className={styles.label1}>Last Name:</label>
                        <input
                            className={styles.input1}
                            type="text"
                            value={inputs.last_name}
                            onChange={(e) => setInputs({ ...inputs, last_name: e.target.value })}
                            placeholder="Enter your last name"
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.label1}>Email:</label>
                        <input
                            className={styles.input1}
                            type="email"
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className={styles.label1}>Password:</label>
                        <input
                            className={styles.input1}
                            type="password"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* <button type="submit" disabled={loading}> */}
                    {/* <button className={styles.button1} type="submit">
                        Login
                        {loading ? 'Logging in...' : 'Login'}
                    </button> */}
                    <Button name="Sign in" style={styles.button1} />
                </form>
            </div>
        </div>
    )
}

export default Signin
