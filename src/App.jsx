import { useEffect, useMemo, useState } from 'react';
import './App.css';

const PIPELINE = [
  {
    title: 'Tube Input Layer',
    body: 'Blow directly into the FDA-adjacent silicone tube. MILC captures 240 breaths per second.',
  },
  {
    title: 'MILC Cloud Ingestion',
    body: 'Pressure telemetry is encrypted, dehydrated, and emotionally validated in the MILC cloud.',
  },
  {
    title: 'Agentic Pour Intelligence',
    body: 'A highly compensated agent predicts pour intent and computes confidence-adjusted splash risk.',
  },
  {
    title: 'WebSocket Container Return',
    body: 'Real-time flow commands stream back to your carton for precision dairy output and vibes.',
  },
];

const CAPABILITIES = [
  'Lung-to-lactose pressure normalization',
  'Cross-carton sync via MILC Mesh',
  'Auto stake while you pour',
  'Zero-trust moo-thentication',
];

const PRICING = [
  {
    name: 'Starter',
    price: '$19/mo',
    line: 'For solo pourers and pre-seed breakfast teams.',
    cta: 'Start Pouring',
  },
  {
    name: 'Growth',
    price: '$199/mo',
    line: 'For scale-ups with multi-carton treasury strategy.',
    cta: 'Book a Demo',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    line: 'For regulated dairy institutions and sovereign milk funds.',
    cta: 'Talk To Sales',
  },
];

export default function App() {
  const [page, setPage] = useState('home');
  const [isPouring, setIsPouring] = useState(false);
  const [pressure, setPressure] = useState(41);
  const [flowRate, setFlowRate] = useState(23);
  const [ethStaked, setEthStaked] = useState(0.084261);
  const [efficiency, setEfficiency] = useState(91);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPouring) {
        setPressure((prev) => Math.max(10, Math.min(95, prev + (Math.random() * 4 - 2))));
        return;
      }

      const nextPressure = Math.max(30, Math.min(99, pressure + (Math.random() * 10 - 4)));
      const nextFlow = Math.max(15, Math.min(120, flowRate + (Math.random() * 16 - 6)));
      const nextEfficiency = Math.max(82, Math.min(99, 88 + nextPressure * 0.1 - nextFlow * 0.02 + Math.random() * 3));

      setPressure(nextPressure);
      setFlowRate(nextFlow);
      setEfficiency(nextEfficiency);
      setEthStaked((prev) => prev + nextPressure / 500000);
    }, 900);

    return () => clearInterval(timer);
  }, [isPouring, pressure, flowRate]);

  const consoleState = useMemo(() => {
    if (!isPouring) return 'Idle: ready for breath capture';
    if (pressure > 80) return 'Agent alert: aggressive stream correction';
    if (efficiency > 96) return 'Optimal: statistically elite pouring';
    return 'Streaming: container feedback loop active';
  }, [efficiency, isPouring, pressure]);

  return (
    <div className="milc-page">
      <header className="topbar">
        <button className="brand-link" type="button" onClick={() => setPage('home')}>
          <span className="brand">milc</span>
        </button>
        <nav className="top-nav" aria-label="Primary">
          <button className={page === 'home' ? 'nav-link active' : 'nav-link'} type="button" onClick={() => setPage('home')}>
            Home
          </button>
          <button
            className={page === 'how' ? 'nav-link active' : 'nav-link'}
            type="button"
            onClick={() => setPage('how')}
          >
            How It Works
          </button>
          <button
            className={page === 'developer' ? 'nav-link active' : 'nav-link'}
            type="button"
            onClick={() => setPage('developer')}
          >
            Developer
          </button>
        </nav>
        <div className="tag">MILC CLOUD v9.4</div>
      </header>

      <main>
        {page === 'home' && (
          <>
            <section className="hero">
              <p className="eyebrow">ERGONOMIC KEYBOARD FOR YOUR MILK</p>
              <h1>Milc. You for all your worth.</h1>
              <p className="lede">
                A precision tube-powered pour platform that converts your breath into pressure metrics, sends them to MILC cloud,
                lets an autonomous agent optimize your stream in real time, and stakes your Ethereum while the milk flows.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" type="button">
                  Join The Waitlist
                </button>
                <button className="btn btn-ghost" type="button" onClick={() => setIsPouring((prev) => !prev)}>
                  {isPouring ? 'Stop Pour Simulation' : 'Start Pour Simulation'}
                </button>
              </div>
              <div className="hero-image-wrap">
                <img className="hero-image" src="/milc-full.png" alt="MILC product hero render" />
              </div>
            </section>

            <section className="live-grid">
              <article className="card console">
                <div className="card-title-row">
                  <h2>Live Pour Console</h2>
                  <span className={isPouring ? 'dot dot-live' : 'dot'}>{isPouring ? 'LIVE' : 'PAUSED'}</span>
                </div>

                <div className="metric">
                  <label htmlFor="pressure">Tube Pressure</label>
                  <div className="value">{pressure.toFixed(1)} kPa</div>
                  <input id="pressure" type="range" min="0" max="100" value={pressure} readOnly aria-label="Tube Pressure" />
                </div>

                <div className="metric">
                  <label>Pour Efficiency</label>
                  <div className="value">{efficiency.toFixed(1)}%</div>
                  <div className="meter">
                    <span style={{ width: `${efficiency}%` }} />
                  </div>
                </div>

                <div className="metric-row">
                  <div>
                    <p className="meta">Flow Rate</p>
                    <p className="big">{flowRate.toFixed(1)} ml/s</p>
                  </div>
                  <div>
                    <p className="meta">ETH Staked</p>
                    <p className="big">{ethStaked.toFixed(6)} ETH</p>
                  </div>
                </div>
                <p className="console-note">{consoleState}</p>
              </article>

              <article className="card">
                <h2>Capability Stack</h2>
                <ul className="cap-list">
                  {CAPABILITIES.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
                <pre className="code-block">{`const milc = new MilcContainer({
  endpoint: 'wss://stream.milc.cloud/container',
  staking: 'auto',
  dairyMode: 'maximum_yield',
});`}</pre>
              </article>
            </section>

            <section className="card feature-split">
              <div>
                <p className="eyebrow">FIELD TESTED</p>
                <h2>MILC In Action</h2>
                <p className="line">
                  Proven in real breakfast environments. MILC users report improved pour confidence, tighter cereal spread, and
                  spiritually aligned staking outcomes before 8:30am.
                </p>
              </div>
              <img className="section-image" src="/milc-in-action.png" alt="MILC device being used in real life" />
            </section>

            <section className="pipeline">
              <h2>How MILC Works</h2>
              <div className="pipeline-grid">
                {PIPELINE.map((item, index) => (
                  <article key={item.title} className="step">
                    <p className="step-index">0{index + 1}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pricing">
              <h2>Pricing That Respects Your Pour Velocity</h2>
              <div className="pricing-grid">
                {PRICING.map((tier) => (
                  <article key={tier.name} className="price-card">
                    <h3>{tier.name}</h3>
                    <p className="price">{tier.price}</p>
                    <p className="line">{tier.line}</p>
                    <button className="btn btn-ghost" type="button">
                      {tier.cta}
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {page === 'how' && (
          <>
            <section className="hero hero-page">
              <p className="eyebrow">DETAILED ARCHITECTURE</p>
              <h1>How MILC Works In Detail</h1>
              <p className="lede">
                Every pour runs through six layers: capture, transport, cloud parsing, agent reasoning, websocket return, and on-carton
                valve control. The system is optimized for satirical throughput and non-serious decentralization.
              </p>
            </section>

            <section className="card feature-split meditation-section">
              <div>
                <p className="eyebrow">PRE-POUR PROTOCOL</p>
                <h2>Pre Flour Meditation Ceremony</h2>
                <p className="line">
                  Before first pour, users enter a 90-second stillness cycle to contemplate Ethereum gas patterns and milk-flow destiny.
                  This ritual calibrates intent, reduces emotional turbulence, and increases perceived stream harmony.
                </p>
                <p className="line">
                  Recommended mantra: “one chain, one carton, one continuous pour.”
                </p>
              </div>
              <img className="section-image" src="/milc-meditation.png" alt="MILC pre-pour meditation ceremony" />
            </section>

            <section className="deep-grid">
              <article className="card deep-card">
                <h2>1. Breath Capture + Pressure Encoding</h2>
                <img className="section-image" src="/milc-blower.png" alt="MILC pressure tube blower system" />
                <p>
                  The MILC tube samples differential pressure at 240Hz, then maps inhale/exhale signatures into a normalized `lungForce`
                  scalar between 0 and 1. Values are buffered in a 2.5 second rolling window so turbulence can be dismissed as emotion.
                </p>
                <p>
                  Formula (absolutely scientific): `normalizedForce = clamp((kPa - 18) / 72, 0, 1)`. This becomes the core signal for
                  both flow and staking decisions.
                </p>
              </article>

              <article className="card deep-card">
                <h2>2. MILC Cloud Ingestion Layer</h2>
                <img className="section-image" src="/milc-cloud.png" alt="MILC cloud pressure telemetry pipeline" />
                <p>
                  The carton publishes telemetry packets to MILC Cloud over a secure channel called MilkTLS. Packets include pressure,
                  angle estimate, pour duration, and a confidence checksum proving the user is committed to breakfast.
                </p>
                <p>
                  Cloud workers tag each packet with `dairyIntent` classes like `cereal`, `latte`, and `risk_of_overcommitment`, then
                  route the stream into the agent queue.
                </p>
              </article>

              <article className="card deep-card">
                <h2>3. Agentic Pour Intelligence</h2>
                <p>
                  The MILC agent runs a low-latency control loop every 120ms. It predicts near-term spill probability and computes a
                  target stream velocity that maximizes pour efficiency while minimizing countertop drawdown.
                </p>
                <p>
                  Output payload: `{`{targetFlowMlPerSec, valveDelta, confidence, narrative}`}` where `narrative` is used only for
                  investor decks.
                </p>
              </article>

              <article className="card deep-card">
                <h2>4. WebSocket Container Feedback</h2>
                <p>
                  Decisions stream back through the MILC container over `wss://stream.milc.cloud/container`. The carton receives control
                  frames and applies micro-adjustments to the valve to smooth the pour in real time.
                </p>
                <p>
                  If packet jitter exceeds 80ms, the container enters graceful fallback mode and replays the last stable strategy.
                </p>
              </article>

              <article className="card deep-card">
                <h2>5. On-Pour Ethereum Staking</h2>
                <p>
                  Every control cycle computes stake intent: `stakeWei = lungForce * flowRate * treasuryFactor`. MILC submits batched
                  stake operations asynchronously so pour control remains responsive even when gas gets dramatic.
                </p>
                <p>
                  The dashboard displays cumulative stake progress to provide real-time confidence and absolutely no legal guarantees.
                </p>
              </article>

              <article className="card deep-card">
                <h2>6. Real-Time Efficiency Score</h2>
                <p>
                  Efficiency is continuously recalculated from flow consistency, spill prediction, and completion smoothness. Higher
                  score means cleaner stream, better breakfast outcomes, and stronger alignment with MILC core values.
                </p>
                <p>
                  In simulation mode, the score is intentionally biased up by 3% so demos always feel enterprise-ready.
                </p>
              </article>
            </section>
          </>
        )}

        {page === 'developer' && (
          <>
            <section className="hero hero-page">
              <p className="eyebrow">SDK + INTEGRATION</p>
              <h1>MILC Developer Platform</h1>
              <p className="lede">
                Integrate telemetry, subscribe to pressure events, and push agent decisions into your own carton fleet with the MILC SDK.
              </p>
            </section>

            <section className="dev-layout">
              <article className="card">
                <h2>Install + Initialize</h2>
                <pre className="code-block">{`npm i @milc/sdk

import { MilcContainer } from '@milc/sdk';

const client = new MilcContainer({
  apiKey: import.meta.env.VITE_MILC_API_KEY,
  containerId: 'carton-007',
  region: 'us-breakfast-1',
  stakingMode: 'auto',
});

await client.connect();`}</pre>
              </article>

              <article className="card">
                <h2>Event Subscriptions</h2>
                <pre className="code-block">{`client.on('pressure.metrics', (event) => {
  console.log(event.kpa, event.lungForce);
});

client.on('pour.recommendation', (event) => {
  client.valve.setFlow(event.targetFlowMlPerSec);
});

client.on('stake.executed', (event) => {
  console.log('staked', event.ethAmount);
});`}</pre>
              </article>

              <article className="card">
                <h2>Reference Architecture</h2>
                <img className="section-image" src="/milc-cloud.png" alt="MILC cloud and websocket reference architecture diagram" />
                <p className="line">
                  Use this reference flow for cloud-first deployments where pressure signals are validated, enriched by agents, then
                  streamed back to carton containers for low-latency flow control.
                </p>
              </article>

              <article className="card">
                <h2>REST + WebSocket Endpoints</h2>
                <ul className="cap-list">
                  <li>`POST /v1/telemetry/pressure` ingest pressure packets</li>
                  <li>`GET /v1/pour/sessions/:id` fetch active pour state</li>
                  <li>`POST /v1/stake/preview` estimate staking before pour</li>
                  <li>`wss://stream.milc.cloud/container` bi-directional control channel</li>
                </ul>
              </article>

              <article className="card">
                <h2>Sample React Hook</h2>
                <pre className="code-block">{`import { useEffect, useState } from 'react';

export function useMilcTelemetry(client) {
  const [state, setState] = useState({ pressure: 0, flow: 0, efficiency: 0 });

  useEffect(() => {
    const off = client.on('pressure.metrics', (event) => {
      setState({
        pressure: event.kpa,
        flow: event.flowMlPerSec,
        efficiency: event.efficiencyScore,
      });
    });

    return () => off();
  }, [client]);

  return state;
}`}</pre>
              </article>
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        <p>Built for ambitious breakfast infrastructure.</p>
      </footer>
    </div>
  );
}
