class ResourceNotFound extends Error {
	constructor(message) {
		super(message);
		this.name = "ResourceNotFound";
		this.code = 404;
	}
}

export default ResourceNotFound;
