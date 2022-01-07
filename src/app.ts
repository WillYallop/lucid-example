import http from 'http';
import lucidCMS from 'lucid-cms';
import { schema } from './graphql/schema';

// creates app
const app = new lucidCMS({
    customGraph: schema
});

// Console logs the ip and port on launch.
console.log(app.address());