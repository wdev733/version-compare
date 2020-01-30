import { Get, JsonController, QueryParam } from "routing-controllers";

import { handleError, handleSuccess } from "../../services/response";
import { versionCompare } from "../../services/version";

@JsonController()
export class TrmController {

	@Get("/compare")
	public async compareString(@QueryParam("first") first: string, @QueryParam("second") second: string) {
		try {
			// const index = first.localeCompare(second);
			const index = versionCompare(first, second, []);

			let message = "";

			if (index === 0) {
				message = first + ' is "equal" ' + second;
			} else if (index < 0) {
				message = first + ' is "before" ' + second;
			} else {
				message = first + ' is "after" ' + second;
			}

			return handleSuccess(message);

		} catch (err) {
			return handleError(err);
		}
	}

}
