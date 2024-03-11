const limit = 2;

type ipstash = { [ip: string]: number[] }

const rateLimiter: ipstash = {};

const rateLimiterMiddleware = (ip: string) => {
    const now = Date.now();

    const windowOpen = now - 60 * 1000;

    const requestTimestamps = rateLimiter[ip] ? rateLimiter[ip].filter((timestamp: number) => timestamp > windowOpen) : [];
    requestTimestamps.push(now);

    rateLimiter[ip] = requestTimestamps;

    return requestTimestamps.length <= limit;
}

export default rateLimiterMiddleware;
