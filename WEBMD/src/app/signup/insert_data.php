<?php
$conn = mysqli_connect("localhost", "root", "", "server");
$info = json_decode(file_get_contents("php://input"));
if(count($info) > 0) {
    $name = mysqli_real_escape_string($conn, $info->Name);
    $lname = mysqli_real_escape_string($conn, $info->Lastname);
    $email = mysqli_real_escape_string($conn, $info->Email);
    $password = mysqli_real_escape_string($conn, $info->Password);
    $cfpassword = mysqli_real_escape_string($conn, $info->confirmPassword);
    $query = "INSERT INTO registration(id, name, surname, email, password, cnfpassword) VALUES ("",'$name', '$lname', '$email', '$password', '$cfpassword')"; 
    if(mysqli_query($conn, $query)) {
        echo "Insert Data Successfully";
    }
    else {
        echo "Failed";
    }
}
?>