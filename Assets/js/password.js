class Password {
    static isValidPassword(input, message) {
      if (input == "" || input.length < 8 || input.length > 15) {
        //alert(message);
        throw new Error(message);
      }
    }
  }