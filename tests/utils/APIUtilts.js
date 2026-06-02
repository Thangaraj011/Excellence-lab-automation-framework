export class APIUtils{

    constructor(apiContent, payLoad){
        this.apiContent = apiContent;
        this.payLoad = payLoad;

    }

    async getToken(payLoad)
    {
        const apiResponse = await this.apiContent.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data : payLoad});
        const responseJson = await apiResponse.json();
        const token = responseJson.token;
        return token;
    }


    async createOrder(orderPayload)
    {
        let response = {};
        response.token = await this.getToken(this.payLoad);
        const orderResponse = await this.apiContent.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {   data : orderPayload,
                headers : {
                    'Authorization' : response.token,
                    'Content-Type'  : 'application/json'
                },
            })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;
    }


    async getevents(responseToken)
    {
        const apiResponse = await this.apiContent.get("https://api.eventhub.rahulshettyacademy.com/api/events", 
            {
                params: {
                    'category': 'Conference',
                    'search': 'summit',
                    'page': 1,
                    'limit': 10,
                },
                headers:{
                    'Authorization': `Bearer ${responseToken}`,
                }
            }

        );
        const responseJson = await apiResponse.json();
        console.log(responseJson);
        return responseJson.data[0].id;
        
    }
}