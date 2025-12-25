const LOWER = "abcdefghijklmnopqrstuvwxyz"
const UPPER  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NUMS = "1234567890"
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.<>?/"

export function generateNumber(length = 12, upper = true, numbers = true, symbols = true){
    let chars = LOWER;
    if(upper) chars += UPPER;
    if(numbers) chars += NUMS;
    if(symbols) chars += SYMBOLS;
    let password = ""
    
    for(let i = 0; i < length; i++){
        
      password += chars[Math.floor(Math.random() * chars.length)]
    }
    return password;
}