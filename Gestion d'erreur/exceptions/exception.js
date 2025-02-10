class Exception extends Error {
	constructor(status, message) {
		super(message);
		this.name = name;
		this.status = status;
	}
}

class ArgumentRequiredException extends Error {
	constructor(status, message) {
		super(message);
		this.name = "ArgumentRequiredException";
		this.status = status;
	}
}

export default ArgumentRequiredException;
