import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Log In</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Log In</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" },
  form: { display: "flex", flexDirection: "column", gap: "12px", width: "300px" },
  input: { padding: "10px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc" },
  button: { padding: "10px", fontSize: "14px", background: "#0070f3", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
};
