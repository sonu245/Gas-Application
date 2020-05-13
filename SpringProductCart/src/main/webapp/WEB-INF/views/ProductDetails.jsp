<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<style type="text/css">
.price {
  color: black;
  font-size: 22px;
}

</style>

<title>Product Details</title>
</head>


<body>
<p style="text-align:center"><font size="6">Product Details</font></p>
<ul>
  <li><input type="checkbox" id="cb1" />
    <label for="cb1"><img src="product Application/download.jpg" /></label>
	<h1> Cylinder</h1>
  <p class="price">$800</p>
  </li>
  <li><input type="checkbox" id="cb2" />
    <label for="cb2"><img src="product Application/stove.jpg"/></label>
	<h1> Stove</h1>
  <p class="price">$1000</p>
  </li>
  <li><input type="checkbox" id="cb3" />
    <label for="cb3"><img src="product Application/regulator.jpg" /></label>
	<h1> Regulator</h1>
  <p class="price">$100</p>
  </li>
  <li><input type="checkbox" id="cb4" />
    <label for="cb4"><img src="product Application/lighter.jpg"/></label>
	<h1>Lighter</h1>
  <p class="price">$50</p>
	<p><button>Add to Cart</button></p>
  </li>
</ul>
</body>
</html>
