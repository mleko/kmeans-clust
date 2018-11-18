export function unique<T>(arr: T[], cmp: AreEqual<T>): T[] {
    return arr.reduce((prev: T[], value: T) => {
        if(-1 === prev.findIndex((p: T) => {
            return cmp(p, value);
        })) {
            prev.push(value);
        }

        return prev;
    }, []);
}

type AreEqual<T> = (a: T, b: T) => boolean;