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
//function calculateSalesTax(salesData, taxRates) {
//  companiesWithTotalSales = calculateSalesPerCompany(salesData)
//  companiesWithTotalSalesAndTaxes = calculateSalesTaxes(companiesWithTotalSales, taxRates)
//  sumSalesDataOverProvinces(companiesWithTotalSalesAndTaxes)
//}

//function calculateSalesTaxes
  // loop through array to multiply salesTotal with specific taxrates


  function calculateSalesTax (salesData, tax) {
    for(var i = 0; i < salesData.length; i++) {
      if (salesData[i].province == "BC") {
      salesData[i].salesTax = (salesData[i].salesTotal * tax['BC'])
    } else if (salesData[i].province == "AB") {
      salesData[i].salesTax = (salesData[i].salesTotal * tax['AB'])
    } else {
      salesData[i].salesTax = (salesData[i].salesTotal * tax['SK'])
      }
    }
    return salesData
  };


function calculateSalesPerCompany (salesData) {
for(var i = 0; i < salesData.length; i++) {
  salesData[i].salesTotal = salesData[i].sales.reduce( ( acc, cur ) => acc + cur, 0 );
}
return salesData
}


console.log(calculateSalesPerCompany(companySalesData))
console.log(calculateSalesTax(companySalesData, salesTaxRates))
