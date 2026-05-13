export default function Home() {
  return (
    <main style={{fontFamily:'Inter, Arial, sans-serif', padding:'4rem', maxWidth:'1100px', margin:'0 auto'}}>
      <h1 style={{fontSize:'3rem', fontWeight:700}}>Agent Marketplace</h1>
      <p style={{fontSize:'1.25rem', marginTop:'1rem', lineHeight:1.7}}>
        Discover, verify, and deploy trusted AI agents with DID-based identity, lifecycle governance, subscriptions, and enterprise controls.
      </p>
      <div style={{display:'flex', gap:'1rem', marginTop:'2rem'}}>
        <a href='#features' style={{padding:'0.9rem 1.2rem', border:'1px solid #111', borderRadius:'10px'}}>Explore Features</a>
        <a href='https://github.com/AGenNext/agent-regitsry' style={{padding:'0.9rem 1.2rem', background:'#111', color:'#fff', borderRadius:'10px'}}>View Repository</a>
      </div>
      <section id='features' style={{marginTop:'4rem'}}>
        <h2>Built for Enterprise Agent Distribution</h2>
        <ul>
          <li>Verified publishers and agent attestations</li>
          <li>Searchable marketplace listings</li>
          <li>Subscriptions and entitlement checks</li>
          <li>Audit logs and moderation workflows</li>
          <li>Private marketplace support</li>
        </ul>
      </section>
    </main>
  );
}
