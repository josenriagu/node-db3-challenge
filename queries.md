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