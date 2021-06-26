<p>Please note: If your order contained multiple items, there is a possibility that the items could be shipped from different warehouses due to availability. In such cases, you will receive multiple tracking numbers via email. Please be patient with us and if any queries, get in touch with our customer care executives.</p>
<table>
    <tr>
        <td><p>Please note: If your order contained multiple items, there is a possibility that the items could be shipped from different warehouses due to availability. In such cases, you will receive multiple tracking numbers via email. Please be patient with us and if any queries, get in touch with our customer care executives.</p></td>
    </tr>
</table>

<table class="disclaimer">
    <tr>
        <td><p class="disclaimer__subtext" style="padding:10px"><b>Please note:</b> If your order contained multiple items, there is a possibility that the items could be shipped from different warehouses due to availability. In such cases, you will receive multiple tracking numbers via email. Please be patient with us and if any queries, get in touch with our customer care executives.</p></td>
    </tr>
</table>
<?php
   // data sent in header are in JSON format
   header('Content-Type: application/json');
   // takes the value from variables and Post the data
  
   $email = $_POST['email'];

   $postmessage = '<p><strong>Hello ,<strong/></p>
   <p>Thank you for subscribing!<p/>
   <p>As a new subscriber, you will receive our weekly email with the Latest news, Articles & Promotions. To ensure our emails are delivered to your inbox, please add us to your Contacts Or safe senders list<p/> 
   <p>You can log in with your email address and password at any time. We are here if you need assistance, just reply to this email or call us at +91 9833379988
   If you require any help or support when using our site, please email us at: support@petoly.in<p/>
  <p> Thanks again for subscribing with us. We look forward to welcoming you to the family.<p/>';  
   $to = $email;
   $subject = "Subscription Alert";
   // Email Template

   $message = "<b>Email Address : </b>".$email."<br>";
   $message .= "<b>Message : </b>".$postmessage."<br>";

   $header = "From:"+$email+" \r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   $retval = mail ($to,$subject,$message,$header);
   // message Notification
   if( $retval == true ) {
      echo json_encode(array(
         'success'=> true,
         'message' => 'Message sent successfully'
      ));
   }else {
      echo json_encode(array(
         'error'=> true,
         'message' => 'Error sending message'
      ));
   }
?>