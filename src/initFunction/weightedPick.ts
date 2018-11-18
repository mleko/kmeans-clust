export function weightedPick<T>(weights: number[], pick: number): number {
    const threshold = weights.reduce((carry: number, w: number) => {
        return carry + w;
    }, 0) * pick;
    let sum = 0.0;
    for(let idx = 0; idx < weights.length; idx++) {
        sum += weights[idx];
        if(sum > threshold){
            return idx;
        }
    }
}