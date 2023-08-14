
--------------------------Create database---------------

create database grocery_store_db;

--use database 

use grocery_store_db;

------------------------- Create admin table-----------------------

CREATE TABLE admin (

  id INT PRIMARY KEY AUTO_INCREMENT,

  username VARCHAR(255) NOT NULL,

  password VARCHAR(255) NOT NULL

);



-------------------------------------- Create address table---------------------------------

CREATE TABLE address (

  id INT PRIMARY KEY AUTO_INCREMENT,
  
  user_id Int,
  
  vendor_id Int,

  address_line1 VARCHAR(255) NOT NULL,

  address_line2 VARCHAR(255),

  city VARCHAR(255) NOT NULL,

  state VARCHAR(255) NOT NULL,

  country VARCHAR(255) NOT NULL,

  postal_code VARCHAR(10) NOT NULL,

  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  
  
  FOREIGN KEY (vendor_id) REFERENCES Vendor(vendor_id) ON DELETE CASCADE ON UPDATE CASCADE

);

 



------------------------------- Create User table-----------------------------

CREATE TABLE User (

  user_id INT PRIMARY KEY AUTO_INCREMENT,

  first_name VARCHAR(255) NOT NULL,

  last_name VARCHAR(255) NOT NULL,

  email VARCHAR(255) NOT NULL UNIQUE,
  
  password VARCHAR(255) NOT NULL UNIQUE,

  phone_number VARCHAR(20) NOT NULL UNIQUE

);

 

----------------------------------------- Create Vendor table-----------------------------------

CREATE TABLE Vendor (

  vendor_id INT PRIMARY KEY AUTO_INCREMENT,

  first_name VARCHAR(255) NOT NULL,

  last_name VARCHAR(255) NOT NULL,

  email VARCHAR(255) NOT NULL UNIQUE,
  
  password VARCHAR(255) NOT NULL UNIQUE,

  phone_number VARCHAR(20) NOT NULL UNIQUE

);

 

---------------------------------------- Create Product table------------------------------



CREATE TABLE Product (

  id INT PRIMARY KEY AUTO_INCREMENT,

  name VARCHAR(255) NOT NULL,

  description TEXT,

  price DECIMAL(10, 2) NOT NULL,

  vendor_id INT,

  category_id INT,

  stock_quantity INT NOT NULL DEFAULT 0,

  FOREIGN KEY (vendor_id) REFERENCES Vendor(vendor_id) ON DELETE CASCADE ON UPDATE CASCADE,

  FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE CASCADE ON UPDATE CASCADE,
 
  image_location VARCHAR(255)
);






------------------------------- Create Category table---------------------------------------

CREATE TABLE Category (

  id INT PRIMARY KEY AUTO_INCREMENT,

  name VARCHAR(255) NOT NULL,
  
  image_location VARCHAR(255)

);

 

--------------------------------- Create Orders table-----------------------------------------

CREATE TABLE Orders (

  id INT PRIMARY KEY AUTO_INCREMENT,

  user_id INT,

  order_date DATETIME NOT NULL,

  status ENUM('Pending', 'Completed', 'Cancelled') NOT NULL,

  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE ON UPDATE CASCADE

);

 

--------------------------------------------- Create Cart table----------------------------------------

CREATE TABLE Cart (

  id INT PRIMARY KEY AUTO_INCREMENT,

  user_id INT,

  product_id INT,

  quantity INT NOT NULL,

  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE ON UPDATE CASCADE,

  FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE CASCADE ON UPDATE CASCADE

);

 

------------------------------------------- Create OrderDetails table --------------------------------------

CREATE TABLE OrderDetails (

  id INT PRIMARY KEY AUTO_INCREMENT,

  order_id INT,

  product_id INT,

  quantity INT NOT NULL,

  FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE ON UPDATE CASCADE,

  FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE CASCADE ON UPDATE CASCADE

);


*****************************************************************************************************************



--------------------------------------------------Insert Query---------------------------------------




------------- Insert sample data into admin table------------------------------------

INSERT INTO admin (username, password)

VALUES

  ('admin1', 'password1'),

  ('admin2', 'password2'),

  ('admin3', 'password3'),

  ('admin4', 'password4'),

  ('admin5', 'password5'),

  ('admin6', 'password6'),

  ('admin7', 'password7'),

  ('admin8', 'password8'),

  ('admin9', 'password9'),

  ('admin10', 'password10');



--------------------------------- Insert sample data into login_details table------------------------

INSERT INTO login_details (user_id, username, password, email)

VALUES

 (1, 'user1', 'password1', 'user1@example.com'),

  (2, 'user2', 'password2', 'user2@example.com'),

  (3, 'user3', 'password3', 'user3@example.com'),

  (4, 'user4', 'password4', 'user4@example.com'),

  (5, 'user5', 'password5', 'user5@example.com'),

  (6, 'user6', 'password6', 'user6@example.com'),

  (7, 'user7', 'password7', 'user7@example.com'),

  (8, 'user8', 'password8', 'user8@example.com'),

  (9, 'user9', 'password9', 'user9@example.com'),

  (10, 'user10', 'password10', 'user10@example.com');
  
  
  
------------------------------ Insert sample data into address table---------------------------------------

INSERT INTO address (user_id,vendor_id, address_line1, address_line2, city, state, country, postal_code)

VALUES

  (1,Null, '123 Main St', 'Apt 4', 'City1', 'State1', 'Country1', '12345'),

  (2,Null, '456 Elm St', 'Apt 7', 'City2', 'State2', 'Country2', '23456'),

  (3,Null, '789 Oak St', 'Apt 12', 'City3', 'State3', 'Country3', '34567'),

  (Null,1, '321 Pine St', 'Apt 9', 'City4', 'State4', 'Country4', '45678'),

  (Null,2, '654 Maple St', 'Apt 2', 'City5', 'State5', 'Country5', '56789'),

  (4,Null, '987 Birch St', 'Apt 5', 'City6', 'State6', 'Country6', '67890'),

  (5,Null, '147 Cedar St', 'Apt 8', 'City7', 'State7', 'Country7', '78901'),

  (6,Null, '258 Spruce St', 'Apt 3', 'City8', 'State8', 'Country8', '89012'),

  (7,Null, '369 Ash St', 'Apt 6', 'City9', 'State9', 'Country9', '90123'),

  (Null,3, '951 Walnut St', 'Apt 11', 'City10', 'State10', 'Country10', '01234');
  
  
-------------------------------------- Insert sample data into User table--------------------------------

INSERT INTO User (first_name, last_name, email, password, phone_number)

VALUES

  ('John', 'Doe', 'john.doe@example.com','John@123' ,'1234567890'),

  ('Jane', 'Smith', 'jane.smith@example.com', 'Jane@123' ,'2345678901'),

  ('Mike', 'Johnson', 'mike.johnson@example.com', 'Mike@123' ,'3456789012'),

  ('Sarah', 'Williams', 'sarah.williams@example.com','Sarah@123' , '4567890123'),

  ('David', 'Brown', 'david.brown@example.com','David@123' , '5678901234'),

  ('Emily', 'Taylor', 'emily.taylor@example.com','Emily@123' , '6789012345'),

  ('Daniel', 'Anderson', 'daniel.anderson@example.com','Daniel@123' , '7890123456'),

 ('Sophia', 'Thomas', 'sophia.thomas@example.com','Sophia@123' , '8901234567'),

  ('Olivia', 'Martinez', 'olivia.martinez@example.com','Olivia@123' , '9012345678'),

  ('James', 'Garcia', 'james.garcia@example.com','James@123' , '0123456789');
  
  
  
 -------------------------------- Insert sample data into Vendor table ----------------------------

INSERT INTO Vendor (first_name, last_name, email, password, phone_number)

VALUES

  ('Amul','vendor', 'vendor1@example.com', 'Vendor1','1234567890'),

  ('Britania','vendor', 'vendor2@example.com','Vendor2', '2345678901'),

  ('Bisleri','vendor', 'vendor3@example.com','Vendor3', '3456789012'),

  ('Parle','vendor', 'vendor4@example.com','Vendor4', '4567890123'),

  ('Pepsico','vendor', 'vendor5@example.com','Vendor5', '5678901234'),

  ('Balaji','vendor', 'vendor6@example.com','Vendor6', '6789012345'),

  ('Dabur','vendor',  'vendor7@example.com','Vendor7', '7890123456'),

  ('Chitale','vendor', 'vendor8@example.com','Vendor8','8901234567'),

  ('Patanjali','vendor', 'vendor9@example.com','Vendor9', '9012345678'),

  ('Monginis','vendor',  'vendor10@example.com','Vendor10', '0123456789');
  
  
  
  
  
 --------------------------------- Insert sample data into Category table ------------------------------------

INSERT INTO Category (name,image_location)

VALUES

  ('Beverages',"beverages&drinks.jpeg"),

  ('DairyProduct',"dairyProduct.jpeg"),

  ('Food,Grains,Oil,Masala',"food,grains,oil,masala.jpeg"),

  ('Fruits&Veggis',"fruits-and-vegetables.jpg"),

  ('Sancks',"sancks.jpeg");
  
  
  
  

----------------------- Insert sample data into Product table------------------------

INSERT INTO Product (name, description, price, vendor_id, category_id, stock_quantity,image_location)

VALUES

  ('AASHIRVAAD Atta', 'AASHIRVAAD Whole Wheat Atta is made from the grains which are heavy on the palm, golden amber in colour and hard in bite', 9.99, 1, 3, 100,"Atta.jpeg"),

  ('Biscuits', ' Britannia Good Day has been a popular favourite since 1986. These crunchy, buttery cookies are abundantly loaded with delectable ingredients - from cashews, almonds and pistachios to chocolatey delights. Make every day special with the wholesome Britannia Good Day cookies!', 19.99, 2, 5, 50,"biscuits.jpeg"),

  ('Brocoli', 'Broccoli is a nutrient-rich vegetable that may enhance your health in a variety of ways, such as by reducing inflammation, improving blood sugar control, boosting immunity and promoting heart health.', 4.99, 3, 4, 200,"brocoli.jpeg"),

  ('Plum Cake', 'Plums are rich in various nutrients, which make plum cakes a healthy food choice despite being a dessert. Plums are full of dietary fibre, which helps in lowering your cholesterol level, controls blood sugar level and helps you in maintaining an ideal body mass index', 14.99, 4, 5, 75,"Cake.jpeg"),

  ('LAYS Potato Chips', 'It all starts with farm-grown potatoes, cooked and seasoned to perfection. Then we add the tang of sour cream and sharp cheddar. So every LAYS potato chip is perfectly crispy and delicious. Happiness in Every Bite.', 7.99, 5, 5, 150,"Chips.jpeg"),

  ('Sleepy Owl Coffee', 'Sleepy Owl is a homegrown Indian coffee brand. We spend inordinately long making coffee that is as good as it can be in every single cup.', 12.99, 6, 1, 80,"coffee.jpeg"),

  ('Coca-Cola', 'Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company', 6.99, 7, 1, 120,"coke.jpeg"),

  ('Figaro Pure Olive Oil', 'Ideal for Indian cooking, Figaro Extra Light Tasting Olive oil is an excellent all-purpose cooking oil for frying & sautéin. ', 8.99, 8, 3, 90,"figaro.jpeg"),

  ('Maharashtrian kala watan', 'Watan for Maharashtrian Black Gravy base,Serves 4, No added preservatives', 11.99, 9, 3, 110,"masala.jpeg"),

  ('Chitale milk', 'Chitale Dairy was founded by the great visionary, Late Shri Bhaskar Ganesh alias Babasaheb Chitale (B. G. Chitale). A journey that began in 1939, in the small town of Bhilawadi set the stage for a revolution in the country dairy industry', 16.99, 10, 2, 60,"milk.jpeg");
  
  ('Fortune Sunflower oil',
   'Fortune Sunflower oil is a light, healthy and nutritious cooking oil. Being rich in vitamins and polyunsaturated fatty acids.', 16.99, 10, 3, 60,"oil.jpeg");
  
  
  
 --------- Insert sample data into Orders table----------------------

INSERT INTO Orders (user_id,order_date, status)

VALUES

  (1, '2023-07-13 09:00:00', 'Pending'),

  (2, '2023-07-13 10:30:00', 'Completed'),

  (3, '2023-07-13 11:45:00', 'Cancelled'),

  (4, '2023-07-13 13:15:00', 'Pending'),

  (5, '2023-07-13 14:45:00', 'Completed'),

  (6, '2023-07-13 15:30:00', 'Pending'),

  (7, '2023-07-13 16:00:00', 'Completed'),

  (8, '2023-07-13 17:30:00', 'Pending'),

  (9, '2023-07-13 18:45:00', 'Completed'),

  (10, '2023-07-13 19:15:00', 'Pending');
  

 ----------------------------- Insert sample data into Cart table--------------------------------

INSERT INTO Cart (user_id, product_id, quantity)

VALUES

  (1, 12, 2),

  (2, 22, 1),

  (3, 13, 3),

  (4, 14, 2),

  (5, 15, 1),

  (6, 16, 4),

  (7, 17, 2),

  (8, 18, 3),

  (9, 19, 1),

  (10, 20, 2);
  
  
  
------------------------------- Insert sample data into OrderDetails table ----------------------------

INSERT INTO OrderDetails (order_id, product_id, quantity)

VALUES

  (1, 12, 3),

  (1, 22, 2),

  (2, 13, 1),

  (2, 14, 4),

  (3, 15, 2),

  (3, 16, 3),

  (4, 17, 1),

  (4, 18, 2),

  (5, 19, 3),

  (5, 20, 1);