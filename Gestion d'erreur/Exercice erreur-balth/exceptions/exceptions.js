class ArgumentRequiredException extends Error {
  constructor(status, message) {
    super(message);
    this.name = "ArgumentRequiredException";
    this.status = status;
  }
}
class UserNotFoundException extends Error {
  constructor(status, message) {
    super(message);
    this.name = "UserNotFoundException";
    this.status = status;
  }
}
class AlreadyExistingException extends Error {
  constructor(status, message) {
    super(message);
    this.name = "AlreadyExistingException";
    this.status = status;
  }
}

export {
  UserNotFoundException,
  ArgumentRequiredException,
  AlreadyExistingException,
};
