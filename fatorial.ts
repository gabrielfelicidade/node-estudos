export const fatorial = (num: number) => {
    if(num === 0){
        return 1;
    }

    return num * fatorial (num - 1);
}