export function is_substring(str1, str2) {
    for (let i = 0; i < str2.length; i++)
        if (str2[i] == str1[0])
            for (let j = 0; j < str1.length; j++) {
                if (str1[j] != str2[i + j]) break;
                else if (j == str1.length - 1) return true;
            }
    return false;
}
