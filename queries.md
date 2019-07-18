# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName
FROM Products AS p
LEFT JOIN Categories AS c ON p.categoryId = c.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderID, ShipperName
FROM Orders AS o
LEFT JOIN Shippers AS s ON s.ShipperId = o.ShipperId
WHERE OrderDate < "1997-01-09"
ORDER BY OrderDate DESC

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity
FROM Orders as o
LEFT JOIN OrderDetails AS od ON o.OrderID = od.OrderID
LEFT JOIN Products AS p ON od.ProductID = p.ProductID
WHERE o.OrderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderID, CustomerName, LastName
FROM Orders as o
LEFT JOIN Customers AS c ON o.CustomerID = c.CustomerID
LEFT JOIN Employees AS c ON o.EmployeeID = c.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT CategoryName, COUNT (c.CategoryName) AS products
FROM Products as p
LEFT JOIN Categories AS c ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryName
ORDER BY Products DESC

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
SELECT o.OrderID, count(o.OrderID) as itemCount
FROM Orders as o
LEFT JOIN OrderDetails AS od ON o.OrderID = od.OrderID
LEFT JOIN Products AS p ON od.ProductID = p.ProductID
GROUP BY o.OrderID
ORDER BY itemCount DESC

### Instructor's Stretch
### Find the number of shipments by each shipper
select shipperName, count (s.shipperName) as Shipment
from Orders as o
left join Shippers as s on o.shipperid = s.shipperid
group by s.shipperName
order by Shipment desc

### Find the top 5 best performing employees measured in number of orders
select o.EmployeeID, FirstName, LastName, count (o.employeeId) as Sales
from Orders as o
left join Employees as e on o.employeeId = e.employeeId
group by o.employeeId
order by Sales desc
limit 5

### Find the category that brings in the most revenue
select CategoryName, count (p.categoryID) as Count
from OrderDetails as od
left join Products as p on od.productID = p.productID
left join Categories as c on p.categoryID = c.categoryID
group by p.categoryID
order by Count desc
limit 1

### Find the customer country with the most orders
select Country, count (c.country) as TotalOrders
from Orders as o
left join Customers as c on o.customerID = c.customerID
group by c.country
order by TotalOrders desc
limit 1

### Find the shipper that moves the most cheese measured in total units
select ShipperName, ProductName, count (s.shipperName) as Total
from Orders as o
left join Shippers as s on o.shipperID = s.shipperID
left join OrderDetails as od on o.orderID = od.orderID
left join Products as p on od.productID = p.productID
where ProductName = 'Chais'
group by s.shipperName
order by Total desc
limit 1