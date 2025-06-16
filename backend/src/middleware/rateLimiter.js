import ratelimiter from "../config/upstash.js";

const rateLimiter = async(req, res, next) => {
    try{
        // here we just keep simple, in real world, put userId or ipaddress as your key
        const { success } = await ratelimiter.limit("my-rate-limit");

        if(!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later.",
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;