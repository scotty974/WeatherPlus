import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const service = {
    user : 'http://localhost:3001/users',
}

app.use('/api/:service', (req, res, next) => {
    const serviceName = req.params.service;
    const target = service[serviceName];

    if (target) {
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/${serviceName}`]: '',
            },
        })(req, res, next);
    } else {
        next();
    }
})



export default app