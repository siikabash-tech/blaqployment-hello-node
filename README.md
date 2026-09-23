# hello-node

The sample app used for BLAQPLOYMENT's end-to-end checks. No dependencies and
no Dockerfile: the platform detects a Node app, builds it, runs it on the
`PORT` it sets, and waits for `/healthz` before routing to it.

To deploy it on BLAQPLOYMENT, put these files at the root of a GitHub
repository, create a service from that repository, set the health check path
to `/healthz`, and deploy.
