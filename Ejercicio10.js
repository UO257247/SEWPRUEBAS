//API key X6KddqW7x7NVb6JKBjFF
class Stocks
{
    loadData()
    {
        let result = new Object();

        result.apiKey = "X6KddqW7x7NVb6JKBjFF";
        result.url = "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json";
        result.url += "?api_key=" + result.apiKey;

        result.onSuccess = this.onSuccess.bind(this);
        result.onError = this.onError.bind(this);

        $.ajax({
            dataType: "json",
            url: result.url,
            method: 'GET',
            success: function(data)
            {
                result.data = data;
                result.onSuccess(result);
            },
            error:function()
            {
                result.onError();  
            }
        });
    }

    onSuccess(result)
    {
        console.log(result);
        
        let data = result.data.dataset_data.data;
        let table =  $("#tabla");
        for (let i = 0; i < data.length; i++)
        {
            let item = data[i];
            let str = "<tr>";

            for (let j = 0; j < item.length; j++)
            {
                str += "<td>" + item[j] + "</td>";
            }
            str += "</tr>";
            
            table.append(str);
        }
    }


    onError()
    {
        console.log("ERROR!");
    }
}


var stocks = new Stocks();

$(document).ready(function()
{
    stocks.loadData();
});
