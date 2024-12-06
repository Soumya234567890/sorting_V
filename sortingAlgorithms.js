class SortingAlgorithms{
    // constructor({swapBars}){
    //     this.swapBars=swapBars;
    // }
    bubbleSort(array){
        const swaps =[];
        for(let i=0;i<array.length;i++){
            // Last i elements are already in place
            for(let j=0;j<array.length-i-1;j++ ){

                // checking if the item at present iteration is greater than the next iteration
                if(array[j] > array[j+1]){
                    // if the condition is true swap them
                    let temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                    swaps.push({
                        firstPosition:j,
                        lastPosition:j+1
                    })

                }
            }
        }
        return swaps;
    }

}
export {
    SortingAlgorithms
}