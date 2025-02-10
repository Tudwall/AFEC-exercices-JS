class RequestValidation {
	isEmail(address) {
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return address.match(regex);
	}

	validUserRequest(reqUser) {
		let error = {};
		if (!Object.keys(reqUser).length) {
			error.body = "The request cannot be empty";
			return error;
		}
		Object.entries(reqUser).forEach(([key, value]) => {
			if (key === "email" && !this.isEmail(value)) {
				error.email = "Provide a valid email";
			}

			if (key === "name" && !value.length) {
				error.name = "Name is required";
			}
		});

		return error;
	}
}
