let arr=[0,3,44,52,43]
bubble(arr);
console.log(arr);

function bubble(){
    for(let i = 0; i<arr.length; i++)
    {
        for(let j = 0; j < arr.length - i - 1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }

}