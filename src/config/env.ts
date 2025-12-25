import { cleanEnv, str } from "envalid";

export const ENV = cleanEnv(process.env,{
    SECRET_KEY: str(),
    HOST_EMAIL_ADDRESS: str(),
    HOST_EMAIL_PASSWORD: str()
})

