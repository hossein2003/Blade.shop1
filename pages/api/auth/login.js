import { getProviders, signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>ورود به BlaDe</h2>
      {Object.values(providers).map(p => (
        <div key={p.name} style={{ margin: "10px" }}>
          <button onClick={() => signIn(p.id)}>{p.name}</button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
