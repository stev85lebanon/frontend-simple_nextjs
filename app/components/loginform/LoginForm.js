"use client"

import { useRouter } from "next/router";
import { useState } from "react";
import styles from './LoginForm.module.css'
import Button from "../button/Button";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)

        setEmail("")
        setPassword("")
    }
    return (
        <div className={styles.container}>
            <div className={styles.loginform}>
                <h2 className={styles.logintitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

                    <div>
                        <label className={styles.label1}>Email:</label>
                        <input
                            className={styles.input1}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className={styles.label1}>Password:</label>
                        <input
                            className={styles.input1}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* <button type="submit" disabled={loading}> */}
                    {/* <button className={styles.button1} type="submit">
                        Login
                        {loading ? 'Logging in...' : 'Login'}
                    </button> */}
                    <Button name="Login" style={styles.button1} />
                </form>
            </div>
        </div>
    )
}

export default LoginForm
