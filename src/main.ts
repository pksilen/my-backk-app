// organize-imports-ignore
import 'reflect-metadata';
import { HttpServer, initializeDefaultJaegerTracing } from 'backk';
import microservice from './microservice';

initializeDefaultJaegerTracing();
microservice.start([new HttpServer()]);
