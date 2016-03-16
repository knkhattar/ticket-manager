<html>
<body>
<h2>Welcome !!</h2>
<p><a href="http://localhost:8080/ticket-manager/oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username=beingjavaguys&password=spring@java">Login, this link provides username and password. Access token and refresh token are received in response. Access token is set to be valid for 120 seconds only.</a></p>

<p><a href="http://localhost:8080/ticket-manager/api/users/?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0">Access User List Service</a></p>

<p><a href="http://localhost:8080/ticket-manager/oauth/token?grant_type=refresh_token&client_id=restapp&client_secret=restapp&refresh_token=a29783d6-a62c-4d3b-9aa0-df84a4a1a207">Request for new access token</a></p>


<p>To launch the angularjs app please click <a href="/ticket-manager/angularApp/index.html" >here</a></p>

<p>Following is the list of web services being used</p>


<ol>
	<li><a href="/ticket-manager/auth/login/testuser/testpass">http://localhost:8080/ticket-manager/auth/login/testuser/testpass</a></li>
	<li><a href="/ticket-manager/ticket/addTicket/1/testSum/testDesc?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0">http://localhost:8080/ticket-manager/ticket/addTicket/1/testSum/testDesc?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0</a></li>
	<li><a href="/ticket-manager/ticket/getTicket/1?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0">http://localhost:8080/ticket-manager/ticket/getTicket/1?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0</a></li>
	<li><a href="/ticket-manager/ticket/getTickets/111?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0">http://localhost:8080/ticket-manager/ticket/getTickets/111?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0</a></li>
	<li><a href="/ticket-manager/ticket/updateTicket/1/testSum/testDesc?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0">http://localhost:8080/ticket-manager/ticket/updateTicket/1/testSum/testDesc?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0</a></li>
	<li><a href="/ticket-manager/ticket/deleteTicket/1?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0">http://localhost:8080/ticket-manager/ticket/deleteTicket/1?access_token=932c33cc-c6e6-409b-a71a-0187f85f17b0</a></li>
	<li><a href="/ticket-manager/auth/logout/111">http://localhost:8080/ticket-manager/auth/logout/111</a></li>
</ol>

</body>
</html>