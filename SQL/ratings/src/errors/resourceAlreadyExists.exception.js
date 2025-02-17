class ResourceAlreadyExists extends Error {
	constructor(message) {
		super(message);
		this.name = "ResourceAlreadyExists";
		this.code = 409;
	}
}

export default ResourceAlreadyExists;
