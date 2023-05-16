# nextjs-node-performance-benchmarks
A simple project to collect and measure some performance metrics when using SSR from Next.

## Metrics collected
All the metrics it was collected by [WebPageTest](https://www.webpagetest.org/).

| Node version | TTFB | Start Render | FCP | Speed Index | LCP | CLS | TBT | Page Weight | Link |
|--------------|------|--------------|-----|-------------|-----|-----|-----|-------------|------|
| 20 |
| 18 | .289s | .600s | .576s | .600s | .576s | 0 | .000s | 102KB | [Summary](https://www.webpagetest.org/result/230516_AiDcSF_9MN/) |
| 16 | .330s | .700s | .686s | .700s | .686s | 0 | .000s | 102KB | [Summary](https://www.webpagetest.org/result/230516_AiDc56_9K0/) |

### Specifications
- Browser: Google Chrome v113
- Connectivity: 5000/1000 Kbps, 28ms latency
- Environment: Desktop
- Hosted in: Vercel
- Internet connection: Cable
- Region: Virginia USA
- Test runs: 3
