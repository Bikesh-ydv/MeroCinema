export const Validateform=(email,password)=>{
    // const isValidName = /([a-zA-Z0-9_\s]+)/.test(name);
    const isValidEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // if (!isValidName) return "Invalid Name!";
    if (!isValidEmail) return "Please enter a valid email.";
    if (!isValidPassword) return "Please enter a strong password.";
    return null;
}