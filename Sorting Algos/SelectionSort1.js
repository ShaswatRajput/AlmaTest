arr=[5,4,2,3,1,2];
SelectionSort(arr);
console.log(arr);


function SelectionSort(){
    let min=arr[0];
    let index=0;
    for(let i = 0; i < arr.length; i++)
    {
        for( let j = i; j < arr.length; j++)
        {
            if(arr[j]<min)
            {
                min=arr[j];
                index=j
            }
        }
        temp=arr[index];
        arr[index]=arr[i];
        arr[i]=temp;
        min=arr[i+1];
        index=i+1;
    }
}