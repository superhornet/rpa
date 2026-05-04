import { config } from 'dotenv';
import { App } from './App.ts';

// configure environment options
config({ quiet: true });

// port available to the node.js runtime like an environment variable
const port: string | undefined = process.env.SERVER_PORT;

/**
 * Listen method:
 *
 * @param port
 * @param lambda
 * Starts the Express server
 */
new App().express.listen(port, () => {
    ['SIGINT', 'SIGTERM', 'beforeExit'].forEach((event) => {
        process.on(event as NodeJS.Signals, () => shutdown(event));
    });
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

// Graceful shutdown
const shutdown = async (signal: string) => {
    console.log(`\n🔻 Received ${signal}, closing application...`);
    try {
        console.log('✅ Closed app');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error closing app:', err);
        process.exit(1);
    }
};


