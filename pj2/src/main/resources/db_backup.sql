-- Create the table to store calculator data
CREATE TABLE calculator_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    calculation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    calculation VARCHAR(255) NOT NULL,
    result FLOAT NOT NULL
);

-- Insert sample data into the calculator_data table
INSERT INTO calculator_data (calculation, result) VALUES ('2 + 2', 4);
INSERT INTO calculator_data (calculation, result) VALUES ('5 * 3', 15);
INSERT INTO calculator_data (calculation, result) VALUES ('10 / 2', 5);
INSERT INTO calculator_data (calculation, result) VALUES ('(5 + 3) * 2', 16);
