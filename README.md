# nextjs-node-performance-benchmarks
A simple project to collect and measure some performance metrics when using SSR from Next.

## Features
The project has only a single feature (page) which is a list of the first 100 updated GitHub repositories for a specific user (me).

## Metrics collected
All the metrics it was collected by [WebPageTest](https://www.webpagetest.org/).

| Node version | TTFB | Start Render | FCP | Speed Index | LCP | CLS | TBT | Page Weight | RPS | Link |
|--------------|------|--------------|-----|-------------|-----|-----|-----|-------------|-----|------|
| 20 | .171s | .500s | .467s | .500s | .467s | 0 | .000s | 121KB | 6.67 (50 requests in 13.84s) | [Summary](https://www.webpagetest.org/result/230516_BiDcK3_AG8/) |
| 18 | .169s | .500s | .467s | .500s | .467s | 0 | .000s | 121KB | 3.84 (58 requests in 10.7s) | [Summary](https://www.webpagetest.org/result/230516_BiDcMM_AF1/) |
| 16 | .162s | .400s | .442s | .400s | .442s | 0 | .000s | 122KB | 8.4 (98 requests in 11.26s) | [Summary](https://www.webpagetest.org/result/230516_BiDcS3_ADZ/) |

### Specifications
- Browser: Google Chrome v113
- Connectivity: 5000/1000 Kbps, 28ms latency
- Docker Version: 20.10.12
- Environment: Desktop
- Hosted in: Fly
- Internet connection: Cable
- Region: Virginia USA
- Test runs: 9
