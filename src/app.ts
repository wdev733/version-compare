import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { port } from "./config";

// base directory. we use it because file in "required" in another module
const baseDir = __dirname;

const app = createExpressServer({
	controllers: [baseDir + "/api/**/controllers/*{.js,.ts}"]
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});

// Export our app for testing purposes
export default app;
