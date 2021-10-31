<?php 
if(isset($_POST['name']) && isset($_POST['email'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];



        include('./phpmailer/class.smtp.php');
        include "./phpmailer/class.phpmailer.php"; 
        


        $nFrom = 'Web Vinh Web';    
        $mFrom = 'nguyenvancuong215@gmail.com'; 
        $mPass = 'Menu00d1';       
        $nTo = 'Vinh Ne'; 
        $mTo = 'vinhdq2005@gmail.com';   
        $mail             = new PHPMailer();
        $body             = '<strong>Họ và tên:  </strong>'.$name.'<br>'.'<strong>Email:  </strong>'.$email.'<br>'.'<strong>Số điện thoại: </strong>'.$phone.'<br>'.'<strong>Người giới thiệu: </strong>'.$address.'<br>'.'<strong>Lĩnh vực đã đầu tư: </strong>'.$subject.'<br>'.'<strong>Số vốn khởi điểm bắt đầu: </strong>'.$message;
        $title = 'Khách Hàng | '.$name;  
        $mail->IsSMTP();             
        $mail->CharSet  = "utf-8";
        $mail->SMTPDebug  = 0;  
        $mail->SMTPAuth   = true; 
        $mail->SMTPSecure = "ssl"; 
        $mail->Host       = "smtp.gmail.com";
        $mail->Port       = 465; 

        $mail->Username   = $mFrom;  
        $mail->Password   = $mPass;    
        $mail->SetFrom($mFrom, $nFrom);
        $mail->AddReplyTo($email, $name); 
        $mail->Subject    = $title;
        $mail->MsgHTML($body);
        $mail->AddAddress($mTo, $nTo);

if ($mail->send()) {
    $status = "success";
    $response = "Đã gửi email";
} else {
    $status = "error";
    $response = "Có lỗi: <br><br>" . $mail->ErrorInfo;
}

exit(json_encode(array("status" => $status, "response" => $response)));

}




?>
                           
