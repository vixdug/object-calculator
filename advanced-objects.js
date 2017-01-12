var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function sum(list) {
  return list.reduce( ( acc, cur ) => acc + cur, 0 )
}


function calculateSalesPerCompany (salesData) {
for(var i = 0; i < salesData.length; i++) {
  salesData[i].salesTotal = salesData[i].sales.reduce( ( acc, cur ) => acc + cur, 0 );
}
return salesData
}


  function calculateSalesTax (salesData, tax) {
    var result = {}

    for(var i = 0; i < salesData.length; i++) {
      var name = salesData[i].name;
      var province = salesData[i].province;
      var sales = sum(salesData[i].sales)

      if(result[name] === undefined) {
        result[name] = {
          totalSales: 0,
          totalTaxes: 0
        };
      }

      result[name].totalSales += sales
      result[name].totalTaxes += sales * tax[province]
    }
    return result
  };




console.log(calculateSalesTax(companySalesData, salesTaxRates))
