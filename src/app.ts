import express from 'express';
import cookieParser from "cookie-parser";
import ddtrace from "dd-trace";

ddtrace.init();

const app = express();
app.use(cookieParser());

